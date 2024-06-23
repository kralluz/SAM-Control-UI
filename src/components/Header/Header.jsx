import './header.css';

const Header = ({ toggleDarkMode, darkMode }) => (
    <header className={`d-flex justify-content-between align-items-center ${darkMode ? "dark-theme" : "light-theme"}`}>
        <h1>IMEC Diagnóstico Agenda</h1>
        <div className="toggle-container">
            <input
                type="checkbox"
                id="toggle"
                className="toggle-checkbox"
                onChange={toggleDarkMode}
                checked={darkMode}
            />
            <label htmlFor="toggle" className="toggle-label">
                <div className="toggle-ball"></div>
            </label>
        </div>
    </header>
);

export default Header;