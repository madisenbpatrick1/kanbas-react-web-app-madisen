import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaEllipsisVertical } from "react-icons/fa6";
import MultipleChoiceEditor from "./MultipleChoiceEditor";
import TrueFalseEditor from "./TrueFalseEditor";
import FillInTheBlankEditor from "./FillInTheBlankEditor";
import * as quizClient from "../client";
import { updateQuiz } from "../reducer";

export default function QuizDetails() {
    const { cid, qid } = useParams();

    const dispatch = useDispatch();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    const [quiz, setQuiz] = useState({
        _id: "",
        title: "",
        course: "",
        availability: "Closed",
        due_date: "",
        points: "",
        num_of_q: "",
        score: "",
        description: "",
        assigned_to: "",
        quiz_type: "Graded Quiz",
        assignment_group: "Quizzes",
        shuffle_answers: true,
        time_limit: 20,
        multiple_attempts: false,
        show_correct_answers: "",
        access_code: "",
        one_question_at_a_time: true,
        webcam_required: false,
        lock_questions_after_answering: false,
        available_date: "",
        until_date: "",
        published: false,
        questions:[] as any[],
    });

    const [questions, setQuestions] = useState<any[]>([]);
    const [editingQuestionId, setEditingQuestionId] = useState<string | null>(null);
    const [currentQuestion, setCurrentQuestion] = useState<any>(null);

    // Calculate total points
    // const totalPoints = questions.reduce((sum, question) => sum + (question.points || 0), 0);
    const calculateTotalPoints = (questionsArray: any[]) =>
        questionsArray.reduce((sum, question) => sum + (question.points || 0), 0);

    useEffect(() => {
        if (qid) {
            const current = quizzes.find((quiz: any) => quiz._id === qid);
            if (current) {
                setQuiz(current);
                setQuestions(current.questions || []);
            }
        }
    }, [qid, quizzes]);

    const updateTotalPoints = async (updatedQuestions: any[]) => {
        const totalPoints = calculateTotalPoints(updatedQuestions);
        const num_of_q = updatedQuestions.length.toString();
        const updatedQuiz = { ...quiz, questions: updatedQuestions, points: totalPoints, num_of_q: num_of_q };

        setQuiz(updatedQuiz);
        await quizClient.updateQuiz(updatedQuiz);
        dispatch(updateQuiz(updatedQuiz));
    };

    const handleAddQuestion = async (type: string) => {
        const newQuestion = {
            // _id: Date.now().toString(), // Unique ID
            type,
            title: "",
            questionText: "",
            points: 1,
            correctAnswers: [],
            choices: [],
        };

        //onst updatedQuiz = { ...quiz, questions: [...quiz.questions, newQuestion] };
        //setQuestions([...questions, newQuestion]);
        // awaitUpdate
       // await assignmentsClient.updateQuiz(updatedQuiz);
       const updatedQuestions = [...questions, newQuestion];
       setQuestions(updatedQuestions);
       await updateTotalPoints(updatedQuestions);


        setCurrentQuestion(newQuestion);
    };

    const handleSaveQuestion = async (updatedQuestion: any) => {
         const updatedQuestions = questions.map((q) =>
            q._id === updatedQuestion._id ? updatedQuestion : q
        );

        setQuestions(updatedQuestions);
        await updateTotalPoints(updatedQuestions);

        setEditingQuestionId(null);
        setCurrentQuestion(null);
    };

    const handleCancelEdit = () => {
        setEditingQuestionId(null);
        setCurrentQuestion(null);
    };

    const handleChangeQuestionType = (newType: string) => {
        const updatedQuestion = {
            ...currentQuestion,
            type: newType,
            ...(newType === "Multiple Choice" && {
                choices: [
                    { _id: "1", text: "", isCorrect: false },
                    { _id: "2", text: "", isCorrect: false },
                ],
            }),
            ...(newType === "True/False" && { correctAnswers: null }),
            ...(newType === "Fill in the Blank" && { correctAnswers: [] }),
        };
        setCurrentQuestion(updatedQuestion);
    };

    const handleRemoveQuestion = async (questionId: string) => {
        const updatedQuestions = questions.filter((q) => q._id !== questionId);
        setQuestions(updatedQuestions);
        await updateTotalPoints(updatedQuestions);
    };

    return (
        <div>
            <div className="float-end">
                Points {quiz.points} | {quiz?.availability}
                <button className="btn btn-primary">
                    <FaEllipsisVertical />
                </button>
            </div>
            <hr />
            <div className="mb-3">
                <ul className="nav nav-tabs mb-3">
                    <li className="nav-item">
                        <Link
                            to={`/Kanbas/Courses/${cid}/Quizzes/Editor/${qid}`}
                            className="nav-link"
                        >
                            Details
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/Kanbas/Courses/${cid}/Quizzes/Editor/${qid}/Questions`}
                            className="nav-link active">
                            Questions
                        </Link>

                    </li>
                </ul>

            </div>
            <button
                className="btn btn-primary me-2"
                onClick={() => handleAddQuestion("Multiple Choice")}
            >
                <FaPlus className="me-2" />
                New Question
            </button>

            <div className="mt-4">
                {questions.map((question) => (
                    <div key={question._id} className=" mb-3 border p-3">
                        {editingQuestionId === question._id ? (
                            <div className="p-2">
                                <div className="d-flex align-items-center mb-3">
                                    <input
                                        type="text"
                                        className="form-control me-2"
                                        placeholder="Question Title"
                                        value={currentQuestion?.title}
                                        onChange={(e) =>
                                            setCurrentQuestion({
                                                ...currentQuestion,
                                                title: e.target.value,
                                            })
                                        }
                                    />
                                    <select
                                        className="form-select me-2"
                                        value={currentQuestion?.type}
                                        onChange={(e) => handleChangeQuestionType(e.target.value)}
                                    >
                                        <option value="Multiple Choice">Multiple Choice</option>
                                        <option value="True/False">True/False</option>
                                        <option value="Fill in the Blank">Fill in the Blank</option>
                                    </select>
                                    Pts.
                                    <input
                                        type="number"
                                        className="form-control ms-1"
                                        placeholder="Points"
                                        value={currentQuestion?.points}
                                        onChange={(e) =>
                                            setCurrentQuestion({
                                                ...currentQuestion,
                                                points: parseInt(e.target.value, 10),
                                            })
                                        }
                                    />
                                </div>
                                <hr />

                                {currentQuestion?.type === "Multiple Choice" ? (
                                    <MultipleChoiceEditor
                                        question={currentQuestion}
                                        setQuestion={setCurrentQuestion}
                                        onSave={handleSaveQuestion}
                                        onCancel={handleCancelEdit}
                                    />
                                ) : currentQuestion?.type === "True/False" ? (
                                    <TrueFalseEditor
                                        question={currentQuestion}
                                        setQuestion={setCurrentQuestion}
                                        onSave={handleSaveQuestion}
                                        onCancel={handleCancelEdit}
                                    />
                                ) : (
                                    <FillInTheBlankEditor
                                        question={currentQuestion}
                                        setQuestion={setCurrentQuestion}
                                        onSave={handleSaveQuestion}
                                        onCancel={handleCancelEdit}
                                    />
                                )}
                            </div>
                        ) : (
                            <div>
                                <span>
                                    {question.title || "Untitled Question"} ({question.type}) -{" "}
                                    {question.points} Points
                                </span>
                                <button
                                    className="btn btn-primary btn-sm ms-2 float-end"
                                    onClick={() => {
                                        setEditingQuestionId(question._id);
                                        setCurrentQuestion(question);
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm ms-2 float-end"
                                    onClick={() => handleRemoveQuestion(question._id)}
                                >
                                    Remove
                                </button>
                            </div>
                        )}
                    </div>
                ))}
                {questions.length === 0 && <p></p>}
            </div>
        </div>
    );
}
