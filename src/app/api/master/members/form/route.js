import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js's body parser to handle multipart/form-data
  },
};

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const { id } = searchParams.get("member_id");

    console.log(id);

    const sql = `SELECT id, gender, name, dob, phone, whatsapp, 
    send, email, address, image FROM mstmembers
     WHERE id=?`;

    const member = await query(sql, [id]);

    if (member <= 0) {
      return NextResponse.json(
        { error: `Member Not Found !` },
        { status: 404 }
      );
    }

    return NextResponse.json({ member: member }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error!" },
      { status: 500 }
    );
  }
};

export const POST = async (request) => {
  try {
    const form = await request.formData();
    console.log(...form);

    const id = form.get("id");
    const name = form.get("name");
    const gender = form.get("gender");
    const dob = form.get("dob");
    const phone = form.get("phone");
    const whatsapp = form.get("whatsapp");
    const send = form.get("send");
    const email = form.get("email");
    const address = form.get("address");
    const image = form.get("image");

    if (image instanceof File) {
      console.log(`File, need to copy`);
    } else if (typeof image === `string`) {
      console.log(`Name Or Link, Already have or Didnt Changened`);
    } else {
      console.log(`Mokakda http me !`);
    }

    return NextResponse.json({ message: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error!" },
      { status: 500 }
    );
  }
};
