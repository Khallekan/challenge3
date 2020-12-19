const problem = document.getElementsByClassName('problem');
// const answer = document.getElementsByClassName('answer');

for (let i = 0; i < problem.length; i++) {
    
    const e = problem[i];
    e.addEventListener("click", (a)=> {
        e.classList.toggle('active');
        let answer = e.nextElementSibling.classList.toggle('show');
    })
    
}

