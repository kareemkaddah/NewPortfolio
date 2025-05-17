import React, { useEffect } from 'react';
import './Datenschutz.css';

const Datenschutz: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='page-container'>
      <main className='main-content'>
        <div className='privacy-policy'>
          <h2>Datenschutzerklärung</h2>

          <h3>1. Allgemeine Hinweise</h3>
          <p>
            Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen.
            Diese Datenschutzerklärung informiert Sie darüber, welche Daten beim
            Besuch dieser Website erhoben werden und wie sie verwendet werden –
            gemäß der Datenschutz-Grundverordnung (DSGVO).
          </p>

          <h3>2. Verantwortliche Stelle</h3>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            Kareem Kaddah
            <br />
            E-Mail: <a href='mailto:kontakt@kaddah.de'>kontakt@kaddah.de</a>
          </p>

          <h3>3. Erhebung und Speicherung personenbezogener Daten</h3>
          <p>
            Beim Aufrufen dieser Website werden automatisch Informationen durch
            den Hosting-Provider (IONOS) erhoben und in sogenannten
            Server-Logfiles gespeichert. Dazu gehören:
          </p>
          <ul>
            <li>IP-Adresse des anfragenden Geräts</li>
            <li>Browsertyp und -version</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer-URL</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
          </ul>
          <p>
            Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis
            des berechtigten Interesses an der sicheren und stabilen
            Bereitstellung der Website. Die Logfiles werden nach 7 Tagen
            automatisch gelöscht.
          </p>

          <h3>4. Cookies und Tracking</h3>
          <p>
            Diese Website verwendet keine Cookies, Analyse-Tools oder sonstige
            Tracking-Technologien.
          </p>

          <h3>5. Externe Links</h3>
          <p>
            Diese Website enthält Verlinkungen zu externen Websites von Partnern
            oder Kunden. Für deren Inhalte und Datenschutzpraktiken wird keine
            Verantwortung übernommen.
          </p>

          <h3>6. Ihre Rechte</h3>
          <p>Sie haben jederzeit das Recht auf:</p>
          <ul>
            <li>Auskunft über Ihre gespeicherten Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>
              Löschung Ihrer Daten (sofern keine gesetzliche
              Aufbewahrungspflicht besteht)
            </li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Widerspruch gegen die Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
          </ul>
          <p>
            Bitte richten Sie Anfragen per E-Mail an:{' '}
            <a href='mailto:kontakt@kaddah.de'>kontakt@kaddah.de</a>
          </p>

          <h3>7. Änderungen dieser Datenschutzerklärung</h3>
          <p>
            Diese Datenschutzerklärung kann bei Bedarf angepasst werden, z.B.
            bei rechtlichen Änderungen oder Weiterentwicklung der Website. Die
            jeweils aktuelle Version finden Sie stets auf dieser Seite.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Datenschutz;
