import { LoadingButton } from '@mui/lab';
import { Box, Button, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { Event } from '../../../app/models/event';

interface Props {
    events: Event[];
    selectEvent: (id: string) => void;
    deleteEvent: (id: string) => void;
    submitting: boolean;
}

const EventList = ({ events, selectEvent, deleteEvent, submitting }: Props) => {
    const [target, setTarget] = useState('');

    const handleEventDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setTarget(e.currentTarget.name);
        deleteEvent(id);
    }

    return (
        <>
            {events.map(event => (
                <CardActionArea key={event.id} component='a' href='#'>
                    <Card sx={{ display: 'flex', marginY: 2 }}>
                        <CardContent sx={{ flex: 1 }}>
                            <Typography component='h2' variant='h5'>
                                {event.title}
                            </Typography>
                            <Typography variant='subtitle1' color='text.secondary'>
                                {event.date}
                            </Typography>
                            <Typography variant='subtitle1'>{event.description}</Typography>
                            <Typography variant='subtitle1'>{event.location}</Typography>
                            <Box
                                m={1}
                                //margin
                                display='flex'
                                justifyContent='flex-end'
                                alignItems='flex-end'
                            >
                                <LoadingButton
                                    name={event.id}
                                    loading={submitting && target === event.id}
                                    onClick={(e) => handleEventDelete(e, event.id)}
                                    variant='contained'
                                    color='error'
                                >
                                    Delete
                                </LoadingButton>
                                <Button onClick={() => selectEvent(event.id)} variant='contained'>
                                    View
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </CardActionArea>
            ))}
        </>
    );
};

export default EventList;
