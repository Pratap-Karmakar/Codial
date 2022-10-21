const User = require('../models/user');


// we have to exports a function in this file and access in the index.js of the routes folder
module.exports.profile = function (req, res) {
    if(req.cookies.user_id){
        // if there is a users-id already exist then we find that user and either redirect him to the user-profile page other wise redirect him to the sign-in page.
        User.findById(req.cookies.user_id),
        function(err,user){
            // if user is found the we redirect him to the profile page.
            if(user){
                return res.render('user_profile',{
                    title:"User Profile",
                    user:user
                })
            }
            // if user is not fund the we redirect him to the sign-in page.
            else{
                return res.redirect('/users/sign-in');
            }
        }
    }
    else{
        return res.redirect('/users/sign-in');
    }
}





// TO render the sign_up page

module.exports.signUp = function (req, res) {
    return res.render('user_sign_up', {
        title: "Sign up"
    })
}

// To get the sign up data

module.exports.create = function (req, res) {
    console.log('at line 35');
    console.log(req.body);
    // if the password and the confirm password are not matched.
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }

    // if the passwords ae same then we try to find the user with the same email id, becasue the email is always unique.
    User.findOne({ email: req.body.email },function (err, user) {
            console.log('user1', user)
            if (err) {
                console.log('Error in finding user in signing up');
                return;
            }

            // when user is not there then create an user.
            if (!user) {
                console.log('req.body', req.body)
                User.create(req.body,function (err, user) {
                        if (err) {
                            console.log('Error in createing user while signing up');
                            return;
                        }
                        return res.redirect('/users/sign-in');
                    })
            }
            // if user is already present then we redirect to the sign up page.
            else {
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


module.exports.createSession = function(req, res){

    // steps to authenticate
    // find the user
    User.findOne({email: req.body.email}, 
        function(err, user){
        if(err)
        {
            console.log('error in finding user in signing in'); 
            return
        }

        // handle user found
        if (user){
            // handle password which doesn't match
            if (user.password != req.body.password){
                return res.redirect('back');
            }

            // handle session creation
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');
            }
        else{
             // handle user not found
             return res.redirect('back');
            }
        });    
}
