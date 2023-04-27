const submitBtn = document.getElementById("submit");
const ajaxCall = (name,surname,email,message,phone,guests,startDate,endDate) =>{
      console.log(name+surname+email+message+phone+guests+startDate+endDate);

      const data = new URLSearchParams();
    data.append("name", name);
    data.append("surname", surname);
    data.append("email", email);
    data.append("number", number);
    data.append("message", message.join(" "));
    data.append("phone", phone);
    data.append("guests", guests);
    data.append("start_date", startDate);
    data.append("end_date", endDate);
    
  
    fetch("/includes/post.php", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          window.location.reload();
        } else {
          throw new Error(`The request failed! Status code was ${response.status}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
};
const getText = () =>{
    const txt = document.getElementById("message").value;
    return txt.split(/\s+/);
};
const validateForm = () =>{
    let name = document.querySelector('input[name="name"]');
    let surname = document.querySelector('input[name="surname"]');
    let email = document.querySelector('input[name="email"]');
    let phone = document.querySelector('input[name="phone"]');
    let guests = document.querySelector('input[name="guests"]');
    let startDate = document.querySelector('input[name="start-date"]');
    let endDate = document.querySelector('input[name="end-date"]');
    let message = getText();
    let captcha = document.querySelector('input[name="captcha"]');

    name = name.value.trim();
    surname = surname.value.trim();
    email = email.value.trim();
    captcha = captcha.value.trim();
    phone = phone.value.trim();
    guests = guests.value.trim();
    endDate = endDate.value.trim();
    startDate = startDate.value.trim();

    if (name !== "" && surname !== "" && email !== "" && captcha !== "") {
        console.log(captcha)
        if (captcha === "16" || captcha === 16) {
          ajaxCall(name, surname, email, message, phone, guests, startDate, endDate );
        } else {
          alert("Incorrect captcha, please try again.");
        }
    } else {
        alert("Oops, there was a problem. Please fill in all required fields and enter the correct captcha.");
      }
}

submitBtn.addEventListener('click', (evt)=>{
    evt.preventDefault();
    //submitted valkidate form
    validateForm();
});