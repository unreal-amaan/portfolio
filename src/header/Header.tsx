import { Link } from "react-router-dom";

//components
import Nav from "./Nav";
import Mobilenav from "./Mobilenav";

const Header = () => {
    return (
        <header className="py-8">
            <div className="flex justify-between items-center mx-auto w-11/12 md:w-5/6 lg:w-3/4">
                <Link to="/">
                    <h1 className="text-4xl font-semibold">
                        Syed <span className="text-primary">.</span>
                    </h1>
                </Link>
                {/* large screen nav */}
                <div className="hidden lg:flex">
                    <Nav />
                </div>

                {/* small screen nav */}
                <div className="lg:hidden">
                    <Mobilenav/>
                </div>

            </div>
        </header>
    );
};

export default Header;
