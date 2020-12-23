const problem = document.getElementsByClassName('problem');
// const answer = document.getElementsByClassName('answer');
let openPanel,active
const showAnswer = (e) => {
    let button = e.target.closest('.problem');
    const panel = button.nextElementSibling

    if(panel.hasAttribute('hidden')) {
        panel.removeAttribute('hidden');
        button.classList.add("active");
    }else {
        panel.setAttribute('hidden', true);
        button.classList.remove("active");
    }
    if(openPanel) {
        openPanel.setAttribute('hidden', true);
        active.classList.remove("active");
    }
    openPanel = panel;
    active = button;
}

for (let i = 0; i < problem.length; i++) {
    
    const e = problem[i];
    e.addEventListener("click", showAnswer)
}    