import Study from '../models/study';
import Exercise from '../models/exercise';

export const STUDIES = [
    new Study('1', require('../../assets/studies/FirstStudy/1stTitle.png')),
    new Study('2', require('../../assets/studies/SecondStudy/2ndTitle.png')),
];

export const EXERCISES = [
    //First Study
    new Exercise('1', '1', '', require('../../assets/studies/FirstStudy/1st1.png')),
    new Exercise('1', '2', '', require('../../assets/studies/FirstStudy/1st2.png')),
    new Exercise('1', '3', '', require('../../assets/studies/FirstStudy/1st3.png')),
    //Second Study
    new Exercise('2', '23', '', require('../../assets/studies/SecondStudy/2nd23.png')),
    new Exercise('2', '24', '', require('../../assets/studies/SecondStudy/2nd24.png')),
    new Exercise('2', '25', '', require('../../assets/studies/SecondStudy/2nd25.png'))
];