function App() {
    const name = 'REACT';
    return (
        <>
            {/* If */}
            {name === 'REACT' ? <h1> 리액트~!</h1> : <h1> 리액트 X</h1>}
            {name === 'REACT' ? <h2>작동 확인!</h2> : null}
        </>
    );
}

export default App;
