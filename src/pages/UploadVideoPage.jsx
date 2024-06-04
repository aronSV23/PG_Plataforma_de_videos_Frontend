import React, { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";

function UploadVideoPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [mediaBlobUrl, setMediaBlobUrl] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const [webcamStream, setWebcamStream] = useState(null);
    const [screenStream, setScreenStream] = useState(null);
    const [combinedStream, setCombinedStream] = useState(null);
    const mediaRecorderRef = useRef(null);
    const webcamVideoRef = useRef(null);
    const downloadLinkRef = useRef(null);
    const pictureInPictureRef = useRef(null);

    useEffect(() => {
        if (isRecording) {
            startRecording();
        } else {
            stopRecording();
        }
    }, [isRecording]);


    

    const startRecording = async () => {
        try {
            const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
            const webcamStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

            setWebcamStream(webcamStream);
            setScreenStream(screenStream);

            const combinedStream = new MediaStream([
                ...screenStream.getTracks(),
                ...webcamStream.getTracks()
            ]);
            setCombinedStream(combinedStream);

            if (webcamVideoRef.current) {
                webcamVideoRef.current.srcObject = webcamStream;
                webcamVideoRef.current.play();
            }

            const mediaRecorder = new MediaRecorder(combinedStream);
            mediaRecorderRef.current = mediaRecorder;
            const chunks = [];

            mediaRecorder.ondataavailable = (event) => {
                chunks.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunks, { type: 'video/webm' });
                const url = URL.createObjectURL(blob);
                setMediaBlobUrl(url);
            };

            mediaRecorder.start();
        } catch (error) {
            console.error('Error al iniciar la grabación:', error);
        }
    };

    const stopRecording = async () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
        if (screenStream) {
            screenStream.getTracks().forEach(track => track.stop());
        }
        if (webcamStream) {
            webcamStream.getTracks().forEach(track => track.stop());
        }
        if (pictureInPictureRef.current && document.pictureInPictureElement === pictureInPictureRef.current) {
            try {
                await document.exitPictureInPicture();
            } catch (error) {
                console.error('Error al salir de Picture-in-Picture:', error);
            }
        }
    };

    const handleStartRecording = async () => {
        setIsRecording(true);
    };

    const handleStopRecording = () => {
        setIsRecording(false);
    };

    useEffect(() => {
        if (isRecording && webcamVideoRef.current) {
            const handleLoadedMetadata = async () => {
                try {
                    await webcamVideoRef.current.requestPictureInPicture({ disablePictureInPictureControls: false });
                } catch (error) {
                    console.error('Error al iniciar Picture-in-Picture:', error);
                }
                webcamVideoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
            };
            webcamVideoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
        }
    }, [isRecording]);

    return (
        <div>
            <button onClick={handleStartRecording} disabled={isRecording}>Empezar a grabar</button>
            <button onClick={handleStopRecording} disabled={!isRecording}>Detener grabación</button>
            <video ref={webcamVideoRef} autoPlay muted style={{ width: '200px', height: '150px' }} />
            {mediaBlobUrl && (
                <div>
                    <video src={mediaBlobUrl} controls style={{ width: '100%', marginTop: '20px' }} />
                    <a 
                        ref={downloadLinkRef}
                        href={mediaBlobUrl}
                        download="grabacion.webm"
                        style={{ display: 'block', marginTop: '10px', textAlign: 'center' }}
                    >
                        Descargar grabación
                    </a>
                </div>
            )}
            <div style={{ display: 'none' }}>
                <video ref={pictureInPictureRef} autoPlay controls />
            </div>
        </div>
    );
}

export default UploadVideoPage;