const LooksCard = ({ image, click, title, description }) => {
   return (
      <>
         <div className="blog">
            <img src={image} alt="" />
            <div>
               <button>{click}</button>
               <div className="blogdiv">
                  <h1>{title}</h1>
                  <p>{description}</p>
               </div>
            </div>
         </div>
      </>
   );
};
export default LooksCard;
