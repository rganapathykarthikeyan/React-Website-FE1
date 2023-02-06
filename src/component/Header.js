import classes from './Header.module.css';

const Header = () => {
    return(
        <div id={classes.header}>
            <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-landing-page-logo.png" id={classes.image}/>
            <div id={classes.links}>
            <a href="">Features</a>
            <a href="">How It Works</a>
            <a href="">Pricing</a></div>
        </div>
    )
}

export default Header