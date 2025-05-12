import { useState } from 'react';

function App() {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter((prev) => prev + 1);

    return (
        <div className="App">
            <h1 style={{ fontSize: 70, color: 'red' }}>value = {counter}</h1>
            <button
                style={{ background: 'black', color: 'white', padding: 15 }}
                onClick={increment}
            >
                incremernt
            </button>
        </div>
    );
}

export default App;
