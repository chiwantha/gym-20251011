"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import Button from "@/components/buttons/button/Button";
import Image from "next/image";

const videoConstraints = {
  width: 720,
  height: 720,
  facingMode: "user",
};

const ImageInput = ({ value = "", onChange }) => {
  const [isCam, setIsCam] = useState(false);
  const [preview, setPreview] = useState(null);
  const webcamRef = useRef(null);
  const fileInputRef = useRef(null);

  // Load existing image (edit mode)
  useEffect(() => {
    if (!value) {
      setPreview(null);
      return;
    }

    // If value is a URL string (e.g., from server)
    if (
      typeof value === "string" &&
      (value.startsWith("http") || value.startsWith("/"))
    ) {
      setPreview(value);
    }
    // If value is a File (e.g., from upload or camera)
    else if (value instanceof File) {
      setPreview(URL.createObjectURL(value));
    } else {
      setPreview(null);
    }
  }, [value]);

  // Capture from webcam (return File)
  const capture = useCallback(() => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    fetch(imageSrc)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], `capture_${Date.now()}.jpg`, {
          type: blob.type,
        });
        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);
        onChange?.(file); // Return File
        setIsCam(false);
      });
  }, [onChange]);

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    onChange?.(file); // Return File
  };

  // Clear image
  const clearImage = () => {
    setPreview(null);
    onChange?.(null);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Preview / Webcam */}
      <div className="h-52 w-52 aspect-square rounded-lg bg-gray-200 overflow-hidden relative flex items-center justify-center border border-gray-300">
        {isCam ? (
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        ) : preview ? (
          <Image
            fill
            src={preview}
            alt="Preview"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-500 text-sm">No Image</span>
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-col justify-center gap-2">
        <div className="w-fit flex flex-col gap-2">
          <div className="flex gap-2">
            <Button
              title={isCam ? "Close Camera" : "Use Camera"}
              pd="px-4 py-2"
              bg={
                isCam
                  ? "bg-red-400 hover:bg-red-600 text-white"
                  : "bg-green-400 hover:bg-green-600 text-white"
              }
              click={() => setIsCam((p) => !p)}
            />
            <Button
              title="Capture"
              pd="px-4 py-2"
              click={capture}
              disabled={!isCam}
            />
          </div>

          <Button
            title="Upload Image"
            pd="px-4 py-2"
            click={() => fileInputRef.current?.click()}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          {preview && (
            <Button
              title="Clear"
              pd="px-4 py-2"
              click={clearImage}
              bg="bg-red-400 hover:bg-red-600 text-white"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
