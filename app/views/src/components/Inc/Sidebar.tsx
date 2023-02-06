import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Nav } from 'react-bootstrap';

function Sidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="flex-column w-25 p-2 bg-dark bg-opacity-50">
            <p className='lead'>Welcome to your Dashboard</p>
            <Nav className="flex-column">
                <Nav.Link href="shop">Shop</Nav.Link>
                <Nav.Link href="employees" eventKey="link-1">Employees</Nav.Link>
                <Nav.Link href="calendar" eventKey="link-2">Calendar</Nav.Link>
            </Nav>
        </div>
    );
}

export default Sidebar;