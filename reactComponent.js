const { useState } = React;

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>React Counter Component</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
}

ReactDOM.render(<Counter />, document.getElementById('react-root'));
