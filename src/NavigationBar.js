import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function NavigationBar(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">

                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Health" icon={<i className={"fas fa-medkit icons"}/>} {...a11yProps(0)} />
                    <Tab label="Friends" icon={<i className={"fas fa-paw icons"}/>} {...a11yProps(1)} />
                    <Tab label="Places" icon={<i className={"fas fa-map-marker-alt icons"}/>} {...a11yProps(2)} />
                    <Tab label="Sport" icon={<i className={"fas fa-baseball-ball icons"}/>} {...a11yProps(3)} />
                    <Tab label="Education" icon={<i className={"fas fa-graduation-cap icons"}/>} {...a11yProps(4)} />
                    <Tab label="Care" icon={<FavoriteIcon/>} {...a11yProps(5)} />
                    <Tab label="News" icon={<i className={"far fa-newspaper icons"}/>}/>
                    <Tab label="Events" icon={<i className={"fas fa-calendar-alt icons"}/>} {...a11yProps(7)} />
                    <div>
                        <input type="text" className="search-bar" placeholder="Search..." value=""/>
                        <button type="submit" className="nav-button">Search</button>
                    </div>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                Vet <br/>
                Pharmacies <br/>
                Hospitals <br/>
                Psychologists <br/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Hotels <br/>
                Restaurants <br/>
                Pubs <br/>
                Confectioneries <br/>
                Stores <br/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                Dog running parks <br/>
                Tours <br/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                Schools <br/>
                Trainers <br/>
                Day cares <br/>
            </TabPanel>
            <TabPanel value={value} index={5}>
                Food shops <br/>
                Equipment <br/>
                Walkers and babysitters <br/>
                Cosmetics <br/>
                Pet shops <br/>
                Masseures <br/>
            </TabPanel>
            <TabPanel value={value} index={6}>
                Breaking: A koronát nem kapják el a kutyák.
            </TabPanel>
        </div>
    );
}

export default NavigationBar;