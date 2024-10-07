function calculateVelocity(initialVelocity, acceleration, time) {
    let v0 = initialVelocity; 
    let a = acceleration;
    let t = time; 
    let finalVelocity = v0 + (a * t);
    console.log(finalVelocity);
    
    return finalVelocity;
}
calculateVelocity(3,5,6);
