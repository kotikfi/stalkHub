import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';

const LoadingComponent = () => {
    return (
        <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open>
            <CircularProgress color='inherit' />
        </Backdrop>
    );
};

export default LoadingComponent;
