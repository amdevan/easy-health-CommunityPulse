import React, { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ImpactDashboard from './components/ImpactDashboard';
import HealthCamps from './components/HealthCamps';
import Partnerships from './components/Partnerships';
import Volunteer from './components/Volunteer';
import AiAssistant from './components/AiAssistant';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <ImpactDashboard />
            <div className="bg-white border-y border-slate-200">
              <HealthCamps />
            </div>
            <Volunteer />
            <Partnerships />
            <Testimonials />
            <CallToAction onNavigate={setCurrentPage} />
          </>
        );
      case Page.CAMPS:
        return <HealthCamps />;
      case Page.PARTNERS:
        return <Partnerships />;
      case Page.VOLUNTEERS:
        return <Volunteer />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <>
      <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
        {renderPage()}
      </Layout>
      <AiAssistant />
    </>
  );
}