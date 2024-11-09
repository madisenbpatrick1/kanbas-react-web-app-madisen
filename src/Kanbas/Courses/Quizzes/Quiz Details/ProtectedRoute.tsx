import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
import QuizzesDetials from "./QuizDetails"

export default function ProtectedRouteQuizDetails({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role === "FACULTY") {
        return <QuizzesDetials canEdit = {true} />;
    } else {
        return <QuizzesDetials canEdit = {false} />;
    }
}