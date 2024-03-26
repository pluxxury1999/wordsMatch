import "./app.css";
import AppHeader from "../appHeader/AppHeader";
import AppFooter from "../appFooter/AppFooter";
import About from "../about/About";

const App = () => {
    return (
        <div className="root">
            <AppHeader />
            <main>
                <About />
            </main>
            <AppFooter />
        </div>
    );
};

export default App;
