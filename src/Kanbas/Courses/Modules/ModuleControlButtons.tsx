import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

export default function ModuleControlButtons(
    { moduleId, deleteModule }: {
        moduleId: string;
        deleteModule: (moduleId: string) => void;
    }) {
    return (
        <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)} />
            <GreenCheckmark />
            <FaPlus className="position-relative me-2" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    )
}