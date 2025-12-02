import React from 'react';
import { Building2, Handshake, TrendingUp, Users } from 'lucide-react';

const Partnerships: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-teal-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-base font-semibold text-teal-300 tracking-wide uppercase">Municipal Partnerships</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Let's build a healthier city, together.
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-teal-100">
            We collaborate with local governments to execute large-scale public health initiatives, vaccination drives, and data-driven wellness programs.
          </p>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-900 mx-auto mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Community Outreach</h3>
            <p className="mt-4 text-base text-slate-500">
              Reach underserved populations with our mobile health units and community liaison teams trained in local engagement.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-900 mx-auto mb-6">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Data-Driven Policy</h3>
            <p className="mt-4 text-base text-slate-500">
              Access real-time health data dashboards to inform municipal policy decisions and resource allocation.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-900 mx-auto mb-6">
              <Building2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Infrastructure Support</h3>
            <p className="mt-4 text-base text-slate-500">
              We help optimize existing public health infrastructure and provide staffing support for peak demand periods.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900">Partner Inquiry</h3>
              <p className="text-slate-500 mt-2">Fill out the form below and our partnership director will contact you.</p>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="municipality" className="block text-sm font-medium text-slate-700">Municipality / Organization Name</label>
                <input type="text" id="municipality" className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700">Contact Person</label>
                <input type="text" id="contact-name" className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Official Email</label>
                <input type="email" id="email" className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Project Goals</label>
                <textarea id="message" rows={4} className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"></textarea>
              </div>
              <button type="button" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                Submit Proposal
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;