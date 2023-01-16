//npm i express express-handlebars express-sessions mysql express-mysql-session morgan bcryptjs passport passport-local timeago.js connect-flash express-validator method-override
const express = require("express");
const morgan=require("morgan");
const exphbs=require("express-handlebars"); 
const path=require('path');
const methodOverride=require('method-override');
//#region Initializations
const app=express();
//#endregion
//#region Settings
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs',
    helpers:require('./lib/handlebasrs')
}));
app.set('view engine','.hbs');
//#endregion

//#region Midelware

app.use(morgan('dev'));
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//#endregion

//#region Global Variables
app.use((req,res,next)=>{
    next();
});
//#endregion

//#region Routes
app.use(require("./routes/index"));
app.use('/links',require("./routes/links"));
//#endregion


//#region Public
    app.use(express.static(path.join(__dirname,'public')));
//#endregion

//#region Server
app.listen(app.get('port'),()=>{
    console.log("Server on Port",app.get('port'));
})
//#endregion