const Locations = ({ image, days, location, about, price, click }) => {
   return (
      <>
         <div className="ThreeLocations">
            <img src={image} alt="" />
            <div>
               <h1>{days}</h1>
               <h2>{location}</h2>
               <p>{about}</p>
               <h3>{price}</h3>
               <button>{click}</button>
            </div>
         </div>
      </>
   );
};

export default Locations;
