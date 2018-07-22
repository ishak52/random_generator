import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Nbutton = props => (
  <input type={props.type1} value={props.value1} className={props.b_class} />
)
Sbutton.propTypes = {

  type1: PropTypes.string.isRequired,
  value1: PropTypes.string.isRequired,
  b_class: PropTypes.string.isRequired,
};

export default Nbutton;
