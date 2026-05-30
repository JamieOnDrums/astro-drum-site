import fs from "fs";
import path from "path";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  console.log("[Twilio API] Endpoint hit - retrieving twilio.xml");

  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "twilio_test",
      "twilio.xml",
    );
    const content = fs.readFileSync(filePath, "utf-8");

    console.log("[Twilio API] Successfully returned twilio.xml content");
    return new Response(content, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("[Twilio API] Error reading twilio.xml:", error);
    return new Response("File not found", {
      status: 404,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
};
