import React from 'react';
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import {Link} from 'react-router-dom';
import Servces from '../component/Servces';
import FeaturedRooms from '../component/FeaturedRooms';
export default function Home() {
    return (
        <>
         <Hero>
             <Banner 
             title="Luxurious Rooms" 
             subtitle="deluxe rooms starting from $299">

                <Link to='/rooms'
                 className="btn-primary">
                     Our Rooms
                     </Link>
             </Banner>
         </Hero>
         <Servces />
         <FeaturedRooms />
</>
        
    )
}
