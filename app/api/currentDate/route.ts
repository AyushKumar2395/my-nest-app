import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    const currentDatetime = new Date().toLocaleDateString("en-US");
    return NextResponse.json({ currentTime: currentDatetime.toString() }, { status: 200 });
}