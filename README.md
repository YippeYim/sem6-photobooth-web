# 📸 PhotoBooth Web App (Next.js + Tailwind)

ยินดีต้อนรับสู่โปรเจกต์กลุ่ม Web App PhotoBooth! เอกสารฉบับนี้จัดทำขึ้นเพื่อให้ทีมงานทั้ง 5 คนเข้าใจโครงสร้างโปรเจกต์และวิธีการทำงานร่วมกันโดยใช้ Git ให้ราบรื่นที่สุด

---

## 🛠️ Tech Stack
* **Framework:** Next.js 14+ (App Router)
* **Styling:** Tailwind CSS
* **Language:** JavaScript (JS/JSX)
* **Deployment:** Vercel

---

## 📂 Full File Structure (โครงสร้างไฟล์ทั้งหมด)

เพื่อให้เห็นภาพรวมทั้งโปรเจกต์ ทีมงานควรยึดโครงสร้างดังนี้:

```text
my-photobooth/
├── public/                  # เก็บไฟล์ Static (ทุกคนเข้าถึงได้)
│   ├── frames/              # เก็บไฟล์กรอบรูป (.png)
│   └── icons/               # ไอคอนต่างๆ
├── src/
│   ├── app/                 # (Routing) หน้าต่างๆ ของเว็บ
│   │   ├── layout.js        # โครงสร้างหลัก (Navbar, Footer)
│   │   ├── page.js          # หน้าแรก (Landing Page)
│   │   ├── capture/
│   │   │   └── page.jsx     # หน้าถ่ายรูป
│   │   └── gallery/
│   │       └── page.jsx     # หน้าคลังรูปภาพ
│   ├── components/          # ส่วนประกอบหน้าจอ
│   │   ├── ui/              # ชิ้นส่วนเล็กๆ (Button, Modal, Input)
│   │   ├── camera/          # ระบบกล้อง (View + Logic)
│   │   ├── frames/          # ระบบเลือกกรอบ (Selector + Logic)
│   │   └── shared/          # Navbar, Footer, Loading Spinner
│   ├── hooks/               # Logic กลาง (เช่น useLocalStorage)
│   ├── lib/                 # Utility (เช่น imageProcessor.js)
│   └── styles/              # Global CSS
├── tailwind.config.js       # ตั้งค่าสีและฟอนต์หลัก
└── package.json

```

---

## 🤝 Git Workflow (แนวทางการทำงานร่วมกัน)

1. **Sync:** ใน GitHub Desktop กด `Fetch origin` และ `Pull` งานล่าสุดก่อนเริ่มงานเสมอ
2. **New Branch:** สร้างกิ่งใหม่จาก `main` ทุกครั้งที่ทำฟีเจอร์ใหม่ เช่น `feat/camera`, `ui/frame-selector`
3. **Commit & Push:** บันทึกงานพร้อมข้อความสั้นๆ แล้วส่งขึ้น GitHub
4. **Pull Request:** สร้าง PR บนหน้าเว็บเพื่อให้เพื่อนช่วย Review ก่อน Merge เข้า `main`

---

## 💡 กฎเหล็กของกลุ่ม (Best Practices)

1. **แยก UI ออกจาก Logic:** - **สาย UI:** แก้ไขเฉพาะไฟล์ `.jsx` เน้นแต่งสี วาง Layout ด้วย Tailwind
* **สาย Logic:** แก้ไขเฉพาะไฟล์ `use...Logic.js` เขียน Function และส่งค่าออกมาให้ UI ใช้


2. **ห้าม Hardcode สี:** ให้ใช้สีจาก `tailwind.config.js` เพื่อความสวยงามที่สม่ำเสมอ
3. **คุยกันก่อนแก้ไฟล์ Shared:** แจ้งในกลุ่มก่อนแก้ไข `layout.js` หรือ `globals.css`

---

## 🚀 Boilerplate ตัวอย่าง (Copy ไปใช้ได้เลย)


### 1. ส่วน Logic กึ่งสำเร็จรูป (`src/components/camera/useCameraLogic.js`)

```javascript
import { useState, useRef } from 'react';

export const useCameraLogic = () => {
  const videoRef = useRef(null);
  const [isCaptured, setIsCaptured] = useState(false);

  const takePhoto = () => {
    setIsCaptured(true);
    console.log("Captured!");
  };

  return { videoRef, isCaptured, takePhoto };
};

```

### 2.ส่วน UI (`src/components/camera/CameraView.jsx`)
```JavaScript
import { useCameraLogic } from './useCameraLogic';

const CameraView = () => {
  const { videoRef, isCaptured, takePhoto } = useCameraLogic();
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <video ref={videoRef} autoPlay className="w-full rounded" />
      <button onClick={takePhoto} className="mt-4 bg-rose-500 text-white px-4 py-2">
        Take Photo
      </button>
    </div>
  );
};
```

### 3. ตัวอย่างหน้าหลัก (`src/app/page.js`)

*หน้าแรกที่เป็นทางเข้าของเว็บ*

```jsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-100 to-teal-100 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-slate-800 tracking-tight">
          My <span className="text-rose-500">Photo</span> Booth
        </h1>
        <p className="text-lg text-slate-600 max-w-md mx-auto">
          สร้างความทรงจำสุดพิเศษด้วยกรอบรูปสุดน่ารักในไม่กี่วินาที
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/capture">
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105">
              เริ่มถ่ายรูปเลย
            </button>
          </Link>
          <Link href="/gallery">
            <button className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-3 rounded-full font-bold shadow-md transition-all">
              ดูคลังรูป
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

```


---

## ⚙️ วิธีติดตั้ง (For Developers)

1. **Clone:** `git clone [URL_OF_REPO]`
2. **Install:** `npm install`
3. **Dev:** `npm run dev` เข้าไปที่ [http://localhost:3000](http://localhost:3000)