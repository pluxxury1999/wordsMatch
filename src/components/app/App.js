import "./app.css";
import AppHeader from "../appHeader/AppHeader";
import AppFooter from "../appFooter/AppFooter";

const App = () => {
    return (
        <div className="root">
            <AppHeader />
            <main>
                content
            </main>
            <AppFooter />
        </div>
    );
};

export default App;
