	$("#formInfo").validate({
					rules: {
								businessName: {required: true},
								firstName: {required: true},
								lastName: {required: true},
								emailAdress: {required: true, email:true },
								zipCode: {
									required: true, 
									minlength: 6,
									maxlength: 6,
									digits: true },

								phoneNumber: {
									required: true,
									minlength: 10,
									maxlength: 10,
									digits: true }
							},		
					messages: {
								businessName: "Please enter your Business Name",
								firstName: "Please enter your First Name",
								lastName: "Please enter your Last Name",
								emailAdress: {
									required: "Please enter your e-mail adress",
									email: "Please enter a valid e-mail adress"
								},
								zipCode: {
									required: "Please enter your ZIP Code",
									minlength: "Your ZIP Code should have min 6 digits",
									maxlength: "Your ZIP Code should have max 6 digits",
									digits: "Your should enter digits"
								},
								phoneNumber: {
									required: "Please enter your phone number",
									minlength: "Your phone number should have min 10 digits",
									maxlength: "Your phone number should have max 10 digits",
									digits: "Your should enter digits"
								}


								}			



								
							

					});