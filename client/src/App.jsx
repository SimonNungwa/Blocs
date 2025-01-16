import React, { useState, useEffect } from "react";
import BlockchainView from "./components/BlockchainView";

const App = () => {
    const [blockchain, setBlockchain] = useState([]);

    // Fetch blockchain data from the backend
    useEffect(() => {
        fetch("http://localhost:3001/blockchain")
            .then((response) => response.json())
            .then((data) => {
                setBlockchain(data.chain); // Assuming the backend returns { chain: [...] }
            })
            .catch((error) => console.error("Error fetching blockchain data:", error));
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="p-4 bg-blue-600 text-white text-center font-bold">
                React Blockchain Viewer
            </header>
            <main className="p-4">
                <h1 className="text-xl font-bold text-gray-700 mb-4">Blockchain Overview</h1>
                <BlockchainView blockchain={blockchain} />
            </main>
        </div>
    );
};

export default App;
