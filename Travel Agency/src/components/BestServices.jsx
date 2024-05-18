const BestServices = ({ image, title, description }) => {
   return (
      <>
         <div className="serviceIcon">
            <img src={image} alt="" />
            <div>
               <h1>{title}</h1>
               <h2>{description}</h2>
            </div>
         </div>
      </>
   );
};

export default BestServices;
