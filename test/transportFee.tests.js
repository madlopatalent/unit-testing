describe('test transport fee', function () {
    it('should return "morning" when called with "R20"', function () {
        assert.equal(transportFee('morning'), 'R20');
    });
    it('should return "afternoon" when called with "R10"', function () {
        assert.equal(transportFee('afternoon'), 'R10');

    });
    it('should return "free" when called with "nightshift"', function () {
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});
