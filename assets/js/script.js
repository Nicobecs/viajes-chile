$(document).ready(function(){
    $('nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 200, function(){
                window.location.hash = hash;
            });
        }
    });

    $("#enviarForm").tooltip();

    $("#enviarForm").click(function () {
        alert("Formulario enviado con éxito.");
    });
    
});