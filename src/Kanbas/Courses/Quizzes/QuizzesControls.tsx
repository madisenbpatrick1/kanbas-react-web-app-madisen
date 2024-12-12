import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useParams, useNavigate } from "react-router";
import { IoEllipsisVertical } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addQuiz } from "./reducer";
import * as coursesClient from "../client";

export default function QuizzesControls(
) {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const createQuiz = async () => {
        if(!cid) return;
        const newQ = {
            title:"New Quiz", 
            course: cid,
            availability: "Closed",
            due_date: "",
            points: 100,
            num_of_q: 0,
            score: 0,
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
            published: false,};
        const quiz = await coursesClient.createQuizForCourse(cid, newQ);

        return quiz;
    }

    const handleSave = async () => {
        const q = await createQuiz();
        dispatch(addQuiz({ course: cid }));
        navigate(`/Kanbas/Courses/${cid}/Quizzes/Details/${q._id}`);
        if (q && q._id) {
            navigate(`/Kanbas/Courses/${cid}/Quizzes/Details/${q._id}`);
        }
    }
    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <button id="wd-add-quizzes-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <IoEllipsisVertical className="fs-4" />
            </button>
                <button
                    id="wd-add-assignment-btn"
                    className="btn btn-lg btn-danger me-1 float-end"
                    onClick={handleSave}
                >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Quiz
                </button>

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