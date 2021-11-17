

function calculateDayValue(){
  year = document.getElementById("year").value;
  CC = parseInt(year.substring(0,2));
  YY = parseInt(year.substring(2,4));
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("date").value);
  d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
  console.log(d);
  return (Math.floor(d));
}

function getGender(){
  var genders = document.getElementsByName("gender");
  if(genders[0].checked == true){
    var gender = "male";
  }
  else if(genders[1].checked == true){
    var gender = "female";
  }
  else{
    return false;
  }
  switch(gender){
    case "male":
      if (dayValue == 1){
        alert("You were born on " +dayNames[0] + " and Your akan name is " +maleNames[0]+"!");
      }
      else if(dayValue == 2){
        alert("You were born on "+dayNames[1] + " and Your akan name is " +maleNames[1]+"!");
      }
      else if(dayValue == 3){
        alert("You were born on " +dayNames[2]+ " and Your akan name is " +maleNames[2]+"!");
      }
      else if(dayValue == 4){
        alert("You were born on "+dayNames[3] +  " and Your akan name is " +maleNames[3]+"!");
      }
      else if(dayValue == 5){
        alert("You were born on "+dayNames[4] +  " and Your akan name is " +maleNames[4]+"!");
      }
      else if(dayValue == 6){
        alert("You were born on "+dayNames[5] +  " and Your akan name is " +maleNames[5]+"!");
      }
      else if(dayValue == -0){
        alert("You were born on "+dayNames[6] + " and Your akan name is " +maleNames[6]+"!");
      }
    break
    default:
          
  }
}
function findName(){
  dayValue = calculateDayValue();
  getGender();
}

function akanFunction() {
   var ay, bm, cd;
   var male, female;
 
   ay = parseInt(document.getElementById('year').value);
   bm = parseInt(document.getElementById('month').value);
   cd = parseInt(document.getElementById('dayOfMonth').value);
 
   male = document.getElementById('rad1').checked;
   female = document.getElementById('rad2').checked;
 
   var year, month, day;
   year = parseInt(ay);
   month = parseInt(bm);
   day = parseInt(cd);
 
 
   var century = parseInt((year - 1) / 100 + 1);
   var formula = (((26 * (month + 1) / 10)) + ((5 * year / 4)) + ((century / 4) - 2 * century - 1) + day) % 7;
   var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
   var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Afua", "Afua", "Ama"];
   var dayOfMonth = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   var dayIndex = Math.floor(formula);
 
   if (year > 0 && year < 2020) {
     if (month > 0 && month < 13) {
       if (day > 0 && day < 32) {
         //MALE NAMES
         if (male) {
           document.getElementById("result").innerHTML = (' You were born on a: ' + dayOfMonth[dayIndex] + ' your Akan name is ' + maleNames[dayIndex]);
         } else {
           //FEMALE NAMES
           document.getElementById("result").innerHTML = (' You were born on a: ' + dayOfMonth[dayIndex] + ' your Akan name is ' + femaleNames[dayIndex]);
         }
 
       } else {
         alert("Input the correct date e.g 30");
       }
 
     } else {
       alert("Input the correct month e.g 12");
     }
 
   } else {
     alert("input the correct year e.g 2019");
   }
 }