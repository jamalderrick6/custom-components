import React from 'react'
import CustomCalendar from '../../assets/calendar'
import { Calendar, X } from 'react-feather'
import moment from 'moment';

class MonthlyDatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            select_days:[],
            show_calendar: false,
            active: false,
            value: moment()
        }
    }

    setCalendarValue = (val) => {
        this.setState({value: val})
    }

    // ToggleWeekdaySelector = () => {
    //     let wdays_index_list = [1, 2, 3, 4, 5]
    //     this.setState(prev => ({
    //         days: prev.days.map((day, index) => {
    //             if (wdays_index_list.includes(index)) {
    //                 return { ...day, Selected: !day.Selected }
    //             }
    //             return day;
    //         })
    //     }))
    // }

    // ToggleDateSelector = (index) => {
    //     let newDaysArray = [...this.state.days]
    //     newDaysArray[index] = { ...newDaysArray[index], Selected: !newDaysArray[index].Selected }
    //     this.setState({
    //         days: newDaysArray
    //     })
    // }

    render() {
        return (
            <div className="Monthly-Date-Selector__Component Component__Grid__Item">
                <span className="Custom__Light__Font">Select a day</span>
                <span className="DayInput__Box">
                    <span className="Custom__Semi__Font" style={{marginLeft: 5}}>Days</span>
                    <input type='text' value={this.state.select_days.toString()} />
                    <span className="DayInput__Icons">
                        <Calendar style={{fontSize: 10}} />
                        {this.state.show_calendar && <X style={{fontSize: 10}}/>}
                    </span>
                </span>
                <div className="Monthly__CalendarView">
                    <CustomCalendar value={this.state.value} onChange={this.setCalendarValue}/>
                </div>
            </div>
        )
    }
}

export default MonthlyDatePicker