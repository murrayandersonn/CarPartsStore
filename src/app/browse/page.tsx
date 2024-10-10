// app/browse/page.tsx
"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';

interface Part {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const BrowsePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample data - replace with actual data fetching logic
  const parts: Part[] = [
    { id: 1, name: "Brake Rotor", category: "Brakes", price: 45.99, image: "https://example.com/brake-rotor.jpg" },
    { id: 2, name: "Alternator", category: "Electrical", price: 89.99, image: "https://example.com/alternator.jpg" },
    { id: 3, name: "Oil Filter", category: "Engine", price: 12.99, image: "https://example.com/oil-filter.jpg" },
    { id: 4, name: "Spark Plug", category: "Engine", price: 5.99, image: "https://example.com/spark-plug.jpg" },
    // Add more parts as needed
  ];

  const categories = ['All', ...Array.from(new Set(parts.map(part => part.category)))];

  const filteredParts = parts.filter(part => 
    (selectedCategory === 'All' || part.category === selectedCategory) &&
    part.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Browse Car Parts</h1>
            
            <div className="flex flex-col md:flex-row justify-between mb-8">
                <div className="mb-4 md:mb-0">
                <input
                    type="text"
                    placeholder="Search parts..."
                    className="px-4 py-2 border rounded-lg w-full md:w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                </div>
                
                <div>
                <select
                    className="px-4 py-2 border rounded-lg w-full md:w-64"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredParts.map(part => (
                <div key={part.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src={part.image} alt={part.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                    <h2 className="font-bold text-xl mb-2">{part.name}</h2>
                    <p className="text-gray-600 mb-2">{part.category}</p>
                    <p className="text-indigo-600 font-bold">${part.price.toFixed(2)}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default BrowsePage;
