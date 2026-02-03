
import React, { useState, Suspense } from 'react';
import SimulationScene from './components/SimulationScene';
import UIOverlay from './components/UIOverlay';

const App: React.FC = () => {
  const [notification, setNotification] = useState<string | null>(null);

  const handleAddZone = () => {
    setNotification("New Work Zone Initialized");
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="relative w-full h-full overflow-hidden font-sans bg-[#050505]">
      {/* 3D Content Container */}
      <Suspense fallback={
        <div className="flex items-center justify-center w-full h-full bg-[#050505] text-white">
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 border-[6px] border-[#ccff00]/20 border-t-[#ccff00] rounded-full animate-spin"></div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#ccff00]">Initializing Core Assets...</p>
          </div>
        </div>
      }>
        <SimulationScene />
      </Suspense>

      {/* UI Overlay */}
      <UIOverlay onAddZone={handleAddZone} />

      {/* Toast Notification */}
      {notification && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-[#ccff00] text-black px-8 py-4 rounded-full shadow-[0_0_40px_rgba(204,255,0,0.4)] animate-bounce flex items-center gap-3 border border-white/20 z-50">
          <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
          <span className="text-sm font-black uppercase tracking-widest">{notification}</span>
        </div>
      )}

      {/* Crosshair / Center Pointer (Aesthetic only) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5">
        <div className="w-16 h-[1px] bg-[#ccff00]"></div>
        <div className="h-16 w-[1px] bg-[#ccff00] absolute"></div>
      </div>
    </div>
  );
};

export default App;
