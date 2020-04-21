import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = (props) => {
  return <button className={props.isSmall}>{props.children}</button>;
};

export default CoolButton;
