$(document).ready(function () {
    $(".overlay").hide();
    $(".work").click(function (e) { 
        $(this).find(".overlay").slideToggle(800);
        $(this).find(".work-image").toggle(1000);
        e.preventDefault();
    });
    $(".image").mouseenter(function () { 
        $(this).find(".overlay").slideToggle(700);
    }).mouseleave(function () { 
        $(this).find(".overlay").slideUp(300)
    });

    $("form").submit(function (e) { 
        e.preventDefault();
        let name = $("input#name").val();
        let email = $("input#email").val();
        let message = $("textarea#message").val()

        if(name != "" && email != ""){
            alert("Hello " + name + " @ " + email +" we have received your message. Thank you for reaching out to us. ");
        } else {
            alert("Please provide a name and valid email")
        }
        clearForm();
    });
    
});
    

function clearForm() {
    document.getElementById("contact-form").reset();
}