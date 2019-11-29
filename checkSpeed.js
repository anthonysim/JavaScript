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