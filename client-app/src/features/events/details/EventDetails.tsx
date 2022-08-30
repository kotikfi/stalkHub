import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <Container>
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
                    <Button component={Link} to={`/manage/${event.id}`} variant='outlined'>
                        Edit
                    </Button>
                    <Button component={Link} to={'/events'} variant='outlined'>
                        Cancel
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
};

export default observer(EventDetails);
