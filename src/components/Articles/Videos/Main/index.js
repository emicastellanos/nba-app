import React from 'react';
import VideosLists from '../../../widgets/VideosList/videosLists';
//import styles from '../../articles.css';

const VideosMain = () => {
  return (
    <div>
      <VideosLists
        type="card"
        title={false}
        loadmore={true}
        start={0} 
        amount={6}
      />
      
    </div>
  );
};

export default VideosMain;