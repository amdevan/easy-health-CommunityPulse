import React from 'react';
import { Page } from '../types';
import { ArrowRight, Heart } from 'lucide-react';

interface CallToActionProps {
  onNavigate: (page: Page) => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onNavigate }) => {
  return (
    <div className="bg-teal-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to prioritize your health?</span>
            <span className="block text-teal-200">Or help us care for others?</span>
          </h2>
          <p className="mt-4 text-lg text-teal-100 max-w-2xl">
            Join thousands of community members who are taking charge of their well-being. Whether you need care or want to give care, there is a place for you here.
          </p>
        </div>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 gap-4">
          <div className="inline-flex rounded-md shadow">
            <button
              onClick={() => onNavigate(Page.CAMPS)}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-white hover:bg-teal-50"
            >
              Find a Camp
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="inline-flex rounded-md shadow">
            <button
              onClick={() => onNavigate(Page.VOLUNTEERS)}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-800 hover:bg-teal-900"
            >
              <Heart className="mr-2 h-5 w-5" />
              Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;