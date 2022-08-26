import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "env";

interface AuthResounseData {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
}

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(private http: HttpClient) {}

    signUp(email: string, password: string) {
        return this.http.post<AuthResounseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${env.Firebase_KEY}`,
        {
            email: email,
            password: password,
            retunSecureToken: true,
        })
    }

}