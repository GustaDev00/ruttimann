import { CustomBr } from "@/components/atoms/custom-br";
import { FacebookIcon } from "@/components/svgs/facebook";
import { HomeIcon } from "@/components/svgs/home";
import { InstagramIcon } from "@/components/svgs/instagram";
import { TwitterIcon } from "@/components/svgs/twitter";

export default {
  data: {
    navigation: [
      { title: "Home", href: "/", icon: HomeIcon },
      { title: "Bauprojekte", href: "/bauprojekte" },
      { title: "Elektro", href: "/elektro" },
      { title: "Baushop", href: "/baushop" },
      { title: "Über uns", href: "/uber-uns" },
      { title: "Kontakt", href: "/kontakt" },
    ],
    contact: {
      mails: {
        text: "E-Mail",
        content: "info@wmruettimann.ch",
        link: "mailto:info@wmruettimann.ch",
      },
      phones: [
        {
          text: "Büro",
          content: "055 615 30 50",
          link: "tel:+0556153050",
        },
        {
          text: "Umbau/Renovationen",
          content: "079 269 73 56",
          link: "tel:+0792697356",
        },
        {
          text: "Elektrokontrollen",
          content: "079 241 38 03",
          link: "tel:+0792413803",
        },
      ],
      location: {
        text: "Adresse",
        content: "W&M Rüttimann GmbH Im Fennen 10 8867 Niederurnen GL",
        link: "https://maps.app.goo.gl/soeRgK2iZsxgLULVA",
        embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.197104263327!2d9.040905177067582!3d47.1344043711504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479acdbfc8054e3b%3A0xf25e42a43d996b3d!2sW%20%26%20M%20R%C3%BCttimann%20GmbH!5e0!3m2!1sen!2sbr!4v1733077525618!5m2!1sen!2sbr"
      }
    },
    social_share: [
      {
        title: "Instagram",
        link: "https://www.instagram.com/",
        icon: InstagramIcon,
      },
      {
        title: "Facebook",
        link: "https://www.facebook.com/",
        icon: FacebookIcon,
      },
      {
        title: "Twitter",
        link: "https://x.com/home",
        icon: TwitterIcon,
      },
    ],
    services: [
      {
        title: "Webdesign",
      },
      {
        title: "Marketing",
      },
      {
        title: "Intelligenz",
      },
      {
        title: "Mobile Apps",
      },
    ],
  },
  heros: {
    home: {
      bg: {
        src: "/imgs/home/hero/bg.png",
        alt: "Hero Home",
      },
      title: (
        <>Lösungen für
          <CustomBr byViewport="mobile" /> Umbau,
          <br /> Renovation &
          <br /> Elektrokontrollen.
        </>
      ),
      buttons: [
        {
          type: "primary",
          button: {
            title: "Starte dein Projekt",
            href: "/kontakt",
          }
        },
        {
          type: "secondary",
          button: {
            title: "über uns",
            href: "/uber-uns",
          }
        }
      ],
      deals: true
    },
    bauprojekte: {
      bg: {
        src: "/imgs/bauprojekte/hero/bg.png",
        alt: "Hero Bauprojekte",
      },
      title: (
        <>
          Lust auf
          <CustomBr byViewport="mobile" /> Veränderung? Wir
          <br /> realisieren Ihre
          <CustomBr byViewport="mobile" /> Ideen.
        </>
      ),
      description: (
        <>
          Mit W+M Rüttimann wird Ihre
          <CustomBr byViewport="mobile" /> Renovation von Anfang an durchdacht
          <CustomBr byViewport="mobile" /> und mit höchster Präzision umgesetzt.
          <CustomBr byViewport="mobile" /> Von der
          <CustomBr byViewport="desktop" /> ersten Idee bis zum fertigen
          <CustomBr byViewport="mobile" /> Raum schaffen wir Wohnwelten, in
          <CustomBr byViewport="mobile" /> denen Sie sich wohlfühlen. Unser
          <CustomBr byViewport="mobile" /> besonderes Gespür
          <CustomBr byViewport="desktop" /> für schöne Details
          <CustomBr byViewport="mobile" /> und unsere Expertise im Holzbau
          <CustomBr byViewport="mobile" /> geben Ihrem Projekt eine ganz
          <CustomBr byViewport="mobile" /> persönliche Note. Lehnen Sie sich
          <br /> zurück, während wir uns um alles
          <CustomBr byViewport="mobile" /> kümmern – ohne Umwege, direkt und
          <CustomBr byViewport="mobile" /> professionell.
        </>
      ),
      buttons: [
        {
          type: "primary",
          button: {
            title: "Starte dein Projekt",
            href: "/kontakt",
          }
        }
      ],
      deals: true
    },
    elektro: {
      bg: {
        src: "/imgs/elektro/hero/bg.png",
        alt: "Hero Elektro",
      },
      title: (
        <>
          Sichere Elektroinstallationen
          <br /> für Ihr
          <CustomBr byViewport="mobile" /> Zuhause.
        </>
      ),
      description: (
        <>
          Stellen Sie sich vor, Sie müssen sich
          <CustomBr byViewport="mobile" /> um nichts mehr kümmern, wenn es um
          <CustomBr byViewport="mobile" /> Ihre Elektrik geht. Als Haus- oder
          <br /> Liegenschaftseigentümer wissen Sie,
          <CustomBr byViewport="mobile" /> dass W+M Rüttimann alles im Blick hat
          <CustomBr byViewport="mobile" /> – von der Installation bis zur nächsten
          <br /> Sicherheitskontrolle. Mit uns haben Sie
          <CustomBr byViewport="mobile" /> einen verlässlichen Partner an Ihrer
          <CustomBr byViewport="mobile" /> Seite, der dafür sorgt, dass alles sicher
          <CustomBr byViewport="mobile" /> und bestens
          <CustomBr byViewport="desktop" /> funktioniert. Schon lange
          <CustomBr byViewport="mobile" /> keine Elektroprüfung mehr gemacht?
          <CustomBr byViewport="mobile" /> Vielleicht ist es an der Zeit. Wir
          <CustomBr byViewport="mobile" /> machen es Ihnen einfach – und
          <CustomBr byViewport="desktop" /> sicher.
        </>
      ),
      buttons: [
        {
          type: "primary",
          button: {
            title: "Starte dein Projekt",
            href: "/kontakt",
          }
        }
      ],
      deals: true
    },
    baushop: {
      bg: {
        src: "/imgs/baushop/hero/bg.png",
        alt: "Hero Baushop",
      },
      title: (
        <>
          Entdecken Sie
          <CustomBr byViewport="mobile" /> unsere Bauteile
          <br /> auf Tutti
        </>
      ),
      description: (
        <>
          Nachhaltige, gebrauchte
          <CustomBr byViewport="mobile" /> Materialien für Ihr Bauprojekt –
          <CustomBr byViewport="mobile" /> direkt von uns auf Tutti
          <CustomBr byViewport="mobile" /> erhältlich.
        </>
      ),
      buttons: [
        {
          type: "primary",
          button: {
            title: "Jetzt zum Tutti-Shop",
            href: "https://tutti.ch",
          }
        }
      ],
      deals: true
    },
    uber_uns: {
      bg: {
        src: "/imgs/uber-uns/hero/bg.png",
        alt: "Hero Über uns",
      },
      title: (
        <>
          Familienbetrieb
          <CustomBr byViewport="mobile" /> mit Herz und
          <br /> Handwerk
        </>
      ),
      description: (
        <>
          Seit 2011 stehen wir für
          <CustomBr byViewport="mobile" /> saubere Arbeit, persönliche Beratung
          <CustomBr byViewport="mobile" /> und kreative Lösungen – direkt
          <CustomBr byViewport="desktop" /> aus
          <CustomBr byViewport="mobile" /> dem Herzen unserer Region.
        </>
      ),
      buttons: [
        {
          type: "primary",
          button: {
            title: "Starte dein Projekt",
            href: "/kontakt",
          }
        }
      ],
      deals: true
    },
    kontakt: {
      bg: {
        src: "/imgs/kontakt/hero/bg.png",
        alt: "Hero Kontakt",
      },
      title: (
        <>
          Wir sind für Sie da
        </>
      ),
      description: (
        <>
          Seit 2011 stehen wir für
          <CustomBr byViewport="mobile" /> saubere Arbeit, persönliche Beratung
          <CustomBr byViewport="mobile" /> und kreative Lösungen – direkt
          <CustomBr byViewport="desktop" /> aus
          <CustomBr byViewport="mobile" /> dem Herzen unserer Region.
        </>
      ),
      buttons: [],
      deals: false
    },
    deals: {
      text: (
        <>Unsere Zusammenarbeit
          <CustomBr byViewport="desktop" /> spricht für sich
        </>
      ),
      logos: [
        {
          src: "/imgs/deals/logos/1.png",
          alt: "Logo 1",
        },
        {
          src: "/imgs/deals/logos/2.png",
          alt: "Logo 2",
        },
      ]
    }
  },
  slider: {
    title: (
      <>Unser Angebot</>
    ),
    description: (
      <>
        Informieren Sie sich über unsere
        <CustomBr byViewport="mobile" /> Leistungen und wie wir Ihnen
          helfen
        <CustomBr byViewport="mobile" /> können
      </>
    ),
    items: [
      {
        title: <>Bauprojekte</>,
        text: (
          <>
            Mit W+M Rüttimann wird Ihre
            <CustomBr byViewport="mobile" /> Sanierung von
            <CustomBr byViewport="desktop" /> Anfang an
            <CustomBr byViewport="mobile" /> geplant und mit höchster
            <CustomBr byViewport="mobile" /> Präzision ausgeführt. Von
            <CustomBr byViewport="desktop" /> der
            <CustomBr byViewport="mobile" /> ersten Idee bis zum fertige...
          </>
        ),
        link: {
          title: "Mehr erfahren",
          href: "/bauprojekte",
        },
        img: {
          src: "/imgs/slider/1.png",
          alt: "Slider 1",
        }
      },
      {
        title: <>Elektro</>,
        text: (
          <>
            Stellen Sie sich vor, Sie
            <CustomBr byViewport="mobile" /> müssen sich um nichts mehr
            <br /> kümmern, wenn es um Ihre
            <CustomBr byViewport="mobile" /> Elektrik geht. Als Haus-
            <br /> oder Liegenschaftseigentümer
            <CustomBr byViewport="mobile" /> wissen Sie...
          </>
        ),
        link: {
          title: "Mehr erfahren",
          href: "/elektro",
        },
        img: {
          src: "/imgs/slider/2.png",
          alt: "Slider 2",
        }
      }
    ]
  },
  content_columns: {
    home: {
      column1: {
        title: (
          <>
            Ihr Bauprojekt,
            <CustomBr byViewport="mobile" /> eine
            <br /> Ansprechperson.
          </>
        ),
        subtitle: (
          <>
            Experten für
            <CustomBr byViewport="mobile" /> Umbau
            <CustomBr byViewport="desktop" /> und
            <CustomBr byViewport="mobile" /> Elektroarbeiten
          </>
        ),
        description: (
          <>
            Wir übernehmen deinen kompletten Umbau und sorgen für
            <CustomBr byViewport="desktop" /> sichere Elektrokontrollen – von der ersten Planung bis zur finalen
            <CustomBr byViewport="desktop" /> Abnahme, Schritt für Schritt und bis ins kleinste Detail.
            <br /><br />
            Seit über einem Jahrzehnt setzen wir kreative Umbauprojekte um
            <CustomBr byViewport="desktop" /> und bringen handwerkliche Exzellenz in jedes Detail. Spezialisiert
            <CustomBr byViewport="desktop" /> auf massgeschneiderte Lösungen für Umbauten, Renovationen
            <CustomBr byViewport="desktop" /> und Elektroarbeiten.
          </>
        ),
        link: {
          title: "Mehr erfahren",
          href: "/bauprojekte",
        },
        img: {
          src: '/imgs/home/content/1.png',
          alt: "Content 1",
        }
      },
      column2: {
        description: (
          <>
            Seit 2011 packen wir jedes Bauvorhaben mit Leidenschaft und
            <CustomBr byViewport="desktop" /> Kreativität an. Egal, ob es um Renovationen, Innenausbau, Holzbau
            <CustomBr byViewport="desktop" /> oder Elektrokontrollen geht – bei uns haben Sie einen Allrounder
            <CustomBr byViewport="desktop" /> an Ihrer Seite, der sich um alles kümmert. Mit viel Erfahrung und
            <CustomBr byViewport="desktop" /> einem Auge fürs Detail sorgen wir dafür, dass Ihre Ideen
            <CustomBr byViewport="desktop" /> Wirklichkeit werden.
          </>
        ),
        link: {
          title: "Mehr erfahren",
          href: "/bauprojekte",
        },
        img: {
          src: '/imgs/home/content/2.png',
          alt: "Content 1",
        }
      },
    },
    uber_uns: {
      column1: {
         title: (
           <>
             Unsere Philosophie:
             <CustomBr byViewport="desktop" /> Alles ist möglich
           </>
         ),
         subtitle: (
           <>
             Was sie von uns
             <CustomBr byViewport="desktop" /> erwarten können
           </>
         ),
        description: (
            <>
              Wenn Sie mit uns zusammenarbeiten, können Sie sicher sein,
              <CustomBr byViewport="desktop" /> dass wir mit Herz und Hingabe bei der Sache sind. Wir nehmen
              <CustomBr byViewport="desktop" /> uns die Zeit, Ihre Wünsche zu verstehen und setzen diese mit
              <CustomBr byViewport="desktop" /> höchster Präzision um. Als kleiner Familienbetrieb legen wir
              <CustomBr byViewport="desktop" /> grossen Wert darauf, dass Sie sich gut aufgehoben fühlen – von
              <CustomBr byViewport="desktop" /> der transparenten Beratung bis zur sauberen Umsetzung. Mit uns
              <CustomBr byViewport="desktop" /> haben Sie einen Partner, der Ihr Projekt so behandelt, als wäre es
              <CustomBr byViewport="desktop" /> unser eigenes.
            </>
          ),
        img: {
          src: '/imgs/uber-uns/content/1.png',
          alt: "Content 1",
        }
      },
      column2: {
        description: (
          <>
            Für uns gibt es keine Herausforderung, die zu gross oder zu klein
            <CustomBr byViewport="desktop" /> ist. Unser Motto „Alles ist möglich“ prägt unsere tägliche Arbeit.
            <CustomBr byViewport="desktop" /> Egal, ob es um eine umfassende Renovation oder eine kleine
            <CustomBr byViewport="desktop" /> Anpassung geht – wir setzen alles daran, bei jedem Projekt unser
            <CustomBr byViewport="desktop" /> Bestes zu geben. Saubere Ausführung, verlässliche Beratung und
            <CustomBr byViewport="desktop" /> der persönliche Kontakt zu unseren Kunden sind uns dabei
            <CustomBr byViewport="desktop" /> besonders wichtig.
          </>
        ),
        img: {
          src: '/imgs/uber-uns/content/2.png',
          alt: "Content 1",
        }
      }
    }
  },
  card_content: {
    bauprojekte: {},
    elektro: {},
    uber_uns: {},
  },
  list_content: {
    bauprojekte: {},
    elektro: {},
  },
  advantages: {
    bauprojekte: {},
    elektro: {},
  },
  transparent_block: {},
  gallery: {},
  why_choose_us: {},
  motivation: {},
};
