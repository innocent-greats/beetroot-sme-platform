import React from 'react';

// material-ui
import { Grid, InputAdornment, OutlinedInput, Typography } from '@mui/material';

// project imports
import ServicesRequestCard from 'ui-component/cards/ServicesRequestCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useDispatch, useSelector } from 'store';
import { getServicesRequests, filterFriendRequests } from 'store/slices/user';

// assets
import { IconSearch } from '@tabler/icons';

// ==============================|| SOCIAL PROFILE - FRIEND REQUEST ||============================== //

const ServicesRequest = () => {
    const dispatch = useDispatch();
    const [servicesRequest, setFriendRequest] = React.useState([]);
    const userState = useSelector((state) => state.user);

    const [search, setSearch] = React.useState('');

    const handleSearch = async (event) => {
        const newString = event?.target.value;
        setSearch(newString);

        if (newString) {
            dispatch(filterFriendRequests(newString));
        } else {
            dispatch(getServicesRequests());
        }
    };

    React.useEffect(() => {
        setFriendRequest(userState.servicesRequests);
    }, [userState]);

    React.useEffect(() => {
        dispatch(getServicesRequests());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let friendRequestResult = <></>;
    if (servicesRequest) {
        friendRequestResult = servicesRequest.map((friend, index) => (
            <Grid key={index} item xs={12} sm={4} md={3} lg={3}>
                <ServicesRequestCard {...friend} />
            </Grid>
        ));
    }

    return (
        <MainCard
            title={
                <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                    <Grid item>
                        <Typography variant="h3">Service Order Request</Typography>
                    </Grid>
                    <Grid item>
                        <OutlinedInput
                            size="small"
                            id="input-search-user-profile"
                            placeholder="Search Service Provider"
                            value={search}
                            onChange={handleSearch}
                            startAdornment={
                                <InputAdornment position="start">
                                    <IconSearch stroke={1.5} size="1rem" />
                                </InputAdornment>
                            }
                        />
                    </Grid>
                </Grid>
            }
        >
            <Grid container direction="row" spacing={gridSpacing}>
                {friendRequestResult}
            </Grid>
        </MainCard>
    );
};

export default ServicesRequest;