import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Sync } from '@mui/icons-material'

interface rate {
    date:String
    basic_nightly_rate:String
}

const QUERY_ALL_RATES = gql`
    query GetAllRate{
        room_rate{
            id
            basic_nightly_rate
            date
        }
    }
`

const Rates = () => {
    const { data, loading, error } = useQuery(QUERY_ALL_RATES);

    if (loading) {
        return (
            <div>
                <h1>Loading</h1>
            </div>
        )

    }

    

    return (
        <div>
            {data && data.rates.map((room_rate:rate) => {
                return (
                    <div>
                        <h1>Column1: {room_rate.basic_nightly_rate}</h1>
                        <h1>Column2: {room_rate.date}</h1>
                    </div>
                )
            })}
        </div>
    )


}

export default Rates;