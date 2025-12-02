import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "The pediatric health camp was a lifesaver. We got free vaccinations for my twins and excellent advice on nutrition from the specialists.",
    author: "Maria Rodriguez",
    role: "Mother of two",
    image: "https://picsum.photos/id/64/100/100"
  },
  {
    content: "As a senior on a fixed income, the free health camps give me peace of mind. The geriatric specialists are incredibly helpful and kind.",
    author: "Robert Chen",
    role: "Retired Teacher",
    image: "https://picsum.photos/id/91/100/100"
  },
  {
    content: "Volunteering with CommunityPulse allowed me to use my nursing skills to help those who need it most. It's the highlight of my week.",
    author: "Sarah Jenkins",
    role: "Registered Nurse",
    image: "https://picsum.photos/id/338/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16 sm:py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Voices from the Community
          </h2>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
            Real stories from the people we serve and the volunteers who make it happen.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100 relative hover:shadow-md transition-shadow">
              <div className="absolute top-6 left-6 opacity-10">
                <Quote className="h-12 w-12 text-teal-600" />
              </div>
              <div className="relative z-10">
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 text-lg italic mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-teal-100"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-slate-900">{testimonial.author}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;