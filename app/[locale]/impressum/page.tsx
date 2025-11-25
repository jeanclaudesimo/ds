"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ImpressumPage() {
  return (
    <div className="bg-black pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Impressum</h1>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="mb-2">
                <strong>Digitalssolutions</strong>
                <br />
                Claude Simo
                <br />
                Gummersbach, Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Kontakt</h2>
              <p>
                <strong>Telefon:</strong>{" "}
                <a
                  href="tel:+491796627473"
                  className="text-blue-400 hover:text-blue-300"
                >
                  +49 179 6627473
                </a>
                <br />
                <strong>E-Mail:</strong>{" "}
                <a
                  href="mailto:contact@digitalssolutions.de"
                  className="text-blue-400 hover:text-blue-300"
                >
                  contact@digitalssolutions.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
                <br />
                <em className="text-gray-400">
                  212/5233/3978
                </em>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                Claude Simo
                <br />
                Gummersbach, Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                Haftungsausschluss
              </h2>

              <h3 className="text-xl font-semibold mb-2 text-white mt-4">
                Haftung für Inhalte
              </h3>
              <p className="mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p className="mb-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white mt-4">
                Haftung für Links
              </h3>
              <p className="mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white mt-4">
                Urheberrecht
              </h3>
              <p className="mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                EU-Streitschlichtung
              </h2>
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-800">
            <Link
              href="/"
              className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
