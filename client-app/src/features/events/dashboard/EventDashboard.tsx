import { Container, Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import EventList from './EventList';

const EventDashboard = () => {
    const { eventStore } = useStore();
    const { loadEvents, eventRegistry } = eventStore;

    useEffect(() => {
        if (eventRegistry.size <= 1) loadEvents();
    }, [eventRegistry.size, loadEvents]);

    if (eventStore.loadingInitial) return <LoadingComponent />;

    return (
        <Container>
            <Grid container columnSpacing={5}>
                <Grid item xs={12} md={7}>
                    <h1>Events</h1>
                    <EventList />
                </Grid>
                <Grid item xs={12} md={5}>
                    <h2>Event filters</h2>
                </Grid>
            </Grid>
        </Container>
    );
};

export default observer(EventDashboard);
