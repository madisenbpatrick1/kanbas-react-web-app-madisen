import { FaPlus } from "react-icons/fa";


export default function MultipleChoiceEditor({
    question,
    setQuestion,
    onSave,
    onCancel,
}: {
    question: any;
    setQuestion: (q: any) => void;
    onSave: (q: any) => void;
    onCancel: () => void;
}) {
    const handleAddChoice = () => {
        setQuestion((prev: any) => ({
            ...prev,
            choices: [...prev.choices, { _id: Date.now().toString(), text: "", isCorrect: false }],
        }));
    };

    const handleRemoveChoice = (choiceId: string) => {
        setQuestion((prev: any) => ({
            ...prev,
            choices: prev.choices.filter((choice: any) => choice._id !== choiceId),
        }));
    };

    const handleChoiceTextChange = (choiceId: string, newText: string) => {
        setQuestion((prev: any) => ({
            ...prev,
            choices: prev.choices.map((choice: any) =>
                choice._id === choiceId ? { ...choice, text: newText } : choice
            ),
        }));
    };

    const handleCorrectChoiceChange = (choiceId: string) => {
        setQuestion((prev: any) => ({
            ...prev,
            choices: prev.choices.map((choice: any) => ({
                ...choice,
                isCorrect: choice._id === choiceId,
            })),
        }));
    };

    return (
        <div>
            <p>Enter your question and multiple answers, then select the correct answer</p>
            <strong>Question:</strong>
            <textarea
                className="form-control mb-2"
                value={question?.question || ""}
                onChange={(e) => setQuestion({ ...question, question: e.target.value })}
                placeholder="Question"
            />
            <strong>Answers:</strong>
            {question?.choices?.map((choice: any) => (
                <div key={choice._id} className="d-flex align-items-center mb-2">
                    <label>Possible Answer</label>
                    <textarea
                        className="form-control"
                        value={choice.text}
                        onChange={(e) => handleChoiceTextChange(choice._id, e.target.value)}
                        placeholder="Choice text"
                    />
                    <input
                        type="radio"
                        className="form-check-input ms-2"
                        checked={choice.isCorrect}
                        onChange={() => handleCorrectChoiceChange(choice._id)}
                    />
                    <button
                        className="btn btn-danger ms-2"
                        onClick={() => handleRemoveChoice(choice._id)}
                    >
                        Remove
                    </button>
                </div>
            ))}
            <button className="btn btn-secondary mt-1 float-end" onClick={handleAddChoice}>
                <FaPlus className="me-1"/>
                Add Answer
            </button>
            <div className="mt-3">
                <button className="btn btn-success" onClick={() => onSave(question)}>
                    Save
                </button>
                <button className="btn btn-secondary ms-2" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
}
