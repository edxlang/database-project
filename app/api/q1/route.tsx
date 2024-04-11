import { NextRequest, NextResponse } from "next/server";
import executeQuery from "@/app/db/connect";

export async function POST() {
    console.log("hey");

    try  {
        const result = await executeQuery({
            query: 'SELECT * FROM AIRPORT',
        })
        console.log(result);

        if (result) {
            return NextResponse.json({inquiries: result}, {status: 200})
        } else {
            console.error('Response object is undefined.');
        }

    } catch ( error ) {
        console.log( error );
    }
}