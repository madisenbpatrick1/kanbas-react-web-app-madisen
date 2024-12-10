import CoursesNavigation from "./Navigation";
import { Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignment from "./Assignments/index";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { FaAlignJustify } from "react-icons/fa";
import ProtectedRoute from "./Assignments/ProtectedRoute";
import ProtectedRouteModules from "./Modules/ModulesProtectedRoute";
import ProtectedRouteHome from "./Home/HomeProtectedRoute";
import Quizzes from "./Quizzes";
import QuizDetails from "./Quizzes";
import ProtectedRouteQuizzes from "./Quizzes/ProtectedRoute";
import ProtectedRouteQuizDetails from "./Quizzes/Quiz Details/ProtectedRoute";
import QuizzesEditor from "./Quizzes/Editor";
import QuizQuestions from "./Quizzes/Quiz Questions/QuizQuestions";
import QuizPreview from "./Quizzes/Quiz Details/QuizPreview";
import * as courseClient from "./client";
import { useState, useEffect } from "react";

export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();

    // ADD SOMETHING HERE TO INPUT THE USER INPUT INTO THE PEOPLE TABLE 

    const [users, setUsers] = useState<any[]>([]);

    const fetchUsers = async () => {
        try {
            const users = await courseClient.findUsersForCourse(course._id);
            setUsers(users);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [users]);
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="Home" element={<ProtectedRouteHome><Home canEdit={false} /> </ProtectedRouteHome>} />
                        <Route path="Modules" element={<ProtectedRouteModules><Modules canEdit={false} /></ProtectedRouteModules>} />
                        <Route path="Assignments" element={<ProtectedRoute><Assignment canEdit={false} /></ProtectedRoute>} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="Quizzes" element={<ProtectedRouteQuizzes><Quizzes canEdit={false} /></ProtectedRouteQuizzes>} />
                        <Route path="Quizzes/Details" element={<ProtectedRouteQuizDetails><QuizDetails canEdit={false} /></ProtectedRouteQuizDetails>} />
                        <Route path="Quizzes/Details/:qid" element={<ProtectedRouteQuizDetails><QuizDetails canEdit={false} /></ProtectedRouteQuizDetails>} />
                        <Route path="Quizzes/Editor/:qid" element={<QuizzesEditor  />} />
                        <Route path="Quizzes/Editor/:qid/Questions" element={<QuizQuestions />} />
                        <Route path="Quizzes/Preview/:qid" element={<QuizPreview/>} />
                        <Route path="People" element={<PeopleTable users={users}/>} />

                    </Routes>
                </div>
            </div>
        </div>
    );
}