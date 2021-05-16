import React from 'react'

class WeeklyDatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: [
                { day: 'Sun', Selected: false, Slug: 'Sunday' },
                { day: 'Mon', Selected: false, Slug: 'Monday' },
                { day: 'Tue', Selected: false, Slug: 'Tuesday' },
                { day: 'Wed', Selected: false, Slug: 'Wednesday' },
                { day: 'Thur', Selected: false, Slug: 'Thursday' },
                { day: 'Fri', Selected: false, Slug: 'Friday' },
                { day: 'Sat', Selected: false, Slug: 'Saturday' },
            ],
            active: false
        }
    }

    ToggleWeekdaySelector = () => {
        let wdays_index_list = [1, 2, 3, 4, 5]
        this.setState(prev => ({
            days: prev.days.map((day, index) => {
                if (wdays_index_list.includes(index)) {
                    return { ...day, Selected: !day.Selected }
                }
                return day;
            })
          }))
    }

    ToggleDateSelector = (index) => {
        let newDaysArray = [...this.state.days]
        newDaysArray[index] = { ...newDaysArray[index], Selected: !newDaysArray[index].Selected }
        this.setState({
            days: newDaysArray
        })
    }

    render() {
        return (
            <div className="Weekly-Date-Selector__Component Component__Grid__Item">
                <div className="Custom__AutoDateSelector">
                    <span className="Custom__Light__Font">auto select on option:</span>
                    <button onClick={this.ToggleWeekdaySelector} className="Custom_Primary_Button">All Weekdays</button>
                </div>
                <div className="Days__Of__Week">
                    {this.state.days.map((day, index) => {
                        return (
                            <div className={`Day ${day.Selected ? 'selected_date' : ''}`} key={index} tabindex="0" onClick={() => this.ToggleDateSelector(index)} aria-label={day.Slug}>
                                <span>{day.day}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default WeeklyDatePicker