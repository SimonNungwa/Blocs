# Blocs

This project is a full-stack application that simulates a blockchain and provides an API to interact with it. It includes a React-based frontend to visualize the blockchain and a Node.js backend that handles blockchain logic and exposes endpoints for mining blocks and creating transactions.

---

## Features

### Backend
- **Blockchain Simulation:**
    - Create new blocks.
    - Add and validate transactions.
    - Proof of Work implementation.

- **API Endpoints:**
    - Retrieve the blockchain.
    - Create a new transaction.
    - Mine a new block.

### Frontend
- **React UI:**
    - View the blockchain in a visually appealing format.
    - Display block details, including transactions and hashes.

- **Tailwind CSS Integration:**
    - Clean and responsive UI.

---

## Directory Structure

```
blockchain-react-project/
├── backend/
│   ├── blockchain.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── BlockchainView.jsx
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
├── README.md
```

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository
```bash
git clone https://github.com/yourusername/blockchain-react-project.git
cd blockchain-react-project
```

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   node server.js
   ```
   The backend will be running at `http://localhost:3001`.

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```
   The frontend will be running at `http://localhost:3000`.

---

## API Endpoints

### Base URL
`http://localhost:3001`

### 1. Get Blockchain
- **URL:** `/blockchain`
- **Method:** `GET`
- **Description:** Retrieves the entire blockchain.
- **Response:**
  ```json
  {
    "chain": [
      {
        "index": 1,
        "timestamp": 1234567890,
        "transactions": [],
        "nonce": 100,
        "hash": "0",
        "previousBlockHash": "0"
      }
    ]
  }
  ```

### 2. Create Transaction
- **URL:** `/transaction`
- **Method:** `POST`
- **Description:** Adds a new transaction to the pending transactions.
- **Request Body:**
  ```json
  {
    "amount": 50,
    "sender": "John",
    "recipient": "Doe"
  }
  ```
- **Response:**
  ```json
  {
    "note": "Transaction will be added to block 2"
  }
  ```

### 3. Mine Block
- **URL:** `/mine`
- **Method:** `GET`
- **Description:** Mines a new block and adds it to the blockchain.
- **Response:**
  ```json
  {
    "note": "New block mined successfully",
    "block": {
      "index": 2,
      "timestamp": 1234567890,
      "transactions": [],
      "nonce": 12345,
      "hash": "abcd1234",
      "previousBlockHash": "xyz789"
    }
  }
  ```

---

## Usage

### Testing the Backend
- Use a tool like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to interact with the backend.

### Viewing the Blockchain
1. Open the frontend in your browser at `http://localhost:3000`.
2. View blocks, transactions, and hashes in the Blockchain Viewer.

---

## Future Improvements

- **Interactive Features:**
    - Add buttons in the frontend to mine blocks or create transactions directly.

- **Network Support:**
    - Simulate multiple nodes interacting on the same network.

- **Deployment:**
    - Host the backend and frontend on cloud services.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author
[Simon](https://github.com/yourusername)

---

## Contributing

Contributions are welcome! If you'd like to improve the project, please open an issue or submit a pull request.

