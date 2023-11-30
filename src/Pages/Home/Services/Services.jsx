
import { useEffect, useState } from "react";


const Services = () => {
  const [services, setServices] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
   
  
   
       
    
   
  return (
    <>
      <h2 className="text-4xl text-center font-bold uppercase py-8 mt-10">
        our Services
        <div className="mt-2 mx-auto w-80">
          <span className="inline-block w-52 h-1 bg-blue-500 rounded-full" />
          <span className="inline-block w-10 h-1 ml-1 bg-blue-500 rounded-full" />
          <span className="inline-block w-6 h-1 ml-1 bg-blue-500 rounded-full" />
        </div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service._id} className="card  bg-base-100 shadow-xl text-center">
            <div className="card-body">
              <h2 className="card-title block">Name:{service.name}</h2>
              <p className="font-semibold text-blue-500">Price : {service.price}</p>
              <p>Description : {service.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
