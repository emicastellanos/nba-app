import React, { Component } from 'react';
import axios from 'axios';
import {URL} from '../../../../config';

import styles from '../../articles.css';
import Header from './header';


class NewsArticles extends Component {

  state = {
    article:[],
    team:[],
  }

  componentWillMount(){
    axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
    .then( response => {
      console.log('news articles: ', response);
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
    const {article, team} = this.state;
    console.log('articles ',this.state.article)
    console.log('teams ',this.state.team)
    return (
      <div className={styles.articleWrapper}>
        <Header
            teamData={team[0]}
            date={article.date}
            author={article.author}
        />
        {/* ALL THE BODY DONE HERE INSTEAD ON A PARTICULAR COMPONENT THAT WE'LL NEVER REUSE */}
        <div className={styles.articleBody}>
          <h1>{article.title}</h1>
          <div className={styles.articleImage}
            style={{
              background:`url('/images/articles/${article.image}')`
            }}
          >
          </div>
          <div className={styles.articleText}>
            {article.body}
          </div>
        </div>

      </div>
    );
  }
}

export default NewsArticles;