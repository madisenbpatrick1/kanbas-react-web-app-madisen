export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of your web...
            </textarea>
            <br />
            <table>
                <tr> {/* Points */}
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>{/* Assignment Group */}
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option selected value="EXAMS">
                                EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>

                    </td>
                </tr>
                <tr>{/* Display Grade as */}
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                            <option value="Score">Score</option>
                        </select>

                    </td>
                </tr>
                <tr>{/* Submission Type */}
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Percentage">Online</option>
                            <option value="Score">Email</option>
                        </select>
                        <br />
                        <label>Online Entry Options</label><br />
                        <input type="checkbox" name="check-type" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />
                        <input type="checkbox" name="check-type" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL </label><br />
                        <input type="checkbox" name="check-type" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                        <input type="checkbox" name="check-type" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                        <input type="checkbox" name="check-type" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label><br />
                        <br />
                    </td>
                </tr>
                <tr> {/* Assign */}
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <label>Assign to</label><br />
                        <input id="wd-assign-to" value={"Everyone"} /><br />
                        <label>Due</label><br />
                        <input type="date" id="wd-due-date" value="2024-05-13" /><br />
                        <td>
                            <label>Available from</label>
                            <br />
                            <input type="date" id="wd-available-from" value="2024-05-06" /><br />
                        </td>
                        <td> 
                            <label>Until</label><br />
                            <input type="date" id="wd-available-until" value="2024-05-20" /><br />
                        </td>
                    </td>
                </tr>
                {/* horizontal line */}
            </table>
            <hr />
            <button>Cancel</button>
            <button>Save</button>
        </div>
    );
}