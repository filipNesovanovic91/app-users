import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserModalComponent } from './add-user-modal.component';
import { UserQuery, UserStore } from '../../state';

describe('AddUserModalComponent', () => {
  let component: AddUserModalComponent;
  let userQuery: jasmine.SpyObj<UserQuery>;
  let userStore: jasmine.SpyObj<UserStore>;

  beforeEach(() => {
    userQuery = jasmine.createSpyObj('UserQuery', ['users$']);
    
    TestBed.configureTestingModule({
      imports: [AddUserModalComponent],
      providers: [
        { provide: UserQuery, useValue: userQuery },
        { provide: UserStore, useValue: userStore },
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(AddUserModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit close event when closeModal is called', () => {
    spyOn(component.close, 'emit');
    component.closeModal();
    expect(component.close.emit).toHaveBeenCalled();
  });

  it('should call onSubmit function', () => {
    spyOn(component, 'onSubmit').and.callThrough();
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should not call userStore.addUser and closeModal function when form is invalid', () => {
    const userStore = jasmine.createSpyObj('UserStore', ['addUser']);
    component.addUserForm.setValue({
      name: '',  
      isActive: true,
    });
    spyOn(component, 'closeModal');
    component.onSubmit();
    expect(userStore.addUser).not.toHaveBeenCalled();
    expect(component.closeModal).not.toHaveBeenCalled();
  });
});
