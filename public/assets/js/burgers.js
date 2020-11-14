$(function() {
	$(".change-devoured").on("click", function(event) {
		let id = $(this).data("id");
		console.log( $(this).data("id"))
		let newDevoured = $(this).data("newdevoured");

		let newDevouredState = {
			devoured: newDevoured
		};

		// Update devoured state with PUT request.
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newDevouredState
		}).then(
			function() {
				console.log("changed devoured to", newDevoured);
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});

	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		let newBurger = {
			burger_name: $("#br").val().trim(),
			devoured: $("[name=devoured]:checked").val()
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function() {
				console.log("created new burger");
				location.reload();
			}
		);
	});

	$(".delete-burger").on("click", function(event) {
		event.preventDefault();

		let id = $(this).data("id");
		console.log("HEY")
		console.log(id)
		$.ajax("/api/burgers/" + id, {
			type: "DELETE"
		}).then(
			function() {

				// Reload the page to get the updated list
				location.reload();
			}
		);
	});
});