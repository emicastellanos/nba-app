import React from 'react';

import Slick from 'react-slick';
import styles from './slider.css';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

const SliderTemplates = props => {

  let template = null;

  const settings = {
    dots:true,
    infinite:true,
    arrows:false,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    ...props.settings //with ES6 we could do this and add a few settings from the props and the settings inside sliderTemplates could be considered as default settings
  }

  switch(props.type) {
    case ('featured') : template = props.data.map((item,i) => {
      return(
        <div key={i}>
          <div className={styles.featured_item}>
            <div className={styles.featured_image} style={{background:`url(../images/articles/${item.image})`}}>
            </div>
            <Link to={`/articles/${item.id}`}>
              <div className={styles.featured_caption}>
                {item.title}
              </div>
            </Link>
          </div>
        </div>
      )
    })
      break;
    default:
      template = null;  

  }

  return (
    <Slick {...settings}>
      {template}
    </Slick>
  );
};

// SliderTemplates.propTypes = {
  
// };

export default SliderTemplates;