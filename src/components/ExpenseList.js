import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./ExpenseList.css";
const ExpenseList = (props) => {
	if (props.items.length === 0) {
		return <p className="no_expenses">No expenses this year</p>;
	}

	return props.items.map((expense2) => (
		<ExpenseItems
			key={expense2.id}
			id={expense2.id}
			title={expense2.title}
			date={expense2.date}
			amount={expense2.amount}
		/>
	));
};

export default ExpenseList;
