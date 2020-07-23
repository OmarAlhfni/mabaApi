'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Products', [{
      name: 'Julian Campbell',
      title: "Sit dolor culpa non",
      subTitle: "Nisi reprehenderit o",
      description: "Voluptatem in perspi Et vel id sint ut ip Aute aut possimus q Consectetur vitae pl Voluptatem in perspi Et vel id sint ut ip Aute aut possimus q Consectetur vitae pl",
      price: 438,
      image: "https://5.imimg.com/data5/VN/IU/MY-4314391/school-bags-500x500.jpg",
      CategoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Kiona Murphy',
      title: "Ullamco accusamus iu",
      subTitle: "Non sunt dolores per",
      description: "Voluptatibus volupta Et vel id sint ut ip Aute aut possimus q Consectetur vitae pl Voluptatem in perspi Et vel id sint ut ip Aute aut possimus q Consectetur vitae pl",
      price: 448,
      image: "https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SX425_.jpg",
      CategoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Brenda Soto',
      title: "Fugit maxime numqua",
      subTitle: "Debitis est aute nat ",
      description: "Aspernatur vero mole Voluptatibus volupta Et vel id sint ut ip Aute aut possimus q Consectetur vitae pl Voluptatem in perspi Et vel id sint ut ip Aute aut possimus q Consectetur vitae pl",
      price: 448,
      image: "https://images-na.ssl-images-amazon.com/images/I/61aMSAaIGSL._AC_SL1001_.jpg",
      CategoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jessica Chandler',
      title: "Aperiam iusto labori",
      subTitle: "Iste et sit quia di ",
      description: "Eiusmod hic consequa id sint ut ip Aute aut possimus q Consectetur vitae pl Voluptatem in perspi Et vel id sint ut ip Aute aut possimus q Consectetur vitae pl",
      price: 924,
      image: "https://images-na.ssl-images-amazon.com/images/I/710L9C4sGpL._AC_SL1500_.jpg",
      CategoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
