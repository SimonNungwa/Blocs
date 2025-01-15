import React, { useState } from 'react';

const TransactionForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        amount: '',
        sender: '',
        recipient: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ amount: '', sender: '', recipient: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow-md">
            <div className="mb-4">
                <label className="block text-sm font-medium">Amount</label>
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Sender</label>
                <input
                    type="text"
                    name="sender"
                    value={formData.sender}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Recipient</label>
                <input
                    type="text"
                    name="recipient"
                    value={formData.recipient}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Transaction
            </button>
        </form>
    );
};

export default TransactionForm;
