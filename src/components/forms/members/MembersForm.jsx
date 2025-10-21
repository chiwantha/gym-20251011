"use client";
import { useEffect, useState } from "react";
import TextInput from "../input/TextInput";
import Button from "@/components/buttons/button/Button";
import Separator from "@/components/layout/separator/Separator";
import ImageInput from "../input/ImageInput";
import { toast } from "react-toastify";

async function getData(member_id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/master/members/form?member_id=${member_id}`
    );

    if (!res.ok) {
      return { member: [] };
    }

    return res.json();
  } catch (err) {
    console.error(`Error Fetching Data`, err);
    return { member: [] };
  }
}

const initialFormData = {
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
};

const MembersForm = ({ data }) => {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(data?.id);
      console.log(result);
      setFormData({
        id: data?.id || `create`,
        name: data?.name || "",
        gender: data?.gender || "",
        dob: data?.dob || "",
        phone: data?.phone || "",
        whatsapp: data?.whatsapp || "",
        send: data?.send || "",
        email: data?.email || "",
        address: data?.address || "",
        image: data?.image || "",
      });
    };

    fetchData();
  }, [data]);

  const clearFormData = () => {
    setFormData(initialFormData);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateInputs = () => {
    const fields = ["id", "name", "gender", "dob", "phone", "image", "send"];

    const hasEmpty = fields.some(
      (field) => formData[field] === "" || formData[field] === null
    );

    if (hasEmpty) {
      toast.warning("Data Missing!");
      return true;
    }

    return false;
  };

  const handleSubmit = async () => {
    try {
      if (validateInputs()) {
        return;
      }

      const uploadData = new FormData();
      uploadData.append("id", formData.id);
      uploadData.append("name", formData.name);
      uploadData.append("gender", formData.gender);
      uploadData.append("dob", formData.dob);
      uploadData.append("phone", formData.phone);
      uploadData.append("whatsapp", formData.whatsapp);
      uploadData.append("send", formData.send);
      uploadData.append("email", formData.email);
      uploadData.append("address", formData.address);
      uploadData.append("image", formData.image);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/master/members/form`,
        {
          method: "POST",
          body: uploadData,
        }
      );

      if (!res.ok) {
        console.log("Error Creating Member !");
        toast.error(`Create Failed !`);
        return;
      }

      toast.success(`Create Ok !`);
      return;
    } catch (err) {
      toast.error(`Submission Fialed !`, err);
    }
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
          value={formData.send}
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
        <ImageInput
          onChange={(val) => handleChange("image", val)}
          value={formData.image}
        />
      </div>

      <div className="flex flex-col gap-4">
        <Separator label={`Access Control`} />
      </div>

      <div className="flex gap-4">
        <Button title="Create Member" click={handleSubmit} pd={`py-2 px-4`} />
        <Button title="Reset" click={clearFormData} pd={`py-2 px-4`} />
      </div>
    </div>
  );
};

export default MembersForm;
