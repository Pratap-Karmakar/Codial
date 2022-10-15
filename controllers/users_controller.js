
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


// TO render the sign_in page

module.exports.signUp = function (req, res) {
    return res.render('user_sign_up', {
        title: "Sign up"
    })
}

// To get the sign up data

module.exports.create = function(req,res){
    
}


// To render the sign_up page

module.exports.signIn = function (req, res) {
    return res.render('user_sign_in', {
        title: "Sign in"
    })
}

// To get the 

module.exports.createSession=function(req,res){
    
}

