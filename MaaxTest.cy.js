describe('MAAX Website Functionality Tests', () => {
    beforeEach(() => {
        cy.visit('https://maax.com/');
    });

    it('should validate the Where to Buy functionality for multiple inputs', () => {
        // Click on the Where to Buy link
        cy.get("a[title='Where to Buy'] span[class='text ']").click();

        // Wait for the Where to Buy page to load
        cy.url().should('include', '/where-to-buy');

        // Verify the presence of the search input
        cy.get('input.mapboxgl-ctrl-geocoder--input').should('be.visible');

        // Enter a location in the search input
        cy.get('input.mapboxgl-ctrl-geocoder--input').type('New York');

        // Click on the search button
        cy.get("button[class='btn btn-primary btn-search'] span[class='icon arrow-right']").click();

        // Enter a location in the search input
        cy.get('input.mapboxgl-ctrl-geocoder--input').type('Chicago');

        // Click on the search button
        cy.get("button[class='btn btn-primary btn-search'] span[class='icon arrow-right']").click();
    });

    it('should validate the Search functionality for given inputs', () => {
        // Verify the presence of the search input
        cy.get('.search-input.form-control').should('be.visible');

        // Click on the search box
        cy.get('.search-input.form-control').click({force : true});

        // Enter search term
        cy.get('.search-input.form-control').type('products', {waitForAnimations: false});

        // Click on the search button
        cy.get("a[class='icon icon-search icon-big']").click();

        // Validate the navigation to search detail page
        cy.title().should('eq', 'Search');
      });
    });
