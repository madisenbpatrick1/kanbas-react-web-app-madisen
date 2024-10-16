import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons(){
    return (
        <div className="float-end">
            <GreenCheckmark />
            <FaPlus className="position-relative me-2" />
        </div>
    )
}