import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as UserActions from './user.actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserEffects {
  loadUsers$; // Declare first

  constructor(private actions$: Actions, private http: HttpClient) {
    // ✅ Assign inside constructor
    this.loadUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UserActions.loadUsers),
        mergeMap(() =>
          this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
            map(users => UserActions.loadUsersSuccess({ users })),
            // catchError(error => of(UserActions.loadUsersFailure({ error })))
          )
        )
      )
    );
  }
}
