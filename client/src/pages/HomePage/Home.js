import React from 'react'
import { useFetch } from '../../hooks'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection } from '../../components';


export default function Home() {
    const {  } = useFetch("", true);
    return (
        <div className="container">
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjTwo} />

            <InfoSection {...homeObjFour} />



        </div>
    )
}
