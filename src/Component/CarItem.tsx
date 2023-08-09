import React from 'react';
import { CarClass } from "../types/CarClass";

type CarItemProps = {
  car: CarClass;
};

const formatPrice = (price: number) => {
  const roundedPrice = Math.round(price / 100) * 100;
  return roundedPrice.toLocaleString();
};

const CarItem: React.FC<CarItemProps> = ({ car }) => {
  const discountPrice = car.price - (car.price * car.discountPercent / 100);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', maxWidth: '420px', margin: 'auto', textAlign: 'left' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={car.image} alt={car.carClassName} style={{ maxWidth: '200px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div>
            <h2>{car.carClassName}</h2>
            <p>{formatPrice(discountPrice)}원 (-{car.discountPercent}%)</p>
          </div>
          <div>
            {car.carTypeTags.map((tag, index) => (
              <span key={index} style={{ border: '1px solid #333', padding: '5px', marginRight: '5px', backgroundColor: 'yellow' }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <p>{car.year}년 | {formatPrice(car.drivingDistance)}km | {car.regionGroups.join(', ')}</p>
    </div>
  );
};

export default CarItem;
