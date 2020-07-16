require('dotenv').config();
const express = require('express');
const app = express();
const JWT = require('jsonwebtoken');
const mongo = require('./config/mongo');
const User = require('./models/user');
const { check, validationResult } = require('express-validator');
const cors = require('cors')
const passwordHash = require('password-hash');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// POST /api/register
app.post('/api/register', 
[
    check('username').not().isEmpty().withMessage('Username cannot be empty'),
    check('name').not().isEmpty().withMessage('Username cannot be empty'),
    check('username').isLength({min:3, max:20}).withMessage('Username should be between 3-20 characters'),
    check('contact').isLength({min:10, max:10}).withMessage('Contact number should be 10 digits').matches(/^[0][0-9]*$/).withMessage('Contact must be numbers start with 0'),
    check('password').isLength({min: 6}).withMessage('Password must be longer or equal to 6 digits')
]
, (req,res) => {
    const errs = validationResult(req);

    //check and return errors
    if(!errs.isEmpty()){
        let errors = [];
        errs.array().forEach(
            err => errors.push(err.msg)
        )
        res.json({
            message: "fail",
            errors});
        
        return;
    }

    //Create user if correct
    User.create({
        name: req.body.name,
        gender: req.body.gender,
        contact: req.body.contact,
        login: {
            username: req.body.username,
            password: passwordHash.generate(req.body.password)
        }
    })
        .then(
            () => res.json({message: 'success'})
        )
        .catch(
            () => res.sendStatus(403)
        );

});

app.post('/api/login', (req,res) => {
    var username = req.body.username;
    if(!username) res.sendStatus(403);
    
    User.findOne(
        {'login.username': username}
    )
        .then(
            (user) => {
                console.log(username);
                if(user != null && passwordHash.verify(req.body.password, user.login.password)){
                    JWT.sign({user}, process.env.ACCESS_TOKEN_SECRET, (err,token) => {
                        if(err){
                          console.log(err);
                        }
                        res.json({
                          token,
                          message: 'success'
                        });
                    });
                }else{
                    res.json(
                        {
                            message: 'Information unmatched'
                        }
                    )
                }
            }
        )
        .catch(
            (err) => {res.sendStatus(403); console.log(err)}
        );

  });


//catch database connection
mongo.once('open',function(){
    console.log("Database connected successfully.");
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.json(err);
  });

app.listen(4000, ()=> console.log("Auth sever is running on port 4000"))