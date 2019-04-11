import React from 'react';

import NewsSlider from '../widgets/NewsSlider/slider';

const Home = () => {
  return (
    <div>
      home
      <NewsSlider 
        type="featured" 
        start={0} 
        amount={3}
        settings={{dots:false}}
        />
    </div>
  )
}

export default Home;