
let questionAnswers = []; 

function saveQuestions() {
    localStorage.setItem('questionAnswers', JSON.stringify(questionAnswers)); 
}


const questionApi = {
    getAll() {
        return questionAnswers; 
    },
    add(answerValue) {
        questionAnswers.push(answerValue); 
        saveQuestions(); 
    }
};

export default questionApi; 