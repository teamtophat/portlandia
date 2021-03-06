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
        questionAnswers.push(parseInt(answerValue)); 
        saveQuestions(); 
    },
    getResults() {
        const scores = this.getAll();
        if(scores.length) {
            const totalScore = scores.reduce((a, b) => a + b);
            return totalScore;     
        }
    },
    reset() {
        localStorage.removeItem('questionAnswers'); 
    }
};

export default questionApi;