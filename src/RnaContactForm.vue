<template>
    <div id="rna-contact-form" :class="[brand]">
        <div class="c_056">
            <form method="post" class="customer-details-content" novalidate @change.passive="onFormChange" @submit.prevent="onSubmit">
                <!-- Vrsta korisnika -->
                <CustomerType
                    :physical-label="trans('fields.customer_type.physical')"
                    :legal-label="trans('fields.customer_type.legal')"
                    v-model="form.pravna_osoba" />

                <!-- Titula korisnika -->
                <SelectField
                    :label="trans('fields.status.status')"
                    name="status"
                    :options="statusOptions"
                    v-model="form.status"
                    required
                    :error="getFieldError('status')" />

                <!-- Ime -->
                <TextField
                    :label="trans('fields.name')"
                    name="ime"
                    v-model="form.ime"
                    required
                    :error="getFieldError('ime')" />

                <!-- Prezime -->
                <TextField
                    :label="trans('fields.last_name')"
                    name="prezime"
                    v-model="form.prezime"
                    required
                    :error="getFieldError('prezime')" />

                <!-- Tvrtka -->
                <TextField
                    v-show="Number(form.pravna_osoba) === 1"
                    :label="trans('fields.company')"
                    name="tvrtka"
                    v-model="form.tvrtka"
                    required
                    :error="getFieldError('tvrtka')" />

                <!-- Email -->
                <TextField
                    :label="trans('fields.email')"
                    name="email"
                    v-model="form.email"
                    required
                    :error="getFieldError('email')" />

                <!-- Ulica -->
                <TextField
                    :label="trans('fields.street')"
                    name="ulica"
                    v-model="form.ulica"
                    :error="getFieldError('ulica')" />

                <!-- Kucni broj -->
                <TextField
                    :label="trans('fields.house_number')"
                    name="kbr"
                    v-model="form.kbr"
                    :error="getFieldError('kbr')" />

                <!-- Postanski broj -->
                <TextField
                    :label="trans('fields.postal_code')"
                    name="pb"
                    v-model="form.pb"
                    :error="getFieldError('pb')" />

                <!-- Grad -->
                <TextField
                    :label="trans('fields.city')"
                    name="mjesto"
                    v-model="form.mjesto"
                    :error="getFieldError('mjesto')" />

                <!-- Broj telefona -->
                <TextField
                    :label="trans('fields.telephone')"
                    name="tel"
                    :help="trans('fields.telephone_help')"
                    v-model="form.tel"
                    :error="getFieldError('tel')" />

                <!-- GDPR -->
                <div class="gdpr section">
                    <p>{{ trans('gdpr_title') }}</p>

                    <!-- GDPR: Email -->
                    <GdprRadio
                        :label="trans('fields.gdpr_contact_email')"
                        name="kontakt_kanal_email"
                        v-model="form.kontakt_kanal_email"
                        :error="getFieldError('kontakt_kanal_email')" />

                    <!-- GDPR: SMS -->
                    <GdprRadio
                        :label="trans('fields.gdpr_contact_sms')"
                        name="kontakt_kanal_sms"
                        v-model="form.kontakt_kanal_sms"
                        :error="getFieldError('kontakt_kanal_sms')" />

                    <!-- GDPR: Telefon -->
                    <GdprRadio
                        :label="trans('fields.gdpr_contact_telephone')"
                        name="kontakt_kanal_telefon"
                        v-model="form.kontakt_kanal_telefon"
                        :error="getFieldError('kontakt_kanal_telefon')" />

                    <!-- GDPR: Obicna posta -->
                    <GdprRadio
                        :label="trans('fields.gdpr_contact_postal')"
                        name="kontakt_kanal_posta"
                        v-model="form.kontakt_kanal_posta"
                        :error="getFieldError('kontakt_kanal_posta')" />
                </div>

                <LegalAccordion
                    v-model="form.procitane_pravne_obavijesti"
                    :error="getFieldError('procitane_pravne_obavijesti')" />

                <div class="submit-form">
                    <button autocomplete="off" type="submit" class="submit-form-button">{{ trans('submit') }}</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import TextField from "./components/TextField.vue";
import SelectField from "./components/SelectField.vue";
import GdprRadio from "./components/GdprRadio.vue";
import CustomerType from "./components/CustomerType.vue";
import LegalAccordion from "./components/LegalAccordion.vue";

import './assets/css/fonts.css';
import './assets/css/base.css';

