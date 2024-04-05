var i = 0;

var txt1 =

  "Hello My Sweetheart❤️.....!  <<               Now I wan't to say something special to you.     > I Don't know whether this Surprise makes u happy    ...!                                                                           > i think i have the best girlfriend <  > Sorry Best Soulmate in the World with the cutest smile,prettiest eyes,finest voice,gorgeous lips,and most adorable personality > U Have a Special Place in my heart ....! << Nobody Can Stole it  ...!                                                     > You are the only person whom i love after my parents...!                     <<Lastly i want to say something For us...!                                                                         >if we have tough situations lets face it together🫂 > if we have any fights will stay and fix it and let be succeeded Together in Life💞  >let'prove that love and career both can be acheived with right person U And Me ...!>                                                 >I Love U <Bujjulu Ummmmah😘😘.....! |                  <<<< ...!   by Sravan";
var speed = 72;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}