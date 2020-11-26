function showText(target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

function letterEffect () {
  showText("#letterEffect1","Greetings! My name is Rahul Chawla",0,50);
  delayLetter();  
}

function delayLetter(){
  showText("#letterEffect2"," Problem Solver - Software Developer - Innovator",0,30);
}

 