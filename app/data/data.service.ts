import { Injectable } from '@angular/core';
import { ARTISTS, QUESTIONS } from './mock-data';
import {
  Artist,
  Question
} from './index';


@Injectable()
export class DataService {
  getArtists() {
    return Promise.resolve(ARTISTS);
  }

  getQuestions() {
    return Promise.resolve(QUESTIONS);
  }
}

export {
  Artist,
  Question
}
