import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Courses } from './pages/Courses';
import { LearningPaths } from './pages/LearningPaths';
import { Instructors } from './pages/Instructors';
import { Dashboard } from './pages/Dashboard';
import { CourseDetails } from './components/course/CourseDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/courses"
            element={
              <>
                <Navbar />
                <Courses />
              </>
            }
          />
          <Route
            path="/paths"
            element={
              <>
                <Navbar />
                <LearningPaths />
              </>
            }
          />
          <Route
            path="/instructors"
            element={
              <>
                <Navbar />
                <Instructors />
              </>
            }
          />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;