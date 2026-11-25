import React from 'react';
import Celestial from '../components/Celestial';
import {apollo} from '../data/celestial';
export default function SolarPreview() { return <Celestial content={apollo}/>; }
