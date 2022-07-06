function Sum(){
    var amount = document.getElementById('Amount').value; 
    var interest = document.getElementById('Interest').value;
    var month = document.getElementById('Month').value;

    document.getElementById("amount").innerHTML;
   

    document.getElementById("interest1").innerHTML;
   
    document.getElementById("month").innerHTML;


    var totalAmount = (amount * interest)/100 + Number(amount)
    document.getElementById('totalamount').innerHTML = totalAmount + " AZN";
    
    var monthlyPayment = ((amount*(interest/100)) + Number(amount))/month;
    document.getElementById('monthlypayment').innerHTML=monthlyPayment.toFixed(2) + " AZN";
    
    var totalInterest = (amount * interest)/100
    document.getElementById('interest2').innerHTML = totalInterest + " AZN";
    
    
}

 
