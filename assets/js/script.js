// to do: comments, readme (image directory and screenshots etc)

// below is the function that stores the description value in local storage

$(document).ready(function () {
    $(".saveBtn").on("click", function(){
        var description = $(this).siblings(".description").val(); 
        var time = $(this).siblings(".hour").text().trim();       
        localStorage.setItem(time, description)
        console.log(time);
      });

      // Below is the function that manages the color coding based on time and current hour
      function colorTime(){
        var currentHour = moment().hour();
        $('.hour').each(function() {
          var time = $(this)[0].parentElement.id.replace("hour", "")
          time = parseInt(time);
          if (time < currentHour) {
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

      // below is the function that sets the description
    function setDescription(){
        //console.log("calling");
      
        $('#hour09').children('.description').val(localStorage.getItem("9AM"));
        $('#hour10').children('.description').val(localStorage.getItem("10AM"));
        $('#hour11').children('.description').val(localStorage.getItem("11AM"));
        $('#hour12').children('.description').val(localStorage.getItem("12PM"));
        $('#hour13').children('.description').val(localStorage.getItem("1PM"));
        $('#hour14').children('.description').val(localStorage.getItem("2PM"));
        $('#hour15').children('.description').val(localStorage.getItem("3PM"));
        $('#hour16').children('.description').val(localStorage.getItem("4PM"));
        $('#hour17').children('.description').val(localStorage.getItem("5PM"));
    }

  setDescription();
  colorTime();
});