// event listener to listen for a keydown event.
document.addEventListener('keydown', function(event) {
    // the array represent the keys pressed, a = 65, s = 83, so on so forth.
    let keys = [65, 83, 68, 70, 71, 72, 74, 75, 76];
    
    // a loop through the keys to see if they keys match the event.keyCode
    // if they do the corresponding sound is played. 
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === event.keyCode) {

            let sound = document.getElementById(event.keyCode);
            sound.currentTime = 0;
            sound.play();
            }
        }
    }
);
