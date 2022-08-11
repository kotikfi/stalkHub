// import { LoadingButton } from '@mui/lab';
import { LoadingButton } from '@mui/lab';
import { Button, Grid, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useStore } from '../../../app/stores/store';


const EventForm = () => {
    const {eventStore} = useStore();
    const {selectedEvent, closeForm, createEvent, updateEvent, loading} = eventStore;

    const initialState = selectedEvent ?? {
        id: '',
        title: '',
        date: '',
        description: '',
        city: '',
        location: '',
    };

    const [event, setEvent] = useState(initialState);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        event.id ? updateEvent(event) : createEvent(event);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEvent({ ...event, [name]: value });
    };

    return (
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
                        label='Date'
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
                    <Button onClick={closeForm} variant='contained' color='error'>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default observer(EventForm);
