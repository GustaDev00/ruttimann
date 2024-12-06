import { CustomBr } from "@/components/atoms/custom-br";
import { MoneyIcon } from "@/components/svgs/money";
import C from "@/constants";

export default {
  contact: {
    title: (
      <>
        Jetzt Kontakt <CustomBr byViewport="mobile" />
        aufnehmen
      </>
    ),
    subtitle: (
      <>
        Wir sind für Sie da – Lassen Sie
        <CustomBr byViewport="mobile" /> uns Ihr Projekt
        <CustomBr byViewport="desktop" /> gemeinsam
        <CustomBr byViewport="mobile" /> besprechen
      </>
    ),

    form: {
      inputs: [
        { label: "Name", type: "text", name: "name", placeholder: "z.B. Jonn Wyss" },
        { label: "Telefonnummer", type: "text", name: "phone", placeholder: "+41 00 000 00 00" },
        { label: "E-Mail Adresse", name: "email", placeholder: "Jhon@gmail.com", type: "email" },
        {
          label: "Ihre Nachricht",
          name: "message",
          placeholder: "Ich hätte gerne eine Offerte bezüglich…",
          type: "textarea",
        },
      ],
      button: "Nachricht senden",
    },
    map: <>Lerchenstrasse 22 8754 Netstal</>,
    content: [
      {
        icon: MoneyIcon,
        subtitle: (
          <>
            Rufen Sie uns an oder
            <br /> schreiben Sie uns
          </>
        ),
        list: {
          phones: C.shared.contact.phones,
          emails: C.shared.contact.mails,
          info: {
            text: "Öffnungszeiten",
            hours: {
              days: "Montag - Freitag",
              time: "08:00 - 18:00 Uhr",
            },
          },
        },
      },
      {
        icon: MoneyIcon,
        subtitle: <>Unser Standort</>,
        list: {
          location: C.shared.contact.location,
        },
      },
    ],
  },
};
