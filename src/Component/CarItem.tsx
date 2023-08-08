import React from 'react';
import { CarClass } from "../types/CarClass";

type CarItemProps = {
  car: CarClass;
};

const formatPrice = (price: number) => {
  const roundedPrice = Math.round(price / 100) * 100;
  return roundedPrice.toLocaleString();
};

const formatDistance = (distance: number) => {
  if (distance >= 10000) return `${distance / 10000}만`;
  if (distance >= 1000) return `${distance / 1000}천`;
  return distance.toString();
};

const CarItem: React.FC<CarItemProps> = ({ car }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', maxWidth: '420px', margin: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={car.image} alt={car.carClassName} style={{ maxWidth: '200px' }} />
      </div>
      <h2>{car.carClassName}</h2>
      <p>Model: {car.carModel}</p>
      <p>Year: {car.year}</p>
      <p>Price: {formatPrice(car.price)} (Discount: {car.discountPercent}%)</p>
      <p>Driving Distance: {formatDistance(car.drivingDistance)} km</p>
      <div>
        {car.carTypeTags.map((tag, index) => (
          <span key={index} style={{ border: '1px solid #333', padding: '5px', marginRight: '5px' }}>{tag}</span>
        ))}
      </div>
      <div>
        Region Groups: {car.regionGroups.join(', ')}
      </div>
    </div>
  );
};

export default CarItem;
