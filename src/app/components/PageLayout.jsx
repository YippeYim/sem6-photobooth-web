export function PageLayout({children}) {
    return <>
        <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* The Blue Blob */}
      <div 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full blur-[120px] opacity-50 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #4fcdff 0%, transparent 70%)'
        }}
      />
      {/* The Polka Dot Pattern Layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]" 
        style={{
          backgroundColor: 'transparent',
          backgroundImage: `
            radial-gradient(#3b82f6 8px, transparent 8px), 
            radial-gradient(#3b82f6 8px, transparent 8px)
          `,
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 50px 50px' // This 20px shift creates the staggered "polka" look
        }}
      />
      {/* LAYER 2: THE CONTENT (Top) 
          By adding 'relative z-20', we force the white boxes 
          to stay on top of the dots and the blue glow.
      */}
      <main className="relative z-20 w-full min-h-screen">
          {children}
      </main>
  
      </div>
    </>
}