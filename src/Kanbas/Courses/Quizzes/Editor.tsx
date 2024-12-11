import { useParams, useNavigate } from "react-router";

import { FaEllipsisVertical } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateQuiz, publishQuiz } from "./reducer";
// import * as assignmentsClient from "./client";
// import * as coursesClient from "../client";
import * as quizClient from "./client";

export default function QuizzesEditor() {
    const { cid, qid } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        questions: [],
    });

    useEffect(() => {
        if (qid) {
            const current = quizzes.find((q: any) => q._id === qid);
            if (current) {
                setQuiz(current);
            }
        }
    }, [qid, quizzes]);

    const handleSave = async () => {
        await quizClient.updateQuiz(quiz);
        dispatch(updateQuiz(quiz));
        navigate(`/Kanbas/Courses/${cid}/Quizzes/Details/${qid}`);
    }
    const handleSavePublish = async () => {
        const updatedQuiz = { ...quiz, published: true, 
            availability: "Open" };
        await quizClient.updateQuiz(updatedQuiz);
        dispatch(updateQuiz(updatedQuiz));
        dispatch(publishQuiz(updatedQuiz._id));
        navigate(`/Kanbas/Courses/${cid}/Quizzes/`);
    }

    return (
        <div id="wd-quiz-editor">
            <div className="float-end">
                Points {quiz?.points}
                {quiz?.availability}
                <button className="btn btn-primary">
                    <FaEllipsisVertical />
                </button>

            </div>
            <hr />
            <div className="mb-3">
                <ul className="nav nav-tabs mb-3">
                    <li className="nav-item">
                        <Link to={`/Kanbas/Courses/${cid}/Quizzes/Editor/${qid}`}
                            className="nav-link active">
                            Details
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/Kanbas/Courses/${cid}/Quizzes/Editor/${qid}/Questions`}
                            className="nav-link">
                            Questions
                        </Link>

                    </li>
                </ul>
            </div>
            <form>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control mb-3"
                        id="wd-title"
                        value={quiz?.title}
                        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label mb-3">Quiz Description</label>
                    <textarea
                        className="form-control"
                        id="wd-description"
                        value={quiz?.description}
                        onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
                    />
                </div>
                <div className="mb-3 row"> {/* Quiz Type */}
                    <label htmlFor="wd-group"
                        className="col-sm-2 col-form-label pt-0 text-end">
                        Quiz Type
                    </label>
                    <div className="col-sm-10" >
                        <select className="form-select" id="wd-group" onChange={(e) => setQuiz({ ...quiz, quiz_type: e.target.value })}>
                            <option value="PRACTICEQUIZ">PRACTICE QUIZ</option>
                            <option value="GRADEDSURVEY">GRADED SURVEY</option>
                            <option selected value="Graded Quiz">
                                Graded Quiz</option>
                            <option value="UNGRADED SURVEY">UNGRADED SURVEY</option>

                        </select>
                    </div>

                </div>
                <div className="mb-3 row"> {/* Points */}
                    <label htmlFor="wd-points"
                        className="col-sm-2 col-form-label pt-0 text-end">
                        Points
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            id="wd-points"
                            value={quiz?.points}
                            onChange={(e) => setQuiz({ ...quiz, points: e.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row me-0 ms-0"> {/* Assignment Group -quizes*/}
                    <legend
                        className="col-sm-2 col-form-label pt-0 ps-0 text-end">
                        Assignment Group
                    </legend>
                    <div className="col-sm-10">
                        <select className="form-select" id="wd-group" onChange={(e) => setQuiz({ ...quiz, assignment_group: e.target.value })}>
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option selected value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">
                                EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>


                        <label htmlFor="wd-group"
                            className="col-sm-2 col-form-label pt-3 fw-bold">
                            Options
                        </label>
                        <div className="form-check pt-2">
                            <input className="form-check-input"
                                type="checkbox"
                                checked={quiz.shuffle_answers}
                                id="wd-shuffle-answers"
                                onChange={(e) => setQuiz({ ...quiz, shuffle_answers: e.target.checked })} />
                            <label htmlFor="wd-shuffle-answers" className="form-check-label">Shuffle Answers</label><br />
                        </div>
                        <div className="form-check pt-2 flex">
                            <input className="form-check-input" type="checkbox"
                                id="wd-time-limit" value={(quiz.time_limit)} />
                            <label htmlFor="wd-time-limit" className="form-check-label">Time Limit</label>
                            <input
                                type="number"
                                className="form-control"
                                id="wd-points"
                                value={quiz?.time_limit}
                                onChange={(e) => setQuiz({ ...quiz, time_limit: e.target.valueAsNumber })}
                            />
                            minutes
                        </div>
                        <div className="row border p-3"> {/* Multiple Attempts */}
                            <input className="form-check-input" type="checkbox"
                                checked={(quiz.multiple_attempts)} 
                                onChange={(e) => setQuiz({ ...quiz, multiple_attempts: e.target.checked })}
                                id="wd-multiple-attempts" />
                            <label htmlFor="wd-multiple-attempts"
                                className="col-sm-6 col-form-label pt-0">
                                Multiple Attempts
                            </label>

                        </div>
                    </div>
                </div>




                <div className="mb-3 row"> {/* Access Code */}
                    <label htmlFor="wd-points"
                        className="col-sm-2 col-form-label pt-0 text-end">
                        Access Code
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="wd-points"
                            value={quiz?.access_code}
                            onChange={(e) => setQuiz({ ...quiz, access_code: e.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row"> {/* One Question at a Time  */}
                    <label htmlFor="wd-group"
                        className="col-sm-2 col-form-label pt-0 text-end">
                        One Question at a Time
                    </label>
                    <input className="form-check-input" type="checkbox" checked={(quiz.one_question_at_a_time)}
                        id="wd-shuffle-answers" onChange={(e) => setQuiz({ ...quiz, one_question_at_a_time: e.target.checked })} />

                </div>
                <div className="mb-3 row"> {/* Webcam Required */}
                    <label htmlFor="wd-group"
                        className="col-sm-2 col-form-label pt-0 text-end">
                        Webcam Required
                    </label>
                    <input className="form-check-input" type="checkbox" checked={(quiz.webcam_required)}
                        id="wd-webcam-required" onChange={(e) => setQuiz({ ...quiz, webcam_required: e.target.checked })} />

                </div>
                <div className="mb-3 row"> {/* Lock Questions After Answering  */}
                    <label htmlFor="wd-group"
                        className="col-sm-2 col-form-label pt-0 text-end">
                        Lock Questions After Answering
                    </label>
                    <input className="form-check-input" type="checkbox" checked={(quiz.lock_questions_after_answering)}
                        id="wd-shuffle-answers" onChange={(e) => setQuiz({ ...quiz, lock_questions_after_answering: e.target.checked })} />

                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-due-date"
                        className="fw-bold col-sm-2 col-form-label">
                        Due date
                    </label>
                    <input
                        className="form-select"
                        id="wd-due-date" type="date"
                        value={quiz?.due_date}
                        onChange={(e) => setQuiz({ ...quiz, due_date: e.target.value })}
                    >
                    </input>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-available-date"
                        className="fw-bold col-sm-2 col-form-label">
                        Available Date
                    </label>
                    <input
                        className="form-select col-sm-10"
                        id="wd-available-date"
                        type="date"
                        value={quiz.available_date}
                        onChange={(e) => setQuiz({ ...quiz, available_date: e.target.value })}
                    >
                    </input>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-until-date"
                        className="fw-bold col-sm-2 col-form-label">
                        Until Date
                    </label>
                    <input
                        className="form-select"
                        id="wd-until-date" type="date"
                        value={quiz.until_date}
                        onChange={(e) => setQuiz({ ...quiz, until_date: e.target.value })}
                    >
                    </input>
                </div>


            </form>
            <hr />
            <Link to={`/Kanbas/Courses/${cid}/Quizzes/Details/${qid}/`}>
                <button
                    type="submit"
                    className="btn btn-danger me-1 float-end"
                    id="wd-assignment-save"
                    onClick={handleSave}
                >
                    Save
                </button>
            </Link>
            <Link to={`/Kanbas/Courses/${cid}/Quizzes/`}>
                <button
                    type="submit"
                    className="btn btn-danger me-1 float-end"
                    id="wd-assignment-save"
                    onClick={handleSavePublish}
                >
                    Save and Publish
                </button>
            </Link>
            <Link to={`/Kanbas/Courses/${cid}/Quizzes/`}>
                <button type="submit" className="btn btn-secondary float-end me-1" id="wd-assignment-cancel"
                >
                    Cancel
                </button>
            </Link>

        </div>
    );
}