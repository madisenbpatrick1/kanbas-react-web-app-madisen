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

    const handleRemoveChoice = (index: string) => {
        setQuestion((prev: any) => ({
            ...prev,
            choices: prev.choices.filter((_: string, i: string) => i !== index),
        }));
    };

    const handleChoiceTextChange = (index: string, newText: string) => {
        setQuestion((prev: any) => ({
            ...prev,
            choices: prev.choices.map((choice: string, i: string) =>
                i === index ? newText : choice
            ),
        }));
    };

    const handleCorrectChoiceChange = (index: string) => {
        setQuestion((prev: any) => ({
            ...prev,
            correctAnswers: [index], // Update correctAnswers to match the selected index
        }));
    };

    return (
        <div>
            <p>Enter your question and multiple answers, then select the correct answer</p>
            <strong>Question:</strong>
            <textarea
                className="form-control mb-2"
                value={question?.questionText || ""}
                onChange={(e) => setQuestion({ ...question, questionText: e.target.value })}
                placeholder="Question Title"
            />
            <strong>Answers:</strong>
            {question?.choices?.map((choice: any, index: string) => (
                <div key={index} className="d-flex align-items-center mb-2">
                    <label>Possible Answer</label>
                    <textarea
                        className="form-control"
                        value={choice}
                        onChange={(e) => handleChoiceTextChange(index, e.target.value)}
                        placeholder="Choice text"
                    />
                    <input
                        type="radio"
                        className="form-check-input ms-2"
                        checked={question.correctAnswers?.[0] === index}
                        onChange={() => handleCorrectChoiceChange(index)}
                    />
                    <button
                        className="btn btn-danger ms-2"
                        onClick={() => handleRemoveChoice(index)}
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
