import { Box, Button, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Event } from '../../../app/models/event';

interface Props {
    events: Event[];
    selectEvent: (id: string) => void;
    deleteEvent: (id: string) => void;
}

const EventList = ({ events, selectEvent, deleteEvent }: Props) => {
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
                                <Button onClick={() => deleteEvent(event.id)} variant='contained' color='error'>Delete</Button>
                                <Button onClick={() => selectEvent(event.id)} variant='contained'>View</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </CardActionArea>
            ))}
        </>
    );
};

export default EventList;
