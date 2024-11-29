import { TestBed } from '@angular/core/testing';
import { UserStore, UserState } from './user.store';
import { User } from '../model';

describe('UserStore', () => {
  let userStore: UserStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserStore],
    });

    userStore = TestBed.inject(UserStore);
  });

  it('should initialize with default state', () => {
    const initialState: UserState = {
      users: [
        { id: 1, name: 'Ronaldo', isActive: false },
        { id: 2, name: 'Rivaldo', isActive: false },
      ],
    };

    expect(userStore.getValue()).toEqual(initialState);
  });

  it('should add a new user correctly', () => {
    const newUser: User = { id: 3, name: 'Messi', isActive: true };
    userStore.addUser(newUser);

    const expectedState: UserState = {
      users: [
        { id: 1, name: 'Ronaldo', isActive: false },
        { id: 2, name: 'Rivaldo', isActive: false },
        { id: 3, name: 'Messi', isActive: true },
      ],
    };

    expect(userStore.getValue()).toEqual(expectedState);
  });

  it('should update a user correctly', () => {
    const updatedUser: User = { id: 1, name: 'Ronaldo', isActive: true };
    userStore.updateUser(updatedUser);

    const expectedState: UserState = {
      users: [
        { id: 1, name: 'Ronaldo', isActive: true },
        { id: 2, name: 'Rivaldo', isActive: false },
      ],
    };

    expect(userStore.getValue()).toEqual(expectedState);
  });
});
