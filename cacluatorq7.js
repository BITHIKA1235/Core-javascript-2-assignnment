const calculator={
    add:function(a,b){
        return a+b;
    },
        subtract:function(a,b){
            return a-b;
        },
        multiply:function(a,b)
        {
            return a*b;
        },
        calculate:function(operation,a,b){
            if(operation ==='add'){
                return this.add(a,b);
            }
            else if(operation ==='subtract'){
                return this.multiply(a,b);
            }
        },
    };
    const additionResult=calculator.calculate.call(calculator,'add',5,3);
    console.log(`Addition Result:  ${additionResult}`)
    const multiplicationResult=calculator.calculate.apply(calculator,['multiply',4,2]);
    console.log(`Multiplication Result:  ${multiplicationResult}`)
    const discountCalculator={
        discountPercentage:10,
        applyDiscount:function(amount)
        {
            return amount-(amount*this.discountPercentage)/100;
        },
    }
    const calculateDiscount=discountCalculator.applyDiscount.bind(discountCalculator);
    const discountedAmount=calculateDiscount(100);
    console.log(`DiscountedAmount:${discountedAmount}`);
    
