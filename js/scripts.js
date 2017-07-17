//Backend

function Task(name) {
  this.taskName = name;
};


$(document).ready(function() {
  $("form#new-task").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();

    var newTask = new Task(inputtedTask);
    $(".checkbox").append("<input type='checkbox' name='task' value='" + newTask.taskName + "'>" + newTask.taskName + "<br>");
    $(".checklist").show();

  });
  $("form.checklist").submit(function(event){
    event.preventDefault();

    var values = [];
    $("input:checkbox:checked").each(function() {
        values.push($(this).val());
      });
    alert(values);


  });


});
