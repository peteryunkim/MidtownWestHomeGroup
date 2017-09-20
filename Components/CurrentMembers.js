import React from 'react'
import {Text, View, Picker, StatusBar} from 'react-native'
import Form from './Form'

export default class CurrentMembers extends React.Component{
	static navigationOptions = {
    title: 'Members',
  };

	constructor(){
		super()
		this.state={
			members: ['Peter', 'Joyce'],
			location: ""
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
				<Picker selectedValue={this.state.location} onValueChange={item => this.setState({location: item})}>
					<Picker.Item label='Midtown West' value='MW'/>
					<Picker.Item label='Midtown East' value='ME'/>
				</Picker>
				<StatusBar>
				</StatusBar>
			</View>
		)
	}
}