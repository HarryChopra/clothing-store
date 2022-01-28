import React from 'react'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import CustomFormInput from '../CustomFormInput'
import CustomButton from '../CustomButton'
import './style.scss'

class Signin extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ email: '', password: '' })
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Signin with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <CustomFormInput
                        name='email'
                        type='email'
                        label='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        autoComplete='on'
                        required />

                    <CustomFormInput
                        name='password'
                        type='password'
                        label='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        autoComplete='on'
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isOAuth>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin