import "./Expense.css";
import NewExpense from "./NewExpense";
import ExpenseFilter from "./ExpenseFilter";
import { useEffect, useState } from "react";
import ExpenseList from "./ExpenseList";
import { useSelector, useDispatch } from "react-redux";
import {
	addExpense,
	expenses,
	isNew,
	loadExpenses,
} from "../store/expenseSlice";
const getLocalStorage = () => {
	const oldExpenses = JSON.parse(window.localStorage.getItem("ADDED_EXPENSES"));
	if (oldExpenses) {
		return oldExpenses;
	} else {
		return [];
	}
};
const loadedExpenses = getLocalStorage();
const Expense = () => {
	const dispatch = useDispatch();
	console.log(getLocalStorage());
	useEffect(() => {
		dispatch(loadExpenses(loadedExpenses));
	}, [dispatch]);
	const isnew = useSelector(isNew);

	const nonFormattedItems = useSelector(expenses);
	console.log(nonFormattedItems);
	// const [items, setItems] = useState(getLocalStorage());

	// useEffect(() => {
	// 	window.localStorage.setItem(
	// 		"ADDED_EXPENSES",
	// 		JSON.stringify(nonFormattedItems)
	// 	);
	// }, []);

	const formattedItems = nonFormattedItems.map((expense) => {
		const dt = expense.date;
		const stDate = new Date(dt);
		const newExpense = { ...expense, date: stDate };
		return newExpense;
	});

	// const [items, setItems] = useState([]);

	const updateLocalStorage = () => {
		window.localStorage.setItem(
			"ADDED_EXPENSES",
			JSON.stringify(nonFormattedItems)
		);
	};

	useEffect(() => {
		updateLocalStorage();
	}, [nonFormattedItems]); // nonFormattedItems is used as a dependency here
	console.log(nonFormattedItems);
	const newExpenseHandler = (expense) => {
		if (isnew) {
			dispatch(addExpense(expense));
		}
		// const updateExpense = { ...expense, id: "" };
		// dispatch(updateExpense(expense.id));
	};

	const [selectedYear, setSelectedYear] = useState("2023");
	const filterHandler = (filter) => {
		setSelectedYear(filter);
	};

	const items = formattedItems;
	const filteredItems = items.filter((expense) => {
		return expense.date.getFullYear().toString() === selectedYear;
	});

	return (
		<div>
			<NewExpense onNewExpenseSubmit={newExpenseHandler} />
			<div className="expensecontainer_box">
				<div className="expense_container">
					<ExpenseFilter
						defaultFilterYear={selectedYear}
						onFilterSelect={filterHandler}
					/>
					<ExpenseList items={filteredItems} />
				</div>
			</div>
		</div>
	);
};
export default Expense;
