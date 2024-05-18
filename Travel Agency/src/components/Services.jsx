const serviceCard = ({
   image,
   budget,
   rate,
   checkIcon,
   listitem1,
   listitem2,
   listitem3,
   listitem4,
}) => {
   return (
      <>
         <div>
            <img src={image} alt="" />
            <h1>{budget}</h1>
            <h2>{rate}</h2>
            <ul>
               <li>
                  <img src={checkIcon} alt="" />
                  {listitem1}
               </li>
               <li>
                  <img src={checkIcon} alt="" />
                  {listitem2}
               </li>
               <li>
                  <img src={checkIcon} alt="" />
                  {listitem3}
               </li>
               <li>
                  <img src={checkIcon} alt="" />
                  {listitem4}
               </li>
            </ul>
         </div>
      </>
   );
};
export default serviceCard;
