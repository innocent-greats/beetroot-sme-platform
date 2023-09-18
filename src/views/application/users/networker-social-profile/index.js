import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// project imports
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardMedia, Grid, Tab, Tabs, Typography } from '@mui/material';

// project imports
import Profile from './Profile';
import Followers from './Followers';
import Friends from './Friends';
import ProfileServices from './ProfileServices';
import FriendRequest from './FriendRequest';
import useAuth from 'hooks/useAuth';
import useConfig from 'hooks/useConfig';
import Avatar from 'ui-component/extended/Avatar';
import Chip from 'ui-component/extended/Chip';
import MainCard from 'ui-component/cards/MainCard';
import ImagePlaceholder from 'ui-component/cards/Skeleton/ImagePlaceholder';
import { gridSpacing } from 'store/constant';

// assets
import { IconFriends, IconInbox, IconPhoto, IconUserPlus, IconUsers } from '@tabler/icons';
import PersonAddTwoToneIcon from '@mui/icons-material/PersonAddTwoTone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import User1 from 'assets/images/profile/img-user.png';
import Cover from 'assets/images/profile/img-profile-bg.png';

function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box
                    sx={{
                        p: 0
                    }}
                >
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

const tabOptions = [
    {
        to: '/user/networker-social-profile/feed',
        icon: <IconInbox stroke={1.5} size="1.1rem" />,
        label: 'Community Activities'
    },
    {
        to: '/user/networker-social-profile/service-request',
        icon: <IconUserPlus stroke={1.5} size="1.1rem" />,
        label: (
            <>
                Exhibits <Chip label="4" size="small" chipcolor="secondary" sx={{ ml: 1.5 }} />
            </>
        )
    },
    {
        to: '/user/networker-social-profile/services',
        icon: <IconFriends stroke={1.5} size="1.1rem" />,
        label: (
            <>
                Services <Chip label="10" size="small" chipcolor="secondary" sx={{ ml: 1.5 }} />
            </>
        )
    }
];

// ==============================|| SOCIAL PROFILE ||============================== //

const NetworkerSocialProfile = () => {
    const theme = useTheme();

    const { user } = useAuth();
    const { borderRadius } = useConfig();
    const { tab } = useParams();

    let selectedTab = 0;
    switch (tab) {
        case 'friend-request':
            selectedTab = 1;
            break;
        case 'gallery':
            selectedTab = 2;
            break;
        case 'gallery':
            selectedTab = 3;
            break;
        case 'posts':
        default:
            selectedTab = 0;
    }
    const [value, setValue] = React.useState(selectedTab);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard
                    contentSX={{
                        p: 1.5,
                        paddingBottom: '0px !important',
                        [theme.breakpoints.down('lg')]: {
                            textAlign: 'center'
                        }
                    }}
                >
                    {isLoading ? (
                        <ImagePlaceholder
                            sx={{
                                borderRadius: `${borderRadius}px`,
                                overflow: 'hidden',
                                mb: 3,
                                height: { xs: 85, sm: 150, md: 260 }
                            }}
                        />
                    ) : (
                        <CardMedia component="img" image={Cover} sx={{ borderRadius: `${borderRadius}px`, overflow: 'hidden', mb: 3 }} />
                    )}
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={3}>
                            {isLoading ? (
                                <ImagePlaceholder
                                    sx={{
                                        margin: '-70px 0 0 auto',
                                        borderRadius: '16px',
                                        [theme.breakpoints.down('lg')]: {
                                            margin: '-70px auto 0'
                                        },
                                        [theme.breakpoints.down('md')]: {
                                            margin: '-60px auto 0'
                                        },
                                        width: { xs: 72, sm: 100, md: 140 },
                                        height: { xs: 72, sm: 100, md: 140 }
                                    }}
                                />
                            ) : (
                                <Avatar
                                    alt="User 1"
                                    src={User1}
                                    sx={{
                                        margin: '-70px 0 0 auto',
                                        borderRadius: '16px',
                                        [theme.breakpoints.down('lg')]: {
                                            margin: '-70px auto 0'
                                        },
                                        [theme.breakpoints.down('md')]: {
                                            margin: '-60px auto 0'
                                        },
                                        width: { xs: 72, sm: 100, md: 140 },
                                        height: { xs: 72, sm: 100, md: 140 }
                                    }}
                                />
                            )}
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h5">{user?.name}</Typography>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Grid
                                        container
                                        spacing={1}
                                        sx={{
                                            justifyContent: 'flex-end',
                                            [theme.breakpoints.down('lg')]: {
                                                justifyContent: 'center'
                                            }
                                        }}
                                    >
                                        {/* startIcon={<PersonAddTwoToneIcon />} */}
                                        <Grid item>
                                            <Button variant="outlined" component={Link} to={'/app/chat'}>Message</Button>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained" component={Link} to={'/user/networker-social-profile/service-request'}>
                                                Request For Services
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={12} >
                                <Grid
                                    container direction="row" spacing={gridSpacing}
                                    sx={{
                                        marginTop: 0.5,
                                        justifyContent: 'flex-start',
                                        [theme.breakpoints.down('lg')]: {
                                            justifyContent: 'center'
                                        }
                                    }}
                                >
                                    <Grid item>
                                        <Chip label="Entreprenuer" chipcolor="success" />
                                    </Grid>
                                    <Grid item>
                                        <Chip
                                            avatar={<Avatar>SD</Avatar>}
                                            label="Software Developer"
                                            onClick={handleClick}
                                            color="primary"
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Chip

                                            avatar={<Avatar>
                                                <LocationOnIcon />
                                            </Avatar>}
                                            label="Cape Town"
                                            onClick={handleClick}
                                            color="secondary"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="flex-end">
                                <Tabs
                                    value={value}
                                    variant="scrollable"
                                    onChange={handleChange}
                                    sx={{
                                        marginTop: 2.5,
                                        '& .MuiTabs-flexContainer': {
                                            border: 'none'
                                        },
                                        '& a': {
                                            minHeight: 'auto',
                                            minWidth: 10,
                                            py: 1.5,
                                            px: 1,
                                            mr: 2.25,
                                            color: 'grey.700',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        },
                                        '& a.Mui-selected': {
                                            color: 'primary.main'
                                        },
                                        '& a > svg': {
                                            marginBottom: '4px !important',
                                            mr: 1.25
                                        }
                                    }}
                                >
                                    {tabOptions.map((option, index) => (
                                        <Tab
                                            key={index}
                                            component={Link}
                                            to={option.to}
                                            icon={option.icon}
                                            label={option.label}
                                            {...a11yProps(index)}
                                        />
                                    ))}
                                </Tabs>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12}>
                <TabPanel value={value} index={0}>
                    <Profile />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ProfileServices />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ProfileServices />
                </TabPanel>
            </Grid>
        </Grid>
    );
};

export default NetworkerSocialProfile;
