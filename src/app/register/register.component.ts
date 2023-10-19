import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { AccountService } from '../services/account.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    // Parent to child communication
    @Input() usersFromHomeComponent: any;

    //Child to parent communication
    @Output() cancelRegister = new EventEmitter();

    model: any = {};

    constructor(private accountsService: AccountService, private toastr: ToastrService) {}

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    register() {
        console.log("registered");
        console.log(this.model);
        this.accountsService.register(this.model).subscribe({
            next: () => {
                this.cancel();
            },
            error: error => this.toastr.error(error.error)

        })
    }

    cancel() {
        // console.log("cancelled");
        this.cancelRegister.emit(false);

    }
}
