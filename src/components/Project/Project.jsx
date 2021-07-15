import React from "react";

const Project = () => {
    return (
        <main className="container">
            <div className="row">
                <div className="col-12 mt-2">
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-12 .bg-warning">
                                <h1 className="display-4">Projects</h1>
                                <hr className="my-4" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="card .bg-warning">
                                    <div className="card-body">
                                        <h5 className="card-title">Habit Tracker</h5>

                                        <p className="card-text">
                                            A simple app that helps you keep track of good and bad habits.
                                        </p>
                                        <a
                                            href="https://github.com/ashak90/project-02-habit-tracker"
                                            className="card-link"
                                        >
                                            GitHub
                                        </a>
                                        <a
                                            href="https://habittracking-app.herokuapp.com/"
                                            className="card-link"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Click Here
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Weather Dashboard</h5>

                                        <p className="card-text">
                                            5-Day weather forecast
                                        </p>
                                        <a
                                            href="https://github.com/AnthonyDavis89/Weather-Dashboard"
                                            className="card-link"
                                        >
                                            GitHub
                                        </a>
                                        <a
                                            href="https://anthonydavis89.github.io/Weather-Dashboard/"
                                            className="card-link"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Click Here
                                        </a>
                                    </div>
                                </div>
                                <br />
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">My Mental </h5>

                                        <p className="card-text">
                                            My Mental is a web app designed to help users improve their mental health by
                                            conducting calming music along with yoga to put your mind at ease. Whether your day was as stressful as
                                            6 PM rush hour or as easy as lying on the beach during a sunny Sunday morning. My Mental can assist in
                                            tracking your mental state day to day, while improving your mood and spirit.
                                        </p>
                                        <a
                                            href="https://github.com/mikebird2414/Well-Being"
                                            className="card-link"
                                        >
                                            GitHub
                                        </a>
                                        <a
                                            href="https://mikebird2414.github.io/Well-Being/"
                                            className="card-link"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Click Here
                                        </a>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Workout Trackerr</h5>

                                        <p className="card-text">
                                            A consumer will reach their fitness goals more quickly when they track their workout progress.
                                        </p>
                                        <a
                                            href="https://github.com/AnthonyDavis89/Workout_Tracker"
                                            className="card-link"
                                        >
                                            GitHub
                                        </a>
                                        <a
                                            href="https://workouttrackerad.herokuapp.com/?id=60dbe65f8b11ba00156edebf"
                                            className="card-link"
                                        >
                                            Click Here
                                        </a>
                                    </div>
                                </div>
                            </div>{" "}
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Note Taker</h5>

                                        <p className="card-text">
                                            Keep track of your thoughts
                                        </p>
                                        <a
                                            href="https://github.com/AnthonyDavis89/note_taker"
                                            className="card-link"
                                        >
                                            GitHub
                                        </a>
                                        <a
                                            href="https://note-taker-dev-ad.herokuapp.com/"
                                            className="card-link"
                                        >
                                            Click Here
                                        </a>
                                    </div>
                                </div>
                            </div>{" "}
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Day Planner</h5>

                                        <p className="card-text">
                                            Plan your day!
                                        </p>
                                        <a
                                            href="https://github.com/AnthonyDavis89/Work-Day-Scheduler"
                                            className="card-link"
                                        >
                                            GitHub
                                        </a>
                                        <a
                                            href="https://anthonydavis89.github.io/Work-Day-Scheduler/"
                                            className="card-link"
                                        >
                                            Click Here
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Project;