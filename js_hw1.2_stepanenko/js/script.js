var userName = [];

for (var i = 0; i < 5; i++) {
  var name = prompt ('Введите имя пользователя', '');
  userName.push (name);
}

var loginName = prompt ('Введите Ваше имя', '');

var matchedName = 0;

for (var n = 0; n < userName.length; n++) {
  if (loginName === userName[n]) {
    matchedName = loginName;
  }
}

if (loginName !== matchedName) {
  alert ('Доступ запрещен');
} else {
  alert (loginName + ', вы успешно вошли');
}


// for (var i = 0; i < 5; i++) {
//  console.log(names.indexOf(a))
// }
