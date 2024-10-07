function knightMoves(x, y) {
    
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    const validMoves = [];

    for (const [dx, dy] of moves) {
        const newX = x + dx;
        const newY = y + dy;

        if (newX >= 1 && newX <= 8 && newY >= 1 && newY <= 8) {
            validMoves.push(`(${newX},${newY})`);
        }
    }

    return validMoves.join(', ');
}


console.log(knightMoves(4, 4)); 
