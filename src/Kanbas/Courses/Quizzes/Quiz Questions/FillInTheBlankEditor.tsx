import React from "react";
import { FaPlus } from "react-icons/fa";

export default function FillInTheBlankEditor({
    question,
    setQuestion,
    onSave,
    onCancel,
}: any) {
    const handleAddCorrectAnswer = () => {
        setQuestion({
            ...question,
            correctAnswers: [
                ...question.correctAnswers,
                { text: "", isCorrect: false },
            ],
        });
    };

    const handleRemoveCorrectAnswer = (index: number) => {
        const updatedAnswers = [...question.correctAnswers];
        updatedAnswers.splice(index, 1);
        setQuestion({ ...question, correctAnswers: updatedAnswers });
    };

    const handleAnswerChange = (index: number, field: string, value: any) => {
        const updatedAnswers = [...question.correctAnswers];
        updatedAnswers[index] = {
            ...updatedAnswers[index],
            [field]: value,
        };
        setQuestion({ ...question, correctAnswers: updatedAnswers });
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
                {question.correctAnswers.map((answer: any, index: number) => (
                    <div key={index} className="d-flex align-items-center mb-2">
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Answer Text"
                            value={answer.text}
                            onChange={(e) =>
                                handleAnswerChange(index, "text", e.target.value)
                            }
                        />
                        <div className="form-check me-2">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                checked={answer.isCorrect}
                                onChange={(e) =>
                                    handleAnswerChange(index, "isCorrect", e.target.checked)
                                }
                            />
                            <label className="form-check-label">Correct</label>
                        </div>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleRemoveCorrectAnswer(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}

                <button className="btn btn-secondary mt-1 float-end" onClick={handleAddCorrectAnswer}>
                    <FaPlus className="me-1" />
                    Add Answer
                </button>
            </div>
            <button className="btn btn-success me-2" onClick={() => onSave(question)}>
                Save Question
            </button>
            <button className="btn btn-secondary" onClick={onCancel}>
                Cancel
            </button>
        </div>
    );
}
