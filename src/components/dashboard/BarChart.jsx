'use client'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { authApi } from '@/js/api';

// Register the components needed for the chart
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = () => {
    const [transactions, setTransactions] = useState({
        deposit: 0,
        withdraw: 0,
        balance_transfer: 0,
        loan: 0
    });
    useEffect(() => {
        const getTransactions = async () => {
            const response = await authApi.get(`accounts/transactions/list/all/`);
            let newTransaction = {
                deposit: 0,
                withdraw: 0,
                balance_transfer: 0,
                loan: 0
            }
            response.data.map((transaction)=>{
                if(transaction.type === 'Deposited'){
                   newTransaction['deposit'] = newTransaction.deposit+1
                }
                if(transaction.type === 'Withdraw'){
                    newTransaction['withdraw'] = newTransaction.withdraw+1
                }
                if(transaction.type === 'Transfer'){
                    newTransaction['balance_transfer'] = newTransaction.balance_transfer+1
                }
                if(transaction.type === 'Loan'){
                    newTransaction['loan'] = newTransaction.loan+1
                }
            })
            setTransactions(newTransaction)
        }
        getTransactions();
    }, []);

    
  // Sample data for the bar chart
  const data = {
    labels: ['Deposit', 'Withdraw', 'Balance Transfer', 'Loan'],
    datasets: [
      {
        label: 'Times',
        data: [transactions.deposit, transactions.withdraw, transactions.balance_transfer, transactions.loan],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Transactions Data',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
