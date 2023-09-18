// project imports
import services from 'utils/mockAdapter';

// gallery components

const gallery = [
    {
        id: '#1Gallery',
        image: 'img-gal-1.png',
        title: 'Web App',
        dateTime: 'Tue Aug 24 2021'
    },
    {
        id: '#2Gallery',
        image: 'img-gal-2.png',
        title: 'Mobile App',
        dateTime: 'Fri Apr 30 2021'
    },
    {
        id: '#3Gallery',
        image: 'img-gal-3.png',
        title: 'Mobile Wallet',
        dateTime: 'Fri Jun 25 2021'
    },
    {
        id: '#4Gallery',
        image: 'img-gal-4.png',
        title: 'Chat App',
        dateTime: 'Sat Oct 23 2021'
    },
];

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/gallery/list').reply(200, { gallery });
