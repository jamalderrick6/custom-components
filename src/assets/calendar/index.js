import React, { useState, useEffect } from 'react'

import buildCalendar from './build'
import Header from './header'
import dayStyles, {beforeToday} from './styles'

import './calendar.css'

export default function CustomCalendar({value, onChange}) {
    const [calendar, setCalendar] = useState([])
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]

    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value])

    return (
        <div className="custom-calendar">
            <Header value={value} setValue={onChange}/>
            <div className="body">
                <div className="day-names">
                    {
                        days.map((day) => (
                            <div className="week">
                                {day}
                            </div>
                        ))
                    }
                </div>
            {calendar.map((week) => (
                <div>
                    {week.map((day) => (
                        <div className="day" onClick = {() =>  !beforeToday(day) && onChange(day)}>
                            <div className={dayStyles(day, value)}>{day.format('D')}</div>
                            </div>
                    ))}
                </div>
            ))}
            </div>
        </div>
    )
}