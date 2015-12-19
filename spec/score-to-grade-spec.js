
describe('score to grade', function(){

  describe('scoreToGrade(score)',function(){
  
  

    it('when the score is >= 90 and < 100, return S',function(){
        var result = scoreToGrade(95);
        expect(result).toBe('S');
    });

    it('when the score is >= 80 and < 90, return A',function(){
        var result = scoreToGrade(85);
        expect(result).toBe('A');
    });

    it('when the score is >= 70 and < 80, return B',function(){
        var result = scoreToGrade(75);
        expect(result).toBe('B');
    });

    it('when the score is >= 60 and < 70, return C',function(){
        var result = scoreToGrade(65);
        expect(result).toBe('C');
    });

    it('when the score is >= 0 and < 60, return D',function(){
        var result = scoreToGrade(55);
        expect(result).toBe('D');
    });

    it('when the score is > 100, return ERROR',function(){
        expect(function(){scoreToGrade(101);}).toThrowError(RangeError);
    });

    it('when the score is < 0, return ERROR',function(){
        
        expect(function(){scoreToGrade(-1);}).toThrowError(RangeError);
    });

    it('when the score is not a number, return ERROR',function(){
       
        expect(function(){scoreToGrade('C');}).toThrowError(TypeError);
    });


  });

});

