import { getWelcomeMessage } from '../support/app.po';

describe('codesign-workshops', () => {
    beforeEach(() => cy.visit('/'));

    it('should display welcome message', () => {
        getWelcomeMessage().contains('Thank you for using codesign-workshops');
    });
});
