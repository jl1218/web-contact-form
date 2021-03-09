function submit() {
    var name = $("#fname").value + " " + $("#lname").value;
    var email = $("#email").value;
    var reason = $("input[name=reason]:checked", "#reason").val();
    var comment = $("#comment").value;
    var text = `Name: ${name}<br>Email: ${email}<br>Reason of contact: ${reason}<br>Comment: ${comment}`;
    $("#form").style.display = "none";
    $("#result").style.display = "block";
    $("#result").innerHTML = text;
}
$("textarea").keyup(function () {
    if (this.value.length > $(this).attr("maxlength")) {
        return false;
    }
    $(this)
        .next()
        .html(this.value.length + "/" + $(this).attr("maxlength"));
});
