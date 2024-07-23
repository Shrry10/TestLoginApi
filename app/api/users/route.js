import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
      const { id, pass } = await request.json();
      const result = await query(
        "INSERT INTO userinfo (userid, password) VALUES ($1, $2) RETURNING *",
        [id, pass]
      );
      const user = result.rows[0];
      return NextResponse.json({ message: "OK", user }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
  }