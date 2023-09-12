import json2mq from 'json2mq';
import { useMediaQuery } from '@mui/material';

const MediaQuery = () => {
  const isMobile = useMediaQuery(
    json2mq({
      screen: true,
      minWidth: 320,
      maxWidth: 650
    })
    )
    return isMobile
}

export default MediaQuery