import React from 'react'
import {Text, View} from 'react-native'
import Form from './Form'

export default class CurrentMembers extends React.Component{
	constructor(){
		super()
		this.state={
			members: ['Peter', 'Joyce']
		}
	}

	addMember = (name) => {
		this.setState({
			members: [...this.state.members, name]
		})
	}


	render(){
		return(
			<View>
			<Text>
				Current Members:
			</Text>
				{this.state.members.map(name => <Text key={name}>{name}</Text>)}
				<Form addMember={this.addMember}/>
			</View>
		)
	}
}