import fs from "fs";
import path from "path";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "twilio_test",
      "twilio.xml",
    );
    const content = fs.readFileSync(filePath, "utf-8");

    return new Response(content, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    return new Response("File not found", {
      status: 404,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
};
