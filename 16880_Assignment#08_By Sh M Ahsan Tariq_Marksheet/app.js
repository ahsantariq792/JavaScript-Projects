n = prompt("Enter Your Name")
rno = +prompt("Enter Your Roll No")

alert("press OK to start entering your marks (out of 100)")

e = +prompt("Enter Your Marks in English")
m = +prompt("Enter Your Marks in Maths")
p = +prompt("Enter Your Marks in Physics")
c = +prompt("Enter Your Marks in Chemistry")
cmp = +prompt("Enter Your Marks in Computer")


maxmarks=500
sum = e + m + p + m + cmp
percent=(sum/500)*100

document.write("<b>MARKSHEET</b>")
document.write("<br>")
document.write("<hr>")
document.write("<br>")
document.write("STUDENT'S NAME              : ","<b>",n,"</b>","<br>")
document.write("ROLL #                      : ","<b>",rno,"</b>","<br>")
document.write("<hr>")
document.write("Marks obtained in English   : ",e,"<br>")
document.write("Marks obtained in Maths     : " ,m,"<br>")
document.write("Marks obtained in Physics   : " ,p,"<br>")
document.write("Marks obtained in Chemistry : " ,c,"<br>")
document.write("Marks obtained in Computer  : " ,cmp,"<br>")
document.write("<hr>")
document.write("maxmarks = 500<br>")
document.write("Total Marks Obtained =",sum,"<br>")
document.write("percentage           : ",percent,"%<br>")

document.write("<br>")
document.write("<hr>")
document.write("Grade:","<br>")

if(sum >= 450){
    alert("Congratulations, You got A Grade")
    document.write("Congratulations, You got A Grade")
}

else if(sum >= 400){
    alert("Congratulations, You got B Grade")
    document.write("Congratulations, You got B Grade")
}
else if(sum >= 300){
    alert("You got C Grade")
    document.write("You got C Grade")
}
else if(sum >= 200){
    alert("You got D Grade")
    document.write("You got D Grade")
}
else if(sum >= 100){
    alert("Better Luck Next Time")
    document.write("Better Luck Next Time")
}

else{
    alert("Invalid Input")
}






