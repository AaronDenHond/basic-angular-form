import { Component } from '@angular/core';
import { Friend } from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  languageOptions = ['PHP', 'Javascript', 'C', 'Java', 'Ruby'];
  friendModel = new Friend('', '', '', 0, '');
  userData() {
    console.log(this.friendModel);
  }
}
