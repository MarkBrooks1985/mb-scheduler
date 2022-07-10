// to do: comments, readme (image directory and screenshots etc)

$(document).ready(function () {
    $(".saveBtn").on("click", function(){
       // console.log(this);
        var description = $(this).siblings(".description").val(); 
        var time = $(this).siblings(".hour").text().trim();       
        localStorage.setItem(time, description)
        console.log(time);
        //var description = $(".description").val();
      });

      // task: color code based on time
      // apply classes based on a condition
      // condition: comparing current hour with each time slot
      function colorTime(){
        // get current hour
        var currentHour = moment().hour();
        // loop over each time slot and compare
        $('.hour').each(function() {
          // logic to compare
          var time = $(this)[0].parentElement.id.replace("hour", "")
          time = parseInt(time);
          if (time < currentHour) {
            // add class called past
            $($(this)[0]).siblings('.description').addClass("past")
          }
          else if (time == currentHour) {
            $($(this)[0]).siblings('.description').addClass("present")
          }
          else {
            $($(this)[0]).siblings('.description').addClass("future")
          }
        })
      }

    function setDescription(){
        console.log("calling");
      
        $('#hour09').children('.description').val(localStorage.getItem("9AM"));
        $('#hour10').children('.description').val(localStorage.getItem("10AM"));
        $('#hour11').children('.description').val(localStorage.getItem("11AM"));
        $('#hour12').children('.description').val(localStorage.getItem("12PM"));
        $('#hour01').children('.description').val(localStorage.getItem("1PM"));
        $('#hour02').children('.description').val(localStorage.getItem("2PM"));
        $('#hour03').children('.description').val(localStorage.getItem("3PM"));
        $('#hour04').children('.description').val(localStorage.getItem("4PM"));
        $('#hour05').children('.description').val(localStorage.getItem("5PM"));
    }

  setDescription();
  colorTime();
});
// listen to a button

// click the button to read the value from the text box

// save value into local storage