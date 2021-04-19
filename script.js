// on click button
function compute() {
  var principal = document.getElementById('principal').value;

  //Check if principal field greater than zero
  if ((parseInt(principal) <= 0) || (principal == '')) {
    alert('Enter a positive number');
    document.getElementById('principal').focus();
    document.getElementById('result').innerHTML = '';
    return;
  }

  var rate      = document.getElementById('rate').value;
  var years     = document.getElementById('years').value;
  var interest  = principal * years * rate / 100;
  var year      = new Date().getFullYear() + parseInt(years);
  document.getElementById('result').innerHTML = '<p>If you deposit <mark>' + principal + ',</mark></br>at an interest rate of <mark>' + rate + '%.' + '</mark></br>You will receive an amount of <mark>' + interest + ',</mark></br>in the year <mark>' + year + '.</mark></p>';
  return true;
}

//show slide value
function updateRate() {
  var rateval = document.getElementById('rate').value;
  document.getElementById('rate_val').innerText = rateval + '%';
}
