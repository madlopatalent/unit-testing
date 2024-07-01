describe('Test Registration Numbers', function () {
it("it should return number of registration numbers" , function () {
    var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    })});