export default {
    name: 'RnaContactForm',

    props: {
        brand: {
            type: String,
            default: 'nissan',
            required: true
        },

        country: {
            type: String,
            default: 'hr',
            required: true
        },

        source: {
            type: String,
            default: 'NV',
            required: true
        },

        bir: {
            type: [String, Number],
            required: true
        },

        vehicleId: {
            type: [String, Number],
            required: true
        },

        newVehicle: {
            type: Boolean,
            default: false
        }
    },

    components: {
        LegalAccordion,
        CustomerType,
        GdprRadio,
        SelectField,
        TextField
    },

    created() {
        if (this.isCountryValid()) {
            this.i18n = require(`./lang/${this.country}`).default;
        } else {
            throw `Unknown country ${this.country}`;
        }

        this.form.odakle = this.source;
        this.form.marka = this.brand;
        this.form.rvBIR = this.bir;
        this.form.rvID = this.vehicleId;
        this.form.novo_vozilo = this.newVehicle;

        this.resolveEndpoints();
    },

    data() {
        return {
            i18n: {},
            allowedCountries: ['hr', 'si', 'rs', 'ba', 'me'],
            isValidated: false,
            validatorErrors: [],
            gdprScreenshotEndpoint: null,
            submitEndpoint: null,
            screenshotTest: true,

            form: {
                isVehicleLagerForm: false,
                forma_ver: 4,
                odakle: 'RV',
                marka: null,
                rvBIR: null,
                rvID: null,
                pdf_url: null,
                novo_vozilo: 0,
                sto2_user_id: 0,

                trazeni_model: null,
                pravna_osoba: 0,
                status: 0,
                ime: null,
                prezime: null,
                tvrtka: null,
                email: null,
                tel: null,
                ulica: null,
                kbr: null,
                pb: null,
                mjesto: null,
                poruka: null,
                kontakt_kanal_email: null,
                kontakt_kanal_telefon: null,
                kontakt_kanal_sms: null,
                kontakt_kanal_posta: null,
                procitane_pravne_obavijesti: null,
                koncesionari_id: 0
            }
        }
    },

    computed: {
        statusOptions() {
            return [
                { id: 0, name: this.trans('fields.status.select') },
                { id: 1, name: this.trans('fields.status.sir') },
                { id: 2, name: this.trans('fields.status.lady') },
                //{ id: 3, name: this.trans('fields.status.miss') }
            ];
        },

        errorMessages() {
            return {
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
            }
        },

        isTelephoneChannelSelected() {
            return !!this.form.kontakt_kanal_telefon;
        },

        isSmsChannelSelected() {
            return !!this.form.kontakt_kanal_sms;
        },

        isMailChannelSelected() {
            return !!this.form.kontakt_kanal_posta;
        },

        requiredFields() {
            let requiredFields = ['status', 'ime', 'prezime', 'email', 'kontakt_kanal_email', 'procitane_pravne_obavijesti'];

            if (this.form.pravna_osoba) {
                requiredFields.push('tvrtka');
            }

            if (this.isTelephoneChannelSelected || this.isSmsChannelSelected) {
                requiredFields.push('tel');
            }

            if (this.isMailChannelSelected) {
                requiredFields.push('ulica', 'kbr', 'pb', 'mjesto');
            }

            return requiredFields;
        }
    },

    methods: {

        resolveEndpoints() {
            let arvUrls = {
                hr: "https://rabljena-vozila.renault.hr/",
                si: "https://rabljena-vozila.renault.si/",
                rs: "https://polovna-vozila.renault.rs/",
                ba: "https://rabljena-vozila.renault.ba/",
                me: "https://upotrebljavana-vozila.renault.me/"
            }

            this.gdprScreenshotEndpoint = arvUrls[this.country] + 'forms/screenshot_v3.php';
            this.submitEndpoint = arvUrls[this.country] + 'forms/send-gdpr/rabljena_vozila/' + this.country + '/';
        },

        isCountryValid() {
            return this.allowedCountries.indexOf(this.country) !== -1;
        },

        trans(param) {
            let obj = this.i18n;

            if (param.indexOf('.') !== -1) {
                let parts = param.split('.');

                for (let partIndex in parts) {
                    let part = parts [partIndex];
                    if (obj [part]) {
                        obj = obj [part];
                    } else {
                        return '';
                    }
                }

                return obj;
            }

            return obj [param] || '';
        },

        getFieldError(field) {
            if (this.validatorErrors.length > 0 && this.validatorErrors.indexOf(field) !== -1) {
                return this.errorMessages [field] || 'Molimo popunite obavezno polje!';
            }

            return null;
        },

        validate() {
            this.isValidated = true;

            let errors = [];
            for (let fieldIndex in this.requiredFields) {
                let field = this.requiredFields [fieldIndex];
                let valid = !!this.form [field];

                if (valid && field === 'status') {
                    valid = Number(this.form [field]) > 0;
                }

                if (valid && field === 'email') {
                    valid = this.validateEmail(this.form [field]);
                }

                if (field === 'kontakt_kanal_email') {
                    valid = this.form [field] !== null;
                }

                if (!valid) {
                    errors.push(field);
                }
            }

            this.validatorErrors = errors;
        },

        validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        onFormChange() {
            if (this.isValidated) {
                this.validate();
            }
        },

        onSubmit() {

            this.validate();

            if (this.validatorErrors.length > 0) {
                /**
                 * Focus first field with error
                 */
                let firstError = this.validatorErrors[0] || null;

                if (firstError) {
                    const el = document.querySelector(`[name="${firstError}"]`);
                    if (el) {
                        el.focus();
                        el.scrollIntoView();
                    }
                }
            }

            if (this.validatorErrors.length === 0) {
                console.log("OK");
                this.createGdprScreenshot().then(() => {
                    if (! this.screenshotTest) {
                        this.submitToMainServer();
                    }
                });
            }
        },

        createGdprScreenshot() {
            return new Promise((resolve, reject) => {
                axios.post(this.gdprScreenshotEndpoint, this.form).then((response) => {
                    this.form.pdf_url = response.data.url;
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                })
            })
        },

        submitToMainServer() {

        }
    }
}
</script>
