// project imports
import services from 'utils/mockAdapter';

// friends list
const friends = [
    {
        id: '#1Friends_Barney',
        avatar: 'user-1.png',
        name: 'Barney',
        mutual: 'Chat app'
    },
    {
        id: '#2Friends_Thea',
        avatar: 'user-2.png',
        name: 'Thea',
        mutual: 'Mobile App'
    },
    {
        id: '#3Friends_Guiseppe',
        avatar: 'user-3.png',
        name: 'Guiseppe',
        mutual: 'Web App'
    },
    {
        id: '#4Friends_Henderson',
        avatar: 'user-4.png',
        name: 'Henderson',
        mutual: 'Mobile Wallet'
    }
];

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/friend-request/list').reply(200, { friends });

services.onPost('/api/friend-request/filter').reply((config) => {
    try {
        const { key } = JSON.parse(config.data);

        const results = friends.filter((row) => {
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
