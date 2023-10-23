const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions() {
    // button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            // remove active-btn class from all buttons
            for (let j = 0; j < sectBtn.length; j++) {
                sectBtn[j].classList.remove('active-btn');
            }
            // add active-btn class to clicked button
            this.classList.add('active-btn');
        });
    }
    //sections active
    allSections.forEach((section) => {
        section.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            if (id) {
                //remove selected from other btns
                sectBtns.forEach((btn) => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');

                //hide other sections
                sections.forEach((section) => {
                    section.classList.remove('active');
                });
                const element = document.getElementById(id);
                element.classList.add('active');
            }
        });
    });
//Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
}

PageTransitions();