
// 1-soluzione: traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         /*get the parent of the parent of the button*/
//         console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     })
// })



// 2-soluzione: using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function(item){
    console.log(item);
    const btn = item.querySelector(".question-btn");
    btn.addEventListener('click', function(){
        questions.forEach(function(q){
            if (q !==  item){
                q.classList.remove('show-text');
            }            
        })
        item.classList.toggle('show-text');
    })
})