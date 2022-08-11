import { useEffect } from 'react';
import { Container } from '@mui/material';
import NavBar from './NavBar';
import EventDashboard from '../../features/events/dashboard/EventDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
    const { eventStore } = useStore();

    useEffect(() => {
        eventStore.loadEvents();
    }, [eventStore]);

    if (eventStore.loadingInitial) return <LoadingComponent />;

    return (
        <>
            <NavBar />
            <Container>
                <EventDashboard />
            </Container>
        </>
    );
}

export default observer(App);
