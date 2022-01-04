const hours = $(".hours");
const minutes = $(".minutes");
const seconds = $(".seconds");
const reset = $("#reset");
const start = $("#start");


function getTimeAfter25Minutes() {
    const newDateObj = new Date();
    newDateObj.setTime(new Date().getTime() + (60 *25 * 1000)+ (1000));
    return newDateObj;
}

let interval = null;

start.click(function(){
   const timer = getTimeAfter25Minutes();
   if (!interval) {
    interval = setInterval(function() {

            // Get today's date and time
            const now = new Date().getTime();
            
            // Find the distance between now and the count down date
            const distance = timer-now;
            console.log(distance)
            if (distance < 1000) {
                clearInterval(interval);
                // make sound
               $('audio')[0].play();
           
            }
            
            // Time calculations for hours, minutes and seconds
            hours.text(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            minutes.text(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            seconds.text(Math.floor((distance % (1000 * 60)) / 1000));

        }, 1000)
   }
})

reset.click(function(){
    clearInterval(interval)
    interval = null;
    minutes.text("00")
    seconds.text("00")

})

