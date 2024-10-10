import React from 'react';

interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

interface RecentPart {
  id: number;
  name: string;
  image: string;
  price: number;
}

const ReviewsAndSales: React.FC = () => {
  const reviews: Review[] = [
    { id: 1, name: "John D.", comment: "Found exactly what I needed. Great prices!", rating: 5 },
    { id: 2, name: "Sarah M.", comment: "Quick shipping and excellent condition parts.", rating: 4 },
    { id: 3, name: "Mike R.", comment: "Huge selection of parts. Very satisfied!", rating: 5 },
  ];

  const recentParts: RecentPart[] = [
    { id: 1, name: "Brake Rotor", image: "https://example.com/brake-rotor.jpg", price: 45.99 },
    { id: 2, name: "Alternator", image: "https://example.com/alternator.jpg", price: 89.99 },
    { id: 3, name: "Headlight Assembly", image: "https://example.com/headlight.jpg", price: 120.50 },
    { id: 4, name: "Oil Filter", image: "https://example.com/oil-filter.jpg", price: 12.99 },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{review.name}</h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>{review.comment}</p>
                  </div>
                  <div className="mt-3 flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Recently Sold</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Popular Parts
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {recentParts.map((part) => (
              <div key={part.id} className="bg-white overflow-hidden shadow rounded-lg">
                <img className="h-48 w-full object-cover" src={part.image} alt={part.name} />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{part.name}</h3>
                  <p className="mt-2 text-2xl font-semibold text-indigo-600">${part.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsAndSales;
