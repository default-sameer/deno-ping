import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("id");
  return NextResponse.json(
    {
      message: query
        ? `Handshake successful with ${query}`
        : "Handshake successful",
    },
    { status: 200 }
  );
}
