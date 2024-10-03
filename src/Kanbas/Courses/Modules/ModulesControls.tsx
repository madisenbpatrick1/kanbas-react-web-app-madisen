import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import NonCheckmark from "./NonCheckmark";
export default function ModulesControls() {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Module</button>
            <div className="dropdown d-inline me-1 float-end">
                <button 
                id="wd-publish-all-btn" 
                className="btn btn-lg btn-secondary dropdown-toggle" 
                type="button" 
                data-bs-toggle="dropdown"
                >
                    <GreenCheckmark />
                    Publish All
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="www.google.com">
                            <GreenCheckmark />
                            Publish all modules and items</a>
                    </li>
                    <li>
                        <a id="wd-publish-modules-only-button" className="dropdown-item" href="www.google.com">
                            <GreenCheckmark />
                            Publish modules only</a>
                    </li>
                    <li>
                        <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="www.google.com">
                            <NonCheckmark />
                            Unpublish all modules and items
                        </a>
                    </li>
                    <li>
                        <a id="wd-unpublish-modules-only" className="dropdown-item" href="www.google.com">
                            <NonCheckmark />
                            Unpublish modules only
                        </a>
                    </li>
                </ul>
            </div>
            {/* Implement the View Progress and Collapse All buttons with IDs wd-view-progress and wd-collapse-all */}
            <button id="wd-collapse-all" className="btn btn-lg me-1 btn-secondary float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Collapse All
            </button>
            <button id="wd-view-progress" className="btn btn-lg me-1 btn-secondary float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                View Progress
            </button>

        </div>
    );
}