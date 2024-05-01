import { NextResponse, NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../dbConfig/dbConfig';

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        console.log("sdasdsd");
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM products');
        const users = result.rows;
        client.release();
        return NextResponse.json(users);
    } catch (error) {
        console.log("yojit");

        return NextResponse.json({ message: 'Internal Server Error' });
    }
}

export function POST(req: Request, res: Response) {
    console.log("yojit");

    const response = Response.json({
        message: "POST successfully",
        success: true,
    })
    return response;
}

export function PUT(req: Request, res: Response) {
    const response = Response.json({
        message: "PUT successfully",
        success: true,
    })
    return response;
}
export function DELETE(req: Request, res: Response) {
    const response = Response.json({
        message: "DELETE successfully",
        success: true,
    })
    return response;
}
