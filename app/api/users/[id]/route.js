import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const id = request.url.split("users/")[1];
    const result = await query("SELECT * FROM userinfo WHERE userid = $1", [id]);
    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: "INCORRECT USERID" },
        { status: 404 }
      );
    }
    const user = result.rows[0];
    return NextResponse.json({ message: "OK", user }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
