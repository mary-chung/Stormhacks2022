// @link https://mui.com/components/rating/

import * as React from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#746867',
  },
  '& .MuiRating-iconHover': {
    color: '#746867',
  },
});

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Not helpful at all',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Slightly helpful',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Somewhat helpful',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Helpful',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very helpful',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function RadioGroupRating() {
  return (
    <StyledRating
      name="highlight-selected-only"
      // defaultValue={5}
      IconContainerComponent={IconContainer}
      // highlightSelectedOnly
    />
  );
}
