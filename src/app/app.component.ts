import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  languageOptions = ['PHP', 'Javascript', 'C', 'Java', 'Ruby'];
  friendModel = new Friend('', '', '', 0, '');
  constructor(private addFriendService: AddFriendService) {}
  onSubmit() {
    console.log(this.friendModel);
    this.addFriendService
      .addFriend(this.friendModel)
      //input field bound to friendModel
      .subscribe(
        (data) => console.log('it works', data),
        (error) => console.log("it doesn't work", error)
      );
  }
}
