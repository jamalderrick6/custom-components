import React from 'react'

export default function CustomCalendarHeader({value, setValue}) {
    function currMonthName(){
        return value.format('MMMM')
    }

    function currYear(){
        return value.format('YYYY')
    }

    function prevMonth(){
        return value.clone().subtract(1, "month")
    }

    function nextMonth(){
        return value.clone().add(1, "month")
    }

    function thisMonth(){
        return value.isSame(new Date(), "month")
    }


    return (
            <div className="header">
                <div onClick={() => !thisMonth() && setValue(prevMonth())} className="previous">
                    {!thisMonth()?  String.fromCharCode(171) : null}
                </div>
                <div className="current">{currMonthName()} {currYear()}</div>
                <div onClick={() => setValue(nextMonth())} className="next">{String.fromCharCode(187)}</div>
            </div>
    )
}