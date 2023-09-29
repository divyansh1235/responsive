import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";
const Service = () => {
  return (
    <React.StrictMode>
      <h1 className="heading_style">List of Top 4 Netflix Series</h1>
      {Sdata.map((val, index) => {
        console.log(index);
        return (
          <Card
            imgsrc={val.imgscr}
            title={val.title}
            sname={val.sname}
            links={val.links}
          />
        );
      })}
    </React.StrictMode>
  );
 
}
 
export default Service;