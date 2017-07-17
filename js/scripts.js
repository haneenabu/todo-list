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
    var inputtedDate = $("input#new-date").val();
    var inputtedlocation = $("input#new-location").val();


    var newTask = new Task(inputtedTask, inputtedDate, inputtedlocation);

    $(".checkbox").append("<li><input type='checkbox' class='task' value='" + newTask.taskName + "'>" + "<span id = '" + newTask.taskName + "'>" + newTask.taskName + "</span> <br>");
    $(".checklist").show();

    $(".checkbox li").last().click(function() {
      $(".show-info").show();
      $(".show-dueDate").text(newTask.dueDate);
      $(".show-location").text(newTask.location);
    });


    $("input:text").val("");

  });
  $("form.checklist").submit(function(event){
    event.preventDefault();
    var test = confirm("Are you sure you want to delete these tasks?");
    if (test) {
      $("input:checkbox:checked").each(function() {
        $("input:checkbox:checked").parent().remove();
        $(".show-info").hide();
      });
    }
  });

});
