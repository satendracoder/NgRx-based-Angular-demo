
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from '../model/user.model'; // Import your user model

export interface UserState {
  users: User[];
  loading: boolean;
}

export const initialState: UserState = {
  users: [],
  loading: false,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, state => ({
    ...state,
    loading: true,
  })),

  on(UserActions.loadUsersSuccess, (state, { users}) => ({
    ...state,
    users,
    loading: false,
  })),

  // on(UserActions.loadUsersFailure, (state, { error }) => ({
  //   ...state,
  //   error,
  //   loading: false,
  // }))
);
