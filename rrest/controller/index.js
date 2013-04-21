var home = {},
    http = require('http'),
    mongo = _rrest.mongo;//连接mongo数据库方法

function getMsg(callback){
    var returnMsg;
    mongo(function(err,db,release){//操作mongodb数据库
        if(err)return;
        db.collection("test",function(err, col){
            if(err) return release();
            /*db.collection('users',function(err,collection){
                var doc = {'first_name':'tom','last_name':'lai'};
                var doc2 = {'first_name':'tom_test','last_name':'lai_test'};
                collection.insert(doc);
                collection.insert(doc2);            
            });
            
            db.collection('users',function(err,collection){
                var query_doc = {'first_name':'tom'};            
                collection.update(query_doc,{'$set':{'age':26}},upsert=true,multi=true);
            });
            
            db.collection('users',function(err,collection){
                var query_doc = {'first_name':'tom_test'};
                collection.remove(query_doc);           
            });
            
            db.collection('users',function(err,collection){
                var query_doc = {'first_name':'tom'};
                collection.findOne(query_doc,function(err,item){
                    console.log(item['first_name']);
                    console.log(item['last_name']);
                    console.log(item['age']);
                    console.log(item.first_name);
                    console.log(item.last_name);
                    console.log(item.age);
                });
            });*/
            var cursor = col.find({'first_name':"tom"})
            cursor.toArray(function(err,results){
                http.get('http://10.20.159.92:8080/rpc/userQuery/getUser.json?account=kai.fangk',function(res){
                    res.on('data', function(d) {
                        callback(err,results,JSON.parse(d.toString('utf8', 0, d.length)))
                    });
                })
            })
        })
    })
    return returnMsg;
}

home.index = function(req, res){
    var param = req.getparam['param']||"param";
    getMsg(function(err,results,ress){
        res.render('/index.ejs',{pagetitle:param,supplies:results,ress:ress});
    });
    return;
}

module.exports = home;