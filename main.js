var numberStudents = prompt("How many students are learning Javascript?");
var info = [];

  for (var i = 0; i < numberStudents; i++) {
    var name = prompt("What is the student's name?");
    var phone = prompt("What is the student's phone number?");
    var city = prompt("What city does the student live in?");
    var studentInfo = {
      "Name" : name,
      "Phone" : phone,
      "City" : city
    };
    info.push(studentInfo);
  }

for (var j = 0; j < numberStudents; j++) {

  alert("Name : " + info[j].Name + "\n" + "City : " + info[j].City + "\n" + "Phone : " + info[j].Phone);

}

var numberMentors = prompt("How many mentors are teaching Javascript?");
var mentorInfo = [];

  for (var i = 0; i < numberMentors; i++) {
    var name = prompt("What is the mentor's name?");
    var phone = prompt("What is the mentor's phone number?");
    var city = prompt("What city does the mentor live in?");
    var studentInfo = {
      "Name" : name,
      "Phone" : phone,
      "City" : city
    };
    mentorInfo.push(studentInfo);
  }

for (var j = 0; j < numberMentors; j++) {

  alert("Name : " + mentorInfo[j].Name + "\n" + "City : " + mentorInfo[j].City + "\n" + "Phone : " + mentorInfo[j].Phone);

}
