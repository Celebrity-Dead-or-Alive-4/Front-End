import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from './LoginSyling/styling';
import { CelebCard } from './QuizSyling/quizCard';
import { Name } from './QuizSyling/quizCard';
import { ADD_SCORE } from '../utils/actions'
import { useDispatch } from 'react-redux'

export default function QuizList(props) {
    const [celebs, setCelebs] = useState();
    const [start, setStart] = useState(false)
    const [timer, setTimer] = useState(60)
    const [totalScore, setTotalScore] = useState(0)
    const [submit, setSubmit] = useState(false)
    const [questionCount, setQuestionCount] = useState(0)
    console.log(totalScore)
    const dispatch = useDispatch()
    useEffect(() => {
        const getCelebrity = () => {
            axios
                .get('https://celebrity-dead-or-alive-data.herokuapp.com/all')
                .then(res => {
                    console.log(res);
                    setCelebs(res.data.data)
                })
                .catch(err => {
                    console.log('Server Error', err);
                })
        }
        getCelebrity();
    }, []);
    useEffect(() => {
        start && timer > 0 && !submit &&
            setTimeout(() => {
                setTimer(timer - 1)
            }, 1000)
    }, [timer, start])
    useEffect(() => {
        if(questionCount === 10) {
            setSubmit(true)
            setTotalScore(totalScore + timer)
        }
    }, [questionCount])
    
    const scoring = (index, ans) => {
        setQuestionCount(questionCount + 1)
        if(celebs[index].died && ans === true){
            setTotalScore(totalScore + 10)
        }else if(!celebs[index].died && ans === false){
            setTotalScore(totalScore + 10)
        }
    }
    const submitScore = () => {
        console.log(totalScore)
        dispatch({type: ADD_SCORE, payload: totalScore})
        props.history.push('/dashboard')
    }
    
  

    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            
            {start && !submit && <h2> {timer} </h2>}
            {submit && <h2> Total Score: {totalScore} </h2>}
            {start && !submit &&
                celebs.map((celeb, index) => (
                    <CelebrityCard key={index} celeb={celeb} scoring={scoring} position={index} />
            )) }
            {!submit && !start && 
                <Button style={{
                    width: '90%',
                    justifyContent:'center',
                    marginTop: '100px',
                    boxShadow: '2px 2px 2px black'
                }} onClick={(e) => {
                    e.preventDefault()
                    setStart(true)
                }}>Start Quiz</Button>
            }
            {submit &&
                <Button style={{
                    width: '90%',
                    justifyContent:'center',
                    marginTop: '100px',
                    boxShadow: '2px 2px 2px black'
                }} onClick={(e) => {
                    e.preventDefault()
                    setStart(false)
                    submitScore()
                }}>Submit Score</Button>
            }
           
        </div>


    );
}

function CelebrityCard({ celeb, scoring, position }) {
    const { name } = celeb;
 
    return (

        
            <CelebCard>
                <Name>
                    <h2>Name: {name}</h2>
                </Name>
                <div style={{display: 'flex', alignItems: 'space-between'}}>
                    <Button onClick={(e) => {
                        e.preventDefault()
                        scoring(position, false)
                    }}>Alive</Button>
                    <h1>or</h1>
                    <Button onClick={(e) => {
                         e.preventDefault()
                         scoring(position, true)
                    }}>Dead</Button>
                </div>
            </CelebCard>


    )


}