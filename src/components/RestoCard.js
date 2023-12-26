import {React} from 'react';
import { CARD_URL } from "../utils/constants";

const RestoCard = (props) => {
    const { restoData } = props;
    return (
      <div className="card-Container">
        <img
          className="Resto-img"
          src={`${CARD_URL}/${restoData.info.cloudinaryImageId}`}
          alt="resto"
        /> 
        <div >
        <h2>{restoData.info.name}</h2>
        <h4>{restoData.info.avgRating} star</h4>
        <h4>{restoData.info.cuisines.join(", ")}</h4>
        <h4>{restoData.info.sla.deliveryTime} min</h4>
        </div>
      </div>
    );
  };
  export default  RestoCard;