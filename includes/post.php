<?php 
if(isset($_POST['name'])){
	$name =$_POST['name'];
	$lastName =$_POST['surname'];
	$email =$_POST['email'];
	$message =$_POST['message'];
	$phone =$_POST['phone'];
	$visitors =$_POST['guests'];
	$arrival =$_POST['start_date'];
	$departure =$_POST['end_date'];
	

	

	$headers = array(
		'From' => $email,
		'Reply-To' => $email,
		'X-Mailer' => 'PHP/' . phpversion()
	);

	$body ="$name $lastName $message $phone $visitors $arrival $departure";
	
	
	if(mail('info@maplelodge.uk', 'Maple Lodge Customer Enquiry', $body, $headers)){
        echo "sent mail";
	}else{
		echo 'error sending mail';
	}
	
	
}


