import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as quizClient from "../client";
import * as userClient from "../../../Account/client";
// ADD DISPATCH!!

export default function QuizPreview() {
    const { cid, qid } = useParams();
    const navigate = useNavigate();

    const { quizzes } = useSelector((state: any) => state.quizzesReducer); // Redux state for quizzes
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const uid = currentUser._id; // Current student/faculty user ID
    const canEdit = currentUser.role === "FACULTY";

    const [quiz, setQuiz] = useState<any>(null);
    const [answers, setAnswers] = useState<any>({});
    const [attemptsLeft, setAttemptsLeft] = useState<number>(0);
    const [previousAttempt, setPreviousAttempt] = useState<any>(null);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [attempted, setAttempted] = useState<boolean>(false);
    const [multipleAttempts, setMultipleAttempts] = useState<boolean>(false);

    useEffect(() => {
        if (qid) {
            const currentQuiz = quizzes.find((quiz: any) => quiz._id === qid);
            if (currentQuiz.multiple_attempts) {
                setMultipleAttempts(true);
            }

            if (currentQuiz) {
                setQuiz(currentQuiz);
                checkQuizAttempt();
            }
        }
    }, [qid, quizzes, uid]);


    const checkQuizAttempt = async () => {
        if (qid) {
            try {
                const attempt = await userClient.findQuizAttemptForUser(uid, qid);
                console.log("HAS ATTEMPTED", attempt);
                if (attempt.length > 0) {
                    setAttempted(true);
                    setPreviousAttempt(attempt[attempt.length - 1]);
                    // setPreviousAttempt(attempt[0]); // Assume the latest attempt is at index 0
                } else {
                    setAttempted(false);
                }
            } catch (error) {
                console.error("Error checking quiz attempt:", error);
            }
        }
    };


    const handleAnswerChange = (questionId: string, value: any) => {
        if (!isCompleted) {
            setAnswers((prev: any) => ({
                ...prev,
                [questionId]: value,
            }));
        }
    };

    const calculateScore = () => {
        let totalScore = 0;

        const gradedAnswers = quiz.questions.map((question: any) => {
            const userAnswer = answers[question._id];
            const isCorrect = question.correctAnswers[0].includes(userAnswer);

            return {
                question_id: question._id,
                selectedChoice: userAnswer, // Store the selected answer directly
                is_Correct: isCorrect,
                points_awarded: isCorrect ? question.points : 0,
            };
        });

        gradedAnswers.forEach((answer: any) => {
            totalScore += answer.points_awarded;
        });

        return { gradedAnswers, totalScore };
    };

    const submitQuiz = async () => {
        const { gradedAnswers, totalScore } = calculateScore();

        const quizAttempt = {
            quiz_id: qid,
            user_id: uid,
            score: totalScore,
            timeStamp: new Date(),
            is_completed: true,
            answers: gradedAnswers,
        };

        await quizClient.createQuizAttempt(quizAttempt);

        setIsCompleted(true);
        setPreviousAttempt(quizAttempt);
        alert("Quiz submitted successfully!");
        navigate(`/Kanbas/Courses/${cid}/Quizzes/Results/${qid}`);
    };

    return (
        <div className="ms-5 me-2">
            {canEdit && <h1>Quiz Preview: {quiz?.title} </h1>}
            {!canEdit && <h1>Quiz: {quiz?.title}</h1>}
            {canEdit && (
                <div className="mb-4">
                    <Link to={`/Kanbas/Courses/${cid}/Quizzes/Editor/${qid}/Questions`}>
                        <button className="btn btn-secondary">Edit Quiz</button>
                    </Link>
                </div>
            )}
            {attempted && (
                <div className="mt-3 mb-3">
                    <h4>Last Attempt:</h4>
                    <p>Date: {new Date(previousAttempt.timeStamp).toLocaleString()}</p>
                    <p>Score: {previousAttempt.score} / {quiz?.questions.reduce((acc: any, q: any) => acc + q.points, 0)}</p>
                    <Link to={`/Kanbas/Courses/${cid}/Quizzes/Results/${qid}`}>
                        <button className="btn btn-info">View Last Attempt</button>
                    </Link>
                </div>
            )}
            {(!attempted || (attempted && multipleAttempts) || (attempted && canEdit)) && quiz?.questions.map((question: any) => (
                <div key={question._id} className="mb-3">
                    <h5>{question.title} ({question.points} points)</h5>
                    <p>{question.questionText}</p>

                    {/* Multiple Choice */}
                    {question.type === "Multiple Choice" && (
                        <div>
                            {question.choices.map((choice: any, index: number) => (
                                <div key={index} className="form-check">
                                    <input
                                        type="radio"
                                        name={`question_${question._id}`}
                                        id={`question_${question._id}_choice_${index}`}
                                        className="form-check-input"
                                        disabled={isCompleted}
                                        checked={answers[question._id] === choice}
                                        onChange={() => handleAnswerChange(question._id, choice)}
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

                    {/* Fill in the blank */}
                    {question.type === "Fill in the Blank" && (
                        <input
                            type="text"
                            className={`form-control `}
                            placeholder="Your Answer"
                            disabled={isCompleted}
                            value={answers[question._id] || ""}
                            onChange={(e) => handleAnswerChange(question._id, e.target.value)}
                        />
                    )}

                    {/* True or False */}
                    {question.type === "True/False" && (
                        <div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    name={`question_${question._id}`}
                                    id={`question_${question._id}_true`}
                                    className="form-check-input"
                                    checked={answers[question._id] === true}
                                    onChange={() => handleAnswerChange(question._id, true)} // Store true
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
                                    onChange={() => handleAnswerChange(question._id, false)} // Store false
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
            {(!attempted || (attempted && multipleAttempts) || (attempted && canEdit)) && (
                <button className="btn btn-primary me-2" onClick={submitQuiz}>
                    Submit Quiz
                </button>
            )}
        </div>
    );
}
