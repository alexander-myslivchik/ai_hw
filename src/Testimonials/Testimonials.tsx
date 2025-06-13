import React from 'react';
import { testimonials } from './data';

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-20">
        <h1 className="text-[40px] font-bold mb-4 leading-tight">
          See what all<br />
          the talk is about!
        </h1>
        <p className="text-gray-600 text-lg">
          Transformative Client experiences from all around the globe
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative w-full aspect-[3/4] mb-8 rounded-2xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={testimonial.image}
                  alt={`Testimonial by ${testimonial.author}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white" />
              </div>
            </div>
            <blockquote className="text-center mb-3">
              <p className="text-[17px] leading-relaxed">{testimonial.quote}</p>
            </blockquote>
            <cite className="text-gray-500 not-italic text-center">
              — {testimonial.author}
            </cite>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials; 