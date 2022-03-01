import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Sync } from '@mui/icons-material'

interface booking {
    check_in_date : String
    check_out_date : String
    adult_count : String
    child_count : String
    total_cost : String
    amount_due_at_resort : String
}

const QUERY_ALL_BOOKING = gql`
    query GetAllBooking{
        bookings{
            check_in_date
            check_out_date
            adult_count
            child_count
            total_cost
            amount_due_at_resort
        }
    }
`

const display = () => {
    const { data, loading, error } = useQuery(QUERY_ALL_BOOKING);

    if (loading) {
        return (
            <div>
                <h1>Loading</h1>
            </div>
        )

    }

    if (error) {
        return (
            console.log(error)
        )
    }

    return (
        <div>
            {data && data.bookings.map((booking: any) => {
                return (
                    <div>
                        <h1>Column1: {booking.check_in_date}</h1>
                        <h1>Column2: {booking.check_out_date}</h1>
                        <h1>Column3: {booking.adult_count}</h1>
                        <h1>Column4: {booking.child_count}</h1>
                        <h1>Column5: {booking.total_cost}</h1>
                        <h1>Column6: {booking.amount_due_at_resort}</h1>
                    </div>
                )
            })}
        </div>
    )


}

export default display