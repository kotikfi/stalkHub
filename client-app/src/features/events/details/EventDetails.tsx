import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

const EventDetails = () => {
    const { eventStore } = useStore();
    const { selectedEvent: event, loadEvent, loadingInitial } = eventStore;
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) loadEvent(id);
    }, [id, loadEvent]);

    if (loadingInitial || !event) return <LoadingComponent />;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component='img' height='140' image='/assets/drinks.jpg' alt='green iguana' />
            <CardContent>
                <Typography component='h2' variant='h5'>
                    {event.title}
                </Typography>
                <Typography variant='subtitle1' color='text.secondary'>
                    {event.date}
                </Typography>
                <Typography variant='subtitle1'>{event.description}</Typography>
                <Typography variant='subtitle1'>{event.location}</Typography>
            </CardContent>
            <CardActions>
                <Button variant='outlined'>
                    Edit
                </Button>
                <Button variant='outlined'>
                    Cancel
                </Button>
            </CardActions>
        </Card>
    );
};

export default observer(EventDetails);
