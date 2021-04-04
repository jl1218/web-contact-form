var md = new Remarkable({
	html: true,
	xhtmlOut: false,
	breaks: false,
	linkify: true,
	typographer: false,
	quotes: "“”‘’"
});
function submit() {
	var name =
		document.getElementById("fname").value +
		" " +
		document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var reason = $("input[name=reason]:checked", "#reason").val();
	var notparsedcomment = document.getElementById("comment").value;
	var comment = md.render(notparsedcomment);
	var text = `Name: ${name}<br>Email: ${email}<br>Reason of contact: ${reason}<br>Comment: ${comment}`;
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
