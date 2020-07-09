import React, { Component } from 'react';
import { Query } from "@apollo/react-components";
import { gql } from "apollo-boost";
import LaunchItem from './LaunchItem';
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

export class Launches extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4 my-3">Launches</h1>
                <MissionKey />
                <Query query={LAUNCHES_QUERY}>{({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :</p>;
                    return data.launches.map(launch => {
                        return <LaunchItem key={launch.flight_number} launch={launch} />
                    })
                }}
                </Query>
            </div>
        )
    }
}

export default Launches
