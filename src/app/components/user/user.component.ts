import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../model/user.model';
import { CommonModule } from '@angular/common';
// Update the path below to the correct location of user.selectors.ts
import * as UserSelectors from '../../store/user.selectors';
import * as UserActions from '../../store/user.actions';


@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{
 private store = inject(Store);

  users$: Observable<User[]> = this.store.select(UserSelectors.selectAllUsers);
  loading$: Observable<boolean> = this.store.select(UserSelectors.selectLoading);

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());
  }
}
