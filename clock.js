function logCurrentTime(){
    const currentTime = new Date();
    const isoString = currentTime.toISOString();
    console.log(isoString);
}
logCurrentTime();