import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { env } from "env";
import { User } from "./user.model";

export interface AuthResounseData {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean,
}

@Injectable({providedIn: 'root'})
export class AuthService {

    user= new BehaviorSubject<User>(null)

    constructor(private http: HttpClient) {}

    signUp(email: string, password: string) {
        return this.http.post<AuthResounseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${env.Firebase_KEY}`,
        {
            email: email,
            password: password,
            retunSecureToken: true,
        }).pipe(catchError(this.handleError), tap(responseData => {
            this.handleAuthetication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn)
        }))
    }

    login(email: string, password: string) {
        return this.http.post<AuthResounseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${env.Firebase_KEY}`,
        {
            email: email,
            password: password,
            retunSecureToken: true,
        }).pipe(catchError(this.handleError))

    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occured'
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage)
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS': 
                errorMessage = 'This email exists already.'
                break
            case 'EMAIL_NOT_FOUND': 
                errorMessage = 'This email does not exist.'
                break
            case 'INVALID_PASSWORD': 
                errorMessage = 'This password is not correct.'
                break
        }
        return throwError(errorMessage)
    }

    private handleAuthetication(email: string, userId: string, token:string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000)
        const user = new User(email, userId, token, expirationDate)
        this.user.next(user)
    }

}