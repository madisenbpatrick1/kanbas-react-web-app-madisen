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
    // Handle adding a new choice
    const handleAddChoice = () => {
        setQuestion((prev: any) => ({
            ...prev,
            choices: [...prev.choices, ""], // Each new choice is an empty string
        }));
    };

    // Handle removing a choice by index
    const handleRemoveChoice = (index: number) => {
        setQuestion((prev: any) => ({
            ...prev,
            choices: prev.choices.filter((_: any, i: number) => i !== index), // Remove choice by index
        }));
    };

    // Handle updating the choice text
    const handleChoiceTextChange = (index: number, newText: string) => {
        setQuestion((prev: any) => ({
            ...prev,
            choices: prev.choices.map((choice: string, i: number) =>
                i === index ? newText : choice // Update the string value directly
            ),
        }));
    };

    // Handle changing the correct answer
    const handleCorrectChoiceChange = (choiceText: string) => {
        setQuestion((prev: any) => ({
            ...prev,
            correctAnswers: choiceText, // Set the correct answer text directly
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
            {question?.choices?.map((choice: string, index: number) => (
                <div key={index} className="d-flex align-items-center mb-2">
                    <label>Possible Answer</label>
                    <textarea
                        className="form-control"
                        value={choice} // Use the choice text directly
                        onChange={(e) => handleChoiceTextChange(index, e.target.value)} // Update the choice text
                        placeholder="Choice text"
                    />
                    <input
                        type="radio"
                        className="form-check-input ms-2"
                        checked={question.correctAnswers === choice} // Compare with choice text directly
                        onChange={() => handleCorrectChoiceChange(choice)} // Set correct answer to the choice text
                    />
                    <button
                        className="btn btn-danger ms-2"
                        onClick={() => handleRemoveChoice(index)} // Remove choice by index
                    >
                        Remove
                    </button>
                </div>
            ))}
            <button className="btn btn-secondary mt-1 float-end" onClick={handleAddChoice}>
                <FaPlus className="me-1" />
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
