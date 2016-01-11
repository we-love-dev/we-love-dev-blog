var ctrl = {};

ctrl.renderMainPage = function(req, res) {
  res.render('main', {
    pageTitle: 'Baile de favela',
    categories: ['Back-end', 'Front-end', 'Arquitetura', 'Metodologia', 'Mobile', 'Tutoriais']
  });
};

module.exports = ctrl;
