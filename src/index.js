// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }
    let answerArray = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i !== 0 && i % 2 !== 0) {
            answerArray = answerArray.concat(matrix[i].reverse());
        } else {
            answerArray = answerArray.concat(matrix[i]);
        }
    }
    return answerArray;
};
