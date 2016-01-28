$(document).ready(function(){
    $('.button').focus();

    $(".button").click(function(){
    if($("#toDoItem").val()) {
    var toAdd = $("#toDoItem").val();
    $(".list").append("<div class='item'>" + "<input type='checkbox'>" + toAdd + "</div>");
    $("#toDoItem").val("");
    };
    });
    });
    
    $(document).keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == 13) {
        $('#tdButton.button').click();
    }
});

$(document).ready(function(){

$('#toDoItem').focusin(function() {
		var input = $(this);
		input.data('place-holder-text', input.attr('placeholder'));
		input.attr('placeholder', '');
	});

$('#toDoItem').focusout(function() {
		var input = $(this);
		input.attr('placeholder', input.data("Test text here!"));
	});

});
    
    $(document).on("click",".clearAll", function(){
        $("input:checked").parent('div.item').remove();
    });
    
 