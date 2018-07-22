import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Name = props => (

  <div className={`${props.a_class} ${props.bg_class} ${props.s_class}`}>
    <input onChange={props.handleChange} type="text" name={props.name} placeholder={props.placeholder} required />
  </div>
)
Score.propTypes = {
  placeholder:PropTypes.string,
  name: PropTypes.string,
  bg_class: PropTypes.string.isRequired,
  s_class: PropTypes.string.isRequired,
  a_class: PropTypes.string.isRequired,
};

export default Name;
