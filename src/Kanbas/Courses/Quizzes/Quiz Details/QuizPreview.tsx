import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function QuizPreview() {
    const { cid, qid } = useParams(); // Quiz ID from the route
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer); // Redux state for quizzes

    const [quiz, setQuiz] = useState<any>(null); // Holds the current quiz data
    const [answers, setAnswers] = useState<any>({}); // Stores faculty's answers
    const [score, setScore] = useState<number | null>(null); // Stores faculty's score
    const [previousAnswers, setPreviousAnswers] = useState<any>(null); // Last submitted answers from the database

    useEffect(() => {
        // Load quiz data
        const currentQuiz = quizzes.find((q: any) => q._id === qid);
        if (currentQuiz) {
            setQuiz(currentQuiz);

            // Simulating API call to fetch previous answers
            const storedAnswers = JSON.parse(
                localStorage.getItem(`quiz_${qid}_answers`) || "{}"
            );
            setPreviousAnswers(storedAnswers);
            setAnswers(storedAnswers); // Pre-fill with previous answers if available
        }
    }, [qid, quizzes]);

    const handleAnswerChange = (questionId: string, value: any) => {
        setAnswers((prev: any) => ({
            ...prev,
            [questionId]: value,
        }));
    };

    const calculateScore = () => {
        if (!quiz) return;

        let totalScore = 0;

        quiz.questions.forEach((question: any) => {
            const correctAnswers = question.correctAnswers || [];
            const userAnswer = answers[question._id];

            if (question.type === "Multiple Choice") {
                if (correctAnswers.includes(userAnswer)) {
                    totalScore += question.points || 0;
                }
            } else if (question.type === "Fill in the Blank") {
                if (
                    correctAnswers.some(
                        (correct: string) =>
                            correct.toLowerCase() === userAnswer?.toLowerCase()
                    )
                ) {
                    totalScore += question.points || 0;
                }
            } else if (question.type === "True/False") {
                if (correctAnswers[0] === userAnswer) {
                    totalScore += question.points || 0;
                }
            }
        });

        setScore(totalScore);

    };

    return (
        <div className="ms-5 me-2">
            <h1>Quiz Preview: {quiz?.title}</h1>
            <div className="mb-4">
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/Editor/${qid}/Questions`}>
                    <button
                        className="btn btn-secondary"
                    >
                        Edit Quiz
                    </button>
                </Link>

            </div>
            {quiz?.questions.map((question: any) => (
                <div key={question._id} className="mb-3">
                    <h5>
                        {question.title} ({question.points} points)
                    </h5>
                    <p>{question.questionText}</p>

                    {question.type === "Multiple Choice" && (
                        <div>
                            {question.choices.map((choice: any, index: number) => (
                                <div key={index} className="form-check">
                                    <input
                                        type="radio"
                                        name={`question_${question._id}`}
                                        id={`question_${question._id}_choice_${index}`}
                                        className="form-check-input"
                                        checked={answers[question._id] === choice}
                                        onChange={() =>
                                            handleAnswerChange(question._id, choice)
                                        }
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor={`question_${question._id}_choice_${index}`}
                                    >
                                        {choice}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}

                    {question.type === "Fill in the Blank" && (
                        <div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your Answer"
                                value={answers[question._id] || ""}
                                onChange={(e) =>
                                    handleAnswerChange(question._id, e.target.value)
                                }
                            />
                        </div>
                    )}

                    {question.type === "True/False" && (
                        <div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    name={`question_${question._id}`}
                                    id={`question_${question._id}_true`}
                                    className="form-check-input"
                                    checked={answers[question._id] === true}
                                    onChange={() => handleAnswerChange(question._id, true)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`question_${question._id}_true`}
                                >
                                    True
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    name={`question_${question._id}`}
                                    id={`question_${question._id}_false`}
                                    className="form-check-input"
                                    checked={answers[question._id] === false}
                                    onChange={() => handleAnswerChange(question._id, false)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`question_${question._id}_false`}
                                >
                                    False
                                </label>
                            </div>
                        </div>
                    )}
                </div>
            ))}
            <button className="btn btn-primary me-2" onClick={calculateScore}>
                Submit and View Score
            </button>
            {score !== null && (
                <div className="mt-3">
                    <h4>Your Score: {score} / {quiz?.questions.reduce((acc: any, q: any) => acc + q.points, 0)}</h4>
                </div>
            )}
        </div>
    );
}
