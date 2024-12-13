// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Clinic from './components/Clinic';
import Doctors from './components/Doctors';
import Nurse from './components/Nurse';
import Patients from './components/Patients';
import Program_Coach from './components/Program_Coach';
import Programs from './components/Programs';
import Appointment_slot from './components/Appointment_slot';
import Appointment from './components/Appointment';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ marginLeft: '290px', padding: '20px' }}>
                    <Routes>
                       <Route exact path="/Dashboard" element={<Dashboard />} />
                       <Route exact path="/Clinic" element={<Clinic />} />
                       <Route exact path="/Doctors" element={<Doctors />} />
                       <Route exact path="/Nurse" element={<Nurse />} />
                       <Route exact path="/Patients" element={<Patients />} />
                       <Route exact path="/Program_Coach" element={<Program_Coach />} />
                       <Route exact path="/Programs" element={<Programs />} />
                       <Route exact path="/Appointment_slot" element={<Appointment_slot />} />
                       <Route exact path="/Appointment" element={<Appointment />} />

                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
