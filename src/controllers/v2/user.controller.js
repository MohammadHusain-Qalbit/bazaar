const { Directory } = require("../../models/v1/directory.model");

async function index(req, res, next) {
    res.json({'data': await Directory.findAll({
        
    })});
}

module.exports = {
    index
}