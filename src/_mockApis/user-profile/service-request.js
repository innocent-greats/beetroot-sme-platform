// project imports
import services from 'utils/mockAdapter';

// client list
const servicesRequests = [
    {
        id: '#1Friends_Barney',
        avatar: 'user-1.png',
        name: 'Barney',
        request: 'ecommerce website'
    },
    {
        id: '#2Friends_Thea',
        avatar: 'user-2.png',
        name: 'Thea',
        request: 'mobile app'
    },
    {
        id: '#3client_Guiseppe',
        avatar: 'user-3.png',
        name: 'Guiseppe',
        request: 'mobile wallet'
    },
    {
        id: '#4Friends_Henderson',
        avatar: 'user-4.png',
        name: 'Henderson',
        request: 'networking app'
    }
];

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/services-request/list').reply(200, { servicesRequests });

services.onPost('/api/services-request/filter').reply((config) => {
    try {
        const { key } = JSON.parse(config.data);

        const results = client.filter((row) => {
            let matches = true;

            const properties = ['name', 'mutual'];
            let containsQuery = false;

            properties.forEach((property) => {
                if (row[property].toString().toLowerCase().includes(key.toString().toLowerCase())) {
                    containsQuery = true;
                }
            });

            if (!containsQuery) {
                matches = false;
            }
            return matches;
        });

        return [200, { results }];
    } catch (err) {
        console.error(err);
        return [500, { message: 'Internal server error' }];
    }
});
