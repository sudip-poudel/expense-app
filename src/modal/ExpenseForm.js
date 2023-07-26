import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
	const [EnteredTitle, setEnteredTitle] = useState("");
	const [EnteredAmount, setEnteredAmount] = useState("");
	const [EnteredDate, setEnteredDate] = useState("");

	// const [userInput,setUserInput]= useState({
	//     EnteredAmount:'',
	//     EnteredDate:'',
	//     EnteredTitle:''
	// })

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		// setUserInput((userInput)=>{return({
		//     ...userInput,
		//     EnteredTitle: event.target.value
		// })}
		// )
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const newExpenseData = {
			title: EnteredTitle,
			amount: EnteredAmount,
			date: EnteredDate,
		};
		props.onNewExpenseSubmitForm(newExpenseData);

		setEnteredAmount("");
		setEnteredTitle("");
		setEnteredDate("");
		props.onEndEdit();
	};

	return (
		<div className="backdrop" onClick={props.onEndEdit}>
			<div className="expense_form" onClick={(e) => e.stopPropagation()}>
				<form onSubmit={submitHandler}>
					<div className={"newexpense_form"}>
						<div className="newexpense_title newexpense__divs">
							<label>Title</label>
							<input
								required
								type="text"
								value={EnteredTitle}
								onChange={titleChangeHandler}
							/>
						</div>
						<div className="newexpense_amount newexpense__divs">
							<label>Amount</label>
							<input
								required
								onChange={amountChangeHandler}
								value={EnteredAmount}
								type="number"
								min="0.01"
								step=".01"
							/>
						</div>
						<div className="newexpense_date newexpense__divs">
							<label>Date</label>
							<input
								required
								onChange={dateChangeHandler}
								value={EnteredDate}
								type="date"
								min="2020-01-01"
								max="2023-12-31"
							/>
						</div>
						<div className="newexpense__divs">
							<button
								type="button"
								className="newexpense_button"
								onClick={props.onEndEdit}
							>
								Cancel
							</button>
							<button className="newexpense_button">
								{props.isNew ? "Add Expense" : "Update Expense"}{" "}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ExpenseForm;
