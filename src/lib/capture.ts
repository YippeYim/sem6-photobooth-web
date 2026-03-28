export async function createPhotoStrip(
  images: string[],
  frameSrc: string
) {
  // 1. Safety Check for Next.js SSR
  if (typeof window === "undefined") return "";

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  const count = images.length;

  let positions: { x: number; y: number; w: number; h: number }[] = [];

  // 2. Define Canvas Size and Positions based on count
  if (count === 2) {
    canvas.width = 1080;
    canvas.height = 1920;
    positions = [
      { x: 120, y: 250, w: 840, h: 500 },
      { x: 120, y: 950, w: 840, h: 500 },
    ];
  } else if (count === 3) {
    canvas.width = 1080;
    canvas.height = 1920;
    positions = [
      { x: 120, y: 180, w: 840, h: 400 },
      { x: 120, y: 780, w: 840, h: 400 },
      { x: 120, y: 1380, w: 840, h: 400 },
    ];
  } else if (count === 4) {
    canvas.width = 1080;
    canvas.height = 1400;
    positions = [
      { x: 100, y: 180, w: 380, h: 300 },
      { x: 600, y: 180, w: 380, h: 300 },
      { x: 100, y: 600, w: 380, h: 300 },
      { x: 600, y: 600, w: 380, h: 300 },
    ];
  } else if (count === 6) {
    canvas.width = 1080;
    canvas.height = 1600;
    positions = [
      { x: 100, y: 120, w: 380, h: 250 },
      { x: 600, y: 120, w: 380, h: 250 },
      { x: 100, y: 450, w: 380, h: 250 },
      { x: 600, y: 450, w: 380, h: 250 },
      { x: 100, y: 780, w: 380, h: 250 },
      { x: 600, y: 780, w: 380, h: 250 },
    ];
  }

  // 3. Set Background
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 4. Load all User Photos in Parallel (Faster)
  const loadedPhotos = await Promise.all(
    images.map((src) => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous"; // Prevents Canvas Tainting
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    })
  );

  // 5. Draw Photos onto Canvas
  loadedPhotos.forEach((img, i) => {
    const p = positions[i];
    if (p) ctx.drawImage(img, p.x, p.y, p.w, p.h);
  });

  // 6. Load and Draw Frame Overlay (Last Layer)
  const frame = new Image();
  frame.crossOrigin = "anonymous"; 
  frame.src = frameSrc;
  
  await new Promise((resolve, reject) => {
    frame.onload = resolve;
    frame.onerror = reject;
  });

  ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);

  // 7. Return Result
  return canvas.toDataURL("image/png");
}