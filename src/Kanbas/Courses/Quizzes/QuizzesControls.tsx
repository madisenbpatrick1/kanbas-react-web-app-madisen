import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { IoEllipsisVertical } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addQuiz } from "./reducer";

export default function QuizzesControls() {
    const { cid } = useParams();
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(addQuiz({ course: cid}))
    }
    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <button id="wd-add-quizzes-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <IoEllipsisVertical className="fs-4" />
            </button>
            <Link to={`/Kanbas/Courses/${cid}/Quizzes/Details`}>
                <button
                    id="wd-add-assignment-btn"
                    className="btn btn-lg btn-danger me-1 float-end"
                    onClick={handleSave}
                >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Quiz
                </button>
            </Link>


            <div className="d-inline me-1 float-left">
                <button id="wd-search-quizzes-btn" className="btn btn-lg d-inline btn-secondary">
                    <FaSearch className="position-relative me-2" style={{ bottom: "1px" }} />
                    <input id="wd-search-quizzes"
                        className="btn me-1 "
                        placeholder="Search for Quiz..." />
                </button>
            </div>
        </div>
    );
}