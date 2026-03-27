export async function createPhotoStrip(images: string[]) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;

  const width = 300;
  const height = images.length * 200;

  canvas.width = width;
  canvas.height = height;

  for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = images[i];

    await new Promise((res) => {
      img.onload = res;
    });

    ctx.drawImage(img, 0, i * 200, width, 200);
  }

  return canvas.toDataURL("image/png");
}