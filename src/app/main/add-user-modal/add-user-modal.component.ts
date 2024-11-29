import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { uniqueNameValidator } from '../../validators';
import { UserQuery, UserStore } from '../../state';

@Component({
  selector: 'app-add-user-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],
})
export class AddUserModalComponent {
  addUserForm: FormGroup;
  @Output() close = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private userStore: UserStore,
    private userQuery: UserQuery
  ) {
    this.addUserForm = this.fb.group({
      name: ['', [Validators.required], [uniqueNameValidator(this.userQuery)]], 
      isActive: [false],
    });
  }

  public closeModal() {
    this.close.emit();
  }

  public onSubmit() {
    if (this.addUserForm.valid) {
      const newUser = this.addUserForm.value;
      this.userStore.addUser(newUser);
      this.closeModal();
    }
  }
}
