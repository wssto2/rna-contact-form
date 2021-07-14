<template>
    <div>
        <div class="legal-info-component">
            <div class="legal-info-label" @click="onToggle">Upoznat(a) sam s informacijama o obradi osobnih podataka od strane Renault Nissan Hrvatska.</div>
            <div class="legal-info-text-content" v-show="expanded">
                <div>
                    <div>1. Voditelj obrade podataka</div>
                    <div>
                        Renault Nissan Hrvatska d.o.o., Radnička cesta 47, 10000 Zagreb, pravna osoba koja na hrvatskom tržištu zastupa marke Renault, Dacia, Nissan i ovlašteni distributeri tih marki kod kojih se nalaze vaši podaci (popis je objavljen na <a href="https://www.nissan.hr/trgovci" target="_blank">www.nissan.hr/trgovci</a>) kao zajednički voditelji obrade podataka.
                    </div>
                </div>
                <div>
                    Za sva pitanja u vezi s obradom podataka ili vašim pravima, molimo kontaktirajte ovlaštenu osobu za zaštitu podataka: <a href="mailto:zop.nissan@nissan.hr">zop.nissan@nissan.hr</a>.
                </div>
                <div>
                    <div>2. Svrhe obrade osobnih podataka</div>
                    <div>
                        Renault Nissan Hrvatska d.o.o. sam ili izabrani ovlašteni distributer koristite vaše osobne podatke koje ste prenijeli putem ove internetske stranice u svrhu obrade vašeg zahtjeva iz ovog internetskog obrasca u roku potrebnom za izvršenje usluge. Vaši podaci mogu se koristiti za ankete o zadovoljstvu, za slanje komercijalnih ponuda za kupnju vozila i postprodajnih proizvoda, kao i za informacije o osobnim pogodnostima, događajima i drugim aktualnim vijestima.
                    </div>
                </div>
                <div>
                    <div>3. Osobni podaci</div>
                    <div>
                        Osobni podaci ime, prezime, broj telefona, e-mail adresu, označeni s (*), potrebni su za obradu vašeg zahtjeva iz ovog internetskog obrasca; ako ih ne navedete, ne možemo obraditi vaš zahtjev.
                        Osobni podaci obrađeni u svrhu slanja komercijalnih ponuda: ime, prezime, adresa, telefonski broj, e-mail adresa, socio-demografski podaci (ako je dopušteno), povijesne informacije o kupnji (ako je dopušteno).
                    </div>
                </div>
                <div>
                    <div>4. Pravna osnova</div>
                    <div>
                        Upravljanje vašim zahtjevima prema ugovornim obvezama (obrada vašeg zahtjeva navedenog u ovom obrascu), legitimnom interesu (anketa o zadovoljstvu i vašoj privoli (slanje komercijalnih ponuda).
                    </div>
                </div>
                <div>
                    <div>5. Primatelji osobnih podataka</div>
                    <div>
                        Ovlašteni trgovci koji po potrebi ispunjavaju navedene svrhe i ostale treće strane u skladu sa svojim zakonskim obvezama.
                    </div>
                </div>
                <div>
                    <div>6. Vaša prava</div>
                    <div>
                        Vašu privolu možete opozvati u svakom trenutku na način da vašu odluku pisanim ili usmenim putem priopćite ovlaštenom distributeru ili društvu Renault Nissan Hrvatska, d.o.o. na e-mail adresu: <a href="mailto:kontakt-stranke.hrvatska@nissan.hr">kontakt-stranke.hrvatska@nissan.hr</a>.
                        Imate pravo pristupa vašim osobnim podacima, ispravljanju, brisanju (osim ako je zahtjev u suprotnosti s važećim zakonom) i pravo na prigovor obradi vaših osobnih podataka, uključujući zabranu slanja obavijesti i druga prava, kako je objašnjeno u odjeljku o dodatnim informacijama (točka 8). U slučaju zloupotrebe vaših podataka, možete kontaktirati Renault Nissan Hrvatska d.o.o. na e-mail adresu: <a href="mailto:zop.nissan@nissan.hr">zop.nissan@nissan.hr</a>.
                        Imate pravo na pravnu zaštitu. Možete kontaktirati Agenciju za zaštitu osobnih podataka (AZOP).
                    </div>
                </div>
                <div>
                    <div>7. Rok za pohranjivanje vaših osobnih podataka</div>
                    <div>
                        Osobne podatke navedene u ovom zahtjevu, Renault Nissan Hrvatska d.o.o. sam ili odabrani ovlašteni trgovac koriste za obradu Vašeg zahtjeva u vrijeme koje je potrebno za obavljanje usluge i čuvaju ih najduže 3 godine. U slučaju korištenja vaših podataka za anketiranje o zadovoljstvu vaši podaci se čuvaju 1 godinu nakon završetka ove aktivnosti. U slučaju vaše pozitivne privole, vaši podaci mogu se objediniti i povezati s vašim drugim osobnim podacima koje čuvamo. Voditelj obrade prikuplja i obrađuje te osobne podatke do opoziva odnosno najviše 30 godina, u skladu s odredbama zakonodavstva o zaštiti osobnih podataka.
                    </div>
                </div>
                <div>
                    <div>8. Dodatne informacije</div>
                    <div>
                        Za više i detaljnije informacije o zaštiti vaših osobnih podataka, pogledajte našu <a href="https://www.nissan.hr/opce-zop" target="_blank">Politiku privatnosti</a>.
                    </div>
                </div>
            </div>
        </div>
        <p class="legal-info-disclamer">Obavezno pročitajte.</p>
        <template v-if="error">
            <span v-for="(err, errIndex) in error" :key="`pravne_obavijesti_error_${errIndex}`" class="error-message">{{ err }}</span>
        </template>
    </div>
</template>

<script>
export default {
    name: "LegalAccordion",

    props: {
        error: {
            type: Array
        }
    },

    data() {
        return {
            expanded: false
        }
    },

    methods: {
        onToggle() {
            this.expanded = !this.expanded;

            this.$emit('input', 1);
        }
    }
}
</script>

<style scoped>

</style>