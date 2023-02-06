import classes from "./Footer.module.css"

const Footer = () => {
    return(
        <div id={classes.footer}>
            <div id={classes.link}>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Contact</a>
            </div>
            <div>Copyright 2016, Original Trombones</div>
        </div>
    )
}

export default Footer