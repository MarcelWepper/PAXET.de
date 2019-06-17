import React from "react";
import LazyHero from "react-lazy-hero";
import "./Home.css";
import Picture from "./Pics/Kontakt.jpg";
import { connect } from "react-redux";

class Impressum extends React.Component {
  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.props.dispatch({ type: "NAVCHANGE" });
  }

  render() {
    return (
      <div class>
        <LazyHero
          color="#000000"
          parallaxOffset="100"
          minHeight="100vh"
          opacity="0.5"
          imageSrc={Picture}
        >
          <div className="HeroText">
            <h1> Impressum</h1>{" "}
          </div>
        </LazyHero>
        <div className="KontaktText">
          <h2>Impressum</h2>
          <p>Marcel-Rene Wepper</p>
          <p>Eckenbertstraße 49</p>
          <p>67549 Worms</p>

          <p>Telefon: +4915733234357</p>
          <p>E-Mail: marcelwepper@gmail.com</p>

          <h2>Hinweis gemäß Online-Streitbeilegungs-Verordnung</h2>
          <p>
            Nach geltendem Recht sind wir verpflichtet, Verbraucher auf die
            Existenz der Europäischen Online-Streitbeilegungs-Plattform
            hinzuweisen, die für die Beilegung von Streitigkeiten genutzt werden
            kann, ohne dass ein Gericht eingeschaltet werden muss. Für die
            Einrichtung der Plattform ist die Europäische Kommission zuständig.
            Die Europäische Online-Streitbeilegungs-Plattform ist hier zu
            finden: http://ec.europa.eu/odr. Unsere E-Mail lautet:
            marcelwepper@gmail.com
          </p>

          <p>
            Wir weisen aber darauf hin, dass wir nicht bereit sind, uns am
            Streitbeilegungsverfahren im Rahmen der Europäischen
            Online-Streitbeilegungs-Plattform zu beteiligen. Nutzen Sie zur
            Kontaktaufnahme bitte unsere obige E-Mail und Telefonnummer.
          </p>

          <h2>Disclaimer – rechtliche Hinweise</h2>
          <h2>§ 1 Warnhinweis zu Inhalten</h2>
          <p>
            Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden
            mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite
            übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der
            bereitgestellten kostenlosen und frei zugänglichen journalistischen
            Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben
            die Meinung des jeweiligen Autors und nicht immer die Meinung des
            Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei
            zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem
            Nutzer und dem Anbieter zustande, insoweit fehlt es am
            Rechtsbindungswillen des Anbieters.
          </p>

          <h2>§ 2 Externe Links</h2>
          <p>
            Diese Website enthält Verknüpfungen zu Websites Dritter ("externe
            Links"). Diese Websites unterliegen der Haftung der jeweiligen
            Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der
            externen Links die fremden Inhalte daraufhin überprüft, ob etwaige
            Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße
            ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle
            und zukünftige Gestaltung und auf die Inhalte der verknüpften
            Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der
            Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen
            macht. Eine ständige Kontrolle der externen Links ist für den
            Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar.
            Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe
            Links unverzüglich gelöscht.
          </p>

          <h2>§ 3 Urheber- und Leistungsschutzrechte</h2>
          <p>
            Die auf dieser Website veröffentlichten Inhalte unterliegen dem
            deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen
            Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung
            bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder
            jeweiligen Rechteinhabers. Dies gilt insbesondere für
            Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung,
            Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder
            anderen elektronischen Medien und Systemen. Inhalte und Rechte
            Dritter sind dabei als solche gekennzeichnet. Die unerlaubte
            Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter
            Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung
            von Kopien und Downloads für den persönlichen, privaten und nicht
            kommerziellen Gebrauch ist erlaubt.
          </p>

          <p>
            Die Darstellung dieser Website in fremden Frames ist nur mit
            schriftlicher Erlaubnis zulässig.
          </p>

          <h2>§ 4 Besondere Nutzungsbedingungen</h2>
          <p>
            Soweit besondere Bedingungen für einzelne Nutzungen dieser Website
            von den vorgenannten Paragraphen abweichen, wird an entsprechender
            Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im
            jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
          </p>
        </div>
      </div>
    );
  }
}
export default connect()(Impressum);
