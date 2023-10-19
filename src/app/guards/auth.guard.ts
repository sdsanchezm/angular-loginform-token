import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';

import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { AccountService } from '../services/account.service';

export const authGuard: CanActivateFn = (route, state) => {

    const accountService = inject(AccountService);
    const toastr = inject(ToastrService);

    return accountService.currentUser$.pipe(
        map(user => {
            if (user) return true;
            else{
                toastr.error("Not Logged in.");
                return false;
            }
        })
    );
};
