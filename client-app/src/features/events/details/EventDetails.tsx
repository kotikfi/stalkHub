import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Event } from '../../../app/models/event';

interface Props {
    event: Event;
    cancelSelectEvent: () => void;
    openForm: (id: string) => void;
}

const EventDetails = ({ event, cancelSelectEvent, openForm }: Props) => {
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
                <Button onClick={() => openForm(event.id)} variant='outlined'>Edit</Button>
                <Button onClick={() => cancelSelectEvent()} variant='outlined'>Cancel</Button>
            </CardActions>
        </Card>
    );
};

export default EventDetails;
