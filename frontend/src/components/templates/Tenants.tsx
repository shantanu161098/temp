import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Sync } from '@mui/icons-material'


const GET_TENANTS_BY_ID = gql`
query MyQuery {
    getTenant(where: { tenant_id: 1 }) {
      tenant_id
      tenant_name
    }
  }
`

const Tenants = () => {
    const { data, loading, error } = useQuery(GET_TENANTS_BY_ID);

    if (loading) {
        return (
            <div>
                <h1>Loading</h1>
            </div>
        )

    }

    if (error) {
        return (
            <div>error</div>
        )
    }

    else{
        console.log(data);
        return (
            <div>
                sucess
            </div>
        )
    }
    

}

export default Tenants