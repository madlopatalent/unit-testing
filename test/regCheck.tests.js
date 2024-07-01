describe("Testing the regCheck function", function () {
    it("it should return true,when it ends with GP", function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
        assert.equal(regCheck('5566 L', 'L'), true);
        assert.equal(regCheck('5566 L', 'M'), false);
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });
it("should return false for empty registration or location", function () {
    assert.equal(regCheck('', 'GP'), false)
    });
});
