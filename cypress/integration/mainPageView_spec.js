describe ('Main Page View', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
      });

      it('Should have a 201 status code', () => {
            cy.intercept(
              {
                  method: "GET",
                  url: "https://www.rijksmuseum.nl/api/en/collection?key=SkU9wRGq&f.normalized32Colors.hex=%20%23981313"
              }, 
              {
                  status: 201,
                //   body: [{
                //       name: "Lourdes",
                //       date: "07/22",
                //       time: "6:00pm", 
                //       number: 2,
                //       id: 1
                //   }]
              }
            
    ) });
  
    it("Should show the user a page title", () => {
      cy.get('h1').contains('Paint By')
      cy.get('span').contains('(hex)')
      cy.get('span').contains('Numbers')
    });

    it("Should be able to click on the title to reload the page", () => {
      cy.get('h1').contains('Paint By')
      cy.get('span').contains('(hex)')
      cy.get('span').contains('Numbers').click()
    });

    it("Should have a favorites view section", () => {
      cy.get('a').contains('My Favs')
    });

    it("Should be able to click on favorites view section", () => {
      cy.get('a').contains('My Favs').click()
    });

    it("Should have an aside", () => {
        cy.get("aside").should("have.class", "palette-container");
        cy.get('p').should('have.class', 'select-color')
      });

    it("Should have a color palette", () => {
      cy.get("div").should("have.class", "swatches-picker");
    });
    
    it("Should be able to click a color swatch", () => {
      cy.get("div").should("have.class", "each-color-swatch")
      cy.get('div[title*="#981313"]').click()
    });

    it("Should load images after clicking on a swatch", () => {
      cy.get('div[title*="#981313"]').click()
      cy.get('img').should('have.attr', 'src', 'https://lh5.ggpht.com/JH0svNh0Pkov_W97MDHw8v2-qKS8AdixVJ-CiPL_xBECNdEyTBkicMvZBsqgW6GQ0TB9moKnfGUYacWQS32rqeoEjA4=s0')
    });

    it("Should be able to get more information for each image", () => {
      cy.get('div[title*="#981313"]').click()
      cy.get('img').should('have.attr', 'src', 'https://lh5.ggpht.com/JH0svNh0Pkov_W97MDHw8v2-qKS8AdixVJ-CiPL_xBECNdEyTBkicMvZBsqgW6GQ0TB9moKnfGUYacWQS32rqeoEjA4=s0')
      cy.get('h3').contains('The Massacre of the Innocents')
    });

    it("Should be able to click on the Add to Favorites Button", () => {
      cy.get('div[title*="#981313"]').click()
      cy.get('img').should('have.attr', 'src', 'https://lh5.ggpht.com/JH0svNh0Pkov_W97MDHw8v2-qKS8AdixVJ-CiPL_xBECNdEyTBkicMvZBsqgW6GQ0TB9moKnfGUYacWQS32rqeoEjA4=s0')
      cy.get('h3').contains('The Massacre of the Innocents')
      cy.get('button').contains('Add to Favorites').click()
    });

  });
  