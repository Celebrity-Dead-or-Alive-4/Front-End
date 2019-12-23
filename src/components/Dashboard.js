import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { axiosWithAuth } from '../utils/axiosWithAuth'

function Dashboard(props) {
    console.log(props)
    const [scores, setScores] = useState()
    const [timer, setTimer] = useState(5)
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
        <div>
            <h1>{props.userInfo.username}</h1>
            <h3> {timer} </h3>
            {scores && scores.map((item, index) => {
                return (
                    <h2 key={index}> {item.score} </h2>
                )
            })}

        </div>
    )
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {})(Dashboard)