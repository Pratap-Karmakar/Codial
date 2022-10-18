const User = require('../models/user');



// // we have to exports a function in this file and access this function in the index.js of the routes folder

// module.exports.profile = function(req,res){
//     // return res.end('<h1>User Profile</h1>');
//     return res.render('users'{
//         title:"anything"
//     });
// }

// we have to exports a function in this file and access in the index.js of the routes folder
module.exports.profile = function (req, res) {
    // return res.end('<h1>Express is up for Codial</h1>')

    return res.render('users', {
        title: "User Profile"
    });
}


// TO render the sign_up page

module.exports.signUp = function (req, res) {
    return res.render('user_sign_up', {
        title: "Sign up"
    })
}

// To get the sign up data

module.exports.create = function (req, res) {
    // if the password and the confirm password are not matched.
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }

    // if the passwords ae same then we try to find the user with the same email id, becasue the email is always unique.
    User.findOne({email: req.body.email},
        function(err,user){
            if(err){
                console.log('Error in finding user in signing up');
                return;
              }

    // when user is not there then create an user.
    if(!user){
        User.create(req.body,
            function(err,user){
                if(err){
                    console.log('Error in createing user while signing up');
                    return res.redirect('/users/sign-in')
                }
            })
    }
    // if user is already present then we redirect to the sign up page.
    else{
        return res.redirect('back');
    }
    });
    
}


// To render the sign_in page

module.exports.signIn = function (req, res) {
    return res.render('user_sign_in', {
        title: "Sign in"
    })
}

// To get the sign in data

module.exports.createSession = function (req, res) {

}

