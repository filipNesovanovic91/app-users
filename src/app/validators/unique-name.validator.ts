import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { map, catchError, switchMap, take, debounceTime } from 'rxjs/operators';
import { UserQuery } from '../state'; 

export function uniqueNameValidator(userQuery: UserQuery): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) return of(null); 

    return timer(500).pipe(
      debounceTime(300),
      switchMap(() => 
        userQuery.users$.pipe( 
          take(1), 
          map(users => 
            users.some(user => user.name.toLowerCase() === control.value.trim().toLowerCase()) 
              ? { uniqueName: true } 
              : null
          ),
          catchError((err) => of(err))
        )
      )
    );
  };
}
