module.exports = {
    listenPort:80,//监听端口，如果配合clusterplus监听多个端口，这里也可以使用[3000, 3001, 3002, 3003]数组形式，rrestjs会智能分析
    //cluster配置
    isCluster:true, //是否开启多进程集群
    ClusterNum:1, //开启的进程数
    ClusterReload:'/controller',//只有当进程数为1时，进入开发模式，可以监听此文件夹下的改动，包括子文件夹，不用重复 ctrl+c 和 上键+enter    

    // 静态资源
    autoStatic:'/static',  //自动响应静态文件的uri，比如 http://rrestjs.com/static/rrest.jpg 将会自动响应给客户端，为了加速这里只能设置一级目录
    staticFolder:'/static',  //自动响应静态文件的根目录，比如  http://rrestjs.com/static/rrest.jpg 将返回 baseDir+'/static/rrest.jpg' 
    staticParse:true,//是否开启静态文件压缩整合功能
    staticParseName:'parse',//压缩整合功能的名称，例如用户可以'/static/?parse=/index.body.css|/index.user.css|/user.face.css'压缩整合成一个css响应给客户端
    staticParseCacheTime:1000*60*60,//压缩整合缓存时间，1小时
    staticParseCacheFolder:'/tmp/static',//缓存整合功能的缓存文件夹
    staticParseMaxNumber:10,//整合压缩css或js文件的最大上限，建议不要超过15
    uploadFolder:'/tmp/upload', //文件上传的临时目录
    postLimit:1024*1024*100,//限制上传的postbody大小，单位byte

    //Template
    tempSet:'ejs', //使用哪种页面模版：jade或者ejs
    tempFolder :'/views', //默认读取模版的根目录
    tempHtmlCache:false, //是否开启模版的html缓存，当输出模版需要大量数据库或缓存I/O操作，且实时性要求不高时可以使用

    //mongodb 配置
    isMongodb:true    , //是否开启mongodb支持，注意：如果使用数据库存储session，这里必须开启
    MongodbIp:'127.0.0.1', //mongodb地址
    MongodbPort:27017, //mongodb端口
    MongodbConnectString:false, //是否使用字符串连接，日入nae的连接方法，这个优先级高于地址+端口
    MongodbConnectTimeout:1000*30,//连接超时
    MongodbMaxConnect:50,//连接池连接数
    MongodbDefaultDbName:'rrest',//默认使用的数据库名
    poolLogger:false,//是否记录连接池的日志，建议关闭
}