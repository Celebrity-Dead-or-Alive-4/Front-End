import React, { useEffect, useState } from 'react ';
import axios from 'axios';


export default function QuizList() {
    const [celebs, setCelebs] = useState([]);


    useEffect(() => {
        const getCelebrity = () => {
            axios
                .get('celeb api')
                .then(res => {
                    console.log(res);
                    setCelebs(res)
                })
                .catch(err => {
                    console.log('Server Error', error);
                })
        }
        getCelebrity();
    }, []);
    return (
        <section className='celeb-list'>
            <h2>
                {celebs.map(celeb => (
                    <CelebrityCard />
                ))}
            </h2>
        </section>


    );
}

function CelebrityCard() {
    const { name, deathyear, image } = celebrity;

    return (
        <div className='celeb-card'>
            <h2>{name}</h2>
            <imag src={image} />
            <div className='celeb-status'>{deathyear}</div>

        </div>
    )


}