import { useSelector } from "react-redux";
import Home from "./index"

export default function ProtectedRouteHome({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role === "FACULTY") {
        return <Home canEdit = {true} />;
    } else {
        return <Home canEdit = {false} />;
    }
}