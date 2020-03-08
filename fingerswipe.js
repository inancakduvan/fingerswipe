function fingerswipe(direction, target, trigger) {
    let initialPos = 0;
    let finalPos = 0;

    if(direction === "horizontal") {
        target.addEventListener("touchstart", function(event) {
            initialPos = event.touches[0].clientX;
        })
    
        target.addEventListener("touchmove", function(event) {
            finalPos = event.touches[0].clientX;
        })

        target.addEventListener("touchend", function() {
            if(finalPos !== 0) {
                if(initialPos - finalPos < -50) {
                    trigger.right();
                } else if (initialPos - finalPos > 50) {
                    trigger.left()
                } else {
                    return null
                }
            }
        })

    } else if(direction === "vertical") {
        target.addEventListener("touchstart", function(event) {
            initialPos = event.touches[0].clientY;
        })
    
        target.addEventListener("touchmove", function(event) {
                finalPos = event.touches[0].clientY;
        })

        target.addEventListener("touchend", function() {
            if(finalPos !== 0) {
                if(initialPos - finalPos < -50) {
                    trigger.down();
                } else if (initialPos - finalPos > 50) {
                    trigger.up()
                } else {
                    return null
                }
            }
        })
    }
}