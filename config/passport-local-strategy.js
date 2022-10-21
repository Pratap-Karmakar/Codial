// import passport
const passport=require('passport');

//import passport-local
const LocalStrategy=require('passport-local').Strategy;


// import user
const User = require('../models/user');





// authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email'
    },
    function(email,password,done){
        // fin an user and publish the identity 
        User.findOne({email:email},
            function(err,user){
                if(err){
                    console.log('Error in finding user --> Passport');
                    return done(err);
                }
                if(!user || user.password!= password){
                    console.log('Invalid USername/PAssword');
                    // this return means, that there is no error but no user is found.
                    return done(null,false);
                }
                return done(null,false);
            })
    }
))