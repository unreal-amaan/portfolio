import { Link } from "react-router-dom";

//components
import Nav from "./Nav";
import Mobilenav from "./Mobilenav";

const Header = () => {
    return (
        <header className="py-8">
            <div className="mx-16 flex justify-between items-center">
                <Link to="/">
                    <h1 className="text-4xl font-semibold">
                        Syed <span className="text-primary">.</span>
                    </h1>
                </Link>
                {/* large screen nav */}
                <div className="hidden md:flex">
                    <Nav />
                </div>

                {/* small screen nav */}
                <div className="md:hidden">
                    <Mobilenav/>
                </div>

            </div>
        </header>
    );
};

export default Header;
