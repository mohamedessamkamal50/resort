import React from 'react';
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import {Link} from 'react-router-dom';
export default function Error() {
    return (
        <Hero>
            <Banner title='New Project' subtitle='Objectives Marketing Group'>
                <Link to='/' className='btn-primary'>Take a Tour</Link>
            </Banner>
        </Hero>
    )
}




