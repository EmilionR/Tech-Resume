function sendEmail(contactForm) {

    emailjs.send("service_zcqbny9","template_7ycq0rb",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    }, "xIf6rB7YIYUIh58Uc")
    .then(
        function(response){
            console.log("Success", response);
        },
        function(error) {
            console.log("Fail", error)
        });

    return false;
}