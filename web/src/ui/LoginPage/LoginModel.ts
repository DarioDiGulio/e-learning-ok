export class LoginModel {
    email = '';
    password = '';
    errors: LoginErrors = {};
}

export class LoginErrors {
    email?: string;
    password?: string;
}