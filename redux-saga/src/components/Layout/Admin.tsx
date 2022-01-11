import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Header, Sidebar } from 'components/Common';
import Dashboard from 'features/dashboard';
import StudentFeature from 'features/students';
import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: '240px 1fr',
        gridTemplateAreas: '"header header" "sidebar main"',

        minHeight: '100vh'
    },
    header: {
        gridArea: 'header',
    },
    sidebar: {
        gridArea: 'sidebar',
        borderRight: `1px solid #dddddd`
    },
    main: {
        gridArea: 'main',
        padding: '16px 24px',
    }
});

export function Admin(): ReactElement {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.header}><Header /></Box>
            <Box className={classes.sidebar}><Sidebar /></Box>
            <Box className={classes.main}>
                <Switch>
                    <Route path="/admin/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/admin/students">
                        <StudentFeature />
                    </Route>
                </Switch>
            </Box>
        </Box>
    )
}
