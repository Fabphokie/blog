import classes from './logo.module.css'
import { TiHeart } from "react-icons/ti";

function Logo() {
    return(
      <div className={classes.logo}>
         Phokie's blog <TiHeart />

      </div>
    )

}

export default Logo;