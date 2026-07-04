export default function page() {
  return (
    <div className="px-4 sm:px-16 lg:px-32">
      <div className="pt-16 md:pt-32 lg:pt-[25dvh] pb-48">
        <h1 className="!mb-8">Impressum</h1>
        <h2>Angaben gemäß § 5 DDG</h2>
        <div className="flex flex-col">
          <span className="dark:text-white">TechTinker</span>
          <span className="dark:text-white">Inhaber: Luca Krösche</span>
          <span className="dark:text-white">Hermann-Löns-Weg 8</span>
          <span className="dark:text-white">82538 Geretsried</span>
          <span className="dark:text-white">Deutschland</span>
        </div>
        <div className="flex flex-col">
          <h2 className="mt-8">Kontakt</h2>
          <span className="dark:text-white">Telefon: +49 177 6478022</span>
          <span className="dark:text-white">
            E-Mail: techtinker.lu@gmail.com
          </span>
        </div>
        <div className="flex flex-col">
          <h2 className="mt-8">Gewerbe</h2>
          <span className="dark:text-white">
            Gewerbeanmeldung gemäß § 14 GewO, erteilt durch die Stadt
            Geretsried.
          </span>
          <span className="dark:text-white">
            3D-Druck-Dienstleistungen, CAD-Konstruktion, Herstellung
            individueller Kunststoffbauteile, Prototypenfertigung,
            Kleinserienfertigung sowie Onlinehandel.
          </span>
        </div>
        <div className="flex flex-col">
          <h2 className="mt-8">
            Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV
          </h2>
          <span className="dark:text-white">Luca Krösche</span>
          <span className="dark:text-white">Hermann-Löns-Weg 8</span>
          <span className="dark:text-white">82538 Geretsried</span>
          <span className="dark:text-white">Deutschland</span>
        </div>
        <div className="flex flex-col">
          <h2 className="mt-8">
            Zentrale Kontaktstelle nach dem Digital Services Act (DSA)
          </h2>
          <span className="dark:text-white">
            E-Mail: kroescheluca61@gmail.com
          </span>
          <span className="dark:text-white">Telefon: +49 177 6478022</span>
          <span className="dark:text-white">
            Sprachen für die Kontaktaufnahme: Deutsch, Englisch
          </span>
        </div>
        <div className="flex flex-col">
          <h2 className="mt-8">Verbraucherstreitbeilegung</h2>
          <span className="dark:text-white">
            Wir sind nicht bereit und nicht verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </span>
        </div>
        <div className="flex flex-col">
          <h2 className="mt-8">Haftung für Inhalte</h2>
          <p className="!text-black dark:text-white">
            Als Diensteanbieter sind wir gemäß den gesetzlichen Vorschriften für
            eigene Inhalte auf diesen Seiten verantwortlich.
          </p>
          <p className="!text-black dark:text-white">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
            Gewähr für die Aktualität, Vollständigkeit oder Richtigkeit der
            bereitgestellten Inhalte.
          </p>
          <p className="!text-black dark:text-white">
            Sobald uns Rechtsverletzungen bekannt werden, entfernen wir die
            entsprechenden Inhalte unverzüglich.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="mt-8">Haftung für Links</h2>
          <p className="!text-black dark:text-white">
            Unsere Website enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben.
          </p>
          <p className="!text-black dark:text-white">
            Für die Inhalte der verlinkten Seiten ist ausschließlich der
            jeweilige Betreiber verantwortlich.
          </p>
          <p className="!text-black dark:text-white">
            Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte
            erkennbar. Eine permanente Kontrolle der verlinkten Seiten ist ohne
            konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
          </p>
          <p className="!text-black dark:text-white">
            Bei Bekanntwerden von Rechtsverletzungen werden entsprechende Links
            umgehend entfernt.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="mt-8">Urheberrecht</h2>
          <p className="!text-black dark:text-white">
            Die auf dieser Website veröffentlichten Inhalte, Bilder, Grafiken
            und Werke unterliegen dem deutschen Urheberrecht.
          </p>
          <p className="!text-black dark:text-white">
            Eine Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der
            gesetzlichen Grenzen des Urheberrechts bedarf der vorherigen
            schriftlichen Zustimmung des jeweiligen Rechteinhabers.
          </p>
          <p className="!text-black dark:text-white">
            Sollten Sie auf eine mögliche Urheberrechtsverletzung aufmerksam
            werden, bitten wir um einen entsprechenden Hinweis. Entsprechende
            Inhalte werden nach Bekanntwerden unverzüglich entfernt.
          </p>
        </div>
      </div>
    </div>
  );
}
