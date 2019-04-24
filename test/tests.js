const test = QUnit.test;

function coinToss(number) {
    if(number < .5){
        return 'heads';
    }
}

test('test for <.5 then return heads', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = .49;
    const expected = 'heads';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = coinToss(number);

    //Assert
    assert.equal(result, expected);
});