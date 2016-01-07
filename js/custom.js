
		$(function() {
			
					$("#testimonial-slider").owlCarousel({
						navigation : false,
						singleItem: true,
     					autoHeight : true

     				});
     				$("#carousel").owlCarousel({
						navigation:true,
					    navigationText: [
					      "<i class='icon-chevron-left icon-white'>&#60;</i>",
					      "<i class='icon-chevron-right icon-white'>&#62;</i>"
				  ],
						singleItem: false,
     					autoPlay: 3000, //Set AutoPlay to 3 seconds
					      items : 5,
					      itemsDesktop : [1199,3],
					      itemsDesktopSmall : [979,3],
					      pagination: false

					});		


		});

