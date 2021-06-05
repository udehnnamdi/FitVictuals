import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import victualsImage from '../../assets/victuals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>fitVictuals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={victualsImage} alt='A table full of healthy victuals!' />
      </div>
    </Fragment>
  );
};

export default Header;