import React, { useState } from 'react';

export default function SearchFilter() {
    const [searchTerm, setSearchTerm] = useState('');

    const items = [
        'React',
        'NodeJs',
        'MongoDB',
        'Express',
        'Angular',
        'VueJs'
    ];

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ textAlign: 'center', marginTop: '20px', fontFamily: 'sans-serif' }}>
            <div>
                <label style={{ fontSize: '20px' }}>Search: </label>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ fontSize: '18px', padding: '5px' }}
                />
            </div>

            <ul style={{ listStyleType: 'none', padding: 0, fontSize: '22px', marginTop: '20px' }}>
                {filteredItems.map((item, index) => (
                    <li key={index} style={{ margin: '5px 0' }}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}