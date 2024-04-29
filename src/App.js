import React from "react";
import Testimonial from "./Components/Testimonial";
import review from "./data";
// import Card from "./Components/Card";?
// import { ICON_NAME } from 'react-icons/md';

const App = () => {
  return(
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
     
      <Testimonial review={review}/>
      {/* <Card/>?? */}
      </div>
    </div>
  )
  
};

export default App;
