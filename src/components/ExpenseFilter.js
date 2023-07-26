import React from 'react'
import './ExpenseFilter.css';
function ExpenseFilter(props) {
    const selectedYearHandler = (event) => {
        props.onFilterSelect(event.target.value);
    }
    return (
        <div>
            <div className='expensefilter_container'>
                <label>Filter By Year</label>
                <select value={props.defaultFilterYear} onChange={selectedYearHandler} name="date">
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter