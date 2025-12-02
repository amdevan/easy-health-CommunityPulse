import React, { useState } from 'react';
import { HealthCamp } from '../types';
import { Calendar, MapPin, Search, Filter } from 'lucide-react';
import BookingModal from './BookingModal';

const MOCK_CAMPS: HealthCamp[] = [
  {
    id: '1',
    title: 'Downtown General Health Fair',
    date: '2023-11-15',
    location: 'City Center Plaza, Downtown',
    category: 'General',
    spotsAvailable: 45,
    description: 'Comprehensive health checkups including BP, BMI, and general physician consultation.',
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: '2',
    title: 'Pediatric Immunization Drive',
    date: '2023-11-20',
    location: 'Northside Community Center',
    category: 'Pediatric',
    spotsAvailable: 12,
    description: 'Free vaccinations and growth monitoring for children under 5 years.',
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: '3',
    title: 'Senior Wellness & Eye Camp',
    date: '2023-11-25',
    location: 'Sunset Retirement Village',
    category: 'Geriatric',
    spotsAvailable: 30,
    description: 'Specialized care for seniors including cataract screening and mobility assessments.',
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: '4',
    title: 'Community Dental Checkup',
    date: '2023-12-05',
    location: 'East River School Gym',
    category: 'Dental',
    spotsAvailable: 60,
    description: 'Dental hygiene education, cavity screening, and basic cleaning services.',
    image: 'https://picsum.photos/400/300?random=4'
  }
];

const HealthCamps: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [bookingCamp, setBookingCamp] = useState<HealthCamp | null>(null);

  const filteredCamps = MOCK_CAMPS.filter(camp => {
    const matchesSearch = camp.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          camp.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || camp.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'General', 'Pediatric', 'Geriatric', 'Dental', 'Eye Care'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BookingModal 
        isOpen={!!bookingCamp}
        onClose={() => setBookingCamp(null)}
        title={bookingCamp?.title || ''}
        type="camp"
      />

      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Upcoming Health Camps</h2>
        <p className="mt-4 text-xl text-slate-500">Find free medical services and checkups near you.</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-grow md:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md leading-5 bg-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Search by name or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
          <Filter className="h-5 w-5 text-slate-400 hidden md:block" />
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredCamps.map((camp) => (
          <div key={camp.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
            <div className="flex-shrink-0 relative">
              <img className="h-48 w-full object-cover" src={camp.image} alt={camp.title} />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-teal-700">
                {camp.category}
              </div>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-teal-600 mb-1">
                  Available Spots: {camp.spotsAvailable}
                </p>
                <h3 className="text-xl font-semibold text-slate-900">
                  {camp.title}
                </h3>
                <p className="mt-3 text-base text-slate-500 line-clamp-3">
                  {camp.description}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex flex-col space-y-2 text-sm text-slate-500">
                  <div className="flex items-center">
                    <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-slate-400" />
                    {new Date(camp.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-slate-400" />
                    {camp.location}
                  </div>
                </div>
                <button 
                  onClick={() => setBookingCamp(camp)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredCamps.length === 0 && (
        <div className="text-center py-24">
          <p className="text-slate-500 text-lg">No health camps found matching your criteria.</p>
          <button 
            onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
            className="mt-4 text-teal-600 font-medium hover:text-teal-800"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default HealthCamps;