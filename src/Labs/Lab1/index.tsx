export default function Lab1() {
    return (
        <div id = "wd-lab1">
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3>
            <div id="wd-p-tag">
                <h4>Heading Tags</h4>
Text documents are often broken up into several sections and
subsections. Each section is usually prefaced with a short
title or heading that attempts to summarize the topic of the
section it precedes. For instance this paragraph is preceded by
the heading Heading Tags. The font of the section headings are
usually larger and bolder than their subsection headings. This
document uses headings to introduce topics such as HTML
Documents, HTML Tags, Heading Tags, etc. HTML heading tags can
be used to format plain text so that it renders in a browser as
large headings. There are 6 heading tags for different sizes:
h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and
h6 is the smallest heading.

            </div>
            <div id="wd-p-tag">
                <h4>Paragraph Tag</h4>
                <p id="wd-p-1"> ... </p>
                <p id="wd-p-2"> 
This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one. 
                </p>
                <p id="wd-p-3">
This is the second paragraph. Even though there is a deliberate white
gap between the paragraph above and this paragraph, by default
browsers render them as one contiguous piece of text as shown here on
the right.
                </p>
                <p id="wd-p-4">
This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
                </p>

            </div>
            <div id="wd-lists">
                <h4>List Tags</h4>
                <h5>Ordered List Tag</h5>
                How to make pancakes:
                <ol id="wd-pancakes">
                    <li>Mix dry ingredients.</li>
                    <li>Add wet ingredients.</li>
                    <li>Stir to combine.</li>
                    <li>Heat a skillet or griddle.</li>
                    <li>Pour batter onto the skillet.</li>
                    <li>Cook until bubbly on top.</li>
                    <li>Flip and cook the other side.</li>
                    <li>Serve and enjoy!</li>
                </ol>
                My favorite recipe:
                <ol id="wd-your-favorite-recipe">
                    <li>Toast 2 Eggo Waffles</li>
                    <li>Spread a generous amount of Peanut Butter on top of each toasted Eggo</li>
                    <li>Drizzle Honey on both Eggos</li>
                    <li>Season with cinnamon</li>
                </ol>
                <h5>Unordered List Tag</h5>
                My favorite books (in no particular order)
                <ul id="wd-my-books">
                    <li>Dune</li>
                    <li>Lord of the Rings</li>
                    <li>Ender's Game</li>
                    <li>Red Mars</li>
                    <li>The Forever War</li>
                </ul>
                Your favorite books (in no particular order)
                <ul id="wd-your-books">
                    <li>Sula</li>
                    <li>A Raisin in the Sun</li>
                    <li>Finding Me: A Memoir: Davis, Viola</li>
                    <li>Vanishing Half</li>
                </ul>
            </div>
            <div id="wd-tables">
                <h4>Table Tag</h4>
                <table border={1} width="100%">
                    <thead>
                        <tr>
                            <th>Quiz</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td align="left">Q1</td>
                            <td align="left">HTML</td>
                            <td align="left">2/3/21</td>
                            <td align="left">85</td>
                        </tr>
                        <tr>
                            <td align="left">Q2</td>
                            <td align="left">HTML</td>
                            <td align="left">2/10/21</td>
                            <td align="left">90</td>
                        </tr>
                        <tr>
                            <td align="left">Q3</td>
                            <td align="left">CSS</td>
                            <td align="left">2/17/21</td>
                            <td align="left">95</td>
                        </tr>
                        <tr>
                            <td align="left">Q4</td>
                            <td align="left">CSS</td>
                            <td align="left">2/17/21</td>
                            <td align="left">95</td>
                        </tr>
                        <tr>
                            <td align="left">Q5</td>
                            <td align="left">JS</td>
                            <td align="left">2/17/21</td>
                            <td align="left">95</td>
                        </tr>
                        <tr>
                            <td align="left">Q6</td>
                            <td align="left">Redux</td>
                            <td align="left">2/17/21</td>
                            <td align="left">95</td>
                        </tr>
                        <tr>
                            <td align="left">Q7</td>
                            <td align="left">Redux</td>
                            <td align="left">2/17/21</td>
                            <td align="left">95</td>
                        </tr>
                        <tr>
                            <td align="left">Q8</td>
                            <td align="left">Node</td>
                            <td align="left">2/17/21</td>
                            <td align="left">95</td>
                        </tr>
                        <tr>
                            <td align="left">Q9</td>
                            <td align="left">Node</td>
                            <td align="left">2/17/21</td>
                            <td align="left">95</td>
                        </tr>
                        <tr>
                            <td align="left">Q10</td>
                            <td align="left">Modex</td>
                            <td align="left">2/17/21</td>
                            <td align="left">95</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Average</td>
                            <td align="left">90</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div id="wd-images">
                <h4>Image tag</h4>
                Loading an image from the internet:
                <br />
                <img id="wd-starship"
                    width="400px"
                    src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" alt="Starship"
                />
                <br />
                Loading a local image:
                <br />
                <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" alt="teslabot.jpg"/>
            </div>
            <div id="wd-forms">
                <h4>Form Elements</h4>
                <form id="wd-text-fields">
                    <h5>Text Fields</h5>
                    <label htmlFor="wd-text-fields-username">Username:</label>
                    <input id="wd-text-fields-username" placeholder="mpatrick" /> <br />
                    <label htmlFor="wd-text-fields-password">Password:</label>
                    <input type="password" id="wd-text-fields-password" value="123@#$asd" />
                    <br />
                    <label htmlFor="wd-text-fields-first-name">First name:</label>
                    <input type="text" id="wd-text-fields-first-name" value="Madisen" title="John" /> <br />
                    <label htmlFor="wd-text-fields-last-name">Last name:</label>
                    <input type="text" id="wd-text-fields-last-name" placeholder="Doe"
                    value="Patrick" title="The last name" />
                    {/* copy rest of form elements here */}
                </form>

                <h5>Text boxes</h5>
                <label>Biography:</label><br/>
                <textarea id="wd-textarea" cols={30} rows={10}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </textarea>
                <h5 id="wd-buttons">Buttons</h5>
                <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
                    Hello World!
                </button>
                <h5>File upload</h5>
                <input id="wd-upload" type="file"/>
                <h5 id="wd-checkboxes">Checkboxes</h5>
                <label>Favorite movie genre:</label><br/>
                <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
                <label htmlFor="wd-chkbox-comedy">Comedy</label><br/>
                <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
                <label htmlFor="wd-chkbox-drama">Drama</label><br/>
                <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
                <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>
                <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
                <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

                <h4 id="wd-dropdowns">Dropdowns</h4>
                <h5>Select one</h5>
                <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
                <select id="wd-select-one-genre">
                    <option value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option selected value="SCIFI">
                    Science Fiction</option>
                    <option value="FANTASY">Fantasy</option>
                </select>
                <h5>Select many</h5>
                <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
                <select id="wd-select-many-genre" multiple>
                    <option selected value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option selected value="SCIFI">
                    Science Fiction</option>
                    <option value="FANTASY">Fantasy</option>
                </select>
                <form> 
                <h4>Other HTML field types</h4>
                <label htmlFor="wd-text-fields-email"> Email: </label>
                <input type="email" placeholder="jdoe@somewhere.com" id="wd-text-fields-email"/><br/>
                <label htmlFor="wd-text-fields-salary-start"> Starting salary:
                </label>
                <input type="number"
                id="wd-text-fields-salary-start"
                placeholder="1000"
                value="100000"/><br/>
                <label htmlFor="wd-text-fields-rating"> Rating: </label>
                <input type="range" id="wd-text-fields-rating"
                placeholder="Doe"
                max="5"
                value="4"/><br/>
                <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
                <input type="date"
                id="wd-text-fields-dob"
                value="2000-01-21"/><br/>
                </form>
            </div>
            <div>
                <h4>Anchor tag</h4>
                Please
                <a id="wd-lipsum" href="https://www.lipsum.com">click here</a>
                to get dummy text<br/>
                Please 
                <a id="wd-github" href="https://github.com/madisenbpatrick1/kanbas-react-web-app-madisen">click here</a> to access code repository on GitHub<br/>
            </div>
            
        </div>
    );
}
// React.js function components can implement algorithms that compute
// an HTML code snippet and return the result of the computation.
// Other functions can aggregate various snippets from different
// components into a larger, single HTML content that browsers
// can then render on the screen. Here the component is just returning
// a hard coded, static HTML code snippet. Later assignments will
// introduce far more interesting algorithms to compute complex HTML