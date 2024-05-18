import "../css/Reviews.css";
import { star, avatar } from "../assets";

export default function Reviews() {
   const array = new Array(5).fill(0);

   return (
      <>
         <div className="review">
            <div>
               <h1>Customer Reviews</h1>
               <h2>We are Travel Agent</h2>
            </div>
            <div className="reviewText">
               <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus deleniti dolore autem hic reiciendis est doloremque
                  sequi molestias recusandae. Fugiat in, praesentium excepturi
                  suscipit aliquid adipisci est consequuntur ea corporis."
               </p>
               <div className="stars">
                  {array.map((_, index) => (
                     <img key={index} src={star} alt="star" />
                  ))}
               </div>
            </div>
            <div className="profile">
               <img src={avatar} alt="" />
               <div>
                  <h3>John Smith</h3>
                  <h4>Solo Traveller</h4>
               </div>
            </div>
         </div>
      </>
   );
}
