import React from 'react';
import styles from './videosList.css';
import {Link} from 'react-router-dom';
import CardInfo from '../CardInfo/cardInfo';


// appreciate the arrow function using parenthesis cause if not, it will no returning nothing, in that case we need to use curly braces with the return word
const videosListTemplate = (props) => {
  return props.data.map( (item,i) => (
    <Link to={`/videos/${item.id}`} key={i}> 
      <div className={styles.videoListItem_wrapper}>
        <div className={styles.left}
          style={{
            background:`url(/images/videos/${item.image})`
          }}
        >
        <div></div>
        </div>
        <div className={styles.right}>
          <CardInfo teams={props.teams} team={item.team} date={item.date}></CardInfo>
          <h2>{item.title}</h2>
        </div>
      </div>
    </Link>
  ))
}

export default videosListTemplate;