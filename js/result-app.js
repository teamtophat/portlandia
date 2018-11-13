import BookstoreForm from './bookstore-question.js'; 
import questionApi from './question-api.js'; 

BookstoreForm.init(function(answer){
    questionApi.add(answer); 
}); 

