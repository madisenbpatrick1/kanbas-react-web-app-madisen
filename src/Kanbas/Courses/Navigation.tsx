import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router";

export default function CoursesNavigation() {
    // retrieve current course's ID
    const { cid } = useParams();

    // use Location to retrieve the current pathname
    const { pathname } = useLocation();
    const links =  ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link key={link} to={`/Kanbas/Courses/${cid}/${link}`}
                    className={`list-group-item border border-0 ${pathname.includes(link)
                       ? "active text-black"
                        : "text-danger"}`}>
                        {link}
                        </Link>
            ))}
        </div>
    );
}