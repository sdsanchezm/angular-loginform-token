import { Component, OnInit } from '@angular/core';

import { AccountService } from './services/account.service';
import { User } from './models/User';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'client';
    users: any;

    constructor(private accountService: AccountService) {
    }

    ngOnInit(): void {
        // this.getUsers();
        this.setCurrentUser();
    }

    setCurrentUser() {
        const userString = localStorage.getItem('user');
        if (!userString) return;
        const user: User = JSON.parse(userString);
        this.accountService.setCurrentUser(user);
    }


}
