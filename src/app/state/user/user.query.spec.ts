import { TestBed } from '@angular/core/testing';
import { UserQuery } from './user.query';
import { UserStore } from './user.store';
import { User } from '../model';

describe('UserQuery', () => {
  let userQuery: UserQuery;
  let userStore: UserStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserQuery, UserStore],
    });

    userQuery = TestBed.inject(UserQuery);
    userStore = TestBed.inject(UserStore);
  });

  it('should return the initial list of users', (done: DoneFn) => {
    const expectedUsers: User[] = [
      { id: 1, name: 'Ronaldo', isActive: false },
      { id: 2, name: 'Rivaldo', isActive: false },
    ];

    userQuery.users$.subscribe((users) => {
      expect(users).toEqual(expectedUsers);
      done();
    });
  });

  it('should update the users observable when a user is added', (done: DoneFn) => {
    const newUser: User = { id: 3, name: 'Messi', isActive: true };

    userStore.addUser(newUser);

    userQuery.users$.subscribe((users) => {
      expect(users).toEqual([
        { id: 1, name: 'Ronaldo', isActive: false },
        { id: 2, name: 'Rivaldo', isActive: false },
        { id: 3, name: 'Messi', isActive: true },
      ]);
      done();
    });
  });

  it('should update the users observable when a user is updated', (done: DoneFn) => {
    const updatedUser: User = { id: 1, name: 'Ronaldo', isActive: true };

    userStore.updateUser(updatedUser);

    userQuery.users$.subscribe((users) => {
      expect(users).toEqual([
        { id: 1, name: 'Ronaldo', isActive: true },
        { id: 2, name: 'Rivaldo', isActive: false },
      ]);
      done();
    });
  });
});
