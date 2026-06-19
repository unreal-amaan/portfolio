import "./App.css";

//router
import { BrowserRouter as Router, Routes, Route } from "react-router";

//layout component
import Layout from "./layout";

//components
import Projects from "./Projects/projects";
import Resume from "./Resume/resume";
import Contact from "./Contact/contact";
import Home from "./Home/home";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
