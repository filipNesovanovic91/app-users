import { TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { User, UserQuery, UserStore } from '../state';
import { of } from 'rxjs';

describe('MainComponent', () => {
  let component: MainComponent;
  let userQuery: jasmine.SpyObj<UserQuery>;
  let userStore: jasmine.SpyObj<UserStore>;

  beforeEach(() => {
    userQuery = jasmine.createSpyObj('UserQuery', ['users$']);
    userStore = jasmine.createSpyObj('UserStore', ['updateUser']);

    TestBed.configureTestingModule({
      imports: [MainComponent],
      providers: [
        { provide: UserQuery, useValue: userQuery },
        { provide: UserStore, useValue: userStore },
      ],
    });

    const fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize users$ and get condition value for isAddUserEnabled$ observable', () => {
    const mockUsers: User[] = [
      { id: 1, name: 'Ronaldo', isActive: true },
      { id: 2, name: 'Rivaldo', isActive: true },
    ];

    userQuery.users$ = of(mockUsers);

    component.ngOnInit();

    component.users$?.subscribe((users) => {
      expect(users).toEqual(mockUsers);
    });

    component.isAddUserEnabled$?.subscribe((isEnabled) => {
      expect(isEnabled).toBe(true);
    });
  });

  it('should set isModalVisible to true when openAddUserModal is called', () => {
    component.onOpenAddUserModal();
    expect(component.isModalVisible).toBeTrue();
  });

  it('should set isModalVisible to false when closeModal is called', () => {
    component.onCloseModal();
    expect(component.isModalVisible).toBeFalse();
  });
});
