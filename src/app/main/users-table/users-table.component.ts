import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss',
})
export class UsersTableComponent {
  @Input() users: User[] = [];
  @Output() toggleActive: EventEmitter<User> = new EventEmitter();

  public onToggleActiveUser(user: User) {
    this.toggleActive.emit(user);
  }
}
