function getScore(answerArray) {
    let result = {};
    for (let i = 0; i < answerArray.length; i++) {
        let axis = answerArray[i].survey_question.survey_axis.shortName;
        if (!result.hasOwnProperty(axis)) {
            result[axis] = 0
        } else {
            if (answerArray[i].survey_question.negative_scale) {
                result[axis] -= parseInt(answerArray[i]['value']);
            } else {
                result[axis] += parseInt(answerArray[i]['value']);
            }
        }
    }
    console.log(result);
    return result;
}

module.exports = { 
    getScore: getScore,
};