import { plane, bank, car, shed } from "../assets";
import "../css/Sponsored.css";
export default function Sponsored() {
   return (
      <>
         <div className="sponsor">
            <img src={shed} alt="" />
            <div className="sponsorContent">
               <div>
                  <h1>New York + Paris</h1>
                  <h2>7 Day + 6 Night</h2>
               </div>
               <div className="sponsoredIcons">
                  <ul>
                     <li>
                        <img src={plane} alt="" />
                        Flight
                     </li>
                     <li>
                        <img src={bank} alt="" />
                        Hotel
                     </li>
                     <li>
                        <img src={car} alt="" />
                        Transport
                     </li>
                  </ul>
               </div>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, accusamus. Placeat, numquam iste. Inventore animi hic
                  vel illo magnam dignissimos?
               </p>
               <div className="priceandbutton">
                  <h3>$1000</h3>
                  <button>BOOK NOW</button>
               </div>
            </div>
         </div>
      </>
   );
}
