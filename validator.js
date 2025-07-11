const isAllPositive = (arr) => {
    return arr.every( num => {
        return typeof num === 'number' && num > 0;
    })
}