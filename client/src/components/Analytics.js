
import React from 'react'
import { Progress } from 'antd'
//import { Transaction } from 'mongodb'

const Analytics = ({ allTransactions }) => {
    //category
    const categories = ['Salary', 'Food', 'Bills', 'Movie', 'Medical', 'Tax']

    // total transactions
    const totalTransactions = allTransactions.length
    const totalIncomeTransactions = allTransactions.filter(transaction => transaction.type === 'income')
    const totalExpenseTransactions = allTransactions.filter(transaction => transaction.type === 'expense')
    const totalIncomePercent =
        (totalIncomeTransactions.length / totalTransactions) * 100
    const totalExpensePercent =
        (totalExpenseTransactions.length / totalTransactions) * 100

    // total turnover
    const totalTurnover = allTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalIncomeTurnover = allTransactions.filter(transaction => transaction.type === 'income')
        .reduce((acc, transaction) => acc + transaction.amount, 0)

    const totalExpenseTurnover = allTransactions.filter(transaction => transaction.type === 'expense')
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalIncomePercentTurnover = (totalIncomeTurnover / totalTurnover) * 100;
    const totalExpensePercentTurnover = (totalExpenseTurnover / totalTurnover) * 100;

    return (
        <>
            <div className='row m-3'>
                <div className='col-mod-4'>
                    <div className='card'>
                        <div className='card-header'>
                            Total Transactions : {totalTransactions}
                        </div>
                        <div className='card-body'>
                            <h5 className='text-success'>Income : {totalIncomeTransactions.length}</h5>
                            <h5 className='text-danger'>Expense : {totalExpenseTransactions.length}</h5>
                            <div>
                                <Progress type='circle' strokeColor={'green'} className='mx-2' percent={totalIncomePercent.toFixed(0)} />
                                <Progress type='circle' strokeColor={'red'} className='mx-2' percent={totalExpensePercent.toFixed(0)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-mod-4'>
                    <div className='card'>
                        <div className='card-header'>
                            Total TurnOver : {totalTurnover}
                        </div>
                        <div className='card-body'>
                            <h5 className='text-success'>Income : {totalIncomeTurnover}</h5>
                            <h5 className='text-danger'>Expense : {totalExpenseTurnover}</h5>
                            <div>
                                <Progress type='circle' strokeColor={'green'} className='mx-2' percent={totalIncomePercentTurnover.toFixed(0)} />
                                <Progress type='circle' strokeColor={'red'} className='mx-2' percent={totalExpensePercentTurnover.toFixed(0)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                {/* <div className='col md-3'>
                    <h1>Categorywise Expense</h1>
                    {categories.map((category) => {
                        const amount = allTransactions.filter(transaction => transaction.type === 'expense' && transaction.category === category)
                            .reduce((acc, transaction) => acc + transaction.amount, 0);
                        console.log(amount);

                        return (
                            <div className='card' key={category}>
                                <div className='card-body'>
                                    <h5>{category}</h5>
                                    <Progress
                                        percent={((amount / totalExpenseTurnover) * 100).toFixed()} />
                                </div>
                            </div>
                        )
                    })}
                </div> */}
                {/* <div className='col md-3'>
                    <h1>Categorywise Income</h1>
                    {categories.map((category) => {
                        const amount = allTransactions.filter(transaction => transaction.type === 'income' && transaction.category === category)
                            .reduce((acc, transaction) => acc + transaction.amount, 0);

                        return (
                            <div className='card' key={category}>
                                <div className='card-body'>
                                    <h5>{category}</h5>
                                    <Progress
                                        // percent={((amount / totalIncomeTurnover) * 100).toFixed()} 
                                        percent={Number(((amount / totalIncomeTurnover) * 100).toFixed(0))} 
                                        />

                                </div>
                            </div>
                        )
                    })}
                </div> */}
            </div>
        </>
    )
}

export default Analytics;
