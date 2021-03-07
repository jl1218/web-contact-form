function submit() {
    var name = document.getElementById("fname").value + " " + document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var reason = $("input[name=reason]:checked", "#reason").val();
    var comment = document.getElementById("comment").value;
    var text = `Name: ${name}
Email: ${email}
Reason of contact: ${reason}
Comment: ${comment}`;
    document.getElementById("form").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = text;
}
$("textarea").keyup(function () {
    if (this.value.length > $(this).attr("maxlength")) {
        return false;
    }
    $(this)
        .next()
        .html(this.value.length + "/" + $(this).attr("maxlength"));
});
