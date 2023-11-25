import { useEffect, useState } from "react";


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  },[])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <>
          <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={service.image} alt="Shoes" className="rounded-xl h-60" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{service.name}</h2>
              <p>Role: {service.description}</p>
              <p>Price:{service.price}$</p>
              
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Services;