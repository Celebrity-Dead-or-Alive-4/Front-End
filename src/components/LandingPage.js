import React from 'react'
import spears from '../images/spears.jpg'

export function LandingPage() {

    return (
        <div className='landing-container'>
            <h2 className='landing-h2'>Britney Spears</h2>
            <div className='landingcard'>
                <img className='landing-image' src={spears} alt='spears' />
                <div className='landingbutton-container'>
                    <div className='landing-button'>Dead</div>
                    <h4 className='landing-h4'>OR</h4>
                    <div className='landing-button'>Alive</div>

                </div>
            </div>
            
        </div>
    )
}