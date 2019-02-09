// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start() {
        console.log(`%c App Started...`, 
        "font-size: 20px; color: blue; font-weight: bold");

        $(".btn-danger").click(function(event) {
            if(!confirm("Are you sure?")){
                // prevents the default behavior of a button
                event.preventDefault();
                window.location.assign("/contact-list");
            }
        });

        // document.querySelectorAll(".btn-danger").addEventListener("click", {

        // });
    }
    
    window.addEventListener("load", Start);

})();