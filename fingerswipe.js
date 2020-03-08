function fingerswipe(direction, target, trigger) {
    let initialController = false;
    let initialPos = 0;
    let finalPos = 0;

    if(direction === "horizontal") {
        target.addEventListener("touchstart", function(event) {
            initialController= true;
            initialPos = event.touches[0].clientX;
    
        })
    
        target.addEventListener("touchmove", function(event) {
            if(initialController) {
                finalPos = event.touches[0].clientX;
            }
        })

        target.addEventListener("touchend", function() {
            if(initialPos > finalPos) {
                trigger.left();
            } else {
                trigger.right()
            }
        })

    } else if(direction === "vertical") {
        target.addEventListener("touchstart", function(event) {
            initialController= true;
            initialPos = event.touches[0].clientY;
        })
    
        target.addEventListener("touchmove", function(event) {
            if(initialController) {
                finalPos = event.touches[0].clientY;
            }
        })

        target.addEventListener("touchend", function() {
            if(initialPos > finalPos) {
                trigger.up();
            } else {
                trigger.down();
            }
        })
    }
}