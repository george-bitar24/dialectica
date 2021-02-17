describe('log in to the implementation ', function() {
    it('Log in with wrong Github token',function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')
        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
          .type('341d4160f5292812516c52e9b52f9a2af80f0080')
      //  .should('have.value','341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
          .type('facebook/react')
      //  .should('have.value','facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
          .click()

    })

    it('Log in with correct token and wrong Repository identifier',function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')
        //  .should('have.value','341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/java')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
          .click()
        cy.get('#root > div > div:nth-child(3) > div > h2').contains('No repo found. Make sure you have entered a correct identifier.')

    })

    it('Test the Star to Unstar functionality',function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
          .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
          .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
          .click()


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.styles_basicInfo__2HeY0 > div > button > span')
          .should(function (div) {
            const texto = div.text()

            expect(texto).to.match(/Star/)


        })

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.styles_basicInfo__2HeY0 > div > span')
            .should( function (numb) {
                var  noumero = numb.text()
                Cypress.env('noumero',numb.text())
            })



        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.styles_basicInfo__2HeY0 > div > button')
          .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.styles_basicInfo__2HeY0 > div > button > span')
           .should(function (div2) {
            const text2 = div2.text()

            expect(text2).to.match(/Unstar/)

        })




        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.styles_basicInfo__2HeY0 > div > span')
            .should( function (numb) {
                var noumero2 = numb.text()
                expect(Cypress.env('noumero')).to.equal(noumero2-1)
            })
        })





    it('Test the Unstar to Star functionality',function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.styles_basicInfo__2HeY0 > div > button > span')
            .should(function (div) {
                const texto = div.text()

                expect(texto).to.match(/Unstar/)


            })

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.styles_basicInfo__2HeY0 > div > span')
            .should( function (numb) {
                var  noumero = numb.text()
                Cypress.env('noumero',numb.text())
            })



        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.styles_basicInfo__2HeY0 > div > button')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.styles_basicInfo__2HeY0 > div > button > span')
            .should(function (div2) {
                const text2 = div2.text()

                expect(text2).to.match(/Star/)

            })

        //In this part i have tried to verifie the count of star reacts after the star button clicked

        // cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.styles_basicInfo__2HeY0 > div > span')
        //     .should( function (numb) {
        //         var noumero2 = numb.text()
        //         expect(Cypress.env('noumero')).to.equal((noumero2)+1)
        //     })
    })

    it('Test the existence of the columns at each section',function (){
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
                .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(1) > span')
            .should(function(m1)
          {
                var m1a = m1.text()
                expect(m1a).to.match(/#/)
          })

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(2) > span')
            .should(function(m1)
            {
                var m1a = m1.text()
                expect(m1a).to.match(/Title/)
            })


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(3) > span')
            .should(function(m1)
            {
                var m1a = m1.text()
                expect(m1a).to.match(/Author/)
            })


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(4) > span')
            .should(function(m1)
            {
                var m1a = m1.text()
                expect(m1a).to.match(/State/)
            })


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(5) > span')
            .should(function(m1)
            {
                var m1a = m1.text()
                expect(m1a).to.match(/Comments/)
            })


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div:nth-child(2) > div > a:nth-child(2)')
          .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(1) > span')
            .should(function(m1)
            {
                var m1a = m1.text()
                expect(m1a).to.match(/Title/)
            })

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(2) > span')
            .should(function(m1)
            {
                var m1a = m1.text()
                expect(m1a).to.match(/Author/)
            })

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(3) > span')
            .should(function(m1)
            {
                var m1a = m1.text()
                expect(m1a).to.match(/State/)
            })

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(4) > span')
            .should(function(m1)
            {
                var m1a = m1.text()
                expect(m1a).to.match(/Comments/)
            })

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(5) > span')
            .should(function(m1)
            {
                var m1a = m1.text()
                expect(m1a).to.match(/Created/)
            })



        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div:nth-child(2) > div > a:nth-child(3)')
          .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(1) > span')
            .should(function(m1)
            {
                var m1a = m1.text()
                expect(m1a).to.match(/Description/)
            })


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(2) > span')
          .contains('Owner / name')

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(3) > span')
            .should(function(m1)
            {
                var m1a = m1.text()
                expect(m1a).to.match(/Stars/)
            })

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(4) > span')
            .should(function(m1)
            {
                var m1a = m1.text()
                    expect(m1a).to.match(/Created/)
            })


    })

    it('Test listing state (default state by TAB and options) ',function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
          .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
          .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_tableTop__sfUC_ > div > select')
          .should('have.value','open')


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_tableTop__sfUC_ > div > select > option:nth-child(2)')
            .should(function(m1)
            {
                var m1a = m1.text()
                expect(m1a).to.match(/Closed/)
            })

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_tableTop__sfUC_ > div > select > option:nth-child(3)')
            .should(function(m1)
            {
                var m1a = m1.text()
                expect(m1a).to.match(/All/)
            })




        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div:nth-child(2) > div > a:nth-child(2)')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_tableTop__sfUC_ > div > select')
            .should('have.value','open')

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_tableTop__sfUC_ > div > select > option:nth-child(2)')
            .should(function(m1)
            {
                var m1a = m1.text()
                expect(m1a).to.match(/Closed/)
            })

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_tableTop__sfUC_ > div > select > option:nth-child(3)')
            .should(function(m1)
            {
                var m1a = m1.text()
                expect(m1a).to.match(/Merged/)
            })

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div:nth-child(2) > div > a:nth-child(3)')
          .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_tableTop__sfUC_ > div > select')
            .should('have.value','public')

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_tableTop__sfUC_ > div > select > option:nth-child(3)')
            .should(function(m1)
            {
                var m1a = m1.text()
                expect(m1a).to.match(/ /)
            })

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_tableTop__sfUC_ > div > select > option:nth-child(2)')
            .should(function(m1)
            {
                var m1a = m1.text()
                expect(m1a).to.match(/ /)
            })

    })




    })





