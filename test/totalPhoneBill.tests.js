describe("Testing the totalPhoneBill function", function () {
  it("it should return R7.45,when it is called with a 'call, sms, call, sms, sms'", function () {
    assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));

  });
  it("it should return R3.40,when it called with a 'call, sms'", function () {
    assert.equal('R3.40', totalPhoneBill('call, sms'));

  });
  it("should return R0 for an empty string", function () {
    assert.equal(totalPhoneBill(''), 'R0.00');
  });
});