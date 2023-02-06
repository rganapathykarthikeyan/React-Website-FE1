import IconFire from "../icons/fire";
import IconTruckMoving from "../icons/truck";
import IconBatteryFull from "../icons/battery";
import classes from "./ListFeatures.module.css"

const ListFeatures = (props) => {
  const logo = props.content.logo;
  return (
    <div id={classes.container}>
      <div id={classes.logo}>
        {logo === "fire" ? (
          <IconFire />
        ) : logo === "truck" ? (
          <IconTruckMoving />
        ) : logo === "battery" ? (
          <IconBatteryFull />
        ) : (
          ""
        )}
      </div>
      <div id="content">
        <h2>{props.content.title}</h2>
        <div id="descrip">{props.content.description}</div>
      </div>
    </div>
  );
};

export default ListFeatures;
