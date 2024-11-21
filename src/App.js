import React, { useState, useEffect } from "react";
import NavBar from './components/navbar';
import Counters from './components/counters';

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {

        document.body.classList.add('theme-switching');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        console.log(newTheme);

        document.documentElement.setAttribute('data-theme', newTheme);
    }

    // 初始化主题
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, []);

    const [counters, setCounters] = useState([
        { id: 1, value: 1 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
    ])

    const handleIncrement = (counter) => {
        const updatedCounters = [...counters]
        const index = updatedCounters.indexOf(counter);
        updatedCounters[index] = { ...counter };
        updatedCounters[index].value++;
        setCounters(updatedCounters);
    }

    const handleDecrement = (counter) => {
        const updatedCounters = [...counters]
        const index = updatedCounters.indexOf(counter);
        updatedCounters[index] = { ...counter };
        updatedCounters[index].value--;
        setCounters(updatedCounters);
    }

    const handleDelete = (counterId) => {
        const updatedCounters = counters.filter(c => c.id !== counterId);
        setCounters(updatedCounters);
    }

    const handleReset = () => {
        const updatedCounters = counters.map(c => {
            c.value = 0;
            return c;
        });
        setCounters(updatedCounters);
    }

    const handleRestart = () => {
        window.location.reload();
    };

    return (
        <div className="main__wrap">
            <main className="container">
                <div className="card__box">
                    <button
                        className="theme-toggle btn"
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                    <NavBar totalCounters={counters.filter(c => c.value > 0).length} />
                    <Counters
                        counters={counters}
                        handleDecrement={handleDecrement}
                        handleIncrement={handleIncrement}
                        handleDelete={handleDelete}
                        handleReset={handleReset}
                        handleRestart={handleRestart}
                    />
                </div>
            </main>
        </div>
    )
}

export default App;