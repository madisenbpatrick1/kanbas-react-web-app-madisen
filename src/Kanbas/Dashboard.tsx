import { Link } from "react-router-dom";
import "./styles.css";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "270px", height:"280px"}}> {/*Course 1 */}
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.jpg" height="137px" width="100%" alt="React.js Logo" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                                    <p className="card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px", height:"280px" }} > {/*Course 2 */}
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/2000/Home">
                                <img src="/images/cs2000.jpg" height="137px" width="100%" alt="cs2000 Logo" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">CS2000 Typescript</h5>
                                    <p className="card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px", height:"280px" }} > {/*Course 3 */}
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/3000/Home">
                                <img src="/images/cs3000.jpg" height="137px" width="100%" alt="cs3000 Logo" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">CS3000 Typescript</h5>
                                    <p className="card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px" , height:"280px"}} > {/*Course 4 */}
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/4000/Home">
                                <img src="/images/cs4000.jpeg" height="137px" width="100%" alt="cs4000 Logo" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">CS4000 Typescript</h5>
                                    <p className="card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px", height:"280px" }} > {/*Course 5 */}
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5000/Home">
                                <img src="/images/cs5000.jpg" height="137px" width="100%" alt="cs5000 Logo" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">CS5000 Typescript</h5>
                                    <p className="card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px", height:"280px" }} > {/*Course 6 */}
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/6000/Home">
                                <img src="/images/cs6000.jpg" height="137px" width="100%" alt="cs6000 Logo" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">CS6000 Typescript</h5>
                                    <p className="card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px", height:"280px" }} > {/*Course 7 */}
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/7000/Home">
                                <img src="/images/cs7000.jpg" height="137px" width="100%" alt="cs7000 Logo" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">CS7000 Typescript</h5>
                                    <p className="card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px", height:"280px"}} > {/*Course 8 */}
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/8000/Home">
                                <img src="/images/cs8000.jpg" height="137px" width="100%" alt="cs8000 Logo" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">CS8000 Typescript</h5>
                                    <p className="card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}