import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'
import { UserHeading, DashContainer, HighScore, Button } from './dashStyles'
import { useSelector } from 'react-redux'
import EditUser from './EditUser'

function Dashboard(props) {
    console.log(props)
    const [scores, setScores] = useState([2200, 1500, 500, 12, 256, 11 ])
    const [editUser, setEditUser] = useState(false)
    const state = useSelector(state => state)
    console.log(state)
    
    const manageAccount = (e) => {
        e.preventDefault()
        setEditUser(true)
    }

    const handleSubmit = () => {

    }
    
    const handleDelete = () => {

    }

    return(
        <DashContainer>
            {!editUser &&
            <div>
                <UserHeading>{state.userInfo.message}</UserHeading>
                <h3>Hign Score: <HighScore>4000</HighScore></h3>
                {scores && scores.map((item, index) => {
                    return (
                        <p key={index}> {item} </p>
                    )
                })}
                <div>
                    <Button onClick={manageAccount}>Manage Account</Button>
                </div>
            </div>
             }
             {editUser && 
                <form>
                    <UserHeading> {state.userInfo.message} </UserHeading>
                    <p>Edit account name and email address</p>
                    <div>
                    <input 
                        placeholder='Name'
                    />
                    </div>
                    <div>
                    <input 
                        placeholder='Email'
                    />
                    </div>
                    <Button onClick={handleSubmit}>Submit Changes</Button>
                    <Button onClick={handleDelete} style={{backgroundColor: 'red'}}>Delete Account</Button>
                </form>
             }
            
        </DashContainer>
    )
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {})(Dashboard)