import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Friend } from './friend';

@Injectable({
  providedIn: 'root',
})
export class AddFriendService {
  private url: string = 'http://localhost:9020/addFriend';

  constructor(private http: HttpClient) {}

  addFriend(friend: Friend) {
    return this.http.post(this.url, friend);
  }
}
