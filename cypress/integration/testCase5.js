describe('log in to the implementation ', function() {
    it('Test listing state (Issues/open/ASC.Comments)', function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()


        //this while loop is for asc sorting the fields (comment count)
        let beButton = 1;
        while (beButton < 3) {
            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(5) > span')
                .click()
            beButton = beButton + 1


        }


        let nostop = 1;
        while (nostop < 18) {
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

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(5)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.not.match(/00000000000000000000000000000000000000000000000000000000000000000000000000000/)
                }
            )


    })


    it('Test listing state (Issues/open/Desc.Comments)', function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(5) > span')
            .click()


        let nostop = 1;
        while (nostop < 20) {
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

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(5)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.not.match(/000/)
                }
            )


    })





    it('Test listing state (Issues/closed/ASC.Comments) ', function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_tableTop__sfUC_ > div > select')
            .select('closed')


        //this while loop is for asc sorting the fields (comment count)
        let beButton = 1;
        while (beButton < 3) {
            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(5) > span')
                .click()
            beButton = beButton + 1


        }

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
                    expect(m1a).to.match(/CLOSED/)
                }
            )

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(5)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.not.match(/000/)
                }
            )


    })


    it('Test listing state (Issues/closed/Desc.Comments) ', function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_tableTop__sfUC_ > div > select')
            .select('closed')


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(5) > span')
            .click()


        let nostop = 1;
        while (nostop < 18) {
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

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(5)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.not.match(/000/)
                }
            )


    })


    it('Test listing state (Issues/all/ASC.Comments) ', function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_tableTop__sfUC_ > div > select')
            .select('all')


        //this while loop is for asc sorting the fields (comment count)
        let beButton = 1;
        while (beButton < 3) {
            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(5) > span')
                .click()
            beButton = beButton + 1


        }

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

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(5)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.not.match(/0/)
                }
            )


    })


    it('Test listing state (Issues/all/DESC.Comments) ', function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_tableTop__sfUC_ > div > select')
            .select('all')


        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(5) > span')
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

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(5)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.not.match(/000/)
                }
            )


    })


    it('Test listing state  (Pull request/open/ASC.Comments)', function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div:nth-child(2) > div > a:nth-child(2)')
            .click()




        //this while loop is for asc sorting the fields (comment count)
        let beButton = 1;
        while (beButton < 3) {
            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(4) > span')
                .click()
            beButton = beButton + 1


        }


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
                    expect(m1a).to.match(/OPEN/)
                }
            )

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(4)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.not.match(/0/)
                }
            )


    })



    it('Test listing state  (Pull request/open/DESC.Comments)', function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div:nth-child(2) > div > a:nth-child(2)')
            .click()





            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(4) > span')
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
                    expect(m1a).to.match(/OPEN/)
                }
            )

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(4)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.not.match(/000/)
                }
            )


    })




    it('Test listing state (Pull Requests/Closed/ASC.Comments) ', function () {
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


        //this while loop is for asc sorting the fields (comment count)
        let beButton = 1;
        while (beButton < 3) {
            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(4) > span')
                .click()
            beButton = beButton + 1


        }


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

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(4)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.not.match(/000/)
                }
            )


    })




    it('Test listing state (Pull Requests/Closed/DESC.Comments) ', function () {
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


            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(4) > span')
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

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(4)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.not.match(/000/)
                }
            )


    })



    it('Test listing state (Pull Requests/Merged/ASC.Comments) ', function () {
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





        //this while loop is for asc sorting the fields (comment count)
        let beButton = 1;
        while (beButton < 3) {
            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(4) > span')
                .click()
            cy.wait(4400)
            beButton = beButton + 1


        }


        let nostop = 1;
        while (nostop < 2) {
            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_loadMoreWrapper__UNA_a')
                .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.match(/Load more/)
                }).click()
            cy.wait(4000)
            nostop = nostop + 1;

        }

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(3)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.match(/MERGED/)
                }
            )

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(4)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.not.match(/000/)
                }
            )


    })



    it('Test listing state (Pull Requests/Merged/DESC.Comments) ', function () {
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



            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(4) > span')
                .click()




        cy.wait(2000)
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
                    expect(m1a).to.match(/MERGED/)
                }
            )

        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(4)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.not.match(/000/)
                }
            )


    })



    it('Test listing state (Forks/Public/ASC.Stars) ', function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div:nth-child(2) > div > a:nth-child(3)')
            .click()


        cy.wait(2000)
        let beButton = 1;
        while (beButton < 3) {
            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(3) > span')
                .click()
            cy.wait(2000)
            beButton = beButton + 1


        }



        cy.wait(2000)
        let nostop = 1;
        while (nostop < 15) {
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
                    expect(m1a).not.to.match(/000/)
                }
            )


    })



    it('Test listing state (Forks/Public/DESC.Stars) ', function () {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app/issues')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(1) > input[type="text"]')
            .type('341d4160f5292812516c52e9b52f9a2af80f0085')

        cy.get('#root > div > div.styles_searchForm__sTQMH > div:nth-child(2) > input[type=text]')
            .type('facebook/react')

        cy.get('#root > div > div.styles_searchForm__sTQMH > button')
            .click()

        cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div:nth-child(2) > div > a:nth-child(3)')
            .click()


        cy.wait(2000)


            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr > th:nth-child(3) > span')
                .click()
            cy.wait(2000)







        cy.wait(2000)
        let nostop = 1;
        while (nostop < 15) {
            cy.get('#root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > div.styles_loadMoreWrapper__UNA_a')
                .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).to.match(/Load more/)
                }).click()
            cy.wait(2000)
            nostop = nostop + 1;

        }
        // #root > div > div.styles_mainWrapper__2yjmn > div.styles_left__1UOX0 > div.tab-content > table > thead > tr th:nth-child(3)
        cy.get('table[class=styles_table__2oqWN]> tbody > tr td:nth-child(3)')
            .should(function (m1) {
                    var m1a = m1.text()
                    expect(m1a).not.to.match(/000/)
                }
            )


    })

})