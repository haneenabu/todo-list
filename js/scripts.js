//Backend

function Task(name) {
  this.taskName = name;
};


$(document).ready(function() {
  $("form#new-task").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();

    var newTask = new Task(inputtedTask);
    $(".checkbox").append("<input type='checkbox' name='task'>" + inputtedTask + "<br>");


  });

});
