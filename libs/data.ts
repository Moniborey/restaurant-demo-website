export const locations = [{
    id: 0,
    label: 'Cambodia',
    shortname: 'kh',
    href: '/kh',
    heroIMG: '',
    locationSelectIMG: '/cambodiaStore.jpg',
    isComingSoon: false,
    branches: [{
        id: 'bkk',
        name: 'Placeholder location name',
        mapLink: '',
        img:'/cambodiaStore.jpg',
        links:[{
            label:'view detail',
        },{
            label:"reservation",
            href:''
        },{
            label:'google map',
            href:''
        }]
    },{
        id: 'bkk',
        name: 'Placeholder location name 2',
        mapLink: '',
        img:'/vietnameStore.jpg',
        links:[{
            label:'view detail',
        },{
            label:"reservation",
            href:''
        },{
            label:'google map',
            href:''
        }]
    }]
}, {
    id: 1,
    label: 'United States',
    shortname: 'en',
    href: '/en',
    heroIMG: '',
    locationSelectIMG: '/usStore.jpg',
    isComingSoon: false,
    branches: [{
        id: 'bkk',
        name: 'Placeholder location name',
        mapLink: '',
        img:'/cambodiaStore.jpg',
        links:[{
            label:'view detail',
        },{
            label:"reservation",
            href:''
        },{
            label:'google map',
            href:''
        }]
    }]
}, {
    id: 2,
    label: 'Vietnam',
    shortname: 'vn',
    href: '',
    heroIMG: '',
    locationSelectIMG: '/vietnameStore.jpg',
    isComingSoon: true,
    branches: [{
        id: 'bkk',
        name: 'Placeholder location name',
        mapLink: '',
        img:'/cambodiaStore.jpg',
        links:[{
            label:'view detail',
        },{
            label:"reservation",
            href:''
        },{
            label:'google map',
            href:''
        }]
    }]
}, {
    id: 3,
    label: 'Thailand',
    shortname: 'th',
    href: '',
    heroIMG: '',
    locationSelectIMG: '',
    isComingSoon: true,
    branches: [{
        id: 'bkk',
        name: 'Placeholder location name',
        mapLink: '',
        img:'/cambodiaStore.jpg',
        links:[{
            label:'view detail',
        },{
            label:"reservation",
            href:''
        },{
            label:'google map',
            href:''
        }]
    }]
}]

export const currentAvailableLocation = locations.filter(location => !location.isComingSoon)