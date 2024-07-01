describe ("Testing isFromBellville function", function(){
    it ("it should return true,when it starts with CY", function(){
      
        assert.equal(isFromBellville('CY 123'), true);
    
    });
       it ("it should return false,when it starts with CJ", function(){
        assert.equal(isFromBellville('CJ 123'), false);
    
       });
      });