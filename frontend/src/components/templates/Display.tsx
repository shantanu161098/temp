import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Sync } from '@mui/icons-material'

const QUERY_ALL_SOMETHING = gql`
    query GetAllSomething{
        somethings{
            id
            column1
            column2

        }
    }
`;

const GET_SOMETHING_BY_NAME = gql`
    query GetSomethingByName($name : String!) {
        something(column1: $name){
            column1
            column2
        }

    }
 
`;

const Display = () => {
    const { data, loading, error } = useQuery(QUERY_ALL_SOMETHING);

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
            {data && data.somethings.map((something:any) => {
                return (
                    <div>
                        <h1>Column1: {something.column1}</h1>
                        <h1>Column2: {something.column2}</h1>
                    </div>
                )
            })}
        </div>
    )


}

export default Display;