export class User {
    constructor(
        public email: any, 
        public id: any, 
        private _token: any, 
        private _tokenExpirationDate: Date
    ) {}

    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null
        }
        return this._token
    }
}