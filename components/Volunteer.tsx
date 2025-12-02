import React, { useState } from 'react';
import { HeartHandshake, UserPlus, Stethoscope, Truck, Users } from 'lucide-react';

const Volunteer: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HeartHandshake className="h-10 w-10 text-teal-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Welcome to the Team!</h2>
          <p className="text-lg text-slate-600 mb-8">
            Thank you for signing up. Our volunteer coordinator will review your application and contact you within 48 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-teal-600 font-medium hover:text-teal-800"
          >
            Submit another application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <div className="bg-teal-900 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
           </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-base font-semibold text-teal-300 tracking-wide uppercase">Join the Movement</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-5xl">
            Volunteer with CommunityPulse
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-teal-100">
            Your time and skills can save lives. Whether you're a medical professional or a compassionate neighbor, we need you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Information Column */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Volunteer?</h3>
          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-100 text-teal-600">
                  <Stethoscope className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-slate-900">Medical Professionals</h4>
                <p className="mt-2 text-slate-500">
                  Doctors, nurses, and paramedics can directly impact community health at our mobile camps. Earn CME credits while giving back.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                  <Truck className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-slate-900">Logistics & Operations</h4>
                <p className="mt-2 text-slate-500">
                  Help organize camp setups, manage patient queues, and handle supply distribution. Essential for smooth operations.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 text-orange-600">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-slate-900">Community Liaisons</h4>
                <p className="mt-2 text-slate-500">
                  Bridge the gap. Help us communicate with local residents, translate languages, and spread awareness.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-slate-50 p-6 rounded-lg border border-slate-100">
            <p className="text-slate-600 italic">
              "Volunteering at the dental camp was the most rewarding experience of my year. Seeing the smiles of children who received care was priceless."
            </p>
            <p className="mt-4 font-bold text-slate-900">- Dr. Sarah Jenkins, Dentist</p>
          </div>
        </div>

        {/* Form Column */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <UserPlus className="h-6 w-6 mr-2 text-teal-600" />
            Sign Up Now
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-slate-700">First Name</label>
                <input type="text" id="first-name" required className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-slate-700">Last Name</label>
                <input type="text" id="last-name" required className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
              <input type="email" id="email" required className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-slate-700">I want to volunteer as</label>
              <select id="role" className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
                <option>General Volunteer</option>
                <option>Doctor / Specialist</option>
                <option>Nurse / EMT</option>
                <option>Administrator</option>
                <option>Driver / Logistics</option>
              </select>
            </div>

            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-slate-700">Availability (Hours/Week)</label>
              <select id="availability" className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
                <option>1-5 hours</option>
                <option>5-10 hours</option>
                <option>10+ hours</option>
                <option>Weekends only</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Skills / Experience</label>
              <textarea id="message" rows={3} className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Tell us briefly about your background..."></textarea>
            </div>

            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;