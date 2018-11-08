import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
            confirmPassword: '',
            redirectTo: null

		}
		this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
	handleUsernameChange(event) {
		this.setState({
			username : event.target.value
		})
    }
    
    handlePasswordChange(event) {
		this.setState({
			password : event.target.value
		})
    }
    
	handleSubmit(event) {
		console.log('signup form submitted ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server 
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('signup successful')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	return (
		<div>
			<h4>Sign up</h4>
			<form>
				<div>
					<div>
						<label> Username </label>
					</div>
					<div>
						<input 
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleUsernameChange}
						/>
					</div>
				</div>
				<div>
					<div>
						<label> Password: </label>
					</div>
					<div>
						<input
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handlePasswordChange}
						/>
					</div>
				</div>
				<div>
					<button
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
			</form>
		</div>

	)}
}

export default Signup
