import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useState } from "react";
import { useParams } from "react-router";
import { FcCancel } from "react-icons/fc";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router";
export default function QuizListButtons({ quizId, published, deleteQuiz, publishQuiz, unPublishQuiz }:
    {
        quizId: string;
        published: boolean;
        deleteQuiz: (quizId: string) => void;
        publishQuiz: (quizId: string) => void;
        unPublishQuiz: (quizId: string) => void;
    }
) {
    const [menu, setMenu] = useState(false);
    const [isPublished, setIsPublished] = useState(published);
    const { cid } = useParams();
    const navigate = useNavigate();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const currentQuiz = quizzes.find((q: any) => q._id === quizId);

    const handleEdit = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/Details/${quizId}`);
    }
    const handleDelete = () => {
        deleteQuiz(quizId);
        setMenu(false);
    };

    const handlePublish = () => {
        isPublished ? unPublishQuiz(currentQuiz) : publishQuiz(currentQuiz);

        setIsPublished(!isPublished);
        console.log(isPublished)
        setMenu(false);
    };


    return (
        <div className="float-end">
            {isPublished ? <GreenCheckmark /> : <FcCancel />}
            <IoEllipsisVertical onClick={() => setMenu(!menu)} />
            {menu && (
                <div className="confirm-dialog">
                    <button className="btn btn-primary mb-2 mt-1" onClick={handleEdit}>Edit</button><br />
                    <button className="btn btn-danger mb-2" onClick={handleDelete}>Delete</button><br />
                    <button className="btn btn-primary mb-2" onClick={handlePublish}>
                        {isPublished ? "Unpublish" : "Publish"}
                    </button><br />
                </div>
            )}

        </div>)

}