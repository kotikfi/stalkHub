import { Grid } from '@mui/material';
import { Event } from '../../../app/models/event';
import EventDetails from '../details/EventDetails';
import EventForm from '../form/EventForm';
import EventList from './EventList';

interface Props {
    events: Event[];
    selectedEvent: Event | undefined;
    selectEvent: (id: string) => void;
    cancelSelectEvent: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (event: Event) => void;
    deleteEvent: (id: string) => void;
    submitting: boolean;
}

const EventDashboard = ({
    events,
    selectedEvent,
    selectEvent,
    cancelSelectEvent,
    editMode,
    openForm,
    closeForm,
    createOrEdit,
    deleteEvent,
    submitting,
}: Props) => {
    return (
        <Grid container columnSpacing={5}>
            <Grid item xs={12} md={7}>
                <h1>Events</h1>
                <EventList
                    events={events}
                    selectEvent={selectEvent}
                    deleteEvent={deleteEvent}
                    submitting={submitting}
                />
            </Grid>
            <Grid item xs={12} md={5}>
                {selectedEvent && !editMode && (
                    <EventDetails event={selectedEvent} cancelSelectEvent={cancelSelectEvent} openForm={openForm} />
                )}
                {editMode && (
                    <EventForm
                        closeForm={closeForm}
                        event={selectedEvent}
                        createOrEdit={createOrEdit}
                        submitting={submitting}
                    />
                )}
            </Grid>
        </Grid>
    );
};

export default EventDashboard;
