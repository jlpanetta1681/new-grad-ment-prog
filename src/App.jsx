import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import About from './About';
import BeginnerLessons from './BeginnerLessons';
import MentorshipPlans from './MentorshipPlans';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Tech Mentoring Program</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/beginner-lessons">Beginner Lessons</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mentorship-plans">Mentorship Plans</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <h1 className="my-4">Welcome to the Tech Mentoring Program</h1>
          <p className="mb-4">The program will be a 1 on 1 program, a one of a kind experience to have 100% of the mentors attention and feedback that will really matter, no other program is offering anything like this, contact me for more information, since this is a real 1 on 1 assistance program you must act fast as slots will fill immediately. Dont get left behind, get you dream job in tech no matter your circumstances.</p>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/beginner-lessons">
          <BeginnerLessons />
        </Route>
        <Route path="/mentorship-plans">
          <MentorshipPlans />
        </Route>
        <Route path="/contact">
          <ContactForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
