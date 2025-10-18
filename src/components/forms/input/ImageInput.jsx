"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import Button from "@/components/buttons/button/Button";

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

  // When editing (form has existing image URL)
  useEffect(() => {
    if (value && typeof value === "string" && value.startsWith("http")) {
      setPreview(value);
    } else {
      setPreview(null);
    }
  }, [value]);

  // Capture from webcam
  const capture = useCallback(() => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    setPreview(imageSrc);
    setIsCam(false);
    onChange?.(imageSrc); // send base64 to parent
  }, [onChange]);

  // Handle upload from file
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      onChange?.(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Clear image
  const clearImage = () => {
    setPreview(null);
    onChange?.("");
  };

  return (
    <div className="flex gap-4">
      {/* Image preview or webcam */}
      <div className="h-52 aspect-square rounded-lg bg-gray-200 overflow-hidden relative flex items-center justify-center border border-gray-300">
        {isCam ? (
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        ) : preview ? (
          <img
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
        <div className="flex gap-2">
          <Button
            title={isCam ? "Close Camera" : "Use Camera"}
            pd="px-4 py-2"
            click={() => setIsCam((prev) => !prev)}
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
            className="bg-red-500 text-white"
          />
        )}
      </div>
    </div>
  );
};

export default ImageInput;
