
let questionAnswers = []; 

function saveQuestions() {
    localStorage.setItem('questionAnswers', JSON.stringify(questionAnswers)); 
}


const questionApi = {
    getAll() {
        const json = localStorage.getItem('questionAnswers'); 
        if(json) {
            questionAnswers = JSON.parse(json); 
        }
        return questionAnswers; 
    },
    add(answerValue) {
        this.getAll(); 
        questionAnswers.push(answerValue); 
        saveQuestions(); 
    }
};

export default questionApi; 