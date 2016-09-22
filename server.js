var http = require('http');
var url = require('url');
//设置焦点图
var colors = [
  'blue','yellow','red'
];
//设置用户信息
var user = {name:'admin',password:'admin',id:1,sex:'男',birthday:'3211233211231',address:'西三旗清河桥北'};

http.createServer(function (req,res) {
  //设置跨域头
      res.setHeader('Access-Control-Allow-Origin','*');
      res.setHeader('Access-Control-Allow-Headers','Content-Type');
      res.setHeader('Access-Control-Request-Method','POST,GET,OPTIONS');

      var urlObj = url.parse(req.url,true);
      var pathname = urlObj.pathname;
      if(pathname=='/slide'){
          res.end(JSON.stringify(colors));
      }else if(pathname=='/log'){
        var method  = req.method;
        if(method =='POST'){
          var result = '';
          req.on('data',function (data) {
            result+=data;
          });
          req.on('end',function () {
            var u = JSON.parse(result);
            if(user.name == u.username&&user.password==u.password){
              res.end(JSON.stringify({success:true,data:user}))
            }else{
              res.end(JSON.stringify({success:false}))
            }
          })
        }else{
          res.end('');
        }
      }else if(pathname=='/productList'){

      }



}).listen(3000);
