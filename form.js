function submit() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var reason = $("input[name=reason]:checked", "#reason").val();
	var comment = document.getElementById("comment").value;
	var text = `Name: ${name}<br>Email: ${email}<br>Reason of contact: ${reason}<br>Comment: ${comment}`;
	document.getElementById("form").style.display = "none";
	document.getElementById("result").style.display = "block";
	document.getElementById("result").innerHTML = text;
}
