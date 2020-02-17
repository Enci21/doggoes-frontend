import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

function NavigationBar(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const keysRemove = ["token", "username"];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div position="static" color="default">
                <div>
                    <input type="text" className="search-bar" placeholder="Search..." value=""/>
                    <button type="submit" className="nav-button">Search</button>
                </div>

                <div>
                    <button label="Health" icon={<i className={"fas fa-medkit icons"}> Health </button>
                    < /div>
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
                        <Tab label="Education" icon={<i
                            className={"fas fa-graduation-cap icons"}/>} {...a11yProps(4)} />
                        <Tab label="Care" icon={<FavoriteIcon/>} {...a11yProps(5)} />
                        <Tab label="News" icon={<i className={"far fa-newspaper icons"}/>} {...a11yProps(6)} />
                        <Tab label="Events" icon={<i className={"fas fa-calendar-alt icons"}/>} {...a11yProps(7)} />
                        <Tab label={localStorage.getItem("token") != null ? localStorage.getItem("username") : "Log in"}
                        path="/auth/signin"
                        icon={<i className={"fas fa-smile-beam icons"}/>} {...a11yProps(8)} />
                        <Tab label="Log out" onClick={() => keysRemove.forEach(k => localStorage.removeItem(k))}
                        icon={<i className={"fas fa-sign-out-alt icons"}/>} {...a11yProps(9)} />
                        <Tab label="Registration" icon={<i className={"fas fa-registered icons"}/>} {...a11yProps(10)}
                        </Tabs>
                        </div>
                        <TabPanel value={value} index={0}>
                        Item One
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                        Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                        Item Three
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                        Item Four
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                        Item Five
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                        Item Six
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                        Item Seven
                        </TabPanel>
                        <TabPanel value={value} index={7}/>
                        <TabPanel value={value} index={8}/>
                        <TabPanel value={value} index={9}/>
                        <TabPanel value={value} index={10}/>
                        </div>
                        );
                    }

                            export default NavigationBar;