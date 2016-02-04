//helper function for text capitalization
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//** Constructor **//
var UserProf = function(info) {
  this.firstName = info.firstName;
  this.lastName = info.lastName;
  this.gender = info.gender;
  this.age = info.age;
  this.weight = info.weight;
  this.feet = info.feet;
  this.inches = info.inches;
  this.activeLevel = info.activeLevel;

  // calculate userHeight
  this.heightToinches = Math.floor((this.feet * 12) + this.inches);

  // calculate BMR based on gender
  if (this.gender === "male") {
    // male BMR calc
    this.bmr = Math.floor(66 + (6.23 * this.weight) +
    (12.7 * this.heightToinches) - (6.8 * this.age));
  } else {
    // female BMR calc
    this.bmr = Math.floor(655 + (4.35 * this.weight) + (4.7 * this.heightToinches) - (4.7 * this.age));
  }

  // calculate BMI
  this.bmi = Math.floor(703 * (this.weight / (this.heightToinches * this.heightToinches)));

  // calculate cals safe for consumption based on activity level
  this.recCalories = Math.floor(this.bmr * this.activeLevel);
};


$(document).ready(function() {
  $('#baseUserProf').show();
  $('.formfit').addClass('animated fadeIn');
  if (JSON.parse(localStorage.getItem("user")) === null) {

    if (typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      console.log('Pay no attention to me tucking things away');
    } else {
      // Sorry! No Web Storage support..
      console.log('I cannot store for you');
    }


    $('form').on('submit', function(e) {
      e.preventDefault();

      var createUser = {};
      createUser.firstName = $("#firstName").val();
      createUser.lastName = $("#lastName").val();
      createUser.gender = $('input[name="gender"]:checked').val();
      createUser.age = parseInt($("#age").val());
      createUser.weight = parseInt($("#weight").val());
      createUser.feet = parseInt($("#feet").val());
      createUser.inches = parseInt($("#inches").val());
      createUser.activeLevel = $('input[name="activity"]:checked').val();

      var newUser = new UserProf(createUser);

      console.log(newUser);

      //store user in localStorage
      localStorage.setItem("user", JSON.stringify(newUser));

      //fetch object
      console.log(localStorage.getItem("user"));

      // set healthlevel depending on BMI

      // empty healthlevel variable
      var healthlevel;

      if (newUser.bmi < 18.5) {
        healthlevel = "Underweight";
      } else if (newUser.bmi <= 24.99) {
        healthlevel = "Normal Weight";
      } else if (newUser.bmi >= 25) {
        healthlevel = "Overweight";
      }

      // clear inputs
      $('input').val('');
      $('input[name="gender"]').prop('checked', false);
      $('input[name="activity"]').prop('checked', false);

      // append link to DOM
      $('#userbmidiv').empty();
      $('#userbmidiv').addClass('animated bounceIn').append('<a href="trackingprofile.html"'+
        'class="col-md-offset-3 btn btn-primary btn-md active" role="button">'+
        'Lets start tracking your calories!</a>'
      );

      // hide form on successful completion and show current BMI and BMR
      $('#bUserForm').empty();
      $('#bUserForm').addClass('animated fadeIn').append('<p class="col-md-10 col-md-offset-0 gUP text-center">Welcome <strong>' + capitalizeFirstLetter(newUser.firstName) +
      '</strong>! <br>Here is your current BMI: <br><strong>[' + newUser.bmi +
      ']</strong> <br> You are considered, <strong>'+ healthlevel+'.</strong></p>');
    });
  } else {

    var currUser = JSON.parse(localStorage.getItem("user"));
    var currBMI = currUser.bmi;

    // append link to DOM
    $('#userbmidiv').empty();
    $('#userbmidiv').addClass('animated fadeIn').append('<a href="trackingprofile.html" class="btn btn-primary btn-md active" role="button">Lets Track Your Calories for the day!</a>');
    // keep form on hidden if already completed and show current BMI and BMR
    $('#bUserForm').empty();
    $('#bUserForm').addClass('animated pulse').append('<p class="col-md-10 col-md-offset-0 gUP text-center">Welcome Back, <strong>' + capitalizeFirstLetter(currUser.firstName) + '</strong>! <br> Here is your current BMI: <br><strong>[' + currUser.bmi + ']</strong></p>');

  }
});
