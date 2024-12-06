import { CustomBr } from "@/components/atoms/custom-br";
import { FacebookIcon } from "@/components/svgs/facebook";
import { InstagramIcon } from "@/components/svgs/instagram";
import { TwitterIcon } from "@/components/svgs/twitter";
import {
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineLightningBolt,
  HiOutlineUser,
} from "react-icons/hi";
import { BiMessageCheck, BiStar } from "react-icons/bi";

type ButtonType = "primary" | "secondary";

export default {
  home: {
    hero: {
      home: true,
      bg: {
        src: "/imgs/home/hero/bg.png",
        alt: "Hero Home",
      },
      title: (
        <>
          Lösungen für
          <CustomBr byViewport="mobile" /> Umbau,
          <br /> Renovation &
          <br /> Elektrokontrollen.
        </>
      ),
      buttons: [
        {
          type: "primary" as ButtonType,
          button: {
            title: "Starte dein Projekt",
            href: "/kontakt",
          },
        },
        {
          type: "secondary" as ButtonType,
          button: {
            title: "über uns",
            href: "/uber-uns",
          },
        },
      ],
      deals: true,
    },
    slider: {
      title: <>Unser Angebot</>,
      description: (
        <>
          Informieren Sie sich über unsere
          <CustomBr byViewport="mobile" /> Leistungen und wie wir Ihnen
          <CustomBr byViewport="desktop" /> helfen
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
            src: "/imgs/home/slider/1.png",
            alt: "Slider 1",
          },
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
            src: "/imgs/home/slider/2.png",
            alt: "Slider 2",
          },
        },
      ],
    },
    content_columns: {
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
            <CustomBr byViewport="desktop" /> sichere Elektrokontrollen – von der ersten Planung bis
            zur finalen
            <CustomBr byViewport="desktop" /> Abnahme, Schritt für Schritt und bis ins kleinste
            Detail.
            <br />
            <br />
            Seit über einem Jahrzehnt setzen wir kreative Umbauprojekte um
            <CustomBr byViewport="desktop" /> und bringen handwerkliche Exzellenz in jedes Detail.
            Spezialisiert
            <CustomBr byViewport="desktop" /> auf massgeschneiderte Lösungen für Umbauten,
            Renovationen
            <CustomBr byViewport="desktop" /> und Elektroarbeiten.
          </>
        ),
        link: {
          title: "Mehr erfahren",
          href: "/bauprojekte",
        },
        img: {
          src: "/imgs/home/content/1.png",
          alt: "Content 1",
        },
      },
      column2: {
        description: (
          <>
            Seit 2011 packen wir jedes Bauvorhaben mit Leidenschaft und
            <CustomBr byViewport="desktop" /> Kreativität an. Egal, ob es um Renovationen,
            Innenausbau, Holzbau
            <CustomBr byViewport="desktop" /> oder Elektrokontrollen geht – bei uns haben Sie einen
            Allrounder
            <CustomBr byViewport="desktop" /> an Ihrer Seite, der sich um alles kümmert. Mit viel
            Erfahrung und
            <CustomBr byViewport="desktop" /> einem Auge fürs Detail sorgen wir dafür, dass Ihre
            Ideen
            <CustomBr byViewport="desktop" /> Wirklichkeit werden.
          </>
        ),
        link: {
          title: "Mehr erfahren",
          href: "/bauprojekte",
        },
        img: {
          src: "/imgs/home/content/2.png",
          alt: "Content 2",
        },
      },
    },
  },
  bauprojekte: {
    hero: {
      bg: {
        src: "/imgs/bauprojekte/hero/bg.png",
        alt: "Hero Bauprojekte",
      },
      title: (
        <>
          Lust auf Veränderung? Wir
          <br /> realisieren Ihre Ideen.
        </>
      ),
      description: (
        <>
          Mit W+M Rüttimann wird Ihre Renovation von Anfang an durchdacht und mit höchster Präzision
          umgesetzt. Von der
          <CustomBr byViewport="desktop" /> ersten Idee bis zum fertigen Raum schaffen wir
          Wohnwelten, in denen Sie sich wohlfühlen.
        </>
      ),
      buttons: [
        {
          type: "primary" as ButtonType,
          button: {
            title: "Starte dein Projekt",
            href: "/kontakt",
          },
        },
      ],
      deals: true,
    },
    card_content: {
      title: <>Unsere Philosophie</>,
      description: (
        <>
          Räume haben Charakter – unsere Aufgabe ist es, diesen zum Leben
          <CustomBr byViewport="desktop" /> zu erwecken. Jede Renovation beginnt mit einer Vision,
          und wir
          <CustomBr byViewport="desktop" /> sorgen dafür, dass diese Vision in jedem Detail spürbar
          wird. Wir
          <CustomBr byViewport="desktop" /> verbinden Erfahrung und Kreativität, um aus jeder Idee
          einen Raum
          <CustomBr byViewport="desktop" /> zu machen, der begeistert und lange Freude bereitet. Am
          Ende
          <CustomBr byViewport="desktop" /> zählen nicht nur schöne Räume, sondern solche, die sich
          wie
          <CustomBr byViewport="desktop" /> Zuhause anfühlen.
        </>
      ),
      link: {
        title: "Nachricht senden",
        href: "/kontakt",
      },
      img: {
        src: "/imgs/bauprojekte/card-content/1.png",
        alt: "Content 1",
      },
    },
    list_content: {
      title: <>Unser Angebot</>,
      items: [
        {
          title: <>Renovationen</>,
          text: (
            <>
              Lust auf Veränderung? Wir bringen frischen Wind in Ihr Zuhause und machen aus Ihren
              Räumen ein ganz
              <CustomBr byViewport="desktop" /> neues Erlebnis. Mit einem durchdachten Plan und
              Liebe zum Detail setzen wir Ihre Vorstellungen in die
              <CustomBr byViewport="desktop" /> Realität um. Sie können sich zurücklehnen, während
              wir jeden Aspekt Ihrer Renovation präzise und nach
              <CustomBr byViewport="desktop" /> Ihren Wünschen gestalten. Am Ende steht nicht nur
              eine Veränderung, sondern ein Raum, der Sie jeden
              <CustomBr byViewport="desktop" /> Tag aufs Neue begeistert.
            </>
          ),
        },
        {
          title: <>Holzbau</>,
          text: (
            <>
              Lust auf Veränderung? Wir bringen frischen Wind in Ihr Zuhause und machen aus Ihren
              Räumen ein ganz
              <CustomBr byViewport="desktop" /> neues Erlebnis. Mit einem durchdachten Plan und
              Liebe zum Detail setzen wir Ihre Vorstellungen in die
              <CustomBr byViewport="desktop" /> Realität um. Sie können sich zurücklehnen, während
              wir jeden Aspekt Ihrer Renovation präzise und nach
              <CustomBr byViewport="desktop" /> Ihren Wünschen gestalten. Am Ende steht nicht nur
              eine Veränderung, sondern ein Raum, der Sie jeden
              <CustomBr byViewport="desktop" /> Tag aufs Neue begeistert.
            </>
          ),
        },
        {
          title: <>Innenausbau</>,
          text: (
            <>
              Lust auf Veränderung? Wir bringen frischen Wind in Ihr Zuhause und machen aus Ihren
              Räumen ein ganz
              <CustomBr byViewport="desktop" /> neues Erlebnis. Mit einem durchdachten Plan und
              Liebe zum Detail setzen wir Ihre Vorstellungen in die
              <CustomBr byViewport="desktop" /> Realität um. Sie können sich zurücklehnen, während
              wir jeden Aspekt Ihrer Renovation präzise und nach
              <CustomBr byViewport="desktop" /> Ihren Wünschen gestalten. Am Ende steht nicht nur
              eine Veränderung, sondern ein Raum, der Sie jeden
              <CustomBr byViewport="desktop" /> Tag aufs Neue begeistert.
            </>
          ),
        },
        {
          title: <>Aussenarbeiten</>,
          text: (
            <>
              Lust auf Veränderung? Wir bringen frischen Wind in Ihr Zuhause und machen aus Ihren
              Räumen ein ganz
              <CustomBr byViewport="desktop" /> neues Erlebnis. Mit einem durchdachten Plan und
              Liebe zum Detail setzen wir Ihre Vorstellungen in die
              <CustomBr byViewport="desktop" /> Realität um. Sie können sich zurücklehnen, während
              wir jeden Aspekt Ihrer Renovation präzise und nach
              <CustomBr byViewport="desktop" /> Ihren Wünschen gestalten. Am Ende steht nicht nur
              eine Veränderung, sondern ein Raum, der Sie jeden
              <CustomBr byViewport="desktop" /> Tag aufs Neue begeistert.
            </>
          ),
        },
        {
          title: <>Altbau-Modernisierungen</>,
          text: (
            <>
              Lust auf Veränderung? Wir bringen frischen Wind in Ihr Zuhause und machen aus Ihren
              Räumen ein ganz
              <CustomBr byViewport="desktop" /> neues Erlebnis. Mit einem durchdachten Plan und
              Liebe zum Detail setzen wir Ihre Vorstellungen in die
              <CustomBr byViewport="desktop" /> Realität um. Sie können sich zurücklehnen, während
              wir jeden Aspekt Ihrer Renovation präzise und nach
              <CustomBr byViewport="desktop" /> Ihren Wünschen gestalten. Am Ende steht nicht nur
              eine Veränderung, sondern ein Raum, der Sie jeden
              <CustomBr byViewport="desktop" /> Tag aufs Neue begeistert.
            </>
          ),
        },
        {
          title: <>Anbauten</>,
          text: (
            <>
              Lust auf Veränderung? Wir bringen frischen Wind in Ihr Zuhause und machen aus Ihren
              Räumen ein ganz
              <CustomBr byViewport="desktop" /> neues Erlebnis. Mit einem durchdachten Plan und
              Liebe zum Detail setzen wir Ihre Vorstellungen in die
              <CustomBr byViewport="desktop" /> Realität um. Sie können sich zurücklehnen, während
              wir jeden Aspekt Ihrer Renovation präzise und nach
              <CustomBr byViewport="desktop" /> Ihren Wünschen gestalten. Am Ende steht nicht nur
              eine Veränderung, sondern ein Raum, der Sie jeden
              <CustomBr byViewport="desktop" /> Tag aufs Neue begeistert.
            </>
          ),
        },
      ],
      img: {
        src: "/imgs/bauprojekte/list-content/1.png",
        alt: "Content 1",
      },
    },
    advantages: {
      title: <>Unsere Vorteile</>,
      items: [
        {
          icon: HiOutlineShieldCheck,
          title: (
            <>
              Alles aus einer
              <br /> Hand
            </>
          ),
          text: (
            <>
              Bei uns haben Sie immer ein Gesicht, dem Sie
              <CustomBr byViewport="desktop" /> vertrauen können. Als Familienbetrieb kümmern wir
              <CustomBr byViewport="desktop" /> uns persönlich um jedes Detail Ihres Projekts. Keine
              <CustomBr byViewport="desktop" /> ständigen Abstimmungen mit Architekten oder
              <CustomBr byViewport="desktop" /> externen Firmen – wir erledigen alles für Sie.
              Einfach,
              <CustomBr byViewport="desktop" /> direkt und auf Augenhöhe. Sie können sich
              <CustomBr byViewport="desktop" /> zurücklehnen, wir übernehmen.
            </>
          ),
        },
        {
          icon: BiMessageCheck,
          title: (
            <>
              Präzision und
              <br /> Verlässlichkeit
            </>
          ),
          text: (
            <>
              Wir schweizen nicht nur gern, wir arbeiten auch so.
              <CustomBr byViewport="desktop" /> Für uns zählt jedes Detail, von der ersten Schraube
              <CustomBr byViewport="desktop" /> bis zum letzten Pinselstrich. Bei uns wird nichts
              dem
              <CustomBr byViewport="desktop" /> Zufall überlassen. Sie erhalten ein Ergebnis, das
              Hand
              <CustomBr byViewport="desktop" /> und Fuss hat – pünktlich und in bester Qualität, so
              <CustomBr byViewport="desktop" /> wie Sie es erwarten
            </>
          ),
        },
        {
          icon: HiOutlineSparkles,
          title: (
            <>
              Kreativität trifft auf
              <br /> Erfahrung
            </>
          ),
          text: (
            <>
              Jahrzehntelange Erfahrung in der Baubranche und
              <CustomBr byViewport="desktop" /> ein kreativer Kopf, der über den Tellerrand
              <CustomBr byViewport="desktop" /> hinausblickt – das ist unser Erfolgsrezept. Wir
              planen
              <CustomBr byViewport="desktop" /> mit Herz und Verstand und setzen Ihre Wünsche so
              <CustomBr byViewport="desktop" /> um, dass Funktionalität und Ästhetik perfekt
              <CustomBr byViewport="desktop" /> zusammenpassen. Gemeinsam schaffen wir Räume,
              <CustomBr byViewport="desktop" /> die nicht nur schön aussehen, sondern sich auch gut
              <CustomBr byViewport="desktop" /> anfühlen.
            </>
          ),
        },
        {
          icon: HiOutlineUser,
          title: (
            <>
              Individuelle
              <br /> Lösungen
            </>
          ),
          text: (
            <>
              Ihre Vision ist unsere Aufgabe. Egal, ob Sie etwas
              <CustomBr byViewport="desktop" /> Grosses vorhaben oder eine kleine Veränderung
              <CustomBr byViewport="desktop" /> wünschen – bei uns steht der Mensch im Mittelpunkt.
              <CustomBr byViewport="desktop" /> Wir hören genau zu, verstehen Ihre Wünsche und
              <CustomBr byViewport="desktop" /> setzen sie so um, dass Sie sich in Ihrem neuen Raum
              <CustomBr byViewport="desktop" /> zu 100 % wiederfinden. Nicht von der Stange,
              <CustomBr byViewport="desktop" /> sondern genau auf Sie zugeschnitten – mit dem Blick
              <CustomBr byViewport="desktop" /> fürs Wesentliche und dem Herz für Details.
            </>
          ),
        },
      ],
      img: {
        src: "/imgs/bauprojekte/advantages/1.png",
        alt: "Advantages 1",
      },
    },
  },
  elektro: {
    hero: {
      bg: {
        src: "/imgs/elektro/hero/bg.png",
        alt: "Hero Elektro",
      },
      title: (
        <>
          Sichere Elektroinstallationen
          <br /> für Ihr Zuhause.
        </>
      ),
      description: (
        <>
          Stellen Sie sich vor, Sie müssen sich um nichts mehr kümmern, wenn es um Ihre Elektrik
          geht. Als Haus- oder
          <CustomBr byViewport="desktop" /> Liegenschaftseigentümer wissen Sie, dass W+M Rüttimann
          alles im Blick hat – von der Installation bis zur nächsten
          <CustomBr byViewport="desktop" /> Sicherheitskontrolle. Mit uns haben Sie einen
          verlässlichen Partner an Ihrer Seite, der dafür sorgt, dass alles sicher und bestens
          <CustomBr byViewport="desktop" /> funktioniert. Schon lange keine Elektroprüfung mehr
          gemacht? Vielleicht ist es an der Zeit. Wir machen es Ihnen einfach – und
          <CustomBr byViewport="desktop" /> sicher.
        </>
      ),
      buttons: [
        {
          type: "primary" as ButtonType,
          button: {
            title: "Starte dein Projekt",
            href: "/kontakt",
          },
        },
      ],
      deals: true,
    },
    card_content: {
      title: <>Unsere Philosophie</>,
      description: (
        <>
          Elektrik ist mehr als nur Technik – es ist Sicherheit, Vertrauen und
          <CustomBr byViewport="desktop" /> Sorgfalt. Für uns steht nicht nur die Funktion im
          Vordergrund,
          <CustomBr byViewport="desktop" /> sondern das gute Gefühl, dass alles zuverlässig und
          sicher ist. Als
          <CustomBr byViewport="desktop" /> Familienbetrieb legen wir besonderen Wert darauf, dass
          unsere
          <CustomBr byViewport="desktop" /> Kunden spüren, dass sie bei uns in den besten Händen
          sind. Jedes
          <CustomBr byViewport="desktop" /> Kabel, jede Steckdose und jede Kontrolle wird mit
          Präzision und
          <CustomBr byViewport="desktop" /> Weitblick ausgeführt, weil uns Ihre Sicherheit am Herzen
          liegt. Bei
          <CustomBr byViewport="desktop" /> uns können Sie sich zurücklehnen, denn wir kümmern uns
          um jedes
          <CustomBr byViewport="desktop" /> Detail und sorgen dafür, dass Ihre Elektroinstallationen
          einwandfrei
          <CustomBr byViewport="desktop" /> funktionieren. So schaffen wir nicht nur Sicherheit,
          sondern auch
          <CustomBr byViewport="desktop" /> Vertrauen, das bleibt.
        </>
      ),
      img: {
        src: "/imgs/elektro/card-content/1.png",
        alt: "Content 1",
      },
    },
    list_content: {
      title: <>Unser Angebot</>,
      items: [
        {
          title: <>Installation elektrischer Systeme</>,
          text: (
            <>
              Stellen Sie sich vor, der Strom fliesst nicht, wenn Sie ihn am dringendsten brauchen.
              Damit es nicht so
              <CustomBr byViewport="desktop" /> weit kommt, sorgen wir dafür, dass Ihre
              Verkabelungen, Steckdosen und Schalter einwandfrei
              <CustomBr byViewport="desktop" /> funktionieren – von Anfang an. Ob Neubau oder
              Renovation, wir legen den Grundstein für ein sicheres
              <CustomBr byViewport="desktop" /> und zuverlässiges Zuhause. Keine Kompromisse, keine
              Fehler. Wir kümmern uns um jedes Detail, damit
              <CustomBr byViewport="desktop" /> Sie sich nie um Ihre Elektrik sorgen müssen.
            </>
          ),
        },
        {
          title: <>Sicherheitsprüfungen und Elektrokontrollen</>,
          text: (
            <>
              Stellen Sie sich vor, der Strom fliesst nicht, wenn Sie ihn am dringendsten brauchen.
              Damit es nicht so
              <CustomBr byViewport="desktop" /> weit kommt, sorgen wir dafür, dass Ihre
              Verkabelungen, Steckdosen und Schalter einwandfrei
              <CustomBr byViewport="desktop" /> funktionieren – von Anfang an. Ob Neubau oder
              Renovation, wir legen den Grundstein für ein sicheres
              <CustomBr byViewport="desktop" /> und zuverlässiges Zuhause. Keine Kompromisse, keine
              Fehler. Wir kümmern uns um jedes Detail, damit
              <CustomBr byViewport="desktop" /> Sie sich nie um Ihre Elektrik sorgen müssen.
            </>
          ),
        },
        {
          title: <>Reparatur und Wartung</>,
          text: (
            <>
              Stellen Sie sich vor, der Strom fliesst nicht, wenn Sie ihn am dringendsten brauchen.
              Damit es nicht so
              <CustomBr byViewport="desktop" /> weit kommt, sorgen wir dafür, dass Ihre
              Verkabelungen, Steckdosen und Schalter einwandfrei
              <CustomBr byViewport="desktop" /> funktionieren – von Anfang an. Ob Neubau oder
              Renovation, wir legen den Grundstein für ein sicheres
              <CustomBr byViewport="desktop" /> und zuverlässiges Zuhause. Keine Kompromisse, keine
              Fehler. Wir kümmern uns um jedes Detail, damit
              <CustomBr byViewport="desktop" /> Sie sich nie um Ihre Elektrik sorgen müssen.
            </>
          ),
        },
        {
          title: <>Anschliessen von Geräten</>,
          text: (
            <>
              Stellen Sie sich vor, der Strom fliesst nicht, wenn Sie ihn am dringendsten brauchen.
              Damit es nicht so
              <CustomBr byViewport="desktop" /> weit kommt, sorgen wir dafür, dass Ihre
              Verkabelungen, Steckdosen und Schalter einwandfrei
              <CustomBr byViewport="desktop" /> funktionieren – von Anfang an. Ob Neubau oder
              Renovation, wir legen den Grundstein für ein sicheres
              <CustomBr byViewport="desktop" /> und zuverlässiges Zuhause. Keine Kompromisse, keine
              Fehler. Wir kümmern uns um jedes Detail, damit
              <CustomBr byViewport="desktop" /> Sie sich nie um Ihre Elektrik sorgen müssen.
            </>
          ),
        },
        {
          title: <>Planung und Beratung</>,
          text: (
            <>
              Stellen Sie sich vor, der Strom fliesst nicht, wenn Sie ihn am dringendsten brauchen.
              Damit es nicht so
              <CustomBr byViewport="desktop" /> weit kommt, sorgen wir dafür, dass Ihre
              Verkabelungen, Steckdosen und Schalter einwandfrei
              <CustomBr byViewport="desktop" /> funktionieren – von Anfang an. Ob Neubau oder
              Renovation, wir legen den Grundstein für ein sicheres
              <CustomBr byViewport="desktop" /> und zuverlässiges Zuhause. Keine Kompromisse, keine
              Fehler. Wir kümmern uns um jedes Detail, damit
              <CustomBr byViewport="desktop" /> Sie sich nie um Ihre Elektrik sorgen müssen.
            </>
          ),
        },
      ],
      img: {
        src: "/imgs/elektro/list-content/1.png",
        alt: "Content 1",
      },
    },
    advantages: {
      title: <>Unsere Vorteile</>,
      items: [
        {
          icon: HiOutlineShieldCheck,
          title: (
            <>
              Sicherheit aus
              <br /> einer Hand
            </>
          ),
          text: (
            <>
              Ob Neubau, Renovation oder die nächste
              <CustomBr byViewport="desktop" /> Sicherheitskontrolle – wir sind Ihr Ansprechpartner
              für
              <CustomBr byViewport="desktop" /> alle elektrischen Belange. Kein Wechsel zwischen
              <CustomBr byViewport="desktop" /> verschiedenen Anbietern, keine komplizierten
              <CustomBr byViewport="desktop" /> Absprachen. Mit uns haben Sie einen verlässlichen
              <CustomBr byViewport="desktop" /> Partner, der sich um alles kümmert.
            </>
          ),
        },
        {
          icon: BiMessageCheck,
          title: (
            <>
              Präzision und
              <br /> Verlässlichkeit
            </>
          ),
          text: (
            <>
              Wir verstehen, dass es bei Elektrik keine
              <CustomBr byViewport="desktop" /> Kompromisse gibt. Jeder Anschluss, jede Prüfung
              <CustomBr byViewport="desktop" /> wird mit höchster Genauigkeit durchgeführt. So
              <CustomBr byViewport="desktop" /> können Sie sich auf maximale Sicherheit und
              <CustomBr byViewport="desktop" /> termingerechte Arbeit verlassen – jedes Mal.
            </>
          ),
        },
        {
          icon: HiOutlineSparkles,
          title: (
            <>
              Technik und Erfahrung
              <br /> vereint
            </>
          ),
          text: (
            <>
              Mit unserem Wissen und unserer langjährigen
              <CustomBr byViewport="desktop" /> Erfahrung im Elektrohandwerk finden wir auch bei
              <CustomBr byViewport="desktop" /> komplexen Anforderungen die passende Lösung. Ob
              <CustomBr byViewport="desktop" /> klassische Installationen oder moderne Systeme – wir
              <CustomBr byViewport="desktop" /> bringen Technik und Erfahrung perfekt zusammen.
            </>
          ),
        },
        {
          icon: HiOutlineLightningBolt,
          title: (
            <>
              Elektro-Lösungen
              <br /> nach Mass
            </>
          ),
          text: (
            <>
              Wir wissen, dass jeder Raum und jedes Gebäude
              <CustomBr byViewport="desktop" /> einzigartig ist. Darum passen wir unsere
              <CustomBr byViewport="desktop" /> Elektroinstallationen genau auf Ihre Bedürfnisse an
              –
              <CustomBr byViewport="desktop" /> kein Standard, sondern Technik, die zu Ihnen passt.
              <CustomBr byViewport="desktop" /> Mit uns haben Sie die volle Kontrolle, von der
              <CustomBr byViewport="desktop" /> Planung bis zur Umsetzung.
            </>
          ),
        },
      ],
      img: {
        src: "/imgs/elektro/advantages/1.png",
        alt: "Advantages 1",
      },
    },
    transparent_block: {
      title: (
        <>
          Transparente Preise für
          <CustomBr byViewport="desktop" /> Ihre Sicherheit
        </>
      ),
      text: (
        <>
          Unsere Elektro-Dienstleistungen orientieren
          <CustomBr byViewport="desktop" /> sich an den VSEK-Richtpreisen, damit Sie
          <CustomBr byViewport="desktop" /> von Beginn an Klarheit haben. Hier finden
          <CustomBr byViewport="desktop" /> Sie eine Übersicht der wichtigsten
          <CustomBr byViewport="desktop" /> Leistungen und Richtpreise, damit Sie genau
          <CustomBr byViewport="desktop" /> wissen, was auf Sie zukommt.
        </>
      ),
      link: {
        title: "Jetzt starten",
        href: "/kontakt",
      },
      img: {
        src: "/imgs/elektro/transparent-block/1.png",
        alt: "Transparent Block 1",
      },
    },
  },
  baushop: {
    hero: {
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
          Nachhaltige, gebrauchte Materialien für Ihr
          <CustomBr byViewport="desktop" /> Bauprojekt – direkt von uns auf Tutti erhältlich.
        </>
      ),
      buttons: [
        {
          type: "primary" as ButtonType,
          button: {
            title: "Jetzt zum Tutti-Shop",
            href: "https://tutti.ch",
          },
        },
      ],
      deals: true,
    },
    gallery: {
      title: <>Unsere Bauteile</>,
      text: (
        <>
          Alle Bauteile, die Sie hier sehen, sind sorgfältig geprüft und stehen bereit für Ihre
          neuen
          <CustomBr byViewport="desktop" /> Projekte. Entdecken Sie, was aktuell verfügbar ist und
          wie Sie damit Ihr nächstes
          <CustomBr byViewport="desktop" /> Bauvorhaben voranbringen können.
        </>
      ),
      bg: {
        src: "/imgs/baushop/gallery/bg.png",
        alt: "Gallery BG",
      },
      imgs: [
        {
          src: "/imgs/baushop/gallery/1.png",
          alt: "Gallery 1",
        },
        {
          src: "/imgs/baushop/gallery/2.png",
          alt: "Gallery 2",
        },
        {
          src: "/imgs/baushop/gallery/3.png",
          alt: "Gallery 3",
        },
        {
          src: "/imgs/baushop/gallery/4.png",
          alt: "Gallery 4",
        },
        {
          src: "/imgs/baushop/gallery/5.png",
          alt: "Gallery 5",
        },
      ],
    },
    why_choose_us: {
      title: (
        <>
          Warum sich ein Blick auf unsere
          <CustomBr byViewport="desktop" /> gebrauchten Bauteile lohnt
        </>
      ),
      tags: [
        {
          icon: BiStar,
          text: <>Hochwertige Materialien zum günstigen Preis</>,
        },
        {
          icon: BiStar,
          text: <>Nachhaltige Alternative für Ihr Bauprojekt</>,
        },
        {
          icon: BiStar,
          text: <>Sorgfältig ausgewählt und geprüft</>,
        },
      ],
      link: {
        title: "Jetzt zum Tutti-Shop",
        href: "https://tutti.ch",
      },
      img: {
        src: "/imgs/baushop/why-choose-us/1.png",
        alt: "Why Choose Us 1",
      },
    },
  },
  uber_uns: {
    hero: {
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
          <CustomBr byViewport="mobile" /> und kreative Lösungen.
        </>
      ),
      buttons: [
        {
          type: "primary" as ButtonType,
          button: {
            title: "Starte dein Projekt",
            href: "/kontakt",
          },
        },
      ],
      deals: true,
    },
    card_content: {
      title: <>Unsere Geschichte</>,
      description: (
        <>
          2011 haben wir – Wendel und Markus Rüttimann – die W+M
          <CustomBr byViewport="desktop" /> Rüttimann GmbH gegründet. Vater und Sohn, vereint durch
          die
          <CustomBr byViewport="desktop" /> Leidenschaft für gutes Handwerk. Seitdem ist unser
          Familienbetrieb
          <CustomBr byViewport="desktop" /> fest in der Region Glarus, St. Gallen und Schwyz
          verwurzelt. Hier
          <CustomBr byViewport="desktop" /> sind wir zuhause, und hier sind wir für unsere Kunden
          da, mit einem
          <CustomBr byViewport="desktop" /> klaren Ziel: saubere Arbeit und höchste Qualität.
        </>
      ),
      img: {
        src: "/imgs/uber-uns/card-content/1.png",
        alt: "Content 1",
      },
    },
    content_columns: {
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
            <CustomBr byViewport="desktop" /> dass wir mit Herz und Hingabe bei der Sache sind. Wir
            nehmen
            <CustomBr byViewport="desktop" /> uns die Zeit, Ihre Wünsche zu verstehen und setzen
            diese mit
            <CustomBr byViewport="desktop" /> höchster Präzision um. Als kleiner Familienbetrieb
            legen wir
            <CustomBr byViewport="desktop" /> grossen Wert darauf, dass Sie sich gut aufgehoben
            fühlen – von
            <CustomBr byViewport="desktop" /> der transparenten Beratung bis zur sauberen Umsetzung.
            Mit uns
            <CustomBr byViewport="desktop" /> haben Sie einen Partner, der Ihr Projekt so behandelt,
            als wäre es
            <CustomBr byViewport="desktop" /> unser eigenes.
          </>
        ),
        img: {
          src: "/imgs/uber-uns/content/1.png",
          alt: "Content 1",
        },
      },
      column2: {
        description: (
          <>
            Für uns gibt es keine Herausforderung, die zu gross oder zu klein
            <CustomBr byViewport="desktop" /> ist. Unser Motto „Alles ist möglich“ prägt unsere
            tägliche Arbeit.
            <CustomBr byViewport="desktop" /> Egal, ob es um eine umfassende Renovation oder eine
            kleine
            <CustomBr byViewport="desktop" /> Anpassung geht – wir setzen alles daran, bei jedem
            Projekt unser
            <CustomBr byViewport="desktop" /> Bestes zu geben. Saubere Ausführung, verlässliche
            Beratung und
            <CustomBr byViewport="desktop" /> der persönliche Kontakt zu unseren Kunden sind uns
            dabei
            <CustomBr byViewport="desktop" /> besonders wichtig.
          </>
        ),
        img: {
          src: "/imgs/uber-uns/content/2.png",
          alt: "Content 1",
        },
      },
    },
    motivation: {
      bg: {
        src: "/imgs/uber-uns/motivation/bg.png",
        alt: "Motivation BG",
      },
      title: (
        <>
          Unsere Motivation:
          <br /> Leidenschaft und
          <br /> Stolz
        </>
      ),
      description: (
        <>
          Wir lieben, was wir tun, und das spüren auch unsere Kunden. Es ist uns
          <CustomBr byViewport="desktop" /> wichtig, dass wir mit unserer Arbeit ein Ergebnis
          schaffen, auf das sowohl
          <CustomBr byViewport="desktop" /> Sie als auch wir stolz sein können. Und am Ende des
          Tages zählt für uns
          <CustomBr byViewport="desktop" /> vor allem eines: dass Sie sich in Ihrem Zuhause rundum
          wohlfühlen.
        </>
      ),
    },
  },
  kontakt: {
    hero: {
      bg: {
        src: "/imgs/kontakt/hero/bg.png",
        alt: "Hero Kontakt",
      },
      title: <>Wir sind für Sie da</>,
      description: (
        <>
          Seit 2011 stehen wir für saubere Arbeit, persönliche Beratung und kreative Lösungen –
          direkt
          <CustomBr byViewport="desktop" /> aus dem Herzen unserer Region.
        </>
      ),
      buttons: [],
      deals: false,
    },
  },
  shared: {
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
        content: (
          <>
            W&M Rüttimann GmbH
            <br /> Im Fennen 10
            <br /> 8867 Niederurnen GL
          </>
        ),
        link: "https://maps.app.goo.gl/soeRgK2iZsxgLULVA",
        embed: "https://www.google.com/maps/embed?...",
      },
    },
    navigation: [
      { title: "Home", href: "/" },
      { title: "Bauprojekte", href: "/bauprojekte/" },
      { title: "Elektro", href: "/elektro/" },
      { title: "Baushop", href: "/baushop/" },
      { title: "Über uns", href: "/uber-uns/" },
      { title: "Kontakt", href: "/kontakt/" },
    ],
    footer: {
      copyrigth: {
        text: (
          <>
            ©Copyright 2024 <b>W & M Rüttimann</b>
          </>
        ),
        fiber: (
          <>
            Mit 💚 entwickelt von <a href="https://www.fiberweb.ch/">FiberWeb.ch</a>
          </>
        ),
      },
    },
  },
};
