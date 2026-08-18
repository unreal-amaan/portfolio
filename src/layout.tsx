import Footer from "./Footer/Footer";
import Header from "./header/Header";

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
