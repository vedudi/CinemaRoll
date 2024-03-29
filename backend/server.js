const http=require('http');
const getRequest = require('./methods/get-request');
const posRequest = require('./methods/pos-request');
const deleteRequest = require('./methods/delete-request');



const server=http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
   switch (req.method) {
    case 'OPTIONS':
        res.setHeader('Access-Control-Allow-Methods',
        'GET, POST ,PUT, DELETE, PATCH, OPTIONS')
        res.end()
        break;
    case 'GET':
        getRequest(req,res)
        break;
    case 'POST':
        posRequest(req,res)
        break;
    case 'DELETE':
        deleteRequest(req,res)
        break;
   
    default:
        res.statusCode=404
        res.setHeader("Content-Type","application/json")
        res.write(
            JSON.stringify({message:'sayfa bulunamadı'
        }))
    res.end()
        


   }
    
})












const port=5001
server.listen(port,()=>{
    console.log(`${port} e gelen istekler dinlenmeye başlandı`)
})