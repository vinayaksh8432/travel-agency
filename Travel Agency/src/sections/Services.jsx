import "../css/Services.css";
import { train, check } from "../assets";
import Card from "../components/Services";
import { serviceItems } from "../cards/serviceItems";
import { bestServices } from "../cards/bestServices";
import BestServices from "../components/BestServices";

export default function Services() {
   return (
      <>
         <div className="services">
            <img src={train} alt="" />
            <div className="pattern">
               <h1>Trusted Since 2001</h1>
               <h2>We are Exploore</h2>
               <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  iure officiis ipsam ipsa eos, quibusdam quo necessitatibus
                  modi iusto minus eum accusamus voluptas et facilis! Optio,
                  omnis
               </h3>
               <div className="points">
                  <div>
                     <img src={check} alt="" />
                     <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio, repellat.
                     </h1>
                  </div>
                  <div>
                     <img src={check} alt="" />
                     <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio, repellat.
                     </h1>
                  </div>
                  <div>
                     <img src={check} alt="" />
                     <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio, repellat.
                     </h1>
                  </div>
               </div>
            </div>
         </div>
         <div className="bestService">
            <div className="ourbest">
               <h1>Our Best Services</h1>
               <h2>We are Travel Agent</h2>
            </div>
            <div className="best-Services">
               {bestServices.map((item, index) => (
                  <BestServices
                     key={index}
                     image={item.image}
                     title={item.title}
                     description={item.description}
                  />
               ))}
            </div>
         </div>
         <div className="budgets">
            <div>
               <h1>Trusted Since</h1>
               <h2>We are Trusted Agent</h2>
            </div>
            <div className="budget">
               {serviceItems.map((item, index) => (
                  <Card
                     key={index}
                     image={item.image}
                     budget={item.budget}
                     rate={item.rate}
                     checkIcon={item.checkIcon}
                     listitem1={item.listItem1}
                     listitem2={item.listItem2}
                     listitem3={item.listItem3}
                     listitem4={item.listItem4}
                  />
               ))}
            </div>
         </div>
      </>
   );
}
