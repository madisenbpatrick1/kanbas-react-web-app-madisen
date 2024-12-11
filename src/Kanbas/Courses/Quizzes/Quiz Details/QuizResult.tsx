import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as userClient from "../../../Account/client";

export default function QuizResult() {
    const { qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const uid = currentUser._id;

    const [quiz, setQuiz] = useState<any>(null);
    const [attempt, setAttempt] = useState<any>(null);

    useEffect(() => {
        if (qid) {
            const currentQuiz = quizzes.find((quiz: any) => quiz._id === qid);
            if (currentQuiz) {
                setQuiz(currentQuiz);
                fetchQuizAttempt();
            }
        }
    }, [qid, quizzes]);

    const fetchQuizAttempt = async () => {
        try {
            if (qid) {
                const attempts = await userClient.findQuizAttemptForUser(uid, qid);
                if (attempts.length > 0) {
                    setAttempt(attempts[attempts.length - 1]); // latest attempt is at index 0
                }
            }


        } catch (error) {
            console.error("Error fetching quiz attempt:", error);
        }
    };

    const renderQuestionResult = (question: any, answer: any) => {
        const isCorrect = answer.is_Correct;
        const colorClass = isCorrect ? "bg-success text-white" : "bg-danger text-white";
        const icon = isCorrect ? "\u2713" : "\u2717"; 

        return (
            <div key={question._id} className={`mb-3 p-3 rounded ${colorClass}`}>
                <h5>{question.title} ({question.points} points)</h5>
                <p>{question.questionText}</p>
                <p><strong>Selected Answer:</strong> {answer.selectedChoice}</p>
                {isCorrect ? (
                    <p><strong>Result:</strong> Correct {icon}</p>
                ) : (
                    <>
                        <p><strong>Result:</strong> Incorrect {icon}</p>
                        <p><strong>Correct Answer:</strong> {question.correctAnswers[0]}</p>
                    </>
                )}
            </div>
        );
    };

    return (
        <div className="ms-5 me-2">
            {quiz && attempt ? (
                <>
                    <h1>Quiz Results: {quiz.title}</h1>
                    <div className="mt-3">
                        <h4>Attempt Details:</h4>
                        <p><strong>Date:</strong> {new Date(attempt.timeStamp).toLocaleString()}</p>
                        <p><strong>Score:</strong> {attempt.score} / {quiz.questions.reduce((acc: any, q: any) => acc + q.points, 0)}</p>
                    </div>
                    <div className="mt-4">
                        <h4>Question Breakdown:</h4>
                        {quiz.questions.map((question: any) => {
                            const answer = attempt.answers.find((ans: any) => ans.question_id === question._id);
                           // console.log("ANSWER", answer);
                            return renderQuestionResult(question, answer);
                        })}
                    </div>
                </>
            ) : (
                <p>Loading quiz results...</p>
            )}
        </div>
    );
}
