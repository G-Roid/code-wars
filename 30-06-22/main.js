// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Tests
    // assert.strictEqual(correct("L0ND0N"),"LONDON");
    // assert.strictEqual(correct("DUBL1N"),"DUBLIN");
    // assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
    // assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
    // assert.strictEqual(correct("PAR15"),"PARIS");

    function correct(string)
    {
        let result = ''
        for(let i = 0; i < string.length; i++) {
            if(string[i] == '5' || string[i] == '0' || string[i] == '1') {
                if(string[i] === '5') result += 'S';
                if(string[i] === '0') result += 'O';
                if(string[i] === '1') result += 'I';
            }
            else {
                result += string[i]
            }
        }
        return result
    
    }