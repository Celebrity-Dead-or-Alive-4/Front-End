import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from './LoginSyling/styling';
import { CelebCard } from './QuizSyling/quizCard';
import { Name } from './QuizSyling/quizCard';

export default function QuizList() {
    const [celebs, setCelebs] = useState([]);


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



    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            
                {celebs.map((celeb, index) => (
                    <CelebrityCard key={index} celeb={celeb} />
                ))}
           
        </div>


    );
}

function CelebrityCard({ celeb }) {
    const { name } = celeb;

    return (

        
            <CelebCard>
                <Name>
                    <h2>Name: {name}</h2>
                </Name>
                <div style={{display: 'flex', alignItems: 'space-between'}}>
                    <Button>Alive</Button>
                    <h1>or</h1>
                    <Button>Dead</Button>
                </div>
            </CelebCard>


    )


}