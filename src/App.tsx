import React, { useState } from 'react';
import './App.css';
import TempChart from './components/TempChart.tsx';
import HumChart from './components/HumChart.tsx';

{/* ID for Weather Station: 2CF7F1C0443002D2 */}
{/* ID for Tracker:  2CF7F1C054100647 */}

function App() {

    const [EUID, setEUID] = useState('2CF7F1C0443002D2');


    const handleEUIDChange = (text) => {
        setEUID(text.target.value);
    };

    return (
        <>
            <div>
                <h2>SenseCap Chart</h2>

                <div>
                    Enter EUID:
                    <input
                        type="text"
                        value={EUID}
                        onChange={handleEUIDChange}
                    />
                </div>

                <div>ID for Weather Station: 2CF7F1C0443002D2</div>
                <div>ID for Tracker: 2CF7F1C054100647</div>

                <TempChart EUID={EUID}/>
                <HumChart EUID={EUID}/>
            </div>
        </>
    );
}

export default App;
