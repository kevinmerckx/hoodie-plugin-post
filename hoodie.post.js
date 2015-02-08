console.log("yo");
Hoodie.extend(function(hoodie) {
	hoodie.post = {
		send: hoodie.task('post').add,
		on: hoodie.task('post').on
	};
});
