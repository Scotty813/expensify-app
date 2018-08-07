import React from 'react';

const ExpenseListItem = ({ description, amount, count, createdAt }) => (
    <div>

        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
    </div>
)

export default ExpenseListItem;