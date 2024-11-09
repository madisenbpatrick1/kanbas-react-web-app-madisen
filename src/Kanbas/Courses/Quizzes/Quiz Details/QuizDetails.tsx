// For faculty users, implement a Quizzes Details screen as shown below with only following properties. For students, provide a button to start the quiz. Ignore other properties
// Quiz Type - Graded Quiz (default), Practice Quiz, Graded Survey, Ungraded Survey
// Points - the sum of the points of all questions in the quiz
// Assignment Group - Quizzes (default), Exams, Assignments, Project
// Shuffle Answers - Yes (default) / No
// Time Limit - 20 Minutes (default)
// Multiple Attempts - No (default) / Yes
// How Many Attempts - 1 (default). If Multiple Attempts is Yes, then can configure how many times the student can retake the quiz
// Show Correct Answers - If and when correct answers are shown to students
// Access Code - Passcode students need to type to access the quiz. Default is blank
// One Question at a Time - Yes (default) / No
// Webcam Required - No (default) / Yes
// Lock Questions After Answering - No (default) / Yes
// Due date - date the assignment is due
// Available date - date assignment is available
// Until date - date assignment is available until

import { useParams, useNavigate, useLocation, Route, Routes } from "react-router";
import * as db from "../../../Database";
import QuizDetailsControls from "./QuizDetailsControls";
import QuizzesEditor from "../Editor";

// 

export default function QuizDetails({ canEdit }: { canEdit: boolean; }) {
    const { qid } = useParams();
    const dispatch = useParams();
    const navigate = useNavigate();
    const quizzes = db.quizzes;
    const quiz = quizzes.find((quiz) => quiz._id === qid);
    const { pathname } = useLocation();

    return (
        // needs a faculty screen and a student screen 
        <div className="wd-quiz-details">
            <Routes>
                <Route path="/Kanbas/Courses/:cid/Quizzes/Details/:qid/Editor" element={<QuizzesEditor />} />

            </Routes>
            <QuizDetailsControls canEdit={canEdit} />
            <hr />
            <h1>{quiz?.title}</h1>
            <div className="mb-3 row">
                <p><span className="fw-bold">Quiz Type</span> {quiz?.quiz_type}</p>
                <p><span className="fw-bold">Points</span> {quiz?.points}</p>
                <p><span className="fw-bold">Assignment Group</span> {quiz?.assignment_group}</p>
                <p><span className="fw-bold">Shuffle Answers</span> {quiz?.shuffle_answers ? "Yes" : "No"}</p>
                <p><span className="fw-bold">Time Limit</span> {quiz?.time_limit} Minutes</p>
                <p><span className="fw-bold">Multiple Attempts</span> {quiz?.multiple_attempts ? "Yes" : "No"}</p>
                <p><span className="fw-bold">Show Correct Answers</span> {quiz?.show_correct_answers ? "Yes" : "No"}</p>
                <p><span className="fw-bold">Access Code</span> {quiz?.access_code}</p>
                <p><span className="fw-bold">One Question at a Time</span> {quiz?.one_question_at_a_time ? "Yes" : "No"}</p>
                <p><span className="fw-bold">Webcam Required</span> {quiz?.webcam_required ? "Yes" : "No"}</p>
                <p><span className="fw-bold">Lock Questions After Answering</span> {quiz?.lock_questions_after_answering ? "Yes" : "No"}</p>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr className="table">
                            <th>Due</th>
                            <th>For</th>
                            <th>Available</th>
                            <th>Until</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{quiz?.due_date}</td>
                            <td>{quiz?.assignment_group}</td>
                            <td>{quiz?.avialble_date}</td>
                            <td>{quiz?.until_date}</td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    );

}