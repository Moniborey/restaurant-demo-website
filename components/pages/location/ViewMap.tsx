import { mapApiKey } from '@/constants'
import React from 'react'

export default function ViewMap() {
    return (

        //this one has usage limit and will charge when exceed limi
        // <APIProvider
        //     apiKey={mapApiKey as string}
        // >
        //     <Map
        //         defaultZoom={20}
        //         className='size-full h-[600px]'
        //         center={{lat:11.5477636,lng:104.9302874}}
        //     >
        //         <Marker 
        //         position={{lat:11.5477636,lng:104.9302874}}
        //         />
        //     </Map>
        // </APIProvider>

        //embed map is free
        <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${mapApiKey}
    &q=In-N-Out+Burger,3900 Pelandale`}
            allowFullScreen
            referrerPolicy='no-referrer-when-downgrade'
            loading="lazy"
            className='size-full h-[600px]'
        >
        </iframe>
    )
}
