"use client";

import { useState } from "react";

const MembersForm = ({ data }) => {
  const [formData, setFormData] = useState({
    id: data?.id || null,
    name: data?.name || null,
    gender: data?.gender || null,
    dob: data?.dob || null,
    phone: data?.phone || null,
    whatsapp: data?.whatsapp || null,
    send: data?.send || null,
    email: data?.email || null,
    address: data?.address || null,
    image: data?.image || null,
    finger_index: data?.finger_index || null,
    finger_image: data?.finger_img || null,
    created_at: data?.created_at || null,
    state: data?.state || null,
  });
  return <div className="w-full bg-amber-100">MembersForm</div>;
};

export default MembersForm;
