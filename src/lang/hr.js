export default {
    fields:  {
        customer_type: {
            physical: "Fizička osoba",
            legal: "Tvrtka"
        },
        status: {
            status: "Status",
            select: "Odaberite",
            sir: "Gospodin",
            lady: "Gospođa",
            miss: "Gospođica"
        },
        name: "Ime",
        last_name: "Prezime",
        company: "Tvrtka",
        email: "E-mail",
        street: "Ulica",
        house_number: "Kućni broj",
        postal_code: "Poštanski broj",
        city: "Grad",
        telephone: "Broj telefona",
        telephone_help: "Zapišite telefonski broj bez razmaka",
        gdpr_contact_email: "E-mail",
        gdpr_contact_sms: "SMS",
        gdpr_contact_telephone: "Telefon",
        gdpr_contact_postal: "Obična pošta"
    },
    gdpr_title: "Želim primati personalizirane ponude za kupnju vozila i postprodajnih proizvoda i usluga i informacije o personaliziranim pogodnostima i događajima kao i druge aktualne vijesti od Renault Nissan Hrvatska d.o.o., koja na hrvatskom tržištu zastupa marke Renault, Dacia, Nissan i od ovlaštenih distributera tih marki, kod kojih se nalaze moji podaci.",
    submit: "Pošalji",
    validator: {
        required: "Molimo unesite :attr",
        requiredcompany: "Molimo unsite naziv tvrtke",
        email: "Provjerite jeste li unijeli ispravnu e-mail adresu",
        in: "Molimo odaberite :attr",
        requiredcontactchannel: "Molimo unesite svoj izbor",
        requiredlegalinfo: "Molimo počitajte pravne obavijesti"
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
        }
    }
}