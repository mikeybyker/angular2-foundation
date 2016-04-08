import {Injectable}          from 'angular2/core';
import {ARTISTS, QUESTIONS}  from './mock-data';

@Injectable()
export class DataService
{

    getArtists(){
        return Promise.resolve(ARTISTS);
    }

    getQuestions(){
        return Promise.resolve(QUESTIONS);
    }
}