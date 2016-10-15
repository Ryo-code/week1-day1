function obfuscate(password){
  var newPassword = "";
  for (var i = 0; i < password.length; i++) {
    var character = password.charAt(i);

    if(character == "a"){
      newPassword += 4
    }else if(character == "e"){
      newPassword += 3
    }else if(character == "o"){
      newPassword += 0
    }else if(character == "l"){
      newPassword += 1
    }else{
      newPassword += character
    }

  }
  return newPassword
}

var input = process.argv;
console.log(obfuscate(input[2]))

could also say "var password = process.argv[2];" ... I think
