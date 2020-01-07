import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'
import { UserHeading, DashContainer, HighScore, Button } from './dashStyles'

function Dashboard(props) {
    console.log(props)
    const [scores, setScores] = useState([2200, 1500, 500, 12, 256, 11 ])
    const [timer, setTimer] = useState(60)
    useEffect(() => {
        axiosWithAuth().get(`/api/user/${props.match.params.id}`)
        .then(res => {
            console.log(res)
            setScores(res.data.scores)
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        timer > 0 &&
        setTimeout(() => {
            setTimer(timer - 1)
        }, 1000)
        
    }, [timer])
    return(
        <DashContainer>
            <UserHeading>{props.userInfo.username}</UserHeading>
            <h3>Hign Score: <HighScore>4000</HighScore></h3>
            {scores && scores.map((item, index) => {
                return (
                    <p key={index}> {item} </p>
                )
            })}
            <div>
                <Link to='/edituser'>
                    <Button>Manage Account</Button>
                </Link>
            </div>

        </DashContainer>
    )
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {})(Dashboard)