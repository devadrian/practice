<?php

if(isset($_POST['submit'])) {
	$emailbody = 'Business Name: ' .$_POST['businessName'] ."\n"
				. 'First Name: ' . $_POST['firstName'] . "\n"
				. 'Last Name: ' . $_POST['lastName'] . "\n"
				. 'Email: ' . $_POST['emailAdress'] . "\n"
				. 'Zip Code: ' . $_POST['zipCode'] . "\n"
				. 'Phone: '. $_POST['phoneNumber'];
	mail ('vs93sa@gmail.com', 'Towerstream more info', $emailbody);
	header ('location: thankyou.html');
		
}

else {
	header('location: index.html');
}


?>