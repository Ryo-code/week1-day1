function reverse(word){
  var backWord = "";
  for (var i = word.length -1; i >= 0; i--) {
    backWord += word[i];
  }
  return backWord
}

var input = process.argv;
for (var i = 2; i < input.length; i++){
  console.log(reverse(input[i]) )
}

