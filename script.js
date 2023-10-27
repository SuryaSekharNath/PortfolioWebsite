let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () =>
{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function sleep(ms)
{
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["Frontend Developer", "Programmer", "Game Developer"]
const el = document.getElementById("typewritter");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () =>
{
    while (true) {
        let curWord = phrases[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++)
        {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--)
        {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);

        if (curPhraseIndex === phrases.length - 1)
        {
            curPhraseIndex = 0;
        } else
        {
            curPhraseIndex++;
        }
    }
}

writeLoop();

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>
{
    sections.forEach(sec => 
        {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height)
            {
                navLinks.forEach(links =>
                    {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                        menuIcon.classList.remove('bx-x');
                        navbar.classList.remove('active');
                    });
                    sec.classList.add('show-animate');
            }
            else
            {
                sec.classList.remove('show-animate');
            }
        });

        let footer = document.querySelector('footer');

        footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}