import { useLocation, useParams } from "react-router";
import * as db from "../../Database";
import { FaEllipsisVertical } from "react-icons/fa6";


export default function QuizzesEditor() {
    const { qid } = useParams();
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
                <ul className="nav nav-tabs">
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
                        id="wd-name"
                        value={quiz?.title}
                        
                    />
                </div>
            </form>
        </div>
    )
}