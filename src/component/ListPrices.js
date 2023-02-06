import classes from "./ListPrices.module.css"

const ListPrices = (props) => {
    return(
        <div id={classes.priceContainer}>
            <div id={classes.title}>
                <h3>{props.content.title}</h3>
            </div>
            <div id={classes.content}>
                <h2 id={classes.prices}>{props.content.price}</h2>
                <div id={classes.des}>{props.content.des1}</div>
                <div id={classes.des}>{props.content.des2}</div>
                <div id={classes.des}>{props.content.des3}</div>
                <div id={classes.des}>{props.content.des4}</div>
            </div>
            <div id={classes.button}>
                <button>SELECT</button>
            </div>
        </div>
    )
}

export default ListPrices;