import { Component, OnInit } from '@angular/core';
import { UsersTableComponent } from './users-table';
import { map, Observable } from 'rxjs';
import { User, UserQuery, UserStore } from '../state';
import { CommonModule } from '@angular/common';
import { AddUserModalComponent } from './add-user-modal';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, UsersTableComponent, AddUserModalComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  users$: Observable<User[]> | undefined;
  isAddUserEnabled$: Observable<boolean> | undefined;
  isModalVisible = false;

  constructor(private userQuery: UserQuery, private userStore: UserStore) {}

  ngOnInit() {
    this.initStore();
  }

  initStore() {
    this.users$ = this.userQuery.users$;

    this.isAddUserEnabled$ = this.users$.pipe(
      map((users) => {
        const allUsersActive = users.every((user) => user.isActive);
        const userCountLessThanFive = users.length < 5;
        return allUsersActive && userCountLessThanFive;
      })
    );
  }

  toggleActive(user: User) {
    const updatedUser = { ...user, isActive: !user.isActive };
    this.userStore.updateUser(updatedUser);
  }

  openAddUserModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
