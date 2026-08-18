import "./App.css";

import Layout from "./layout";
import Home from "./Home/home";
import Projects from "./Projects/projects";
import Resume from "./Resume/resume";
import Contact from "./Contact/contact";

function App() {
    return (
        <Layout>
            <main>
                <section id="home">
                    <Home />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="resume">
                    <Resume />
                </section>

                <section id="contact">
                    <Contact />
                </section>
            </main>
        </Layout>
    );
}

export default App;
