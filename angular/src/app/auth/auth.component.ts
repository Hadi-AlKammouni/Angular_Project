import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthResounseData, AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true
    isLoading = false
    error = '';
    

    constructor(private authService: AuthService) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return
        }
        const email = form.value.email
        const password = form.value.password

        let authObservable: Observable<AuthResounseData>

        this.isLoading = true
        
        if (this.isLoginMode) {
            authObservable = this.authService.login(email, password)
        } else {
            authObservable = this.authService.signUp(email, password)
        }

        authObservable.subscribe(resData => {
            console.log(resData)
            this.isLoading = false
        }, errorMessage => {
            console.log(errorMessage)
            this.error = errorMessage
            this.isLoading = false
        });
        
        form.reset()
    }
}