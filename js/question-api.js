
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
    },

    getResults(){
        const scores = this.getAll();
        const totalScore = scores.reduce((a, b) => a + b);
        if(totalScore <= 8) {
            console.log('hi', totalScore);
            window.location.href = '../result-californian.html';
        }     
    }
};


export default questionApi; 