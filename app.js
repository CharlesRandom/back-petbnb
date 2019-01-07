require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require('cors')
const passport = require('./helpers/passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)


mongoose
  .connect(process.env.DB, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(cors({
  credentials:true,
  origin:['http://localhost:3001']
}))

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  store: new MongoStore({
    mongooseConnection:mongoose.connection,
    ttl:24*60*60
  }),
  secret:process.env.SECRET,
  resave:true,
  saveUninitialized:true,
  cookie:{httpOnly:true,maxAge:60000}
}))

app.use(passport.initialize())
app.use(passport.session())

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Petbnb';



const index = require('./routes/index');
const auth = require('./routes/auth');
const pets = require('./routes/pets');
const addresses = require('./routes/addresses');
const banks = require('./routes/banks');
const hosts = require('./routes/hosts');
const reservations = require('./routes/reservations');
app.use('/', index);
app.use('/auth', auth);
app.use('/pets', pets);
app.use('/addresses', addresses);
app.use('/banks', banks);
app.use('/hosts', hosts);
app.use('/reservations', reservations);


module.exports = app;
