"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <div className="bg-black pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                1. Datenschutz auf einen Blick
              </h2>

              <h3 className="text-xl font-semibold mb-2 text-white mt-4">
                Allgemeine Hinweise
              </h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white mt-4">
                Datenerfassung auf dieser Website
              </h3>
              <p className="mb-4">
                <strong>
                  Wer ist verantwortlich für die Datenerfassung auf dieser
                  Website?
                </strong>
                <br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
                dieser Website entnehmen.
              </p>

              <p className="mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong>
                <br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben. Andere Daten werden automatisch
                beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                sind vor allem technische Daten (z. B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>

              <p className="mb-4">
                <strong>Wofür nutzen wir Ihre Daten?</strong>
                <br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gewährleisten. Andere Daten können
                zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <p className="mb-4">
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
                <br />
                Sie haben jederzeit das Recht unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                2. Hosting
              </h2>
              <p className="mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Externes Hosting
              </h3>
              <p className="mb-4">
                Diese Website wird extern gehostet. Die personenbezogenen Daten,
                die auf dieser Website erfasst werden, werden auf den Servern
                des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a.
                um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
                Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
                Daten, die über eine Website generiert werden, handeln.
              </p>
              <p className="mb-4">
                Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
                gegenüber unseren potenziellen und bestehenden Kunden (Art. 6
                Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
                und effizienten Bereitstellung unseres Online-Angebots durch
                einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="text-xl font-semibold mb-2 text-white mt-4">
                Datenschutz
              </h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend der gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white mt-4">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p className="mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
                <br />
                <br />
                Claude Simo
                <br />
                Digitalssolutions
                <br />
                Gummersbach, Deutschland
                <br />
                <br />
                Telefon: +49 179 6627473
                <br />
                E-Mail: contact@digitalssolutions.com
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white mt-4">
                Speicherdauer
              </h3>
              <p className="mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white mt-4">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p className="mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                ausdrücklichen Einwilligung möglich. Sie können eine bereits
                erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                Widerruf unberührt.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white mt-4">
                Recht auf Datenübertragbarkeit
              </h3>
              <p className="mb-4">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erfüllung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem gängigen,
                maschinenlesbaren Format aushändigen zu lassen.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white mt-4">
                Auskunft, Löschung und Berichtigung
              </h3>
              <p className="mb-4">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
                auf Berichtigung oder Löschung dieser Daten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                4. Datenerfassung auf dieser Website
              </h2>

              <h3 className="text-xl font-semibold mb-2 text-white mt-4">
                Cookies
              </h3>
              <p className="mb-4">
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies
                sind kleine Textdateien und richten auf Ihrem Endgerät keinen
                Schaden an. Sie werden entweder vorübergehend für die Dauer
                einer Sitzung (Session-Cookies) oder dauerhaft (permanente
                Cookies) auf Ihrem Endgerät gespeichert.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white mt-4">
                Kontaktformular
              </h3>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white mt-4">
                Anfrage per E-Mail, Telefon oder WhatsApp
              </h3>
              <p className="mb-4">
                Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren,
                wird Ihre Anfrage inklusive aller daraus hervorgehenden
                personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                5. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p className="mb-4">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte eine SSL- bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
                daran, dass die Adresszeile des Browsers von „http://" auf
                „https://" wechselt und an dem Schloss-Symbol in Ihrer
                Browserzeile.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                6. Ihre Rechte
              </h2>
              <p className="mb-4">
                Sie haben folgende Rechte:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                <li>
                  Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77
                  DSGVO)
                </li>
              </ul>
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
