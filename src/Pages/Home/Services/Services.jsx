import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    < >
      <h2 className="text-4xl text-center font-bold uppercase py-8 mt-10">
        our teams
        <div className="mt-2 mx-auto w-80">
          <span className="inline-block w-52 h-1 bg-blue-500 rounded-full" />
          <span className="inline-block w-10 h-1 ml-1 bg-blue-500 rounded-full" />
          <span className="inline-block w-6 h-1 ml-1 bg-blue-500 rounded-full" />
        </div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          
            <div key={service.name} className="card  bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={service.image}
                  alt="Shoes"
                  className="rounded-xl h-60"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>Role: {service.description}</p>
              </div>
            </div>
          
        ))}
      </div>
    </>
  );
};

export default Services;
