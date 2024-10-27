import { useSelector } from "react-redux";
import Dashboard from "./Dashboard"

export default function ProtectedRouteDashboard({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role === "FACULTY") {
        return <Dashboard {...children.props} canEdit = {true}/>;
    } else {
        return children;
    }
}