import { useEffect, useState } from "react"
import { useStorage } from "../../hooks/useStorage";
import Image from "next/image";
import { usePicture } from "../take-picture/usePicture";
import { Button } from "../Button";
import { getRandomInt } from "../../../lib/utils";

export function GuidePicture({ peopleCount, images }) {
    const { getAllImageUrlFromFolder } = useStorage();
    const [urls, setUrls] = useState([]);
    const [imageIndex, setImageIndex] = useState(0); // Start at 0 instead of null

    // Fetch images when the component loads OR when peopleCount changes
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const folderName = `${peopleCount}-people`;
                const images = await getAllImageUrlFromFolder(folderName);
                setUrls(images);
                
                // Pick a random starting image once images are loaded
                if (images.length > 0) {
                    const firstRandom = getRandomInt(0, images.length - 1);
                    setImageIndex(firstRandom);
                }
            } catch (error) {
                console.error("Failed to fetch guide images:", error);
            }
        };
        fetchImages();
    }, [peopleCount]); // Added peopleCount here so it updates if the user changes selection

    const handleRefresh = () => {
        if (urls.length > 1) {
            const newRandom = getRandomInt(0, urls.length - 1);
            setImageIndex(newRandom);
        }
    };

    useEffect(()=>{
        handleRefresh();
    },[images]);

    return (
        <div className="flex flex-col items-center gap-4">
            {urls.length > 0 ? (
                <Image 
                    src={urls[imageIndex]} 
                    alt="Guide Pose" 
                    width={500} 
                    height={500}
                    className="rounded-lg shadow-lg"
                />
            ) : (
                <div className="w-[500px] h-[500px] bg-gray-200 animate-pulse flex items-center justify-center">
                    Loading Guide...
                </div>
            )}
            
            <Button buttonType="primary" onClick={handleRefresh}>
                Shuffle Pose
            </Button>
        </div>
    );
}