import PageTransition from "./components/PageTransition";
import PageTransitionEffect from "./components/PageTransitionEffect";
import Header from "./header/Header";

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <PageTransitionEffect/>
            <PageTransition>
                {children}
            </PageTransition>
        </div>
    );
};


export default Layout;
