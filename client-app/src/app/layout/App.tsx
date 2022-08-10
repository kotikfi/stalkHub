import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Event } from '../models/event';
import NavBar from './NavBar';
import EventDashboard from '../../features/events/dashboard/EventDashboard';
import { v4 as uuid } from 'uuid';
import api from '../api/api';
import LoadingComponent from './LoadingComponent';

function App() {
    const [events, setEvents] = useState<Event[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<Event | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        api.Events.list().then(response => {
            let events: Event[] = [];
            response.forEach(event => {
                event.date = event.date.split('T')[0];
                events.push(event);
            });
            setEvents(events);
            setLoading(false);
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
        setSubmitting(true);
        if (event.id) {
            api.Events.update(event).then(() => {
                setEvents([...events.filter(x => x.id !== event.id), event]);
                setSelectedEvent(event);
                setEditMode(false);
                setSubmitting(false);
            });
        } else {
            event.id = uuid();
            api.Events.create(event).then(() => {
                setEvents([...events, event]);
                setSelectedEvent(event);
                setEditMode(false);
                setSubmitting(false);
            });
        }
    };

    const handleDeleteEvent = (id: string) => {
        setSubmitting(true);
        api.Events.delete(id).then(() => {
            setEvents([...events.filter(x => x.id !== id)]);
            setSubmitting(false);
        });
    };

    if (loading) return <LoadingComponent />;

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
                    submitting={submitting}
                />
            </Container>
        </>
    );
}

export default App;
