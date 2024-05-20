
const questions = [
  {
question: ' What is JavaScript?',
options: [
        'a) JavaScript is a scripting language used to make the website interactive',
        'b) JavaScript is an assembly language used to make the website interactive',
        'c) JavaScript is a compiled language used to make the website interactive',
        'd) None of the mentioned'],
      answer: '(a) JavaScript is a scripting language used along with HTML and CSS to make the website interactive along. It is used both on the client-side and server-side'
  },
  {
  question:' Which of the following is correct about JavaScript?',
   options:[
            'a) JavaScript is an Object-Based language',
            'b) JavaScript is Assembly-language',
            'c) JavaScript is an Object-Oriented language',
            'd) JavaScript is a High-level language'],
        answer:'(a)Although JavaScript is not an OOP (Object-Oriented Programming) language like Java or PHP, it is object based language. The standard threesome of polymorphism, encapsulation, and inheritance are the criteria for object orientation, and JavaScript fails to meet them'
  }]
  ;
 function createQuiz() {
     questions.forEach((q,index)=>{

    var options =  q.options.map((option,i) => {return`
    <input type="radio" name="question${i}" value="${option}" id="question${i}_option${i}">
    <label for="question${index}_option${i}">${option}</label><br>`});

   console.log(`<label class ="question-label">${q.question} ${options}</label>`);      
  })
}   
createQuiz();