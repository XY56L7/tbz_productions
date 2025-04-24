import * as React from "react";
import { Body, Container, Head, Heading, Html, Text, Tailwind } from "@react-email/components";

interface ContactEmailProps {
  fullName: string;
  email: string;
  phone: string;
  projectDiscussion: string;
  services: string[];
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  fullName,
  email,
  phone,
  projectDiscussion,
  services,
}) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-gray-900 text-white font-sans">
        <Container className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg">
          <Heading className="text-2xl font-semibold mb-4">Új árajánlat kérelem</Heading>
          <Text className="text-lg mb-2"><strong>Név:</strong> {fullName}</Text>
          <Text className="text-lg mb-2"><strong>E-mail:</strong> {email}</Text>
          <Text className="text-lg mb-2"><strong>Telefonszám:</strong> {phone}</Text>
          <Text className="text-lg mb-2"><strong>Projekt részletei:</strong> {projectDiscussion}</Text>
          <Text className="text-lg mb-2"><strong>Érdeklődési területek:</strong> {services.join(", ")}</Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ContactEmail;