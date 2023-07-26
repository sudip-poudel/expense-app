import React from "react";
import "./NewExpense.css";
import ExpenseForm from "../modal/ExpenseForm";
import { useDispatch, useSelector } from "react-redux";
import {
	isEditable,
	isNew,
	showForm,
	setIsNew,
	isEdit,
	updateExpense,
	setEdit,
} from "../store/expenseSlice";

const NewExpense = (props) => {
	const dispatch = useDispatch();
	const isnew = useSelector(isNew);
	const isedit = useSelector(isEdit);
	const isEditing = useSelector(showForm);
	const startEditing = () => {
		dispatch(isEditable(true));
		dispatch(setIsNew(true));
		dispatch(setEdit(false));
	};
	const endEditing = () => {
		dispatch(isEditable(false));
	};
	const receiveExpense = (expense) => {
		let receivedExpense;
		if (isnew) {
			receivedExpense = { ...expense, id: Math.random().toString() };
			props.onNewExpenseSubmit(receivedExpense);
		}
		if (isedit) {
			console.log(isedit, receivedExpense, "there");
			dispatch(updateExpense(expense));
		}
	};
	return (
		<div className="newexpense_container">
			<button className="newexpense_addbutton" onClick={startEditing}>
				Add New Expense
			</button>

			{isEditing && (
				<ExpenseForm
					onEndEdit={endEditing}
					onNewExpenseSubmitForm={receiveExpense}
					isNew={isnew}
				/>
			)}
		</div>
	);
};
export default NewExpense;
