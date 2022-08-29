import { LoadingButton } from '@mui/lab';
import { Box, Button, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../../app/stores/store';


const EventList = () => {
    const {eventStore} = useStore();
    const {deleteEvent, eventsByDate, loading} = eventStore;

    const [target, setTarget] = useState('');

    const handleEventDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setTarget(e.currentTarget.name);
        deleteEvent(id);
    }


    return (
        <>
            {eventsByDate.map(event => (
                <CardActionArea key={event.id} component='a'>
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
                                    loading={loading && target === event.id}
                                    onClick={(e) => handleEventDelete(e, event.id)}
                                    variant='contained'
                                    color='error'
                                >
                                    Delete
                                </LoadingButton>
                                <Button component={Link} to={`/events/${event.id}`} variant='contained'>
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

export default observer(EventList);
