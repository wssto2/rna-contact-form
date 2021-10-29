export default {
    selected_vehicle: "Odabrano vozilo",
    selected_concessionaire: "Odabrani koncesionar",
    gearbox: "Mjenjač",
    exterior_color: "Boja",
    fields:  {
        customer_type: {
            physical: "Fizička osoba",
            legal: "Tvrtka",
            legal_renault: "Pravna osoba"
        },
        status: {
            status: "Oslovljavanje",
            select: "Izaberite",
            sir: "Gdin",
            lady: "Gdja",
            miss: "Gospođica"
        },
        name: "Ime",
        last_name: "Prezime",
        company: "Kompanija",
        email: "E-mail adresa",
        street: "Ulica",
        house_number: "Kućni broj",
        postal_code: "Poštanski broj",
        city: "Grad",
        telephone: "Mobilni telefon",
        telephone_help: "Zapišite telefonski broj bez razmaka",
        gdpr_contact_email: "E-pošta",
        gdpr_contact_sms: "SMS",
        gdpr_contact_telephone: "Telefon",
        gdpr_contact_postal: "Obična pošta",
        message: "Poruka"
    },
    gdpr_title: "Predajom ličnih podataka dopuštam društvu Renault Nissan Slovenija ili njegovom odabranom ovlašćenom trgovcu Renault da upotrebljava lične podatke navedene u prethodnom obrascu za potrebe izvršenja usluge u vremenskom razdoblju potrebnom za izvođenje iste, odnosno najduže tri godine.<br><br>Vođenje, kontrola i upravljanje bazom podataka o ličnosti kao i posredovanje podataka trećim licima precizno određuje Pravilnik ZLP kompanije Renault Nissan Slovenija i Katalog podataka o ličnosti, kojim upravlja Renault Nissan Slovenija. Više o opštim informacijama o zaštiti ličnih podataka mogu da pročitam ovdje. U slučaju zloupotrebe mojih podataka mogu da se obratim Renault Nissan Sloveniji na e-adresu: <a href='mailto:alliance@renault.me'>alliance@renault.me</a>.<br><br>Dozvoljavam da me Renault Nissan Slovenija i izabrani ovlaščeni distributer Renault obavještavaju na izabrane načine koje ću označiti ispod.",
    legal_disclaimer_title: "Pravna poruka",
    legal_disclaimer_content_renault: "<div>Moja saglasnost za obavještavanje se odnosi na ovo potraživanje i nije vezana za druge sisteme u kojima se mogu nalaziti moji lični podaci.</div><div>Svoju saglasnost mogu da otkažem u bilo kom trenutku tako što svoju odluku pisano ili usmeno saopštim ovlašćenom distributeru Renault ili kompaniji Renault Nissan Slovenija, na e-adresu: <a href=\"mailto:alliance@renault.me\">alliance@renault.me</a>.</div><div>Za podatke, koje sam dostavio(la) rukovaocu podataka, mogu da zahtjevam: ispravku podataka, brisanje podataka (osim ako je zahtjev u suprotnosti sa važećim zakonom), uvid u podatke i izvor podataka kao i ograničenje upotrebe podataka. Rukovalac moje lične podatke prikuplja i obrađuje do opoziva, ili najduže 30 godina, u skladu sa odredbama zakona o zaštiti podataka o ličnosti. Vođenje, kontrola i upravljanje bazom podataka ličnosti kao i posredovanje podataka trećim licima precizno određuje Pravilnik ZLP kompanije Renault Nissan Slovenije i Katalog podataka o ličnosti, kojima upravlja Renault Nissan Slovenija. Više o opštim informacijama o zaštiti ličnih podataka mogu da pročitam <a href=\"http://www.renault.me/opste-zlp.html\" target=\"_blank\">ovdje</a>. U slučaju zloupotrebe mojih podataka mogu da se obratim kompaniji Renault Nissan Slovenija na e-adresu: <a href=\"mailto:alliance@renault.me\">alliance@renault.me</a>.</div>",
    legal_disclaimer_hint: "Obavezno pročitajte.",
    submit: "Pošalji",
    validator: {
        status: 'Molimo da odaberete svoj status.',
        ime: 'Molimo da unesete svoje ime.',
        prezime: 'Molimo da unesete svoje prezime.',
        tvrtka: 'Molimo da unesete svoju tvrtku.',
        email: 'Molimo da unesete svoj e-mail.',
        ulica: 'Molimo da unesete svoju ulicu.',
        kbr: 'Molimo da unesete svoj kućni broj.',
        pb: 'Molimo da unesete svoj poštanski broj.',
        mjesto: 'Molimo da unesete svoj grad.',
        tel: 'Molimo da unesete svoj broj telefona.',
        kontakt_kanal_email: 'Molimo da unesite svoj odabir.',
        procitane_pravne_obavijesti: 'Molimo da pročitate pravne obavijesti.'
    },
    messages: {
        success: {
            title_new_vehicle: 'Hvala Vam za upit o vozilu sa zalihe',
            title_used_vehicle: 'Hvala Vam za upit o rabljenom vozilu',
            description_new_vehicle: 'Hvala. Va&scaron; upit je proslije&#273;en odabranom ovla&scaron;tenom koncesionaru. Kontaktirat &#263;e Vas u najkra&#263;em mogu&#263;em roku.',
            description_used_vehicle: 'Hvala. Va&scaron; upit je proslije&#273;en odabranom ovla&scaron;tenom koncesionaru. Kontaktirat &#263;e Vas u najkra&#263;em mogu&#263;em roku.'
        },
        error: {
            title_new_vehicle: 'Upit o vozilu sa zalihe nije poslan',
            title_used_vehicle: 'Upit o rabljenom vozilu nije poslan',
            description_new_vehicle: 'Do&scaron;lo je do pogre&scaron;ke prilikom slanja e-maila. Molimo Vas da poku&scaron;ate ponovo popuniti formu na stranici: <a href="javascript:location.reload();">Kupnja vozila sa zalihe</a>.',
            description_used_vehicle: 'Do&scaron;lo je do pogre&scaron;ke prilikom slanja e-maila. Molimo Vas da poku&scaron;ate ponovo popuniti formu na stranici: <a href="javascript:location.reload();">Kupnja rabljenog vozila</a>.'
        },
        vehicle_not_found: {
            title: 'Vozilo ne postoji',
            description: 'Vozilo koje ste tražili ne postoji.'
        }
    }
}