const calculateAverageScore = (scores) => {
    if (scores.length === 0) return 0; 
    const total = scores.reduce((accumulator, score) => accumulator + score, 0); 
    return total / scores.length;
};


console.log(calculateAverageScore([90, 80, 70])); 

