import { Container } from '@mui/material';
import NavBar from './NavBar';
import EventDashboard from '../../features/events/dashboard/EventDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventForm from '../../features/events/form/EventForm';
import EventDetails from '../../features/events/details/EventDetails';

function App() {
    return (
        <>
            <NavBar />
            <Container>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/events' element={<EventDashboard />} />
                    <Route path='/events/:id' element={<EventDetails />} />
                    <Route path='/createEvent' element={<EventForm />} />
                </Routes>
            </Container>
        </>
    );
}

export default observer(App);
