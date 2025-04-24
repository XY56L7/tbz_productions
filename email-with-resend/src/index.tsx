import { Resend } from "resend";
import ContactEmail from "./emails/contact-email";

// Definiáljuk a POST kérés várt adatstruktúráját
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  projectDiscussion: string;
  services: string[];
}

export default {
  async fetch(request: Request, env: { RESEND_API_KEY: string }): Promise<Response> {
    // Handle CORS preflight
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
      // Típusozzuk a JSON adatot az interfésszel
      const { fullName, email, phone, projectDiscussion, services } = await request.json<FormData>();
      const resend = new Resend(env.RESEND_API_KEY);

      const data = await resend.emails.send({
        from: "TBZ Productions <onboarding@resend.dev>",
        to: ["info@tbzproductions.com"],
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

      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
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