const { Directory } = require("../../models/v1/directory.model");

async function index(req, res, next) {
    try {
        res.json({'data': await Directory.findAll()});
    } catch (error) {
        next(error)
    }
    return;
}

module.exports = {
    index
}