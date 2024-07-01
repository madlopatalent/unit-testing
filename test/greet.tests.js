describe ("Testing the greet function", function(){
    it ("it should return hello,Tallent when called with Tallent", function(){
      
      assert.equal(greet('Tallent'), 'Hello, Tallent'), 'this should return true'
    
    });
       it ("it should return hello, Tsakane when called with Tsakane", function(){
         assert.equal(greet('Tsakane'), 'Hello, Tsakane'); 'this should return true'
    
    });
});
