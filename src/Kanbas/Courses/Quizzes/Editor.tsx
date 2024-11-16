import { useLocation, useParams } from "react-router";
import * as db from "../../Database";
import { FaEllipsisVertical } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function QuizzesEditor() {
    const { cid, qid } = useParams();
    const quizList = db.quizzes;
    const quiz = quizList.find(q => q._id == qid);
    const { pathname } = useLocation();

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
            <div>
                <ul className="nav nav-tabs mb-3">
                    <li className="nav-item">
                        <a className="nav-link active" href="">Details</a>

                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="">Questions</a>

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
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label mb-3">Quiz Description</label>
                    <textarea
                        className="form-control"
                        id="wd-description"
                        value={quiz?.description}
                    />
                </div>
                <div className="mb-3 row"> {/* Quiz Type */}
                    <label htmlFor="wd-group"
                        className="col-sm-2 col-form-label pt-0 text-end">
                        Quiz Type
                    </label>
                    <div className="col-sm-10">
                        <select className="form-select" id="wd-group">
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
                        />
                    </div>
                </div>
                <div className="mb-3 row me-0 ms-0"> {/* Assignment Group -quizes*/}
                    <legend
                        className="col-sm-2 col-form-label pt-0 ps-0 text-end">
                        Assignment Group
                    </legend>
                    <div className="col-sm-10">
                        <select className="form-select" id="wd-group">
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
                            <input className="form-check-input" type="checkbox"
                                id="wd-shuffle-answers" />
                            <label htmlFor="wd-shuffle-answers" className="form-check-label">Shuffle Answers</label><br />
                        </div>
                        <div className="form-check pt-2 flex">
                            <input className="form-check-input" type="checkbox"
                                id="wd-time-limit" />
                            <label htmlFor="wd-time-limit" className="form-check-label">Time Limit</label>
                            <input
                                type="number"
                                className="form-control"
                                id="wd-points"
                                value={quiz?.time_limit}
                            />
                            minutes
                        </div>
                        <div className="row border p-3"> {/* Multiple Attempts */}
                        <input className="form-check-input" type="checkbox"
                                id="wd-multiple-attempts" />
                            <label htmlFor="wd-multiple-attempts"
                                className="col-sm-2 col-form-label pt-0 text-end">
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
                        />
                    </div>
                </div>
                <div className="mb-3 row"> {/* One Question at a Time  */}
                    <label htmlFor="wd-group"
                        className="col-sm-2 col-form-label pt-0 text-end">
                        One Question at a Time
                    </label>
                    <div className="col-sm-10">
                        <select className="form-select" id="wd-group">
                            <option selected value="yes">
                                Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row"> {/* Webcam Required */}
                    <label htmlFor="wd-group"
                        className="col-sm-2 col-form-label pt-0 text-end">
                        Webcam Required
                    </label>
                    <div className="col-sm-10">
                        <select className="form-select" id="wd-group">
                            <option value="yes">
                                Yes</option>
                            <option selected value="No">No</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row"> {/* Lock Questions After Answering  */}
                    <label htmlFor="wd-group"
                        className="col-sm-2 col-form-label pt-0 text-end">
                        Lock Questions After Answering
                    </label>
                    <div className="col-sm-10">
                        <select className="form-select" id="wd-group">
                            <option value="yes">
                                Yes</option>
                            <option selected value="No">No</option>
                        </select>
                    </div>
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
                    >
                    </input>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-due-date"
                        className="fw-bold col-sm-2 col-form-label">
                        Available Date
                    </label>
                    <input
                        className="form-select"
                        id="wd-available-date" type="date"
                        value={quiz?.avialble_date}
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
                        value={quiz?.until_date}
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
                >
                    Save
                </button>
            </Link>
            <Link to={`/Kanbas/Courses/${cid}/Quizzes/`}>
                <button
                    type="submit"
                    className="btn btn-danger me-1 float-end"
                    id="wd-assignment-save"
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
    )
}