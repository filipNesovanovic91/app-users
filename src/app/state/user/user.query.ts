import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UserStore } from './user.store';
import { UserState } from './user.store';
import { Observable } from 'rxjs';
import { User } from '../model';

@Injectable({ providedIn: 'root' })
export class UserQuery extends Query<UserState> {
  users$: Observable<User[]>; 

  constructor(protected override store: UserStore) {
    super(store);
    this.users$ = this.select(state => state.users);
  }
}
 