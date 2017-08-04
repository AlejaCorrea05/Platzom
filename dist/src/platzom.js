'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var traslation = str;
  //Si la palabra termina en "ar", se le quitan esos dos caracteres

  //endsWith sirve para leer los ultimos caracteres de una palabra
  //toLowerCase sirve para convertir la minuscula a mayuscula
  //toUpperCase sirve para convertir la mayuscula a minuscula
  if (str.toLowerCase().endsWith('ar')) {
    //slice permite quitar caracteres de un string, en este caso empieza en 0 y quita los ultimos dos 'ar'
    traslation = str.slice(0, -2);
  }
  //Si la palabra inicia con Z, se le pone "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    traslation += "pe";
  }
  //Si la plabra traducida tiene 10 o mas letras,
  //se debe partir a la mitad y unir con un guion.
  var length = traslation.length;
  if (length >= 10) {
    //length es la longitud de la palabra
    var firstHalf = traslation.slice(0, Math.round(length / 2));
    var secondHalf = traslation.slice(Math.round(length / 2));
    traslation = firstHalf + '-' + secondHalf;
  }
  //Si la palabra original es un palindromo
  //ninguna regla anterior cuenta y se devuelve
  //la misma palabra intercalando mayusculas y minusculas

  //split divide un palabra en caracteres ej: "ale".split('')
  //reverse invierte los caracteres divididos
  //join junta los caracteres invertidos y los vuelve una palabra
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var length = str.length; //longitud de la palabra
    var translation = '';
    var capitalize = true; //Si es true se vuelve mayuscula sino minuscula
    for (var i = 0; i < length; i++) {
      //recorre la longitud de la palabra
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }
  if (str == reverse(str)) {
    return minMay(str);
  }
  return traslation;
}