// import { LoadingButton } from '@mui/lab';
import { LoadingButton } from '@mui/lab';
import { Button, Container, Grid, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';


const EventForm = () => {
    const navigate = useNavigate();
    const { eventStore } = useStore();
    const { createEvent, updateEvent, loading, loadEvent, loadingInitial } = eventStore;
    const { id } = useParams<{ id: string }>();

    const [event, setEvent] = useState({
        id: '',
        title: '',
        date: '',
        description: '',
        city: '',
        location: '',
    });

    useEffect(() => {
        if (id) loadEvent(id).then(event => setEvent(event!));
    }, [id, loadEvent])


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (event.id.length === 0) {
            let newEvent = {
                ...event,
                id: uuid()
            };
            createEvent(newEvent).then(() => navigate(`/events/${newEvent.id}`));
        } else {
            updateEvent(event).then(() => navigate(`/events/${event.id}`));
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEvent({ ...event, [name]: value });
    };

    if (loadingInitial) return <LoadingComponent />;

    return (
        <Container sx={{ my: 2 }}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField
                            label='Title'
                            placeholder='Title'
                            fullWidth
                            value={event.title}
                            name='title'
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type='date'
                            placeholder='Date'
                            fullWidth
                            value={event.date}
                            name='date'
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Description'
                            placeholder='Description'
                            fullWidth
                            multiline
                            value={event.description}
                            name='description'
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='City'
                            placeholder='City'
                            fullWidth
                            value={event.city}
                            name='city'
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Location'
                            placeholder='Location'
                            fullWidth
                            value={event.location}
                            name='location'
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <LoadingButton loading={loading} type='submit' variant='contained' color='primary'>
                            Submit
                        </LoadingButton>
                        <Button component={Link} to='/events' variant='contained' color='error'>
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default observer(EventForm);
