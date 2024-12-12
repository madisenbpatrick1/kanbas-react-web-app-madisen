import { BsGripVertical } from "react-icons/bs";
import QuizzesControls from "./QuizzesControls";
import { useParams } from "react-router";
import { RxRocket } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuiz, setQuizzes, updateQuiz } from "./reducer";
import { Link } from "react-router-dom";
import QuizListButtons from "./QuizListButtons";
import { useEffect } from "react";
import * as coursesClient from "../client";
//import * as assignmentsClient from "./client";
import * as quizClient from "./client";


export default function Quizzes({ canEdit }: { canEdit: boolean; }) {
    const { cid } = useParams();

    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    const dispatch = useDispatch();


    const removeQuiz = async (quizId: string) => {
        await quizClient.deleteQuiz(quizId);
        dispatch(deleteQuiz(quizId));
    }

    const publishQuiz = async (quiz: any) => {
        const updatedQuiz = { ...quiz, published: true, availability: "Open" };
        await quizClient.updateQuiz(updatedQuiz);
        dispatch(updateQuiz(updatedQuiz));
    }

    const unpublishQuiz = async (quiz: any) => {
        const updatedQuiz = { ...quiz, published: false, availability: "Closed" };
        await quizClient.updateQuiz(updatedQuiz);
        dispatch(updateQuiz(updatedQuiz));
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

    const filteredQs = canEdit ? quizzes : quizzes.filter((q: any) => q.published);
    const formatDueDate = (dateString: string) => {
        if (!dateString) {
            return "";
        }
        const [year, month, day] = dateString.split("-").map(Number);
        const date = new Date(year, month - 1, day); // month is 0-indexed

        if (isNaN(date.getTime())) {
            return "Invalid Date";
        }

        return new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        }).format(date);
    };

    const getAvailabilityText = (availabilityDate: string, availableUntilDate: string) => {
        const now = new Date();
        if(!availabilityDate || !availableUntilDate) {return "";}

        const [availableYear, availableMonth, availableDay] = availabilityDate.split("-").map(Number);
        const availableDateObj = new Date(availableYear, availableMonth - 1, availableDay);

        const [availableUntilYear, availableUntilMonth, availableUntilDay] = availableUntilDate.split("-").map(Number);
        const availableUntilDateObj = new Date(availableUntilYear, availableUntilMonth - 1, availableUntilDay);

        if (isNaN(availableDateObj.getTime()) || isNaN(availableUntilDateObj.getTime())) {
            return "Invalid Date";
        }

        // If the current date is before the available date
        if (now < availableDateObj) {
            return `Not available until ${formatDueDate(availabilityDate)}`;
        }

        // If the current date is after the available until date
        if (now > availableUntilDateObj) {
            return "Closed";
        }

        // If the current date is between available date and available until date
        return "Available";
    };


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
                        {filteredQs
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
                                                <span > {getAvailabilityText(quiz.available_date, quiz.until_date)} </span>
                                                |
                                                {`Due ${formatDueDate(quiz.due_date)}`} | {quiz.points} pts | {quiz.num_of_q} Questions
                                            </p>
                                        </div>
                                        <div className="wd-grid-col-right-sidebar p-3 me-0">
                                            <div className="float-end">
                                                {canEdit && <QuizListButtons
                                                    quizId={quiz._id}
                                                    published={quiz.published}
                                                    deleteQuiz={(quizId) => removeQuiz(quizId)}
                                                    publishQuiz={(quiz) => publishQuiz(quiz)}
                                                    unPublishQuiz={(quiz) => unpublishQuiz(quiz)} />}
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