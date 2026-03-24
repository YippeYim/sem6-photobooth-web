import { usePicture } from "./usePicture"

/**
 * * @example
    <SharePictureButton
        pictureUrl={urls[0]}
        pictureFile={localPhoto.file} // the sharing photo will according to the file
        buttonText="Click to share"
        />
 */
export function SharePictureButton({pictureUrl, pictureFile,buttonText = "Download"}){
    const { sharePicture } = usePicture();

    return <>
        <button onClick={() => sharePicture(pictureUrl, pictureFile)}>{buttonText}</button>
    </>
}