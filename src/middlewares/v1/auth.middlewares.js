function auth(req, res, next){
    if(false){
        next()
    }
    else{
        res.json({'message': 'Unauthorize user'});
    }
}

module.exports = {
    auth
}