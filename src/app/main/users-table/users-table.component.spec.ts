import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTableComponent } from './users-table.component';
import { User } from '../../state';

describe('UsersTableComponent', () => {
  let component: UsersTableComponent;
  let fixture: ComponentFixture<UsersTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UsersTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the user object when onToggleActive is called', () => {
    spyOn(component.toggleActive, 'emit');
    const user: User = { id: 1, name: 'Test User', isActive: false };

    component.onToggleActiveUser(user);

    expect(component.toggleActive.emit).toHaveBeenCalledWith(user);
  });

  it('should display the list of users passed as input', () => {
    const users: User[] = [
      { id: 1, name: 'User 1', isActive: true },
      { id: 2, name: 'User 2', isActive: false },
    ];
    component.users = users;
    fixture.detectChanges(); 

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('User 1');
    expect(compiled.textContent).toContain('User 2');
  });
});
