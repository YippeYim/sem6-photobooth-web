import { usePicture } from "./usePicture"

/**
 * * @example
 * <DownloadPicture 
 * pictureUrl="https://example.com/photo.jpg" 
 * buttonText="Save to Device" 
 * />
 */
export function DownloadPictureButton({pictureUrl,buttonText = "Download"}){
    const { downloadPicture } = usePicture();

    return <>
        <button onClick={() => downloadPicture(pictureUrl)}>{buttonText}</button>
    </>
}