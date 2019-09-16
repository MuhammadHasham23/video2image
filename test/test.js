const assert = require('assert');
const http = require('http');
describe('Server is starting',function() {
  const server = http.createServer();
  it('should be listening at port 3000',(done)=>{
    server.listen(3000,()=>{
      done();
    })
  })
})