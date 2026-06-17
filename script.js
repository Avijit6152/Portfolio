
        const roles = [
            "Java Developer",
            "Web Developer",
            "Computer Lab Programmer",
            "Tech Enthusiast",
            "Technical Trainer",
            "Software Engineer",
            "Full Stack Developer",
            "Problem Solver",
            "Learner",
            "Educator"

        ];

        let roleIndex = 0;
        let charIndex = 0;

        function typeEffect() {

            const typing = document.getElementById("typing");

            if (charIndex < roles[roleIndex].length) {

                typing.textContent += roles[roleIndex].charAt(charIndex);
                charIndex++;

                setTimeout(typeEffect, 100);

            } else {

                setTimeout(eraseEffect, 1500);

            }
        }

        function eraseEffect() {

            const typing = document.getElementById("typing");

            if (typing.textContent.length > 0) {

                typing.textContent =
                    typing.textContent.slice(0, -1);

                setTimeout(eraseEffect, 50);

            } else {

                roleIndex++;

                if (roleIndex >= roles.length) {
                    roleIndex = 0;
                }

                charIndex = 0;

                setTimeout(typeEffect, 300);
            }
        }

        typeEffect();

        function toggleTheme() {
            document.body.classList.toggle("light");
        }

        function sendMessage(e) {
            e.preventDefault();
            alert("Message Submitted Successfully!");
        }





        const bg = document.querySelector('.binary-bg');

        for (let i = 0; i < 100; i++) {

            const digit = document.createElement('div');
            digit.classList.add('binary');

            digit.innerText = Math.random() > 0.5 ? '0' : '1';

            digit.style.left = Math.random() * 100 + '%';
            digit.style.fontSize = (12 + Math.random() * 20) + 'px';

            digit.style.animationDuration =
                (5 + Math.random() * 10) + 's';

            digit.style.animationDelay =
                Math.random() * 5 + 's';

            bg.appendChild(digit);
        }






        const codeChars = [
            "0", "1",
            "<html>", "</html>",
            "<body>", "</body>",
            "<div>", "</div>",
            "<section>", "</section>",
            "<h1>", "</h1>",
            "<p>", "</p>",
            "{", "}", "(", ")", "[", "]",
            ";", "=", "+", "-", "*", "/",
            "&&", "||", "!=", "==",
            "for()", "while()", "if()",
            "else", "switch()",
            "Java", "HTML", "CSS", "JS",
            "SQL", "API", "Git",
            "</>", "<>", "//", "#", "@"
        ];


        for (let i = 0; i < 100; i++) {

            const item = document.createElement('span');
            item.classList.add('binary');

            item.innerText =
                codeChars[Math.floor(Math.random() * codeChars.length)];

            item.style.left = Math.random() * 100 + '%';
            item.style.top = Math.random() * 100 + '%';

            item.style.fontSize =
                (10 + Math.random() * 18) + 'px';

            item.style.animationDuration =
                (8 + Math.random() * 15) + 's';

            item.style.animationDelay =
                Math.random() * 10 + 's';

            bg.appendChild(item);
        }



        const statNumbers = document.querySelectorAll('.stat-box h3');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    let target = parseInt(entry.target.innerText);
                    let count = 0;

                    const update = setInterval(() => {
                        count++;
                        entry.target.innerText = count + "+";

                        if (count >= target) {
                            clearInterval(update);
                        }
                    }, 20);

                    observer.unobserve(entry.target);
                }
            });
        });

        statNumbers.forEach(num => observer.observe(num));

     


document.addEventListener("click", (e) => {

    const ripple = document.createElement("div");
    ripple.classList.add("ripple");

    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 1000);

});

// Water Ripple Effect

document.addEventListener("mousemove", (e) => {

    const ripple = document.createElement("div");
    ripple.classList.add("ripple");

    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 1000);

});