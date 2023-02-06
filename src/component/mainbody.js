import classes from './mainbody.module.css'
import ListFeatures from './ListFeatures'
import ListPrices from './ListPrices'
import Footer from './Footer'

const Mainbody = () => {

    const content = [
        {
            id: 1,
            logo: "fire",
            title: "Premium Materials",
            description: "Our trombones use the shiniest brass which is sourced locally. This will increase the longevity of your purchase."
        },
        {
            id: 2,
            logo: "truck",
            title: "Fast Shipping",
            description: "We make sure you recieve your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied."
        },
        {
            id: 3,
            logo: "battery",
            title: "Quality Assurance",
            description: "For every purchase you make, we will ensure there are no damages or faults and we will check and test the pitch of your instrument."
        },
    ]

    const prices = [
        {
            id: 1,
            logo: "fire",
            title: "TENOR TROMBONE",
            price: "$600",
            des1: "Lorem ipsum.",
            des2: "Lorem ipsum.",
            des3: "Lorem ipsum.",
            des4: "Lorem ipsum.",
        },
        {
            id: 2,
            logo: "fire",
            title: "BASS TROMBONE",
            price: "$900",
            des1: "Lorem ipsum.",
            des2: "Lorem ipsum.",
            des3: "Lorem ipsum.",
            des4: "Lorem ipsum.",
        },
        {
            id: 3,
            logo: "fire",
            title: "VALVE TROMBONE",
            price: "$1200",
            des1: "Lorem ipsum.",
            des2: "Lorem ipsum.",
            des3: "Lorem ipsum.",
            des4: "Lorem ipsum.",
        },
    ]
return(
    <div id={classes.mainbody}>
        <div id={classes.email}>
            <h2>Handcrafted, home-made masterpieces</h2>
            <input placeholder='Enter your Email address'></input>
            <button>Get Started</button>
        </div>
        <div id={classes.features}>
            {content.map(item => <ListFeatures content={item} key={item.id}/>)}
        </div>
        <div id={classes.prices}>
            {prices.map(item => <ListPrices content={item} key={item.id}/>)}
        </div>
        <div id={classes.footer}>
        <Footer /></div>
    </div>
)
}

export default Mainbody