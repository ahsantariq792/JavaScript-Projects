var today = new Date()
var ms_today = today.getTime()

bdate = prompt ("Enter Your Birthday Date in this formate (january 13,2001)")
var bday = new Date(bdate)
var ms_bday = bday.getTime()

var msDiff = ms_today - ms_bday;

var age = Math.floor(msDiff / (1000 * 60 * 60 * 24 * 365));

document.write("Your age is : ",age," years")