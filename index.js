const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const AdminProductRouter = require('./routes/admin/products');
const productRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: [ 'HelloUser' ]
	})
);

app.use(authRouter);
app.use(AdminProductRouter);
app.use(productRouter);
app.use(cartsRouter);

app.listen(3004, () => {
	console.log('Listening');
});
