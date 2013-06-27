module.exports.conf = require('./config/config');
var http = require('http'),
    rrest = require('rrestjs'),
    server = http.createServer(function (req, res){
        try{
            var path = req.url.split("?")[0]
               ,pathLength = path.length

            if(path=="/"){
                require('./controller/index').index(req, res);
            }else if(path[pathLength-1]=="/"){
                path += "index";
                require('./controller'+path).index(req, res);
            }else{
                var pathList = path.split(".");
                var lastPath = pathList.splice(pathList.length-1)[0];
                path = pathList.join(".");
                require('./controller'+path).index(req, res);
            }
        }
        catch(err){
            restlog.info(req.path.join('/')+'; '+err)
            res.r404();
        }
    }).listen(rrest.config.listenPort);

_rrest = rrest; //全局变量


