describe ("Testing the allFromTown function", function(){
    it ("It should return all the registration numbers in the string that are from Stellies,when called with 'CJ'.", function(){
      
        assert.deepEqual(fromStellies, ['CJ 456']);
    
    });
       it ("It should return all the registration numbers in the string that are from Stellies,when called with 'CL'. ", function(){
        assert.deepEqual(fromStellies, ['CJ 456']);
           
       });
      
       it ("It should return all the registration numbers in the string that are from Kuilsriver,when called with 'CF'", function(){
        assert.deepEqual(fromKuilsriver, []);
      });
    });