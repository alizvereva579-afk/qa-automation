export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.getByRole('textbox', { name: 'Username' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
}
async login (user,pass) {
    await this.usernameField.fill(user);
    await this.passwordField.fill(pass);
    await this.loginButton.click();
}
}