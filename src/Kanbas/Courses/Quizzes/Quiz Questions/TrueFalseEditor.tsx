

export default function TrueFalseEditor({
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

    const handleAddChoices = () => {
        setQuestion((prev: any) => ({
            ...prev,
            choices: [
                { _id: Date.now().toString(), text: "True", isCorrect: false },
                { _id: Date.now().toString(), text: "False", isCorrect: false },
            ],
        }));
    };

    const handleRemoveChoice = (index: number) => {
        setQuestion((prev: any) => ({
            ...prev,
            choices: prev.choices.filter((_: any, i: number) => i !== index),
        }));
    };

    const handleCorrectChoiceChange = (index: number) => {
        setQuestion((prev: any) => ({
            ...prev,
            choices: prev.choices.map((choice: any, i: number) => ({
                ...choice,
                isCorrect: i === index, // Mark this choice as correct
            })),
            correctAnswers: [index], // Store the index of the correct answer
        }));
    };

    return (
        <div>
            <strong>Question:</strong>
            <textarea
                value={question?.questionText || ""}
                onChange={(e) => setQuestion({ ...question, questionText: e.target.value })}
                placeholder="Question Text"
                className="form-control mb-2"
            />
            <div>
                <strong>Answers:</strong><br />
                {question?.choices?.map((choice: any, index: number) => (
                <div key={choice._id} className="d-flex align-items-center mb-2">
                    <label>{choice.text}</label>
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
            </div>
            <button className="btn btn-secondary mt-1 float-end" onClick={handleAddChoices}>
                {/* <FaPlus className="me-1"/> */}
                Add True/False Choices
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
