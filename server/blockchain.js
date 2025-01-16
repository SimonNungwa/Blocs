const crypto = require('crypto');
const uuid = require('uuid');

class Blockchain {
    constructor(currentUrl) {
        this.chain = [];
        this.pendingTransactions = [];
        this.currentNodeUrl = currentUrl;
        this.networkNodes = [];
        this.createNewBlock(100, '0', '0'); // Genesis block
    }

    createNewBlock(nonce, previousBlockHash, hash) {
        const newBlock = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.pendingTransactions,
            nonce,
            hash,
            previousBlockHash,
        };
        this.pendingTransactions = []; // Clear the pending transactions
        this.chain.push(newBlock);
        return newBlock;
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    createNewTransaction(amount, sender, recipient) {
        const newTransaction = {
            amount,
            sender,
            recipient,
            transactionId: uuid.v1().split('-').join(''),
        };
        this.pendingTransactions.push(newTransaction);
        return this.getLastBlock()['index'] + 1; // Return index of the next block
    }

    hashBlock(previousBlockHash, currentBlockData, nonce) {
        const dataAsString =
            previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
        return crypto.createHash('sha256').update(dataAsString).digest('hex');
    }

    proofOfWork(previousBlockHash, currentBlockData) {
        let nonce = 0;
        let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        while (hash.substring(0, 4) !== '0000') {
            nonce++;
            hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        }
        return nonce;
    }
}

module.exports = Blockchain;