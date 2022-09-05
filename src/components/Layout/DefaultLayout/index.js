import Footer from "./Footer";
import Nav from "./Nav/Nav";

function DefaultLayout({ children }) {
    return (
        <div>
            <div className="header">
                <Nav />
            </div>
            <div className="cotainer">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;