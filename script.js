var schedule = [
    {
      hour: '9:00 AM',
      event: 'Walk the dog'
    },
    {
      hour: '10:00 AM',
      event: ''
    },
    {
      hour: '11:00 AM',
      event: ''
    },
    {
      hour: '12:00 PM',
      event: ''
    },
     {
      hour: '1:00 PM',
      event: ''
    },
     {
      hour: '2:00 PM',
      event: ''
    },
     {
      hour: '3:00 PM',
      event: ''
    },
     {
      hour: '4:00 PM',
      event: ''
    },
     {
      hour: '5:00 PM',
      event: ''
    }
  ];
console.log(schedule);

var x = {}; // Object, this is empty object
  function generateTimeBlocks() {
  
    // Generate each time block for the time block container
    // I need to iterate through my schedule[] array to render
      // each row
    // For each save icon, I need a click event listener. 
  //   var saveBtn = document.querySelector("#save");
  //   saveBtn.addEventListener("click"), function(event) {
  // event.preventDefault();
  // }
    //The listener will save the event to the schedule[] array and then to local storage
    var $container = $('.container'),
        $row, $col, $textArea, $saveBtn;
    
    for(var i = 0; i < schedule.length; i++) {
      // build the row
      $row = $('<div></div>').addClass('row'); // <div class="row"></div>
      // build the columns
      // build left column
      $col = $('<div></div>').addClass('col-2 time-block hour'); // <div class="col-3"></div>
      $col.text(schedule[i].hour); // <div class="col-3">9:00 AM</div>
      // attach left column to the row
      $row.append($col); // <div class="row"><div class="col-3">9:00 AM</div></div>
      // build middle column
      $col = $('<div></div>').addClass('col-8'); // <div class="col-6"></div>
      $textArea = $('<textarea></textarea>'); // <textarea></textarea>
      $textArea.text(schedule[i].event); // <textarea>Walk the dog</textarea>
      $col.append($textArea); // <div class="col-6"><textarea>Walk the dog</textarea></div>
      // attach middle column to the row
      $row.append($col); //div class="row"><div class="col-3">9:00 AM</div><div class="col-6"><textarea>Walk the dog</textarea></div></div>
      // build right column
       $col = $('<div></div>').addClass('col-2 saveBtn'); // <div class="col-3"></div>
       $saveBtn = $("<i class='fas fa-save'></i>");
       $saveBtn.on("click" , function(event) {
        event.preventDefault();
      });
      $col.append($saveBtn); // <div class="col-3"><button><i class='fas fa-save'></i></button></div>
      // attach right column to the row
      $row.append($col);
      // attach row to the container
      $container.append($row);
    }
  }
  function showCurrentDay() {
  // Display the day of the week and current date
  }

  
  function initialize() {
    // Retrieve schedule data from local storage, if any
    // getScheduleFromLS();
    showCurrentDay()
    generateTimeBlocks();
  }
  
$(document).ready(function() {
  initialize();
}); 
