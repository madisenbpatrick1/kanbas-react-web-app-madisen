import { useParams } from "react-router";
import * as db from "../../Database";


export default function QuizzesEditor() {
    const {cid, aid} = useParams();
    const quizList = db.quizzes;
    const quiz = quizList.find(q => q._id == aid);

    return (
        <div id="wd-quiz-editor">
            <form>
                <div className = "mb-3">
                    
                </div>
            </form>
        </div>
)}