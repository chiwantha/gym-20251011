"use client";

import { useEffect, useState } from "react";
import TextInput from "../input/TextInput";
import Button from "@/components/buttons/button/Button";
import Separator from "@/components/layout/separator/Separator";

const MembersForm = ({ data }) => {
  const [formData, setFormData] = useState({
    id: data?.id || "",
    name: data.name || "",
    gender: data?.gender || "",
    dob: data?.dob || "",
    phone: data?.phone || "",
    whatsapp: data?.whatsapp || "",
    send: data?.send || "",
    email: data?.email || "",
    address: data?.address || "",
    image: data?.image || "",
    finger_index: data?.finger_index || "",
    finger_image: data?.finger_img || "",
    created_at: data?.created_at || "",
    state: data?.state || 1,
  });

  // This effect will update formData if `data` changes
  useEffect(() => {
    setFormData({
      id: data?.id || "",
      name: data?.name || "",
      gender: data?.gender || "",
      dob: data?.dob || "",
      phone: data?.phone || "",
      whatsapp: data?.whatsapp || "",
      send: data?.send || "",
      email: data?.email || "",
      address: data?.address || "",
      image: data?.image || "",
      finger_index: data?.finger_index || "",
      finger_image: data?.finger_img || "",
      created_at: data?.created_at || "",
      state: data?.state || 1,
    });
  }, [data]);

  const clearFormData = () => {
    setFormData({
      id: "",
      name: "",
      gender: "",
      dob: "",
      phone: "",
      whatsapp: "",
      send: "",
      email: "",
      address: "",
      image: "",
      finger_index: "",
      finger_image: "",
      created_at: "",
      state: 1,
    });
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    alert(JSON.stringify(formData));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* member details */}
      <div className="flex flex-col gap-4">
        <Separator label={`Member Details`} line={false} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            type="text"
            label={"Name"}
            placeholder="Name"
            value={formData.name}
            onChange={(val) => handleChange("name", val)}
          />
          <TextInput
            type="select"
            label={"Gender"}
            placeholder="Select Gender"
            options={[
              { value: 1, label: "Male" },
              { value: 0, label: "Female" },
            ]}
            value={formData.gender}
            onChange={(val) => handleChange("gender", val)}
          />
          <TextInput
            type="date"
            label="Date of Birth"
            value={formData.dob}
            onChange={(val) => handleChange("dob", val)}
          />

          <TextInput
            type="text"
            label="Phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={(val) => handleChange("phone", val)}
          />
        </div>
      </div>

      {/* member contact */}
      <div className="flex flex-col gap-4">
        <Separator label={`Contact Details`} line={true} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            type="text"
            label={"Phone"}
            placeholder="07xXxxXxxx"
            value={formData.phone}
            onChange={(val) => handleChange("phone", val)}
          />
          <TextInput
            type="text"
            label="WhatsApp"
            placeholder="07xXxxXxxx"
            value={formData.whatsapp}
            onChange={(val) => handleChange("whatsapp", val)}
          />
        </div>
        <TextInput
          type="select"
          label={"Send"}
          placeholder="Select Send"
          options={[
            { value: 0, label: "SMS" },
            { value: 1, label: "WhatsApp" },
          ]}
          value={formData.gender}
          onChange={(val) => handleChange("send", val)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            type="email"
            label={"Email"}
            placeholder="chiwantha@gmail.com"
            value={formData.email}
            onChange={(val) => handleChange("email", val)}
          />
          <TextInput
            type="text"
            label="address"
            placeholder="361/23 Parangoda, Dekatana"
            value={formData.address}
            onChange={(val) => handleChange("address", val)}
          />
        </div>
      </div>

      {/* member image */}
      <div className="flex flex-col gap-4">
        <Separator label={`Member Image`} />
        <div className="flex gap-4">
          <div className="h-52 aspect-square rounded-lg bg-gray-200" />
          <div className="flex flex-col justify-center gap-2">
            <div className="flex gap-2">
              <Button title="Use Camera" pd={`px-4 py-2`} />
              <Button title="Capture" pd={`px-4 py-2`} />
            </div>
            <Button title="Upload Image" pd={`px-4 py-2`} />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button title="Create Member" click={handleSubmit} pd={`py-2 px-4`} />
        <Button title="Reset" click={clearFormData} pd={`py-2 px-4`} />
      </div>
    </div>
  );
};

export default MembersForm;
