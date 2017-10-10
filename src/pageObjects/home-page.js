var HomePage = function() {
    this.inputLogin = $('#Login');
    this.inputPassword = $('#Password');
    this.loginButton = $$('input[value="Войти"]').first();
    this.documents = $$('#big-table > tbody tr td a');

    this.modal = $('#s-chrome');
    this.modalBtn = this.modal.all(by.css('button[type="button"]')).first();
};

module.exports = HomePage;