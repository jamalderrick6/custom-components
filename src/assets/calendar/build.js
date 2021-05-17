export default function buildCalendar(value){
    const start_date = value.clone().startOf('month').startOf('week')
    const end_date = value.clone().endOf('month').endOf('week')

    const calendar = []
    const day = start_date.clone().subtract(1, 'day')
    while (day.isBefore(end_date, "day")) {
        calendar.push(
            Array(7).fill(0).map(() => day.add(1, "day").clone())
        )
    }

    return calendar
}