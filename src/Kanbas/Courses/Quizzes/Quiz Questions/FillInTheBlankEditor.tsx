import { FaPlus } from "react-icons/fa";

export default function FillInTheBlankEditor({
    question,
    setQuestion,
    onSave,
    onCancel,
}: any) {
    const handleAddAnswer = () => {
        setQuestion((prev: any) => ({
            ...prev,
            choices: [...prev.choices, ""], // Start with empty string for new choices
        }));
    };

    const handleRemoveAnswer = (index: number) => {
        const updatedChoices = [...question.choices];
        updatedChoices.splice(index, 1); // Remove the choice
        const updatedCorrectAnswers = question.correctAnswers.filter(
            (answer: string) => answer !== question.choices[index] // Remove the corresponding correct answer
        );
        setQuestion({ ...question, choices: updatedChoices, correctAnswers: updatedCorrectAnswers });
    };

    const handleAnswerChange = (index: number, newText: string) => {
        const updatedChoices = [...question.choices];
        updatedChoices[index] = newText; // Update choice as string
        setQuestion({ ...question, choices: updatedChoices });
    };

    const handleCorrectAnswerChange = (choiceText: string) => {
        setQuestion((prev: any) => {
            const updatedCorrectAnswers = [...prev.correctAnswers];
            if (updatedCorrectAnswers.includes(choiceText)) {
                updatedCorrectAnswers.splice(updatedCorrectAnswers.indexOf(choiceText), 1); // Remove if already correct
            } else {
                updatedCorrectAnswers.push(choiceText); // Add if not already correct
            }
            return {
                ...prev,
                correctAnswers: updatedCorrectAnswers, // Update correctAnswers
            };
        });
    };

    return (
        <div>
            <strong>Question:</strong>
            <textarea
                className="form-control mb-3"
                placeholder="Question Text"
                value={question.questionText}
                onChange={(e) =>
                    setQuestion({ ...question, questionText: e.target.value })
                }
            />
            <div className="mb-3">
                <strong>Answers:</strong> <br />
                {question.choices.map((choice: string, index: number) => (
                    <div key={index} className="d-flex align-items-center mb-2">
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Answer Text"
                            value={choice}
                            onChange={(e) => handleAnswerChange(index, e.target.value)}
                        />
                        <div className="form-check me-2">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                checked={question.correctAnswers.includes(choice)} // Compare with choice text
                                onChange={() => handleCorrectAnswerChange(choice)} // Toggle correct answer
                            />
                            <label className="form-check-label">Correct</label>
                        </div>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleRemoveAnswer(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button className="btn btn-secondary mt-1 float-end" onClick={handleAddAnswer}>
                    <FaPlus className="me-1" />
                    Add Answer
                </button>
            </div>
            <div className="mt-3">
                <button className="btn btn-success" onClick={() => onSave(question)}>
                    Save Question
                </button>
                <button className="btn btn-secondary ms-2" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
}
