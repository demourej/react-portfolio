import React from 'react';

function Home() {
    return (
        <section>
<section id="about_me">
            <div class="about_one">
                <img src="./assets/images/Adolfo de Moure(Photo5).png" class="float-right" alt="Adolfo de Moure photo"/>
            </div>
            <div class="about_two">
                <h1 class="right_side">About Me</h1>
                <p class="right_side">
                    Hello world! I'm Adolfo de Moure.
                </p>
                <p class="right_side">
                    I'm learning full stack development for delivering well-designed and amazing
                    appareances with useful and efficient technical aspects. My future knowledge includes languages such
                    as HTML, CSS, JavaScript, PHP, and other relevant coding languages.</p>
                <p class="right_side">
                    Please explore My Work Portfolio and don't hesitate to contact
                    me for any request.
                </p>
            </div>
        </section>
        <section id="my_work">
            <h1>My Work</h1>
            <div class="main_work container-fluid">
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col space-blue">
                        <section class="card">
                            <header>Proyect 2 (Yoga Studio)</header>
                            <p>Full-stack application</p>
                            <a href="https://damp-dawn-28515.herokuapp.com/"><img src="./assets/images/Picture5.png" alt="Proyect 1 Image" /></a>
                            <a href="https://github.com/demourej/yoga-project">(See in GitHub)</a>
                        </section>
                    </div>
                    <div class="col-1"></div>
                </div>

                <div class="row">
                    <div class="col">
                    </div>
                    <div class="col">
                    </div>
                </div>

                <div class="row">
                    <div class="col-1"></div>
                    <div class="col space-blue">
                        <section class="card">
                            <header>Password Generator</header>
                            <p>JavaScript</p>
                            <a href="https://demourej.github.io/Password_Gen/index.html"><img src="./assets/images/Proyect2.png" alt="Project 2 Image" /></a>
                            <a href="https://github.com/demourej/Password_Gen">(See in GitHub)</a>
                        </section>
                    </div>
                    <div class="col">
                        <section class="card">
                            <header>Work Day Scheduler</header>
                            <p>Third-Party APIs</p>
                            <a href="https://demourej.github.io/05_Scheduler/index.html"><img src="./assets/images/Proyect3.png" alt="Proyect 3 Image" /></a>
                            <a href="https://github.com/demourej/05_Scheduler">(See in GitHub)</a>
                        </section>
                    </div>
                    <div class="col-1"></div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col space-blue">
                        <section class="card">
                            <header>Weather Dashboard</header>
                            <p>Server Side APIs</p>
                            <a href="https://demourej.github.io/06_Weather/index.html"><img src="./assets/images/Proyect4.png" alt="Proyect 4 Image" /></a>
                            <a href="https://github.com/demourej/06_Weather">(See in GitHub)</a>
                        </section>
                    </div>
                    <div class="col space-blue">
                        <section class="card">
                            <header>Proyect 1 (Vagabundos App)</header>
                            <p>HTML + Foundation + JavaScript + Server Side APIs</p>
                            <a href="#my_work"><img src="./assets/images/Proyect1.png" alt="Proyect 5 Image" /></a>
                            <a href="#my_work">(See in GitHub)</a>
                        </section>
                    </div>
                    <div class="col-1"></div>
                </div>
                <div class="row">
                    <div class="col">
                    </div>
                    <div class="col">
                    </div>
                </div>
            </div>
        </section>
        <section id="contact_me">
            <h1>Contact Me!</h1>
            <div>
                <a class="contact_class" href="mailto:demourej@example.com">Mail: demourej@example.com</a>
                <a class="contact_class" href="https://www.linkedin.com/in/adolfo-de-moure/">LinkedIn:
                    linkedin.com/in/adolfo-de-moure/</a>
                <a class="contact_class" href="https://github.com/demourej">GitHub: github.com/demourej</a>
            </div>
        </section>
        </section>
    );
}

export default Home;