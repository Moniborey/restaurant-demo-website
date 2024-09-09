export type navLink = {
    label:string,
    href:string,
    icon?:React.ReactNode
}

export type locationLink = Omit<navLink,'icon'> & {
    isComingSoon:boolean
}