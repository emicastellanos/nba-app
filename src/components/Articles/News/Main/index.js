import React from 'react';
import NewsSlider from '../../../widgets/NewsSlider/slider'
import NewsList from '../../../widgets/NewsList/newsList'

const NewsMain = () => {
  
  return (
    <div>
      <NewsSlider
        type="featured" 
        start={0} 
        amount={3}
        settings={{dots:false}}
        />
      <NewsList 
      type="cardMain" 
      loadmore={true}
      start={0}
      amount={9}
      />

      
    </div>
  )

}

export default NewsMain;