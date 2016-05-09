var x = +prompt ('Введите число, которое хотите возвести в степень', '');
var n = +prompt ('Введите степень, в которое хотите возвести число', '');

if (!( x % 1 === 0 )) {
  alert ( 'Число ' + x + ' не поддерживается. Введите целое число' );
} else if (!( n % 1 === 0 )) {
  alert('Степень ' + n + ' не поддерживается. Введите целое число или 0');
} else {
  alert ( pow(x, n) );
  console.log ( pow(x, n) );
}

function pow(x, n) {
  var result = x;

 for (var i = 1; i < n; i++) {
   result *= x;
 }

 if (n == 0) {
   result = 1;
 } else if ( n < 0){
   result = 1/x;
 }

 return result;
}
