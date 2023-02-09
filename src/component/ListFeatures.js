

import IconFire from "../icons/fire";
import IconTruckMoving from "../icons/truck";
import IconBatteryFull from "../icons/battery";
import classes from "./ListFeatures.module.css"

const ListFeatures = (props) => {
  const logo = props.content.logo;

  const changefuncDesc = (e) => {
    const curcontent = {...props.content, description: e.target.value}
    props.change(curcontent)
  }

  const changefuncTitle = (e) => {
    const curcontent = {...props.content, title: e.target.value}
    props.change(curcontent)
  }
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
      <div id={classes.content}>
        <input value={props.content.title} id={classes.titletext} key={props.content.id} onChange={changefuncTitle}/>
        <textarea id={classes.descrip} type="textarea" value={props.content.description} onChange={changefuncDesc}/>
      </div>
    </div>
  );
};

export default ListFeatures;
