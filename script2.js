const MAX_CHARS = 140;

const tweet = document.getElementById("textbox");
const sendBtn = document.getElementById("btn");
const counterFooter = document.getElementById("counterFooter");

tweet.addEventListener("input", e => {
    let tweetCount = MAX_CHARS - tweet.value.length;
    
    counterFooter.innerHTML = `${tweetCount}/${MAX_CHARS}`
    if(tweetCount < 21) {
        counterFooter.style.color = "orange";
    } else {
      counterFooter.style.color = "inherit";
    }
  
    if(tweetCount < 0) {
        sendBtn.disabled = true;
        sendBtn.classList.add("btn-disable");
    } else {
      sendBtn.disabled = false;
      sendBtn.classList.remove("btn-disable");
    }
});

sendBtn.addEventListener("click", function() {
    // Initialize EmailJS with your user ID
    emailjs.init("AXYNmPQh_Cscnq8CU");

    // Send email using EmailJS
    emailjs.send("service_sain6ky", "template_haa50eq", {
        to_email: "mitulrajrishi1999@gmail.com",
        subject: "Feedback msg",
        message: tweet.value
    }).then(function(response) {
        console.log("Email sent successfully!", response);
    }, function(error) {
        console.error("Email sending failed:", error);
    });
});
