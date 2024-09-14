import Index from "./index";
import FindHotels from "./sections/FindHotels";
import Services from "./sections/Services";
import Footer from "./components/Footer";
import TravelSince from "./sections/TravelSince";
import Location from "./sections/Locations";
import Sponsored from "./sections/Sponsored";
import Reviews from "./sections/Reviews";

function App() {
   return (
      <>
         <Index />
         <FindHotels />
         <Services />
         <TravelSince />
         <Location />
         <Sponsored />
         <Reviews />
         <Footer />
      </>
   );
}

export default App;
