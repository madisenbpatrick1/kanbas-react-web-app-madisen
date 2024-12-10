

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
    return (
        <div>
            <strong>Question:</strong>
            <textarea
                value={question?.question || ""}
                onChange={(e) => setQuestion({ ...question, question: e.target.value })}
                placeholder="Question Text"
                className="form-control mb-2"
            />
            <div>
                <strong>Answers:</strong><br/>
                <label>
                    <input
                        type="radio"
                        checked={question?.correctAnswer === true}
                        onChange={() => setQuestion({ ...question, correctAnswer: true })}
                        className="me-1"
                    />
                    True
                </label>
                <label className="ms-3">
                    <input
                        type="radio"
                        checked={question?.correctAnswer === false}
                        onChange={() => setQuestion({ ...question, correctAnswer: false })}
                        className="me-1"
                    />
                    False
                </label>
            </div>
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
