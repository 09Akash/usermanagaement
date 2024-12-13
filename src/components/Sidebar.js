// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={styles.sidebarContainer}>
            <h3 style={styles.title}>Menu</h3>
            <ul style={styles.menuList}>
                <li style={styles.menuItem}><Link to="/Dashboard" style={styles.link}>Dashboard</Link></li>
                <li style={styles.menuItem}><Link to="/Clinic" style={styles.link}>Clinic</Link></li>
                <li style={styles.menuItem}><Link to="/Doctors" style={styles.link}>Doctors</Link></li>
                <li style={styles.menuItem}><Link to="/Nurse" style={styles.link}>Nurse</Link></li>
                <li style={styles.menuItem}><Link to="/Patient" style={styles.link}>Patient</Link></li>
                <li style={styles.menuItem}><Link to="/Program_Coach" style={styles.link}>Program Coach</Link></li>
                <li style={styles.menuItem}><Link to="/Programs" style={styles.link}>Programs</Link></li>
                <li style={styles.menuItem}><Link to="/Appointment_slot" style={styles.link}>Appointment slot</Link></li>
                <li style={styles.menuItem}><Link to="/Appointment" style={styles.link}>Appointment</Link></li>
            </ul>
        </div>
    );
};

const styles = {
    sidebarContainer: {
        width: '240px',
        // backgroundColor: '',
        backgroundColor:'purple',
        color: '#fff',
        padding: '20px',
        height: '100vh',
        boxShadow: '2px 0 5px rgba(176, 16, 194, 0.1)',
        position: 'fixed',
    },
    title: {
        fontSize: '24px',
        marginBottom: '20px',
        borderBottom: '2px solid #555',
        paddingBottom: '10px',
    },
    menuList: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    },
    menuItem: {
        marginBottom: '15px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
        padding: '10px 15px',
        display: 'block',
        borderRadius: '4px',
        transition: 'background-color 0.3s',
      
    },
    linkHover: {
        backgroundColor: '#555',
    },

};

export default Sidebar;
