import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    overflow: 'hidden',
  },
  swiper: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
});

const HorizontalSwiper = ({ children }) => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  const handleWheel = (event) => {
    if (event.deltaY > 0 && index < children.length - 1) {
      setIndex(index + 1);
    } else if (event.deltaY < 0 && index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className={classes.root} onWheel={handleWheel}>
      <SwipeableViews
        className={classes.swiper}
        index={index}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
      >
        {React.Children.map(children, (child, i) => (
          <div key={i} style={{ width: '100%', flexShrink: 0, alignItems: "flex-start", color: "#fff"  }}>
            {child}
          </div>
        ))}
      </SwipeableViews>
    </div>
  );
};

export default HorizontalSwiper;