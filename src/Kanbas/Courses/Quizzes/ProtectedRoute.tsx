import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
import Quizzes from "./index"

export default function ProtectedRouteQuizzes({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role === "FACULTY") {
        return <Quizzes canEdit = {true} />;
    } else {
        return <Quizzes canEdit = {false} />;
    }
}