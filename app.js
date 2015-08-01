var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var db = require('./config/db');

/* Config API */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Config Web Site */
app.use('/public', express.static('public'));
app.engine('handlebars', exphbs({ defaultLayout: 'index' }));
app.set('view engine', 'handlebars');


/* MOCK */
var posts = [];
var post = {
	title:'Esboçando ideias',
	subTitle: 'do papel ao Desenvolvimento',
	date: '15 de agosto de 2015',
	picture: { src : '/public/img/articles/article-1.jpg', alt: 'Descrição da imagem' },
	author: { 
		name: 'Renan Johannsen de Paula', 
		picture: { src : '/public/img/authors/1.png', alt:'Imagem do autor Renan Johannsen de Paula' } 
	},
	tags: [ { name: 'Development' }, { name: 'Node' } ]
};
posts.push(post);
posts.push(post);
posts.push(post);
posts.push(post);


app.get("/", function(req, res) {
	res.render('main', { 
		title : 'We Love Dev',
		description: 'Development blog!',
		keyWords: ['blog', 'development', 'web', 'front-end', 'back-end', 'developer', 'html', 'html5',
			'css', 'css3', 'javascript', 'nodejs', 'nosql', 'java', 'sql', 'web design', 'ux', 'ui', 'tutorial'],
		posts: posts
	});
});

module.exports = app;