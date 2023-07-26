import React from "react";
import classes from "./EditOption.module.css";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { IconContext } from "react-icons";

const EditOption = (props) => {
	const deleteExpenseHandler = () => {
		props.onDelete();
	};
	const editExpenseHandler = () => {
		props.onEdit();
	};

	return (
		<IconContext.Provider value={{ size: 24 }}>
			<button className={classes.edit} onClick={editExpenseHandler}>
				<AiOutlineEdit width={500} height={500} />
			</button>
			<button className={classes.edit} onClick={deleteExpenseHandler}>
				<AiOutlineDelete width={500} height={500} />
			</button>
		</IconContext.Provider>
	);
};

export default EditOption;
