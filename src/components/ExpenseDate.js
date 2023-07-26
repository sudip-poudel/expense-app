import "./ExpenseDate.css"
const ExpenseDate = (propss) => {
    const months = propss.date.toLocaleString('en-US', { month: 'long' });
    const day = propss.date.toLocaleString('en-US', { day: "2-digit" })
    const year = propss.date.getFullYear();
    return (
        <div className="expenses_date">
            <div className="expense-date_month">{months}</div>
            <div className="expense-date_year">{year}</div>
            <div className="expense-date_day">{day}</div>
        </div>
    );
}
export default ExpenseDate;