import EventDashboard from '../../features/events/dashboard/EventDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventForm from '../../features/events/form/EventForm';
import EventDetails from '../../features/events/details/EventDetails';
import WithoutNav from './WithoutNav';
import WithNav from './WithNav';


function App() {
    const location = useLocation();

    return (
        //<>
        //    <NavBar />
        //    <Container>
        //        <Routes>
        //            <Route path='/' element={<HomePage />} />
        //            <Route path='/events' element={<EventDashboard />} />
        //            <Route path='/events/:id' element={<EventDetails />} />
        //            <Route path='/createEvent' element={<EventForm key={location.key} />} />
        //            <Route path='/manage/:id' element={<EventForm key={location.key} />} />
        //        </Routes>
        //    </Container>
        //</>
        <Routes>
            <Route element={<WithoutNav />}>
                <Route path='/' element={<HomePage />} />
            </Route>
            <Route element={<WithNav />}>
                <Route path='/events' element={<EventDashboard />} />
                <Route path='/events/:id' element={<EventDetails />} />
                <Route path='/createEvent' element={<EventForm key={location.key} />} />
                <Route path='/manage/:id' element={<EventForm key={location.key} />} />
            </Route>
        </Routes>
    );
}

export default observer(App);
