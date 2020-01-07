import React from 'react'
import { connect } from 'react-redux'

function EditUser(props) {
    console.log(props)
    return(
        <form>
            <input 
                type='text'
                placeholder='User Name'

            />
        </form>
    )

}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps,{})(EditUser)