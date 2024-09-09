export const locations = [{
    id:0,
    label:'Cambodia',
    href:'',
    heroIMG:'',
    locationSelectIMG:'/cambodiaStore.jpg',
    isComingSoon:false
},{
    id:1,
    label:'United States',
    href:'',
    heroIMG:'',
    locationSelectIMG:'/usStore.jpg',
    isComingSoon:false
},{
    id:2,
    label:'Vietnam',
    href:'',
    heroIMG:'',
    locationSelectIMG:'/vietnameStore.jpg',
    isComingSoon:false
},{
    id:3,
    label:'Thailand',
    href:'',
    heroIMG:'',
    locationSelectIMG:'',
    isComingSoon:true
}] 

export const currentAvailableLocation = locations.filter(location => !location.isComingSoon)