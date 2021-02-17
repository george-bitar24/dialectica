describe('log in to the implementation ', function() {
    it('Test listing state (Issues/open/ASC.createdDate)', function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(6) > span')
            .click()


        let nostop = 1;
        while (nostop < 10) {
            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_loadMoreWrapper__UNA_a')
                .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.match(/Load more/)
                }).click()
            cy.wait(2000)
            nostop = nostop + 1;


        }
        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(4)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.match(/OPEN/)
                }
            )


        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(6)').each(($e1, index) => {
                const text12 = $e1.text()

                cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(6)').eq(index + 1)
                    .then(function (bname) {
                        const $e2 = bname.text()
                        expect($e2).to.be.greaterThan(text12)

                    })


            }
        )


    })


    it('Test listing state (Issues/closed/ASC.createdDate) ', function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_tableTop__sfUC_ > div > select')
            .select('closed')


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(6) > span')
            .click()


        let nostop = 1;
        while (nostop < 5) {
            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_loadMoreWrapper__UNA_a')
                .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.match(/Load more/)
                }).click()
            cy.wait(2000)
            nostop = nostop + 1;

        }

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(4)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.match(/CLOSED/)
                }
            )


        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(6)').each(($e1, index) => {
                const text12 = $e1.text()

                cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(6)').eq(index + 1)
                    .then(function (bname) {
                        const $e2 = bname.text()
                        expect($e2).to.be.least(text12)

                    })


            }
        )

    })


    it('Test listing state (Issues/all/ASC.createdDate) ', function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_tableTop__sfUC_ > div > select')
            .select('all')


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(6) > span')
            .click()


        let nostop = 1;
        while (nostop < 30) {
            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_loadMoreWrapper__UNA_a')
                .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.match(/Load more/)
                }).click()
            cy.wait(2000)
            nostop = nostop + 1;

        }

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(4)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.match(/OPEN/)
                }
            )

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(6)').each(($e1, index) => {
                const text12 = $e1.text()

                cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(6)').eq(index + 1)
                    .then(function (bname) {
                        const $e2 = bname.text()
                        expect($e2).to.be.least(text12)

                    })


            }
        )


    })


    it('Test listing state (Pull Requests/open/ASC.createdDate) ', function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div:nth-child(2) > div > a:nth-child(2)')
            .click()


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(5) > span')
            .click()


        let nostop = 1;
        while (nostop < 6) {
            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_loadMoreWrapper__UNA_a')
                .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.match(/Load more/)
                }).click()
            cy.wait(2000)
            nostop = nostop + 1;

        }

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(3)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.match(/OPEN/)
                }
            )


        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(5)').each(($e1, index) => {
                const text12 = $e1.text()

                cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(5)').eq(index + 1)
                    .then(function (bname) {
                        const $e2 = bname.text()
                        expect($e2).to.be.least(text12)

                    })


            }
        )

    })


    it('Test listing state (Pull Requests/Closed/ASC.CreatedDate) ', function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div:nth-child(2) > div > a:nth-child(2)')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_tableTop__sfUC_ > div > select')
            .select('closed')


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(5) > span')
            .click()


        let nostop = 1;
        while (nostop < 2) {
            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_loadMoreWrapper__UNA_a')
                .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.match(/Load more/)
                }).click()
            cy.wait(2000)
            nostop = nostop + 1;

        }

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(3)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.match(/CLOSED/)
                }
            )

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(5)').each(($e1, index) => {
                const text12 = $e1.text()

                cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(5)').eq(index + 1)
                    .then(function (bname) {
                        const $e2 = bname.text()
                        expect($e2).to.be.least(text12)

                    })


            }
        )


    })


    it('Test listing state (Pull Requests/Merged/ASC.CreatedDate) ', function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div:nth-child(2) > div > a:nth-child(2)')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_tableTop__sfUC_ > div > select')
            .select('merged')


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(5) > span')
            .click()


        cy.wait(2000)
        let nostop = 1;
        while (nostop < 5) {
            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_loadMoreWrapper__UNA_a')
                .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.match(/Load more/)
                }).click()
            cy.wait(2000)
            nostop = nostop + 1;

        }

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(3)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.match(/MERGED/)
                }
            )

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(5)').each(($e1, index) => {
                const text12 = $e1.text()

                cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(5)').eq(index + 1)
                    .then(function (bname) {
                        const $e2 = bname.text()
                        expect($e2).to.be.least(text12)

                    })


            }
        )

    })


    it('Test listing state (Forks/Public/ASC.CreatedDate) ', function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div:nth-child(2) > div > a:nth-child(3)')
            .click()


        cy.wait(4000)


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(4) > span')
            .click()
        cy.wait(6000)


        let nostop = 1;
        while (nostop < 10) {
            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_loadMoreWrapper__UNA_a')
                .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.match(/Load more/)
                }).click()
            cy.wait(2000)
            nostop = nostop + 1;

        }

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(4)').each(($e1, index) => {
                const text12 = $e1.text()

                cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(4)').eq(index + 1)
                    .then(function (bname) {
                        const $e2 = bname.text()
                        expect($e2).to.be.least(text12)

                    })


            }
        )

    })


})