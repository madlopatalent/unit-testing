describe ("Testing the mostProfitableDepartment function", function(){
    it ("it should return the name of the most profitable department from sales data'", function(){
        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");
    });
      it ("it should return the name of the most profitavle day from sales data'", function(){
        assert.equal('Thursday', mostProfitableDay(salesData), "Most profitable day is 'Thursday' for dataset 2");
 
    });
});