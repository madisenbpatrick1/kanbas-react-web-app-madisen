import { BsGripVertical } from "react-icons/bs";
import QuizzesControls from "./QuizzesControls";
import { useState } from "react";
import * as db from "../../Database";
import { useLocation, useParams } from "react-router";
import { RxRocket } from "react-icons/rx";
import { FcCancel } from "react-icons/fc";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useDispatch, useSelector } from "react-redux";
import { addQuiz } from "./reducer";
import { Link } from "react-router-dom";

export default function Quizzes({ canEdit }: { canEdit: boolean; }) {
    // const [quizzes, setQuizzes] = useState("");
    const { cid } = useParams();

    const { pathname } = useLocation();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    const dispatch = useDispatch();

    let noQuiz = false;

    if(!quizzes) {
        noQuiz = true;
    }

    return (
        <div id="wd-assignments">
            {canEdit && (<><QuizzesControls /><br /><hr /></>)}
            {noQuiz && "click Add Quiz"}
            <div id="wd-assignments">
                <ul id="wd-assignment-list" className="list-group rounded-0 w-100" >
                    <li className="wd-assignment-list-item list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-assignments-title p-3 ps-2 bg-secondary" >
                            <BsGripVertical className="me-2 fs-3" />
                            Assignment Quizzes
                        </div>
                        {quizzes
                            .filter((quiz: any) => quiz.course === cid).map((quiz: any) => (
                                <ul className="wd-assignments-lessons list-group rounded-0">
                                    <li className="wd-lesson list-group-item p-3 ps-1">
                                        <div className="wd-grid-col-left-sidebar">
                                            <RxRocket className="ms-2 fs-3" />
                                        </div>
                                        <div className="wd-grid-col-main-content">
                                            <Link to={`/Kanbas/Courses/${cid}/Quizzes/Details/${quiz._id}`} className="wd-assignment-link wd-fg-color-black text-decoration-none">

                                                <h3> {quiz.title}</h3>

                                            </Link>
                                            <p>
                                                <span > {quiz.availability} </span>
                                                | Due {quiz.due_date} | {quiz.points} pts | {quiz.num_of_q} Questions
                                            </p>
                                        </div>
                                        <div className="wd-grid-col-right-sidebar p-3 me-0">
                                            <div className="float-end">
                                                {quiz.published ? <GreenCheckmark /> : <FcCancel />}

                                                <IoEllipsisVertical />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))}
                    </li>
                </ul>
            </div >
        </div >

    );
}