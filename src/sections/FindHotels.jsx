import "../css/FindHotels.css";

export default function FindHotels() {
   return (
      <>
         <div className="hotelFinder">
            <h1>FIND HOTELS</h1>
            <div className="form">
               <div className="where">
                  <h1>Where?</h1>
                  <input type="text" placeholder="Location" />
               </div>
               <div className="checkIn">
                  <h1>Check In</h1>
                  <input type="date" placeholder="DD-MM--YY" />
               </div>
               <div className="checkOut">
                  <h1>Check Out</h1>
                  <input type="date" placeholder="DD-MM--YY" />
               </div>
               <div className="adult">
                  <h1>Adult</h1>
                  <input type="text" placeholder="01" />
               </div>
               <div className="child">
                  <h1>Child</h1>
                  <input type="text" placeholder="00" />
               </div>
               <div className="hotelButton">
                  <button>Click Here</button>
               </div>
            </div>
         </div>
      </>
   );
}
