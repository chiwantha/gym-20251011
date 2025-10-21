import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const sql = `SELECT id, gender, name , dob, phone, image FROM mstmembers`;

    const data = await query(sql);

    if (data.length <= 0) {
      return NextResponse.json(
        {
          error: "No Members Found 1",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({ members: data }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error!" },
      { status: 500 }
    );
  }
};
