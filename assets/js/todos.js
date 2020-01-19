//Check off Specific Todos By Clicking
$("#todoList").on("click", "li.todoElement", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete todo
$("#todoList").on("click", ".deleteBtn", function(event){
    //to stop event bubbling
    event.stopPropagation();
    //fading out and removing the li
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});

//add new todo when entered in input
$("input[type='text']#addTodoInput").on("keypress", function(event){
    if(event.which === 13){
        //grab the text in input and clear the input        
        var todoText = $(this).val();
        $(this).val("");
        //make new li
        $("#todoList").append("<li class=\"todoElement\"><span class=\"deleteBtn\"><i class=\"fas fa-trash\"></i></span> " + todoText + "</li>");
        //add that li at the last of ul
        
    }
});

//plus toggle
$(".fa-plus").click(function(){
    $("#addTodoInput").fadeToggle(200);
})