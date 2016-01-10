var ctrl = {};

ctrl.renderMainPage = function(req, res) {
  res.render('main', { title: 'Baile de favela' });
};

module.exports = ctrl;
