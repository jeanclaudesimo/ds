"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AGBPage() {
  return (
    <div className="bg-black pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                1. Geltungsbereich
              </h2>
              <p className="mb-4">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
                Verträge über Dienstleistungen, die zwischen DigitalSolutions
                (Claude Simo) und dem Auftraggeber geschlossen werden.
              </p>
              <p className="mb-4">
                Abweichende Bedingungen des Auftraggebers werden nicht
                anerkannt, es sei denn, ihrer Geltung wird ausdrücklich
                schriftlich zugestimmt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                2. Vertragsschluss
              </h2>
              <p className="mb-4">
                Die Darstellung der Leistungen stellt kein rechtlich bindendes
                Angebot, sondern eine Aufforderung zur Bestellung dar. Durch die
                Bestellung der Leistungen gibt der Kunde ein verbindliches
                Angebot zum Abschluss eines Vertrages ab.
              </p>
              <p className="mb-4">
                Der Vertrag kommt durch unsere schriftliche Auftragsbestätigung
                oder durch Erbringung der Leistung zustande.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                3. Leistungsumfang
              </h2>
              <p className="mb-4">
                Der Umfang der zu erbringenden Leistungen ergibt sich aus der
                Leistungsbeschreibung im jeweiligen Angebot. Alle Leistungen
                werden nach bestem Wissen und Gewissen ausgeführt.
              </p>
              <p className="mb-4">
                Änderungswünsche des Auftraggebers nach Auftragserteilung können
                zu Mehrkosten und Terminverschiebungen führen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                4. Preise und Zahlungsbedingungen
              </h2>
              <p className="mb-4">
                Es gelten die zum Zeitpunkt der Bestellung angegebenen Preise.
                Alle Preise verstehen sich zzgl. der gesetzlichen
                Mehrwertsteuer.
              </p>
              <p className="mb-4">
                <strong>Zahlungsbedingungen:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  Bei Projekten bis 5.000€: 50% Anzahlung bei
                  Auftragserteilung, 50% bei Fertigstellung
                </li>
                <li>
                  Bei Projekten über 5.000€: 30% Anzahlung, 40% nach Hälfte
                  der Projektzeit, 30% bei Fertigstellung
                </li>
                <li>Zahlungsziel: 14 Tage nach Rechnungsstellung</li>
              </ul>
              <p className="mb-4">
                Bei Zahlungsverzug werden Verzugszinsen in Höhe von 5
                Prozentpunkten über dem Basiszinssatz berechnet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                5. Leistungsfristen
              </h2>
              <p className="mb-4">
                Leistungsfristen sind nur dann verbindlich, wenn sie
                ausdrücklich als verbindlich vereinbart wurden. Die Einhaltung
                der Fristen setzt die rechtzeitige Mitwirkung des Auftraggebers
                voraus.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                6. Mitwirkungspflichten des Auftraggebers
              </h2>
              <p className="mb-4">Der Auftraggeber verpflichtet sich:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  Alle erforderlichen Informationen, Materialien und Zugänge
                  rechtzeitig bereitzustellen
                </li>
                <li>
                  Ansprechpartner zu benennen und erreichbar zu halten
                </li>
                <li>
                  Feedback und Freigaben innerhalb angemessener Fristen zu
                  erteilen
                </li>
                <li>
                  Die Rechte an bereitgestellten Materialien (Texte, Bilder,
                  Logos) zu besitzen
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                7. Urheberrecht und Nutzungsrechte
              </h2>
              <p className="mb-4">
                Alle Urheberrechte an den erstellten Werken verbleiben bei
                DigitalSolutions, bis die vollständige Bezahlung erfolgt ist.
                Nach vollständiger Bezahlung erhält der Auftraggeber ein
                zeitlich und räumlich unbegrenztes Nutzungsrecht.
              </p>
              <p className="mb-4">
                DigitalSolutions behält sich das Recht vor, die erstellten
                Arbeiten zu Referenzzwecken zu verwenden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                8. Gewährleistung
              </h2>
              <p className="mb-4">
                Es wird gewährleistet, dass die erbrachten Leistungen zum
                Zeitpunkt der Abnahme die vereinbarte Beschaffenheit aufweisen.
                Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme.
              </p>
              <p className="mb-4">
                Mängel sind unverzüglich schriftlich anzuzeigen. Bei
                berechtigten Mängelrügen erfolgt nach unserer Wahl Nachbesserung
                oder Neulieferung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                9. Haftung
              </h2>
              <p className="mb-4">
                Für Schäden, die durch leichte Fahrlässigkeit verursacht werden,
                wird nicht gehaftet, außer bei Verletzung vertragswesentlicher
                Pflichten. Die Haftung ist in diesem Fall auf den
                vertragstypischen, vorhersehbaren Schaden begrenzt.
              </p>
              <p className="mb-4">
                Die Haftungsbeschränkung gilt nicht bei Verletzung von Leben,
                Körper oder Gesundheit oder bei arglistigem Verschweigen eines
                Mangels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                10. Vertraulichkeit
              </h2>
              <p className="mb-4">
                Beide Vertragsparteien verpflichten sich, alle im Rahmen der
                Zusammenarbeit erlangten vertraulichen Informationen streng
                vertraulich zu behandeln.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                11. Kündigung
              </h2>
              <p className="mb-4">
                Beide Vertragsparteien können den Vertrag aus wichtigem Grund
                außerordentlich kündigen. Ein wichtiger Grund liegt
                insbesondere vor bei:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Zahlungsverzug von mehr als 30 Tagen</li>
                <li>Schwerwiegender Verletzung vertraglicher Pflichten</li>
                <li>Insolvenz der anderen Vertragspartei</li>
              </ul>
              <p className="mb-4">
                Bei Kündigung durch den Auftraggeber ohne wichtigen Grund sind
                bereits erbrachte Leistungen zu vergüten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                12. Schlussbestimmungen
              </h2>
              <p className="mb-4">
                Es gilt das Recht der Bundesrepublik Deutschland unter
                Ausschluss des UN-Kaufrechts.
              </p>
              <p className="mb-4">
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
                werden, bleibt die Wirksamkeit der übrigen Bestimmungen
                unberührt.
              </p>
              <p className="mb-4">
                Erfüllungsort und Gerichtsstand ist Gummersbach, sofern der
                Auftraggeber Kaufmann, juristische Person des öffentlichen
                Rechts oder öffentlich-rechtliches Sondervermögen ist.
              </p>
            </section>

            <section className="mt-12 p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <p className="text-sm">
                <strong className="text-white">Stand:</strong> Januar 2025
                <br />
                <strong className="text-white">Kontakt:</strong>{" "}
                contact@digitalssolutions.com
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
