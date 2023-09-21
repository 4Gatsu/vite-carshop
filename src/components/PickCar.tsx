import React, { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

interface Car {
  id: string;
  name: string;
}

const cars: Car[] = [
  { id: "btn1", name: "Ford Fiesta" },
  { id: "btn2", name: "BMW IX XDrive40" },
  { id: "btn3", name: "Opel Astra" },
  { id: "btn4", name: "BMW 5GT" },
  { id: "btn5", name: "Audi Q7" },
  { id: "btn6", name: "Volkswagen Polo" },
];

function PickCar() {
  const [active, setActive] = useState(cars[0].id);

  return (
    <section className="pick-section">
      <div className="container">
        <div className="pick-container">
          <div className="pick-title" id="down">
            <h2>Our fleet</h2>
            <p>
              Discover a wide range of premium vehicles and indulge in a
              seamless rental experience at our dealership, offering a diverse
              selection to match your preferences.
            </p>
          </div>
          <div className="car-content">
            <div className="pick-box">
              {cars.map((car) => (
                <button
                  key={car.id}
                  className={active === car.id ? "colored-button" : ""}
                  onClick={() => setActive(car.id)}
                >
                  {car.name}
                </button>
              ))}
            </div>

            {cars.map((car) => (
              <React.Fragment key={car.id}>
                {active === car.id && (
                  <CarBox
                    data={CAR_DATA}
                    carID={parseInt(car.id.substring(3)) - 1}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PickCar;
