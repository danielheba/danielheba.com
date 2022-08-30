import React from "react";
import './Stack.css';

import walentynkiJPG from './images/walentynkiZSEA.jpg';
import danielhebaJPG from './images/danielheba-software.jpg';
import rekrutacjaSokratesJPG from './images/rekrutacjaSokrates.jpg';
import mmMaturaJPG from './images/miedzynarodowamatura.jpg';


const Stack = () => (
<section id="portfolio" className="portfolio py-5">
        <div className="container py-5">
          <p className="h2 mb-0">Stack technologiczny (przykłady zastosowań):</p>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
            <div className="col">
              <div className="card h-100">
                <img src={danielhebaJPG} className="card-img-top" alt="Screen projektu akad software" />
                <div className="card-body">
                  <h4 className="card-title"><b>Własne strony internetowe</b> - informacyjne wizytówki zachęcające Państwa do kontaktu</h4>
                  <p className="text-end mb-5 mt-3 me-3">Zobacz w: <a href="https://github.com/danielheba/akad-software" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></p>
                  <p className="card-text">Zastosowano:<ul><li>React: JSX, CRA, RRD v.6</li><li>CSS v.3, Bootstrap v.5</li></ul></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={danielhebaJPG} className="card-img-top" alt="Screen projektu addStudents" />
                <div className="card-body">
                  <h5 className="card-title">addStudnets (na produkcji)</h5>
                  <p className="card-text">Aplikacja mobilna generująca listy lub tworząca pliki CSV służąca do dodania wielu użytkowników do systemu Microsoft 365. Pomocne szczególnie podczas rozpoczynania pracy zdalnej w firmach lub edukacji zdalnej w szkołach.</p>
                  <p className="card-text">W użyciu:<ul><li>HTML 5</li><li>CSS 3</li><li>Bootstrap 5</li><li>JavaScript</li></ul></p>
                  <p>Dostępna również bliźniacza aplikacja desktopowa napisana w Java 8.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={danielhebaJPG} className="card-img-top" alt="Screen projektu theGift" />
                <div className="card-body">
                  <h5 className="card-title">theGift (na produkcji)</h5>
                  <p className="card-text">Aplikacja mobilna pomoca w przy dokonywaniu zakupów przezentów. Szczegóły - już wkrótce.</p>
                  <p className="card-text">W użyciu:<ul><li>HTML 5</li><li>CSS 3</li><li>Bootstrap 5</li><li>JavaScript</li><li>PHP</li><li>MySQLi</li></ul></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={walentynkiJPG} className="card-img-top" alt="Screen strony walentynki ZSEA" />
                <div className="card-body">
                  <h4 className="card-title"><b>Serwis walentynkowy</b> - projekt zajęć informatycznych</h4>
                  <p className="text-end mb-5 mt-3 me-3">Zobacz w: <a href="https://github.com/danielheba/ZSEA-Walentynki" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></p>
                  <p className="card-text">Rezultat warsztatów informatycznych z zakresu frontendu dla uczniów Zespołu Szkół Ekonomiczno-Administracyjnych w Bydgoszczy. 
                    Projekt tworzy stony walentynkowe i wysyła powadomienie administratorowi oraz pozwala wygenerować -stronę adresatowi.</p>
                  <p className="card-text">Zastosowano:<ul><li>HTML</li><li>CSS</li><li>Javascipt / AJAX / JSON</li><li>PHP</li></ul></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={mmMaturaJPG} className="card-img-top" alt="Screen ze strony Międzynarodowa" />
                <div className="card-body">
                  <h4 className="card-title"><b>Komercyjny serwis internetowy</b> dla klienta zewnętrznego</h4>
                  <p className="text-end mb-5 mt-3 me-3">Zobacz w: <a href="http://miedzynarodowamatura.pl/" target="_blank" rel="noreferrer"><i className="fab fa-internet-explorer"></i></a></p>
                  <p className="card-text">Serwis internetowy dla klienta zewnętrznego propagujący edukację za granicą.</p>
                  <p className="card-text">Zastosowano:<ul><li>CMS (Wordpress / Elementor)</li><li>HTML</li><li>CSS</li><li>Javascipt</li><li>PHP</li></ul></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={rekrutacjaSokratesJPG} className="card-img-top" alt="Screen rekrutacji online TM Toruń" />
                <div className="card-body">
                  <h4 className="card-title"><b>Skrypt aplikacji</b> dla klienta zewnętrznego</h4>
                  <p className="text-end mb-5 mt-3 me-3">Zobacz w: <a href="https://technikummenedzerskie.pl/rekrutacja/" target="_blank" rel="noreferrer"><i className="fab fa-internet-explorer"></i></a></p>
                  <p className="card-text">Oprogramowanie formularza rekrutacji uczniów dla sieci szkół w woj. kujawsko-pomorskim. Link stanowi przykład zastsowania skryptu użytego w kilku szkołach klienta.</p>
                  <p className="card-text">Zastosowano:<ul><li>CMS (Wordpress / Jupiter X)</li><li>HTML</li><li>CSS</li><li>Javascipt / jQuery</li><li>PHP</li></ul></p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

);

export default Stack;