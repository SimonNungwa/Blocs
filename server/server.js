const express = require('express');
const Blockchain = require('./blockchain');

const app = express();
const port = 3001;

app.use(express.json());

const blockchain = new Blockchain('http://localhost:3001');

app.get('/blockchain', (req, res) => {
    res.json(blockchain);
});

app.post('/transaction', (req, res) => {
    const { amount, sender, recipient } = req.body;
    const blockIndex = blockchain.createNewTransaction(amount, sender, recipient);
    res.json({ note: `Transaction will be added in block ${blockIndex}.` });
});

app.get('/mine', (req, res) => {
    const lastBlock = blockchain.getLastBlock();
    const previousBlockHash = lastBlock.hash;
    const currentBlockData = {
        transactions: blockchain.pendingTransactions,
        index: lastBlock.index + 1,
    };
    const nonce = blockchain.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash = blockchain.hashBlock(previousBlockHash, currentBlockData, nonce);
    const newBlock = blockchain.createNewBlock(nonce, previousBlockHash, blockHash);

    res.json({ note: 'New block mined successfully', block: newBlock });
});

app.listen(port, () => console.log(`Blockchain server running on port ${port}`));
