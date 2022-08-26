function invalidEndpoint(req, res){
    res.json({
        "status": false,
        'message': 'Invalid endpoint'
    });
}

module.exports = {
    invalidEndpoint
}