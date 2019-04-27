import React, { Component } from 'react';
import axios from 'axios';
import styles from 'articles.css';
import {URL} from '../../../../config';
import Header from './header.js';

export default class index extends Component {
  state = {
    videos:[],
    team:[]
  }

  componentWillMount(){
    axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
    .then( response => {
      let article = response.data[0];

      axios.get(`${URL}/teams?id=${article.team}`)
      .then( response => {
        this.setState({
          article,
          team:response.data
        })
      })
 
    })
  }
  render() {
    const {article,team} = this.state;
    return (
      <div>
        <Header teamData={team[0]}/>
      </div>
    )
  }
}
