import React from 'react'
import { NavLink } from 'react-router-dom'
import Cards from '../../components/card/Cards'
function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>

            <div className="container" >
                <table className="table table-dark" className="table table-bordered">
                    <tr>
                        <th><NavLink to="/nowplaying"><Cards title="Now Playing"/></NavLink></th>
                        <th><NavLink to="/upcoming"><Cards title="Upcoming"/></NavLink></th>
                        <th><NavLink to="/search"><Cards title="Search"/></NavLink></th>
                        <th><NavLink to="/genre"><Cards title="Genre"/></NavLink></th>
                    </tr>
                </table>
            </div>

        </>
    )
}

export default Dashboard
