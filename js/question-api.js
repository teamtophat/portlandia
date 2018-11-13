let questionAnswers = []; 

function saveQuestions() {
    localStorage.setItem('questionAnswers', JSON.stringify(questionAnswers)); 
}

const questionApi = {
    getAll() {
        return questionAnswers; 
    },
    add(question) {
        questionAnswers.push(question); 
        saveQuestions(); 
    }
};

export default questionApi; 