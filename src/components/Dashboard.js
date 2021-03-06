import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'
import { UserHeading, DashContainer, HighScore, Button } from './dashStyles'
import { useSelector } from 'react-redux'
import EditUser from './EditUser'

function Dashboard(props) {
    console.log(props)
    const [form, setForm] = useState({
        name: '',
        email: ''

    })
    // const [scores, setScores] = useState([2200, 1500, 500, 12, 256, 11 ])
    const [editUser, setEditUser] = useState(false)
    const state = useSelector(state => state)
    console.log(state)
    const id = state.userInfo.userId
    state.scores.sort(function(a, b){return b-a})
    

    const manageAccount = (e) => {
        e.preventDefault()
        setEditUser(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth().put(`user/${id}`, form )
            .then(res => {
                console.log(res)
                setEditUser(false)
            })
            .catch(err => console.log(err))
    }
    
    const handleDelete = (e) => {
        e.preventDefault()
        axiosWithAuth().delete(`user/${id}`)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', null)
                props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    return(
        <DashContainer>
            {!editUser &&
            <div>
                <UserHeading>{state.userInfo.message}</UserHeading>
                <h3>Hign Score: <HighScore> {state.scores[0]} </HighScore></h3>
                {state.scores && state.scores.map((item, index) => {
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
                        name='name'
                        placeholder='Name'
                        value={form.name}
                        onChange={(e)=>{
                            setForm({
                                ...form,
                                [e.target.name]:e.target.value
                            })
                        }}
                    />
                    </div>
                    <div>
                    <input 
                        name='email'
                        placeholder='Email'
                        value={form.email}
                        onChange={(e)=>{
                            setForm({
                                ...form,
                                [e.target.name]:e.target.value
                            })
                        }}
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