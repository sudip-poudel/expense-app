import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	expenses: [
		{
			id: "1",
			title: "Car",
			date: new Date(2020, 0, 22).toString(),
			amount: 220,
		},
		{
			id: "2",
			title: "Book",
			date: new Date(2019, 2, 22).toString(),
			amount: 220,
		},
		{
			id: "3",
			title: "Medicine",
			date: new Date(2021, 2, 22).toString(),
			amount: 220,
		},
		{
			id: "4",
			title: "Movie",
			date: new Date(2022, 2, 22).toString(),
			amount: 220,
		},
	],
	showForm: false,
	isNew: true,
	isEdit: false,
	currId: "",
};

export const counterSlice = createSlice({
	name: "expenseReducer",
	initialState,
	reducers: {
		addExpense: (state, action) => {
			const expense = action.payload;
			console.log(expense, "payload");
			state.expenses.push(expense);
		},
		loadExpenses(state, action) {
			state.expenses = action.payload;
		},
		deleteExpense: (state, action) => {
			const newExpenseList = state.expenses.filter(
				(expense) => expense.id !== action.payload
			);
			state.expenses = newExpenseList;
		},
		isEditable(state, action) {
			state.showForm = action.payload;
		},
		setIsNew(state, action) {
			state.isNew = action.payload;
		},
		updateExpense(state, action) {
			const selectedIndex = state.expenses.findIndex(
				(expense) => expense.id === state.currId
			);
			state.expenses[selectedIndex] = { ...action.payload, id: state.currId };
		},
		setEdit(state, action) {
			state.isEdit = action.payload;
		},
		setCurrId(state, action) {
			state.currId = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	addExpense,
	deleteExpense,
	isEditable,
	setIsNew,
	updateExpense,
	setEdit,
	setCurrId,
	loadExpenses,
} = counterSlice.actions;

export const expenses = (state) => state.expenseReducer.expenses;
export const showForm = (state) => state.expenseReducer.showForm;
export const isNew = (state) => state.expenseReducer.isNew;
export const isEdit = (state) => state.expenseReducer.isEdit;
export const currId = (state) => state.expenseReducer.currId;
export default counterSlice.reducer;
