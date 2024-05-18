import "./index.css";
import Header from "./components/Header.jsx";

function Index() {
   return (
      <>
         <div className="background">
            <Header></Header>
            <div className="text-wrap">
               <div className="text">
                  <h1>Start Your Greatest</h1>
                  <h2>ADVENTURE WITH US!</h2>
                  <h3>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Reprehenderit suscipit vero commodi enim atque, qui fuga
                     repellendus
                  </h3>
                  <button>Click Here</button>
               </div>
            </div>
         </div>
      </>
   );
}
export default Index;
