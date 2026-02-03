
import React from 'react';
import { Plus, Settings, Play, Box, Zap, BarChart2 } from 'lucide-react';

interface UIOverlayProps {
  onAddZone: () => void;
}

const UIOverlay: React.FC<UIOverlayProps> = ({ onAddZone }) => {
  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-8">
      {/* Top Bar */}
      <div className="flex justify-between items-start">
        <div className="pointer-events-auto bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-3xl flex items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
            <Zap className="text-black w-7 h-7 fill-current" />
          </div>
          <div>
            <h1 className="text-white font-bold text-xl leading-tight">Angelaxs Inc.</h1>
            <p className="text-[#ccff00] text-[10px] font-bold uppercase tracking-[0.2em]">Institutional Hub</p>
          </div>
        </div>

        <div className="flex gap-3 pointer-events-auto">
          <button className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl text-white hover:bg-white/10 transition-colors">
            <Settings className="w-6 h-6" />
          </button>
          <button className="bg-[#ccff00] p-4 rounded-2xl text-black hover:scale-105 transition-all shadow-[0_5px_20px_rgba(204,255,0,0.3)]">
            <Play className="w-6 h-6 fill-current" />
          </button>
        </div>
      </div>

      {/* Left Column Stats */}
      <div className="flex flex-col gap-4 max-w-xs mt-auto mb-auto pointer-events-auto">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-[2.5rem] relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-24 h-24 bg-[#ccff00]/5 blur-3xl"></div>
           <div className="flex items-center gap-3 mb-3">
             <BarChart2 className="w-5 h-5 text-[#ccff00]" />
             <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.15em]">Efficiency</span>
           </div>
           <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-white tracking-tighter">92.4%</span>
              <span className="text-[#ccff00] text-xs font-bold">+ 2.5</span>
           </div>
        </div>
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-[2.5rem] relative overflow-hidden">
           <div className="flex items-center gap-3 mb-3">
             <Box className="w-5 h-5 text-white/50" />
             <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.15em]">Active Units</span>
           </div>
           <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-white tracking-tighter">14 / 20</span>
           </div>
        </div>
      </div>

      {/* Right Indicator Panel Style Placeholder (From image visual) */}
      <div className="absolute top-24 right-8 flex flex-col items-end gap-2 pointer-events-none">
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Global Ratio</p>
          <h2 className="text-[#ccff00] text-5xl font-black tracking-tighter">39.86%</h2>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-[2.5rem] flex items-center gap-5 pointer-events-auto">
           <div className="w-16 h-16 bg-[#ccff00]/20 rounded-2xl flex items-center justify-center">
              <Box className="text-[#ccff00] w-8 h-8" />
           </div>
           <div>
             <h4 className="text-white font-bold">Node Wallet</h4>
             <p className="text-white/30 text-xs">Digital Asset Archive</p>
           </div>
        </div>

        <button 
          onClick={onAddZone}
          className="pointer-events-auto group relative flex items-center gap-4 bg-[#ccff00] px-10 py-5 rounded-full text-black font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_10px_40px_rgba(204,255,0,0.3)]"
        >
          <div className="bg-black text-white p-2 rounded-full group-hover:rotate-180 transition-transform duration-500">
            <Plus className="w-6 h-6" />
          </div>
          <span>ADD ZONE</span>
        </button>
      </div>

      {/* Floating Info */}
      <div className="absolute left-8 bottom-32 flex flex-col gap-1 text-[9px] font-bold text-white/20 tracking-tighter uppercase italic pointer-events-none">
        <p>/ SYSTEM STATUS: OPTIMAL</p>
        <p>EXPLORING LOGIC SHAPES THE CORE</p>
      </div>
    </div>
  );
};

export default UIOverlay;
