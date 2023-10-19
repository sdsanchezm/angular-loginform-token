import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AccountService } from '../services/account.service';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    model: any = {};
    // loggedIn = false;
    // currentUser$: Observable<User | null> = of(null);

    constructor(public accountService: AccountService, private router: Router,
        private toastr: ToastrService) {

    }
    ngOnInit(): void {
        // this.getCurrentUser();
        // this.currentUser$ = this.accountService.currentUser$;
    }

    // login() {
    //     this.http.post(this.baseUrl + 'account/login', model)
    //         .subscribe({
    //             next: response => {
    //                 console.log(response);
    //                 this.loggedIn = true;
    //             },
    //             error: error => console.log(error)
    //         })
    // }

    // getCurrentUser() {
    //     this.accountService.currentUser$.subscribe({
    //         next: user => this.loggedIn = !!user,
    //         error: error => console.log(error)
    //     })
    // }

    login() {
        this.accountService.login(this.model).subscribe({
            next: response => {
                console.log(response);
                // this.loggedIn = true;
                this.router.navigateByUrl('/members');
            },
            // error: error => console.log(error)
            error: error => this.toastr.error(error.error)
        })
    }

    logout() {
        // removes token from localStorage
        this.accountService.logout();
        this.router.navigateByUrl('/');
        // this.loggedIn = false;
    }

}
