import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);

    return (
        <div>This is my Edit Expense component. Id number {props.match.params.id}</div>
    );
};

export default EditExpensePage;