import { FaPencil } from "react-icons/fa6";
import { Link, Navigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ProtectedRouteQuizDetails from "./ProtectedRoute";
import QuizzesEditor from "../Editor";


export default function QuizDetailsControls({ canEdit }: { canEdit: boolean; }) {
    const { cid, aid, qid } = useParams();
    const { pathname } = useLocation();


    // const path = "#" + pathname + "/Details/"
    return (
        <div className="float">
            {canEdit && <div>
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/Preview/${qid}`}><button className="btn btn-lg float-center btn-primary me-3 ">
                    Preview
                </button></Link>

                <Link to={`/Kanbas/Courses/${cid}/Quizzes/Editor/${qid}`}>
                    <button className="btn btn-lg float-center btn-primary"><FaPencil /> Edit</button>
                </Link>

            </div>}
            {!canEdit && <div>
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/Preview/${qid}`}><button className="btn btn-lg float-center btn-danger me-3 ">
                    Start
                </button></Link>
            </div>}
        </div>
    );
}