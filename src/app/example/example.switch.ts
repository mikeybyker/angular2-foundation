import {
  Component,
  OnInit
} from '@angular/core';
import {
  DataService,
  Question
} from '../data/data.service';

@Component({
  selector: 'foundation-switches',
  templateUrl: './example.switch.html'
})

export class ExampleSwitch implements OnInit {
  questions: Array<Question>;

  data: any = { booze: 'Beer', checks: { beer: true } }; // Default value for the first radio switch, and first checkbox

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this._dataService.getQuestions()
      .then(questions => {
        this.questions = questions;
      });
  }

  change(event: any) {
    const { id, value, checked } = event.target;
    console.log({ id, value, checked });
  }
}
