import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "Handshake successful" },
    { status: 200 }
  );
}
