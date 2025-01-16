import React from "react";

const BlockchainView = ({ blockchain }) => {
    if (!blockchain || blockchain.length === 0) {
        return <div className="text-center text-gray-500">No blocks in the chain yet.</div>;
    }

    return (
        <div className="p-4 space-y-6">
            {blockchain.map((block, index) => (
                <div
                    key={block.hash}
                    className="p-4 bg-white border border-gray-200 rounded shadow-md"
                >
                    <h3 className="text-lg font-semibold text-blue-500">Block #{block.index}</h3>
                    <p className="text-sm text-gray-500">
                        <strong>Timestamp:</strong> {new Date(block.timestamp).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">
                        <strong>Nonce:</strong> {block.nonce}
                    </p>
                    <p className="text-sm text-gray-500">
                        <strong>Hash:</strong> {block.hash}
                    </p>
                    <p className="text-sm text-gray-500">
                        <strong>Previous Hash:</strong> {block.previousBlockHash}
                    </p>
                    <div className="mt-2">
                        <h4 className="text-md font-medium text-gray-700">Transactions:</h4>
                        {block.transactions.length > 0 ? (
                            <ul className="list-disc list-inside">
                                {block.transactions.map((tx, i) => (
                                    <li key={tx.transactionId} className="text-sm text-gray-600">
                                        <strong>Amount:</strong> {tx.amount} | <strong>Sender:</strong> {tx.sender} | <strong>Recipient:</strong> {tx.recipient}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-gray-500">No transactions in this block.</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlockchainView;
