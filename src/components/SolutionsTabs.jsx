import React, { useState } from 'react';
import { Users, Zap, Mail, MessageSquare, Bell, Search, Plus, Send } from 'lucide-react';

const SolutionsTabs = () => {
  const [activeTab, setActiveTab] = useState('Marketing');

  const tabs = ['Marketing', 'Sales', 'Support'];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-gray-100 mb-16">
          <div className="flex gap-8 md:gap-16">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-xl font-bold transition-all relative ${
                  activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-full animate-in fade-in slide-in-from-bottom-1 duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content / UI Mockups */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Dashboard Mockup */}
          <div className="bg-white rounded-[32px] border-12 border-[#1e1e1e] shadow-2xl overflow-hidden aspect-16/10 relative">
            {/* Sidebar */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-[#00e676] border-r border-black/10 flex flex-col items-center py-6 gap-6">
               <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-[#00e676]">
                  <MessageSquare size={20} />
               </div>
               <Users size={20} className="text-black/60" />
               <Zap size={20} className="text-black/60" />
               <Mail size={20} className="text-black/60" />
            </div>

            {/* Top Bar */}
            <div className="absolute left-16 top-0 right-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6">
               <div className="flex items-center gap-4">
                  <span className="font-bold text-lg">{activeTab} Hub</span>
                  <div className="h-4 w-px bg-gray-200"></div>
                  <div className="flex items-center gap-2 text-green-500 text-sm font-bold">
                     <div className="w-2 h-2 bg-green-500 rounded-full"></div> Online
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <Search size={20} className="text-gray-400" />
                  <Bell size={20} className="text-gray-400" />
                  <div className="w-8 h-8 bg-black rounded-full text-white flex items-center justify-center text-xs font-bold">JD</div>
               </div>
            </div>

            {/* Content Area */}
            <div className="absolute left-16 top-16 right-0 bottom-0 bg-[#f8f9fb] p-8">
               <div className="grid grid-cols-12 gap-6 h-full">
                  {/* Left Column Feed */}
                  <div className="col-span-4 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm h-full">
                     <div className="flex justify-between items-center mb-6">
                        <span className="font-black text-gray-800">Recent Chats</span>
                        <Plus size={18} className="text-gray-400" />
                     </div>
                     <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map(i => (
                           <div key={i} className="flex gap-4 p-2 rounded-xl border border-transparent hover:border-green-100 hover:bg-green-50/30 cursor-pointer transition-all">
                              <div className={`w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center font-bold text-gray-400 text-sm`}>
                                 {['AJ', 'TS', 'MK', 'LW', 'BB'][i-1]}
                              </div>
                              <div className="flex-1">
                                 <div className="flex justify-between">
                                    <span className="text-sm font-bold text-gray-800">{['Alex J', 'Tech Solutions', 'Mark K', 'Lisa W', 'Big Brand'][i-1]}</span>
                                    <span className="text-[10px] text-gray-400 font-bold uppercase">2m ago</span>
                                 </div>
                                 <div className="text-xs text-gray-400 truncate mt-1">
                                    {['Interested in the 500-1000 plan', 'Ready to subscribe', 'Need help with setup', 'Great product!', 'Checking pricing'][i-1]}
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Main Chat Center */}
                  <div className="col-span-8 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full overflow-hidden">
                     <div className="p-4 border-b border-gray-50 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs leading-none">AJ</div>
                        <div>
                           <div className="text-sm font-bold text-gray-800">Alex Johnson</div>
                           <div className="text-[10px] text-gray-400">active now • {activeTab} Flow</div>
                        </div>
                     </div>
                     <div className="flex-1 p-6 space-y-4">
                        <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none max-w-[60%] text-sm text-gray-700">
                           I'm looking for a solution that handles {activeTab.toLowerCase()} automations.
                        </div>
                        <div className="bg-green-100 p-4 rounded-2xl rounded-tr-none max-w-[60%] ml-auto text-sm text-green-800 font-medium">
                           Wati is perfect for that! Our {activeTab} module handles exactly what you need.
                        </div>
                     </div>
                     <div className="p-4 bg-gray-50 mt-auto flex items-center gap-3">
                        <div className="flex-1 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-400">
                           Type your message here...
                        </div>
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-md">
                           <Zap size={18} fill="white" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Mobile Phone Mockup Overlay */}
          <div className="absolute -bottom-12 -left-12 w-[280px] h-[580px] bg-[#1e1e1e] rounded-[48px] border-8 border-[#1e1e1e] shadow-3xl hidden lg:block animate-in slide-in-from-left-8 fade-in duration-700">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1e1e1e] rounded-b-2xl z-20"></div>
             <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-800 rounded-full z-20"></div>
             <div className="w-full h-full bg-white rounded-[40px] overflow-hidden flex flex-col pt-8">
                <div className="px-6 py-4 flex items-center gap-4 border-b border-gray-100">
                   <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                     <MessageSquare size={18} />
                   </div>
                   <div>
                      <div className="text-xs font-black text-gray-800">Chat with Alex</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Online</div>
                   </div>
                </div>
                <div className="flex-1 bg-[#f8f9fb] p-6 space-y-4">
                   <div className="bg-white p-4 rounded-2xl rounded-tl-none text-xs text-gray-700 shadow-sm border border-gray-100 max-w-[85%]">
                      Can I see the pricing for {activeTab}?
                   </div>
                   <div className="bg-green-500 p-4 rounded-2xl rounded-tr-none text-xs text-white shadow-md ml-auto max-w-[85%] font-medium">
                      Absolutely! Here are our plans for {activeTab} solutions.
                   </div>
                   <div className="space-y-2 mt-4">
                      {['$500-$1000', '$1000-$2000', '$2000+'].map(price => (
                         <div key={price} className="bg-white border-2 border-green-500 rounded-xl p-3 text-center text-xs font-bold text-green-500 hover:bg-green-500 hover:text-white transition-all cursor-pointer">
                            {price}
                         </div>
                      ))}
                   </div>
                </div>
                <div className="p-4 border-t border-gray-100 flex items-center gap-2">
                   <div className="flex-1 h-10 bg-gray-50 rounded-full px-4 flex items-center">
                      <span className="text-[10px] text-gray-400">Type a message...</span>
                   </div>
                   <div className="w-10 h-10 bg-[#00e676] rounded-full flex items-center justify-center text-black">
                      <Send size={16} />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsTabs;
