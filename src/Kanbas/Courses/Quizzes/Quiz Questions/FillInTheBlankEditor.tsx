import React from "react";
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
            choices: [
                ...prev.choices,
                { _id: Date.now().toString(), text: "", isCorrect: false },
            ],
        }));
    };

    const handleRemoveAnswer = (index: number) => {
        const updatedChoices = [...question.choices];
        updatedChoices.splice(index, 1);
        const updatedAnswers = question.correctAnswers.filter((_: any, i: number) => i!== index);
        setQuestion({ ...question, choiceAnswers:updatedAnswers, choices: updatedChoices });
    };

    const handleAnswerChange = (index: number, field: string, value: any) => {
        const updatedChoices = [...question.choices];
        updatedChoices[index] = {
            ...updatedChoices[index],
            [field]: value,
        };
        setQuestion({ ...question, choices: updatedChoices });
    };

    const handleCorrectAnswerChange = (index: number) => {
        setQuestion((prev: any) => {

            const updatedCorrectAnswers = [...prev.correctAnswers];
            if (!updatedCorrectAnswers.includes(index)) {
                updatedCorrectAnswers.push(index);
            } else if(updatedCorrectAnswers.includes(index)) {
                updatedCorrectAnswers.splice(updatedCorrectAnswers.indexOf(index), 1);
            }
          
            const updatedChoices = prev.choices.map((choice: any, i: number) => ({
                ...choice,
                isCorrect: i === index, 
            }));
            return {
                ...prev,
                choices: updatedChoices,
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
                {question.choices.map((choice: any, index: number) => (
                    <div key={choice._id} className="d-flex align-items-center mb-2">
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Answer Text"
                            value={choice.text}
                            onChange={(e) =>
                                handleAnswerChange(index, "text", e.target.value)
                            }
                        />
                        <div className="form-check me-2">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                checked={question.correctAnswers.includes(index)}
                                onChange={() => handleCorrectAnswerChange(index)}
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
