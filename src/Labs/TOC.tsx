import { Link, useLocation } from "react-router-dom";

export default function TOC() {
    const { pathname } = useLocation();
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a id="wd-a" href="#/Labs" className="nav-link">
                    Labs
                </a>
            </li>
            <li className="nav-item">
                <a id="wd-a1" href="#/Labs/Lab1"
                    className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
                    Lab 1
                </a> </li>
            <li className="nav-item">
                <a id="wd-a2" href="#/Labs/Lab2"
                    className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
                    Lab 2
                </a> </li>
            <li className="nav-item">
                <a id="wd-a3" href="#/Labs/Lab3"
                    className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
                    Lab 3
                </a> </li>
            <li className="nav-item">
                <a id="wd-a4" href="#/Labs/Lab4"
                    className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>
                    Lab 4
                </a> </li>
            <li className="nav-item">
                <Link
                    className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}
                    id="wd-a5"
                    to="/Labs/Lab5">
                    Lab 5
                </Link>
            </li>
            <li className="nav-item">
                <a id="wd-k" href="#/Kanbas" className="nav-link">
                    Kanbas
                </a> </li>
            <li className="nav-item">
                <a id="wd-k" href="https://github.com/madisenbpatrick1/kanbas-react-web-app-madisen" className="nav-link">
                    My GitHub - Madisen Patrick
                </a> </li>
            <li className="nav-item">
                <a id="wd-k" href="https://github.com/madisenbpatrick1/kanbas-node-server-app" className="nav-link">
                    Server Repo on GitHub
                </a> </li>
            <li className="nav-item">
                <a id="wd-k" href="https://kanbas-node-server-app-mp-c9fe14a9beff.herokuapp.com/" className="nav-link">
                    Link to Heroku
                </a> </li>

        </ul>
    );
}
