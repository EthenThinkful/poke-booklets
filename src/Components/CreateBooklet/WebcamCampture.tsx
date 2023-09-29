import React, { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

interface MyComponentProps {
    serverAddress: string;
    reload: boolean;
    setReload: (reload: boolean) => void;
}

const WebcamCapture: React.FC<MyComponentProps> = ({
    serverAddress, reload, setReload
}) => {
    const webcamRef = useRef<Webcam | null>(null);
    const [imgSrc, setImgSrc] = useState<string | null>();
    const [tesseractText, setTesseractText] = useState<string>();
    const [cardSlot, setCardSlot] = useState<string>();

    const [facingMode, setFacingMode] = useState<string>(FACING_MODE_USER);

    const capture = useCallback(async () => {
        const imageSrc = webcamRef.current?.getScreenshot();
        setImgSrc(imageSrc);
        const currentCardSlot = cardSlot;
        const data = {
            "userDataId": localStorage.ID,
            "verified": true,
            "cardSlot": currentCardSlot,
            "luhthang": imageSrc
        }
        console.log(data);
        axios.put(`${serverAddress}/api/cards`, data).then((res) => {
            setReload(!reload);
            console.log(res);
        })
    }, [webcamRef, cardSlot, reload]);

    const videoConstraints: MediaTrackConstraints = {
        facingMode: facingMode,
        width: 270,
        height: 480,
    };

    const handleClick = useCallback(() => {
        setFacingMode((prevState) =>
            prevState === FACING_MODE_USER
                ? FACING_MODE_ENVIRONMENT
                : FACING_MODE_USER
        );
    }, []);

    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                screenshotQuality={1}
            />
             <div className="flex flex-col justify-center items-center align-center">
            <p className="text-zinc-600">Slot # you want to verify:</p>
                <input
                    className="p-3 text-xs rounded-md w-160 h-14 bg-stone-600 mr-4"
                    type="text"
                    name="cardSlot"
                    placeholder="Slot #"
                    onChange={(e) => setCardSlot(e.target.value)}
                    value={cardSlot}
                />
            <button onClick={capture} className="bg-slate-600 mx-4 p-2 rounded-xl">Verify Photo</button>
            <button onClick={handleClick} className="bg-slate-600 p-2 rounded-xl">Switch camera</button>
            {/* {imgSrc && <img src={imgSrc} alt="Captured" />} */}
            </div>
        </>
    );
};

export default WebcamCapture;