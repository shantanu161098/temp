import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Sync } from '@mui/icons-material'


interface roomAvailabilityInterface {
    date:String
    isAvailable:String

}

const QUERY_ALL_ROOM_AVAILABILITY = gql`
    query GetAllRoomAvailability{
        roomAvailabilitys{
            date
            isAvailable

        }
    }
`

const display = () => {
    const { data, loading, error } = useQuery(QUERY_ALL_ROOM_AVAILABILITY);

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
            {data && data.roomAvailabilitys.map((roomAvailability:roomAvailabilityInterface) => {
                return (
                    <div>
                        <h1>Column1: {roomAvailability.date}</h1>
                        <h1>Column2: {roomAvailability.isAvailable}</h1>
                    </div>
                )
            })}
        </div>
    )


}

export default display