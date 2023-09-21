import { useState } from "react";

interface Car {
  img: string;
  price: string;
  model: string;
  mark: string;
  year: string;
  doors: string;
  air: string;
  transmission: string;
  fuel: string;
}

interface CarBoxProps {
  data: Car[][];
  carID: number;
}

function CarBox({ data, carID }: CarBoxProps) {
  const [carLoad, setCarLoad] = useState(true);
  const car = data[carID][0];

  return (
    <div className="box-cars">
      <div className="pick-car">
        {carLoad && <span className="loader"></span>}
        <img
          style={{ display: carLoad ? "none" : "block" }}
          src={car.img}
          alt="car_img"
          onLoad={() => setCarLoad(false)}
        />
      </div>

      <div className="pick-description">
        <div className="pick-description-price">
          <p>${car.price}</p>/ rent per day
        </div>
        <div className="pick-description-table">
          <div className="pick-description-col">
            <span>Model</span>
            <span>{car.model}</span>
          </div>
          <div className="pick-description-col">
            <span>Mark</span>
            <span>{car.mark}</span>
          </div>
          <div className="pick-description-col">
            <span>Year</span>
            <span>{car.year}</span>
          </div>
          <div className="pick-description-col">
            <span>Doors</span>
            <span>{car.doors}</span>
          </div>
          <div className="pick-description-col">
            <span>AC</span>
            <span>{car.air}</span>
          </div>
          <div className="pick-description-col">
            <span>Transmission</span>
            <span>{car.transmission}</span>
          </div>
          <div className="pick-description-col">
            <span>Fuel</span>
            <span>{car.fuel}</span>
          </div>
        </div>
        <a className="cta-btn" href="#booking-section">
          Reserve Now
        </a>
      </div>
    </div>
  );
}

export default CarBox;
