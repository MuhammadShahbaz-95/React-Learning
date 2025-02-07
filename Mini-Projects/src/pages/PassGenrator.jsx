import Navbar from '@/components/Navbar'
import React, { useCallback, useEffect, useRef, useState } from 'react'

function passGenrater() {
    const [length, setLength] = useState(8);
    const [includeNum, setIncludeNum] = useState(false);
    const [addChar, setAddChar] = useState(false);
    const [password, setPassword] = useState("");

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (includeNum) str += "0123456789";
        if (addChar) str += "!@#$%^&*()_+=-{}[]|:;<>,.?/~`";

        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [length, includeNum, addChar, setPassword]);
    const passRef = useRef(null);

    const copyPassword = useCallback(() => {
        passRef.current?.select();

        // range selection 
        // passRef.current?.setSelectionRange(0, 100);  

        window.navigator.clipboard.writeText(password)

    }, [password])

    useEffect(() => {
        passwordGenerator();
    }, [length, includeNum, addChar, passwordGenerator]);

    return (
        <div>
            <Navbar />
            <div className="max-w-xl text-black mt-32 mx-auto p-8 bg-white rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Random Password Generator</h2>
                
                <div className="flex shadow border rounded-xl overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        readOnly="true"
                        ref={passRef}
                        className="outline-none py-3 w-full bg-slate-300 px-3 focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        className="px-3 bg-blue-500 rounded-r-xl text-white hover:bg-blue-600 transition"
                        onClick={copyPassword}
                    >
                        Copy
                    </button>
                </div>
                
                <div className="mb-4">
                    <label className="block text-sm font-medium">Select Length: {length}</label>
                    <input
                        type="range"
                        className="w-full mt-1"
                        min="6"
                        max="80"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                    />
                </div>
                
                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={includeNum}
                        onChange={() => setIncludeNum((prev) => !prev)}
                    />
                    <span className="ml-2 text-sm">Include Numbers</span>
                </div>
                
                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={addChar}
                        onChange={() => setAddChar((prev) => !prev)}
                    />
                    <span className="ml-2 text-sm">Include Special Characters</span>
                </div>
            </div>
        </div>
    );
}

export default passGenrater;