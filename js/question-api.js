// import questionDataset from "./question-dataset.js";


let questionAnswers = []; 

function saveQuestions() {
    localStorage.setItem('questionAnswers', JSON.stringify(questionAnswers)); 
}

// for(let i = 0;)
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