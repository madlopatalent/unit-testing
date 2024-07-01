describe ("Testing the allPaarl function", function(){
    it ("it should return number and a statement there are 'number' and 'statement',when called with many registration number", function(){
      
      assert.equal(2, regNumbersForPaarl.length, 'This should return there are 2 Paarl reg numbers.')
    
    });
       it ("it should return a number of registration from Paarl when called with many registration numbers, ", function(){
        assert.equal('CJ 67890', regNumbersForPaarl[1]);
           
       });
      
       it ("it should return 0 when there is no registration number from Paarl, ", function(){
        assert.equal('CJ 678 543', regNumbersForPaarl[0]);

      });
    });