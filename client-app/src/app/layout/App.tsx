import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';
import { Event } from '../models/event';
import NavBar from './NavBar';
import EventDashboard from '../../features/events/dashboard/EventDashboard';
import { v4 as uuid } from 'uuid';

function App() {
    const [events, setEvents] = useState<Event[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<Event | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios.get<Event[]>('http://localhost:5000/api/events').then(response => {
            setEvents(response.data);
        });
    }, []);

    const handleSelectEvent = (id: string) => {
        setSelectedEvent(events.find(x => x.id === id));
    };

    const handleCancelSelectEvent = () => {
        setSelectedEvent(undefined);
    };

    const handleFormOpen = (id?: string) => {
        id ? handleSelectEvent(id) : handleCancelSelectEvent();
        setEditMode(true);
    };

    const handleFormClose = () => {
        setEditMode(false);
    };

    const handleCreateOrEditEvent = (event: Event) => {
        event.id
            ? setEvents([...events.filter(x => x.id !== event.id), event])
            : setEvents([...events, { ...event, id: uuid() }]);
        setEditMode(false);
        setSelectedEvent(event);
    };

    const handleDeleteEvent = (id: string) => {
        setEvents([...events.filter(x => x.id !== id)]);
    }

    return (
        <>
            <NavBar openForm={handleFormOpen} />
            <Container>
                <EventDashboard
                    events={events}
                    selectedEvent={selectedEvent}
                    selectEvent={handleSelectEvent}
                    cancelSelectEvent={handleCancelSelectEvent}
                    editMode={editMode}
                    openForm={handleFormOpen}
                    closeForm={handleFormClose}
                    createOrEdit={handleCreateOrEditEvent}
                    deleteEvent={handleDeleteEvent}
                />
            </Container>
        </>
    );
}

export default App;
