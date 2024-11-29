import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { User } from '../model';

export interface UserState {
  users: User[];
}

export function createInitialState(): UserState {
  return {
    users: [
      { id: 1, name: 'Ronaldo', isActive: false },
      { id: 2, name: 'Rivaldo', isActive: false }
    ]
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'users' })
export class UserStore extends Store<UserState> {
  constructor() {
    super(createInitialState()); 
  }

  addUser(user: User) {
    this.update(state => ({
      users: [...state.users, { ...user, id: state.users.length + 1, isActive: user.isActive }] 
    }));
  }

  updateUser(user: User) {
    this.update(state => {
      const users = state.users.map(u => u.id === user.id ? { ...u, isActive: user.isActive } : u);
      return { ...state, users };
    });
  }
}
