/* 
Checks the speed.

If the speed is under 75 mph, everything is ok.
If the speed is equal to or above 75 mph, they get a point for every 5 miles that they are over.
Math.floor is used to round down floats. 
If they get 12 points they have a suspended license. 
*/


function checkSpeed(speed) {
    const speedLimit = 70;
    const perPoint = 5;

    if (speed < speedLimit + perPoint) 
        console.log('OK!');
    else {
        const points = Math.floor((speed - speedLimit) / perPoint);
        if (points >= 12)
            console.log('License suspended');
        else
            console.log('Points', points);
    }
}

checkSpeed(150);
