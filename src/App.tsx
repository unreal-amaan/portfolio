import "./App.css";

//router
import { BrowserRouter as Router, Routes, Route } from "react-router";

//layout component
import Layout from "./layout";

//components
import Work from "./Work/work";
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
                    <Route path="/work" element={<Work />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
