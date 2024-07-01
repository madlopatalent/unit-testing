describe('test from where', function () {
it('should return "Bellvile" when called with "CY"', function () {
    assert.equal(fromWhere('CY 567489'), 'Bellville');
    });
it('should return "Paarl" when called with "CJ"', function () {
    assert.equal(fromWhere('CJ 343502'), 'Paarl');
        });
it('should return "Cape Town" when called with "CA"', function () {
    assert.equal(fromWhere('CA 987504'), 'Cape Town');
        });
it('should return "some other place" when called with "ZN"', function () {
    assert.equal(fromWhere('ZN 568593'), 'Some other place!');
        });
});

