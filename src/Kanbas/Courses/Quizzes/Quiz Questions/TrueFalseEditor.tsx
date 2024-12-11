import React from "react";

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

    // Automatically add true and false choices
    const handleAddChoices = () => {
        setQuestion((prev: any) => ({
            ...prev,
            choices: ["true", "false"], // Add the true and false options
            correctAnswers: [] // Clear any existing correct answer selection
        }));
    };

    const handleRemoveChoice = (index: number) => {
        setQuestion((prev: any) => {
            const updatedChoices = prev.choices.filter((_: any, i: number) => i !== index);
            let updatedCorrectAnswers = prev.correctAnswers;

            // If the correct answer is being removed, remove it from correctAnswers as well
            if (prev.correctAnswers === prev.choices[index]) {
                updatedCorrectAnswers = [];
            }

            return {
                ...prev,
                choices: updatedChoices,
                correctAnswers: updatedCorrectAnswers,
            };
        });
    };

    const handleCorrectChoiceChange = (choiceText: string) => {
        setQuestion((prev: any) => ({
            ...prev,
            correctAnswers: choiceText, // Store the correct choice text
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
                    <div key={index} className="d-flex align-items-center mb-2">
                        <label>{choice}</label>
                        <input
                            type="radio"
                            className="form-check-input ms-2"
                            checked={question.correctAnswers === choice} // Compare with the text of the correct choice
                            onChange={() => handleCorrectChoiceChange(choice)} // Pass the text of the choice
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
