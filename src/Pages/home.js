import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../Styles/home.css';

function Home() {
  const [blocks, setBlocks] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const mockBlocks = [
    {
      index: 1,
      timestamp: '(Sep-09-2023 04:08:00 PM +UTC)',
      hash: '0xc427322be277e0bcae3a5d1afe23d92f20d3a1734ea4d7691857b5bcefaf8ae2',
      validatedBy: '0x83d69448f88bf9c701c1b93f43e1f753d39b2632',
      blockReward: 0.389885064758444468,
      transactions: [
        {
          transactionNo: '0x745f5d32c6bccda040415a85e2526940804edec0611cb2845c5594d906af680f',
          from: '0x5ef4b21f14863d843108ee1d7598a40f89b521f4',
          to: '0xfcd60b2d8acbc3869cbe1ddcda60d0a92da2d4cb',
          amount: 10.89,
          blocksRecorded: 422,
        },
        {
          transactionNo: '0x416247da7c5078d351bb7825610b45fb8036e0213d520e7885b9b95d6faa8c7c',
          from: '0x8aa4243ef5fe3d6ebe375fa6d47a710266cb0caf',
          to: '0x754e78bc0f7b487d304552810a5254497084970c',
          amount: 3.58,
          blocksRecorded: 484,
        },
        {
          transactionNo: '0x656cab1cb349906af7a15c9628a660529291437d47a41158aabf682aadc613b6',
          from: '0x6a90a2f415996d73ee04a1e7b4b395bbc982be47',
          to: '0xf6d1b85af155229acd7b523601148585a1ff67c6',
          amount: 0.985,
          blocksRecorded: 523,
        }
       
      ]
    },
    {
      index: 2,
      timestamp: 'Sep-09-2023 04:07:56 PM ',
      hash: '0x2083bbe347781e5e34a6bbe0caaf95b532251fbf4e27aa949421e490d9945f1d',
      validatedBy: '0x83d69448f88bf9c701c1b93f43e1f753d39b2632',
      blockReward: 1.59717756109810246,
      transactions: [
        {
          transactionNo: '0xdc0120a4daa587fdfcc31712b3c96129ccfff88c3cb3554c0f771775cb77ef1e',
          from: '0x86d9736a455d4724ccfa4e5141bfdbb692db19ce',
          to: '0x70ea00ab512d13dac5001c968f8d2263d179e2d2',
          amount: 0.1589,
          blocksRecorded: 631,
        },
        {
          transactionNo: '0xfd27d576bff4f1d0d67c654b7f6962e5036598856c0bf85b9753d998313d8d35',
          from: '0x79c82bfad7e92ce4c71e9a670dca8cf53ebe399c',
          to: '0x45a01e4e04f14f7a4a6702c74187c5f6222033cd',
          amount: 1.1589,
          blocksRecorded: 686,
        },
      
      ]
    },
    {
      index: 3,
      timestamp: 'Sep-09-2023 04:07:46 PM',
      hash: '0x651b3fcb5d2a31f2c82a4fac918d6034b86cf074f8747ea3a49a1471283cb6a3',
      validatedBy: '0x67b94473d81d0cd00849d563c94d0432ac988b49',
      blockReward: 0.537143594070001719,
      transactions: [
        {
          transactionNo: '0x5c477f6807a577175f6427ee3446569be2c64112195f2ca17af67441e11e03ac',
          from: '0xebdbe9e5e15901c42833df0112b95a8354114a70',
          to: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
          amount: 10.956,
          blocksRecorded: 855,
        }
       
      ]
    }
  ];

  
  useEffect(() => {
    setBlocks(mockBlocks);
  }, []);

  const openBlockDetails = (block) => {
    setSelectedBlock(block);
    setSelectedTransaction(null); // Close any open transaction popup
  };

  const closeBlockDetails = () => {
    setSelectedBlock(null);
  };

  const openTransactionDetails = (transaction) => {
    setSelectedTransaction(transaction);
    setSelectedBlock(null); // Close any open block popup
  };

  const closeTransactionDetails = () => {
    setSelectedTransaction(null);
  };

  const BlockDetails = ({ block }) => (
    <div className="PopupOverlay" style={{ zIndex: selectedBlock ? 1000 : -1 }}>
      <div className="BlockDetailsContent">
        <h2>Block Details</h2>
        {/* Block details content */}
        <button onClick={closeBlockDetails}>Close</button>
      </div>
    </div>
  );

  const TransactionDetails = ({ transaction }) => (
    <div className="PopupOverlay" style={{ zIndex: selectedTransaction ? 1001 : -1 }}>
      <div className="TransactionDetailsContent">
        <h2>Transaction Details</h2>
        {/* Transaction details content */}
        <button onClick={closeTransactionDetails}>Close</button>
      </div>
    </div>
  );
  return (
    <div className="Home">
      <h2>Block List</h2>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Timestamp</th>
            <th>Hash</th>
          </tr>
        </thead>
        <tbody>
          {blocks.map((block, index) => (
            <tr key={index}>
              <td>{block.index}</td>
              <td>{block.timestamp}</td>
              <td>
                <button onClick={() => openBlockDetails(block)}>
                  {block.hash}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedTransaction && (
        <div className="PopupOverlay">
          <div className="TransactionDetailsContent">
            <h2>Transaction Details</h2>
            <p>Transaction No: {selectedTransaction.transactionNo}</p>
            <p>From: {selectedTransaction.from}</p>
            <p>To: {selectedTransaction.to}</p>
            <p>Amount: {selectedTransaction.amount}</p>
            <p>Blocks Recorded: {selectedTransaction.blocksRecorded}</p>
            <button onClick={closeTransactionDetails}>Close</button>
          </div>
        </div>
      )}

      {selectedBlock && (
        <div className="PopupOverlay">
          <div className="BlockDetailsContent">
            <h2>Block Details</h2>
            <p>Hash: {selectedBlock.hash}</p>
            <p>Validated By: {selectedBlock.validatedBy}</p>
            <p>Block Reward: {selectedBlock.blockReward}</p>

            {selectedBlock.transactions && selectedBlock.transactions.length > 0 && (
              <div className="TransactionList">
                <h3>Transaction List</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Transaction No</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedBlock.transactions.map((transaction, index) => (
                      <tr key={index}>
                        <td>
                          <button onClick={() => openTransactionDetails(transaction)}>
                            {transaction.transactionNo}
                          </button>
                        </td>
                        <td>{transaction.from}</td>
                        <td>{transaction.to}</td>
                        <td>{transaction.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <button onClick={closeBlockDetails}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;