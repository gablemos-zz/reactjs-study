import React, {Component} from 'react'

class TechList extends Component{
  state = {
    techs: [
      'NodeJS',
      'ReactJS',
      'ReactNative'
    ]
  }
  render(){
    return (
      <ul>
        <li>NodeJS</li>
        <li>ReactJS</li>
        <li>ReactNative</li>
      </ul>
    )
  }
}

export default TechList