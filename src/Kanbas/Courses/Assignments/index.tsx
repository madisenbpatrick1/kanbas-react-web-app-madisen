import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentListButtons from "./AssignmentListButtons";
import { FaRegEdit } from "react-icons/fa";
import React from "react";
import { useParams } from "react-router";
import * as db from "../../Database";
import {useLocation} from "react-router"

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    const {pathname} = useLocation();
    const path = "#"+pathname + "/"

    return (
        <div id="wd-assignments">
            <AssignmentControls /><br /><br /><br /><br />
            <ul id="wd-assignment-list" className="list-group rounded-0 w-100">
                <ul id="wd-assignment-list" className="list-group rounded-0 w-100">
                    {assignments
                        .filter((assignment: any) => assignment.course === cid)
                        .map((assignment: any) => (
                            <li className="wd-assignment-list-item list-group-item p-0 mb-5 fs-5 border-gray">
                                <div className="wd-assignments-title p-3 ps-2 bg-secondary" >
                                    <BsGripVertical className="me-2 fs-3" />
                                    {assignment.title}
                                    <AssignmentControlButtons />
                                </div>
                                <ul className="wd-assignments-lessons list-group rounded-0">
                                    <li className="wd-lesson list-group-item wd-grid-row p-3 ps-1">
                                        <div className="wd-grid-col-left-sidebar">
                                            <BsGripVertical className="me-2 fs-3" />
                                            <FaRegEdit className="me-2 fs-4" />
                                        </div>
                                        <div className="wd-grid-col-main-content">
                                            <a className="wd-assignment-link wd-fg-color-black text-decoration-none"
                                                href={path+assignment._id}>
                                                <h3>{assignment._id}</h3>
                                            </a>
                                            <p className="wd-fg-color-red"> Multiple Modules <span className="wd-fg-color-black">| Not available until May 6 at 12:00am |
                                                <br /> Due May 13 at 11:59pm | 100pts</span></p>
                                        </div>
                                        <div className="wd-grid-col-right-sidebar">
                                            <AssignmentListButtons />
                                        </div>

                                    </li>

                                </ul>

                            </li>
                        ))}
                </ul>
            </ul>
        </div>
    );
}