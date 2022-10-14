// we have to exports a function in this file and access in the index.js of the routes folder
module.exports.home = function (req, res) {
    // return res.end('<h1>Express is up for Codial</h1>')

    return res.render('home', {
        title: "home"
    });
}
