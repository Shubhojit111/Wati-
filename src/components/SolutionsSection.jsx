import React from 'react';
import MarketingGraphic from './MarketingGraphic';
import MarketingSales from './MarketingSales';
import MarketingSupport from './MarketingSupport';

const solutionsData = [
  {
    id: 1,
    type: 'marketing',
    badgeText: 'WATI FOR MARKETING',
    title: 'Acquire, engage, and qualify leads with personalized campaigns at scale',
    features: [
      'Convert every touchpoint, from links to offline interaction and to ads, into meaningful conversations instantly',
      'Improve attribution, easily retarget, and increase ROI with Meta and Google ads that click to WhatsApp',
      'Auto-magically engage your users and drive amazing post-conversion workflows with AI-fueled, yet human-like, conversations',
      'Stay on top with powerful insights to improve your messaging, campaign, and ad performance'
    ],
    stats: [
      { value: '4X', label: 'Less CACS' },
      { value: '3X', label: 'More ROI' },
      { value: '85%', label: 'Higher Response Rate' }
    ],
    buttonText: 'See it in Action'
  },
  {
    id: 2,
    type: 'sales',
    badgeText: 'WATI FOR SALES',
    title: 'Accelerate pipeline, increase conversions, and shorten sales cycles – all on chat',
    features: [
      'One single workspace for all your sales reps to collaborate, communicate, and convert leads',
      'Ensure no sales-ready leads slip through the cracks with real-time, instant qualification on your favorite messaging channel',
      'Manage high lead volume easily on WhatsApp; use Wati AI to qualify leads and hand off the best-fit ones to your reps automatically',
      'Monitor customer chats easily and ensure high high-quality customer experience to avoid reputation risks'
    ],
    stats: [
      { value: '30%', label: 'REDUCTION IN SALES CYCLE' },
      { value: '3X', label: 'FASTER RESPONSES' },
      { value: '20%', label: 'REVENUE GROWTH' }
    ],
    buttonText: 'Chat with a Rep'
  },
  {
    id: 3,
    type: 'support',
    badgeText: 'WATI FOR SUPPORT',
    title: 'Delight customers and handle questions at scale - Work in perfect harmony with Wati AI',
    features: [
      'Provide instant, accurate answers grounded in your knowledge base 24/7 and resolve most queries without human involvement',
      'Intelligently route complex conversations to the right human agent by setting advanced routing rules',
      'Collaborate better with a unified Team Inbox for all messaging platforms, with tags, contact attributes, history, and more',
      'Enhance your support operations with data-driven insights on response time, resolutions, and agent-wise performance'
    ],
    stats: [
      { value: '40%', label: 'LESS WORKLOAD' },
      { value: '80%', label: 'FAQS RESOLVED BY AI' },
      { value: '40%', label: 'FASTER RESOLUTIONS' }
    ],
    buttonText: 'Test AI Support'
  }
];

export default function SolutionsSection() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1000px] mx-auto text-center mb-16">
        <h2 className="text-[50px] font-bold text-[#1a1a1a] leading-[1.15] tracking-tight">
          Use conversations to fuel every point in the <br /> buyer journey and empower your teams
        </h2>
      </div>

      <div className="flex flex-col gap-12 items-center">
        {solutionsData.map((data) => {
          if (data.type === 'marketing') return <MarketingGraphic key={data.id} data={data} />;
          if (data.type === 'sales') return <MarketingSales key={data.id} data={data} />;
          if (data.type === 'support') return <MarketingSupport key={data.id} data={data} />;
          return null;
        })}
      </div>
    </section>
  );
}
