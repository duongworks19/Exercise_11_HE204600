import React, { useState } from 'react';

export default function Calculator() {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState('');

    const compute = () => {
        const num1 = parseFloat(first);
        const num2 = parseFloat(second);

        if (isNaN(num1) || isNaN(num2)) return;

        let res = 0;
        switch (operator) {
            case '+': res = num1 + num2; break;
            case '-': res = num1 - num2; break;
            case '*': res = num1 * num2; break;
            case '/': res = num2 !== 0 ? num1 / num2 : 'Error (Divide by 0)'; break;
            default: break;
        }
        setResult(res);
    };

    return (
        <div style={{ margin: '20px', fontFamily: 'serif', fontSize: '18px' }}>
            <div style={{ marginBottom: '5px' }}>
                <label style={{ display: 'inline-block', width: '80px' }}>First:</label>
                <input type="number" value={first} onChange={e => setFirst(e.target.value)} />
            </div>
            <div style={{ marginBottom: '5px' }}>
                <label style={{ display: 'inline-block', width: '80px' }}>Second:</label>
                <input type="number" value={second} onChange={e => setSecond(e.target.value)} />
            </div>
            <div style={{ marginBottom: '5px' }}>
                <label style={{ display: 'inline-block', width: '80px' }}>Operator:</label>
                <select value={operator} onChange={e => setOperator(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
            </div>
            <div style={{ marginBottom: '5px', paddingLeft: '80px' }}>
                <button onClick={compute}>Compute</button>
            </div>
            <div>
                <label style={{ display: 'inline-block', width: '80px' }}>Result:</label>
                <input type="text" value={result} readOnly />
            </div>
        </div>
    );
}