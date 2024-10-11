// app/browse/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const API_ENDPOINT = 'https://67099c08af1a3998baa1f59b.mockapi.io/api/parts/car_parts';

interface CarPart {
  id: number;
  partName: string;
  price: number | null;
  vehicle: string;
  image: string;
}

const BrowsePage: React.FC = () => {
  const [carParts, setCarParts] = useState<CarPart[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch car parts');
        }
        return response.json();
      })
      .then(data => {
        console.log('Raw API response:', data);
        let partsData: CarPart[];
        if (Array.isArray(data)) {
          partsData = data;
        } else if (data && typeof data === 'object' && 'carParts' in data) {
          partsData = data.carParts;
        } else {
          throw new Error('Unexpected API response structure');
        }

        console.log('Parsed car parts:', partsData);
        
        // Filter out any parts that don't have the necessary data
        const validParts = partsData.filter(part => 
          part && part.id && part.partName && part.price !== undefined && part.price !== null
        );

        console.log('Valid parts:', validParts);

        setCarParts(validParts);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('An error occurred while fetching car parts. Please try again later.');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Browse Car Parts</h1>
        
        {carParts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {carParts.map((part) => (
              <div key={part.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                {part.image ? (
                  <Image 
                    src={part.image} 
                    alt={part.partName} 
                    width={300} 
                    height={200} 
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    No Image Available
                  </div>
                )}
                <div className="p-4">
                  <h2 className="font-bold text-xl mb-2">{part.partName}</h2>
                  <p className="text-gray-600 mb-2">{part.vehicle || 'Unknown Vehicle'}</p>
                  <p className="text-indigo-600 font-bold">
                    ${part.price?.toFixed(2) ?? 'N/A'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No car parts found. Total parts: {carParts.length}</div>
        )}
      </div>
    </div>
  );
};

export default BrowsePage;
