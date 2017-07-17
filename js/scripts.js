//Backend

function Task(name,date,location) {
  this.taskName = name;
  this.dueDate = date;
  this.location = location;
};


$(document).ready(function() {
  $("form#new-task").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();

    var newTask = new Task(inputtedTask);
    $(".checkbox").append("<li><input type='checkbox' name='task' value='" + newTask.taskName + "'>" + "<span id = '" + newTask.taskName + "'>" + newTask.taskName + "</span> <br>");
    $(".checklist").show();

    $("input:text").val("");
  });
  $("form.checklist").submit(function(event){
    event.preventDefault();
    var test = confirm("Are you sure you want to delete these tasks?");
    if (test) {
      $("input:checkbox:checked").each(function() {
        $("input:checkbox:checked").parent().remove();
      });
    }
  });


});
