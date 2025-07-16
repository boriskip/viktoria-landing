import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const { email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER, // например, vikaboris93@gmail.com
            pass: process.env.SMTP_PASS, // пароль приложения Gmail
        },
    });

    try {
        await transporter.sendMail({
            from: `"Viktoria Studio" <${process.env.SMTP_USER}>`,
            to: "vikaboris93@gmail.com", // получатель
            subject: "Neue Nachricht von der Website",
            text: `Von: ${email}\n\n${message}`,
        });
        return NextResponse.json({ ok: true });
    } catch (e: any) {
        return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
    }
}