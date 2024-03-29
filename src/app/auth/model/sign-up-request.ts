export class SignUpRequest {
    
    name: string;
    username: string;
    email: string;
    authorities: string[];
    password: string;

    constructor(name: string, username: string, email: string, password: string) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.authorities = ['user'];
    }
}
