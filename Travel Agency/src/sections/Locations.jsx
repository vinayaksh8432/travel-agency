import "../css/Location.css";
import { locations } from "../cards/locations";
import Locations from "../components/Locations";
import { looks } from "../cards/looks";
import LooksCard from "../components/Looks";

export default function Location() {
   return (
      <>
         <div className="TouristLocations">
            <div className="packAndGo">
               <h1>Pack and GO</h1>
               <h2>Awesome Tours</h2>
            </div>
            <div className="locationdiv">
               {locations.map((item, index) => (
                  <Locations
                     key={index}
                     image={item.image}
                     days={item.days}
                     location={item.location}
                     about={item.about}
                     price={item.price}
                     click={item.click}
                  />
               ))}
            </div>
         </div>
         <div className="areaLooks">
            <div className="looksText">
               <h1>Trusted Since 2001</h1>
               <h2>GO EXPLOORE</h2>
            </div>
            <div className="looksdiv">
               {looks.map((item, index) => (
                  <LooksCard
                     key={index}
                     image={item.image}
                     click={item.click}
                     title={item.title}
                     description={item.description}
                  />
               ))}
            </div>
         </div>
      </>
   );
}
