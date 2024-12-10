import { BsGripVertical } from "react-icons/bs";
import QuizzesControls from "./QuizzesControls";
import { useParams } from "react-router";
import { RxRocket } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { publishQuiz, unPublishQuiz, deleteQuiz, setQuizzes, addQuiz } from "./reducer";
import { Link} from "react-router-dom";
import QuizListButtons from "./QuizListButtons";
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";


export default function Quizzes({ canEdit }: { canEdit: boolean; }) {
    // const [quizzes, setQuizzes] = useState("");
    const { cid } = useParams();

    //const { pathname } = useLocation();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    const dispatch = useDispatch();

    const newQuiz = {
        title: "New Quiz",
        course: cid,
        availability: "Closed",
        due_date: "",
        points: 100,
    };

    const removeQuiz = async (quizId: string) => {
        await assignmentsClient.deleteQuiz(quizId);
        dispatch(deleteQuiz(quizId));
    }

    const fetchQuizzes = async () => {
        const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };

    useEffect(() => {
        fetchQuizzes();
    },);
    
    

    let noQuiz = false;

    if (!quizzes) {
        noQuiz = true;
    }
    console.log(quizzes)

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
                           .map((quiz: any) => (
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
                                                <QuizListButtons
                                                    quizId={quiz._id}
                                                    published={quiz.published}
                                                    deleteQuiz={(quizId) => deleteQuiz(quizId) }
                                                    publishQuiz={(quizId) => dispatch(publishQuiz(quizId))}
                                                    unPublishQuiz={(quizId) => dispatch(unPublishQuiz(quizId))} />
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