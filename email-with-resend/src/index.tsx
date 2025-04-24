import { Resend } from "resend";
import ContactEmail from "./emails/contact-email";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  projectDiscussion: string;
  services: string[];
}

export default {
  async fetch(request: Request, env: { RESEND_API_KEY: string }): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      const { fullName, email, phone, projectDiscussion, services } = await request.json<FormData>();
      const resend = new Resend(env.RESEND_API_KEY);

      const data = await resend.emails.send({
        from: "TBZ Productions <info@tbzproductions.com>",
        to: ["info@tbzproductions.com"], // Teszteléshez mindkettő
        subject: "Új árajánlat kérelem",
        react: (
          <ContactEmail
            fullName={fullName}
            email={email}
            phone={phone}
            projectDiscussion={projectDiscussion}
            services={services}
          />
        ),
      });

      console.log("Resend API response:", JSON.stringify(data, null, 2)); // Részletes naplózás

      if (data.error) {
        return new Response(JSON.stringify({ error: data.error }), {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }

      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return new Response(JSON.stringify({ error: (error as Error).message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  },
} satisfies { fetch: (request: Request, env: { RESEND_API_KEY: string }) => Promise<Response> };