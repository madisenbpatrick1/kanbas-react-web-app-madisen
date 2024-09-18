import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course"> {/*Course 1 */}
                    <img src="/images/reactjs.jpg" width={200} alt="React.js Logo"/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/1234/Home">
                            CS1234 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course"> {/*Course 2 */}
                <img src="/images/cs2000.jpg" width={200} alt="React.js Logo" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/2000/Home">
                            CS2000 Typescript
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/2000/Home"> Go </Link> 
                    </div>
                </div>
                <div className="wd-dashboard-course"> {/*Course 3 -> CS 3000 */}
                    <img src="/images/cs3000.jpg" width={200} alt="React.js Logo" />
                        <div>
                            <Link className="wd-dashboard-course-link"
                                to="/Kanbas/Courses/3000/Home">
                                CS3000 Typescript
                            </Link>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <Link to="/Kanbas/Courses/3000/Home"> Go </Link> 
                        </div>
                </div>
                <div className="wd-dashboard-course">{/*Course 4 */}
                    <img src="/images/cs4000.jpeg" width={200} alt="React.js Logo" />
                        <div>
                            <Link className="wd-dashboard-course-link"
                                to="/Kanbas/Courses/4000/Home">
                                CS4000 Typescript
                            </Link>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <Link to="/Kanbas/Courses/4000/Home"> Go </Link> 
                        </div> 
                </div>
                <div className="wd-dashboard-course"> {/*Course 5*/}
                    <img src="/images/cs5000.jpg" width={200} alt="React.js Logo" />
                        <div>
                            <Link className="wd-dashboard-course-link"
                                to="/Kanbas/Courses/5000/Home">
                                CS5000 Typescript
                            </Link>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <Link to="/Kanbas/Courses/5000/Home"> Go </Link> 
                        </div>
                </div>
                <div className="wd-dashboard-course"> {/*Course 6 */}
                    <img src="/images/cs6000.jpg" width={200} alt="React.js Logo" />
                        <div>
                            <Link className="wd-dashboard-course-link"
                                to="/Kanbas/Courses/6000/Home">
                                CS6000 Typescript
                            </Link>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <Link to="/Kanbas/Courses/6000/Home"> Go </Link> 
                        </div>
                </div>
                <div className="wd-dashboard-course"> {/*Course 7 */}
                    <img src="/images/cs7000.jpg" width={200} alt="React.js Logo" />
                        <div>
                            <Link className="wd-dashboard-course-link"
                                to="/Kanbas/Courses/7000/Home">
                                CS7000 Typescript
                            </Link>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <Link to="/Kanbas/Courses/7000/Home"> Go </Link> 
                        </div> 
                    </div>
                <div className="wd-dashboard-course"> {/*Course 8 */}
                    <img src="/images/cs8000.jpg" width={200} alt="React.js Logo" />
                        <div>
                            <Link className="wd-dashboard-course-link"
                                to="/Kanbas/Courses/8000/Home">
                                CS8000 Typescript
                            </Link>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <Link to="/Kanbas/Courses/8000/Home"> Go </Link> 
                        </div> 
                </div>
            </div>
        </div>
    );
}