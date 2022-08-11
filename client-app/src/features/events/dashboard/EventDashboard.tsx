import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';
import EventDetails from '../details/EventDetails';
import EventForm from '../form/EventForm';
import EventList from './EventList';

const EventDashboard = () => {
    const { eventStore } = useStore();
    const { selectedEvent, editMode } = eventStore;

    return (
        <Grid container columnSpacing={5}>
            <Grid item xs={12} md={7}>
                <h1>Events</h1>
                <EventList />
            </Grid>
            <Grid item xs={12} md={5}>
                {selectedEvent && !editMode && <EventDetails />}
                {editMode && <EventForm />}
            </Grid>
        </Grid>
    );
};

export default observer(EventDashboard);
