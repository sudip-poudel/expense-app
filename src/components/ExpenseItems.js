import React from "react";
import EditOption from "./ui/EditOption";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import {
	deleteExpense,
	isEditable,
	setIsNew,
	setEdit,
	setCurrId,
} from "../store/expenseSlice";
import { useDispatch } from "react-redux";
const ExpenseItems = (propss) => {
	const dispatch = useDispatch();
	const deleteHandler = () => {
		dispatch(deleteExpense(propss.id));
	};
	const editHandler = () => {
		dispatch(isEditable(true));
		dispatch(setIsNew(false));
		dispatch(setEdit(true));
		dispatch(setCurrId(propss.id));
	};

	return (
		<div className="expenses_container">
			<ExpenseDate date={propss.date} />
			<div className="expenses_details">
				<h2 className="expenses_title">{propss.title}</h2>
				<div className="icon">
					<div className="expenses_amount">${propss.amount}</div>
					<div>
						<EditOption onDelete={deleteHandler} onEdit={editHandler} />
					</div>
				</div>
			</div>
			{/* <button onClick={changeTitle} >Change title</button> */}
		</div>
	);
};
export default ExpenseItems;
