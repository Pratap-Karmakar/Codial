
// we have to exports a function in this file and access this function in the index.js of the routes folder

module.exports.profile=function(req,res){
    return res.end('<h1>User Profile</h1>');
}