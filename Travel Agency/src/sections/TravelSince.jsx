import "../css/TravelSince.css";
import { man } from "../assets";
import { planeWhite, carBlack, bank } from "../assets";

export default function TravelSince() {
   return (
      <>
         <div className="travelSince">
            <div className="leftSection">
               <img src={man} alt="" />
            </div>
            <div className="rightSection">
               <div>
                  <h1>Trusted Since 2001</h1>
                  <h2>We are Travel Agent</h2>
               </div>
               <div className="travelFlow">
                  <ul>
                     <li className="travelFlow-plane">
                        <img src={planeWhite} alt="" />
                        Plane
                     </li>
                     <li className="travelFlow-cab">
                        <img src={carBlack} alt="" />
                        Cab
                     </li>
                     <li>
                        <img src={bank} alt="" />
                        Hotel
                     </li>
                  </ul>
               </div>
               <div>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                     quidem quam voluptatibus. Consequuntur quidem quam minus
                     earum ab. Deserunt adipisci blanditiis rem iusto voluptatum
                     quod delectus tenetur laboriosam inventore, perferendis
                     temporibus quidem laudantium eos nostrum quas quos iste
                     veniam eum assumenda! Natus, cumque et quas sit magni
                     impedit in voluptate, quaerat, eos voluptatem provident
                     doloremque? Odio, rerum repellat, sit est esse, cum
                     expedita atque earum aperiam quia nobis adipisci tempore
                     doloremque vitae excepturi reiciendis temporibus? Ipsum
                     minima officia similique natus!
                  </p>
               </div>
               <button>Click Here</button>
            </div>
         </div>
      </>
   );
}
