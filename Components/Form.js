import React from 'react'
import { Text, TextInput, View} from 'react-native'


export default class Form extends React.Component{
	constructor(){
		super()
		this.state={
			name: ""
		}
	}

	handleChange =(name) => {
		this.setState({
			name: name
		})
	}

	handleSubmit = () =>{ 
		this.props.addMember(this.state.name)
		this.setState({
			name: ""
		})
	}

	render(){
		return(
			<View style={{padding: 10}}>
				<TextInput style={{height: 40}} placeholder='Who is joining?' value={this.state.name} onChangeText={this.handleChange} onSubmitEditing={this.handleSubmit}/>
			</View>
		)
	}
}