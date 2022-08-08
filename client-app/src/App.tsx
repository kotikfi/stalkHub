import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { List, ListItemText } from '@mui/material';

function App() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/events').then(response => {
            console.log(response);
            setEvents(response.data);
        });
    }, []);

    return (
        <div>
            <h1>stalkHub</h1>
            <List>
                {events.map((event: any) => (
                    <ListItemText key={event.id}>{event.title}</ListItemText>
                ))}
            </List>
        </div>
    );
}

export default App;
