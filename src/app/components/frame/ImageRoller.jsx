import { useState } from 'react';

export default function ImageRoller({ images, setSelectedIndex}) {
  const [currentIndex, setCurrentIndex] = useState(0);

    const goLeft = () => {
    const nextIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
    setSelectedIndex(nextIndex); // No +1 needed if you want 0-based index
  };

  const goRight = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    setSelectedIndex(nextIndex); 
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
      
      {/* 1. The Viewport (The Window) */}
      <div className="relative w-1/4 overflow-hidden shadow-2xl bg-white">
        
        {/* 2. The Rolling Track (Flexbox) */}
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="w-full h-full flex-shrink-0">
              <img 
                src={src} 
                className="w-full h-full object-contain" 
                alt={`Slide ${i}`} 
              />
            </div>
          ))}
        </div>

        {/* 3. Navigation Buttons (Overlayed) */}
        <button 
          onClick={goLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-lg hover:bg-white z-30"
        >
          ←
        </button>
        <button 
          onClick={goRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-lg hover:bg-white z-30"
        >
          →
        </button>
      </div>

      {/* Optional: Dots indicator */}
      <div className="flex gap-2">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-3 w-3 rounded-full transition-all ${currentIndex === i ? 'bg-blue-500 w-8' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}