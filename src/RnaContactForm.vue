<template>
    <div id="rna-contact-form" :class="[brand]">
        <div class="c_056">
            <form method="post" class="customer-details-content" novalidate @submit.prevent="onSubmit">
                <!-- Vrsta korisnika -->
                <CustomerType
                    :physical-label="$t('fields.customer_type.physical')"
                    :legal-label="$t('fields.customer_type.legal')"
                    v-model="form.pravna_osoba" />

                <!-- Titula korisnika -->
                <SelectField
                    :label="$t('fields.status.status')"
                    name="status"
                    :options="statusOptions"
                    v-model="form.status"
                    required
                    :error="getFieldError('status')" />

                <!-- Ime -->
                <TextField
                    :label="$t('fields.name')"
                    name="ime"
                    v-model="form.ime"
                    required
                    :error="getFieldError('ime')" />

                <!-- Prezime -->
                <TextField
                    :label="$t('fields.last_name')"
                    name="prezime"
                    v-model="form.prezime"
                    required
                    :error="getFieldError('prezime')" />

                <!-- Tvrtka -->
                <TextField
                    v-show="Number(form.pravna_osoba) === 1"
                    :label="$t('fields.company')"
                    name="tvrtka"
                    v-model="form.tvrtka"
                    required
                    :error="getFieldError('tvrtka')" />

                <!-- Email -->
                <TextField
                    :label="$t('fields.email')"
                    name="email"
                    v-model="form.email"
                    required
                    :error="getFieldError('email')" />

                <!-- Ulica -->
                <TextField
                    :label="$t('fields.street')"
                    name="ulica"
                    v-model="form.ulica"
                    :error="getFieldError('ulica')" />

                <!-- Kucni broj -->
                <TextField
                    :label="$t('fields.house_number')"
                    name="kbr"
                    v-model="form.kbr"
                    :error="getFieldError('kbr')" />

                <!-- Postanski broj -->
                <TextField
                    :label="$t('fields.postal_code')"
                    name="pb"
                    v-model="form.pb"
                    :error="getFieldError('pb')" />

                <!-- Grad -->
                <TextField
                    :label="$t('fields.city')"
                    name="mjesto"
                    v-model="form.mjesto"
                    :error="getFieldError('mjesto')" />

                <!-- Broj telefona -->
                <TextField
                    :label="$t('fields.telephone')"
                    name="tel"
                    :help="$t('fields.telephone_help')"
                    v-model="form.tel"
                    :error="getFieldError('tel')" />

                <!-- GDPR -->
                <div class="gdpr section">
                    <p>{{ $t('gdpr_title') }}</p>

                    <!-- GDPR: Email -->
                    <GdprRadio
                        :label="$t('fields.gdpr_contact_email')"
                        name="kontakt_kanal_email"
                        v-model="form.kontakt_kanal_email"
                        :error="getFieldError('kontakt_kanal_email')" />

                    <!-- GDPR: SMS -->
                    <GdprRadio
                        v-show="hasEnteredTelephone"
                        :label="$t('fields.gdpr_contact_sms')"
                        name="kontakt_kanal_sms"
                        v-model="form.kontakt_kanal_sms"
                        :error="getFieldError('kontakt_kanal_sms')" />

                    <!-- GDPR: Telefon -->
                    <GdprRadio
                        :label="$t('fields.gdpr_contact_telephone')"
                        name="kontakt_kanal_telefon"
                        v-model="form.kontakt_kanal_telefon"
                        :error="getFieldError('kontakt_kanal_telefon')" />

                    <!-- GDPR: Obicna posta -->
                    <GdprRadio
                        v-show="hasEnteredFullAddress"
                        :label="$t('fields.gdpr_contact_postal')"
                        name="kontakt_kanal_posta"
                        v-model="form.kontakt_kanal_posta"
                        :error="getFieldError('kontakt_kanal_posta')" />
                </div>

                <LegalAccordion
                    v-model="form.procitane_pravne_obavijesti"
                    :error="getFieldError('procitane_pravne_obavijesti')" />

                <div class="submit-form">
                    <button autocomplete="off" type="submit" class="submit-form-button">{{ $t('submit') }}</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import TextField from "@/components/TextField";
import SelectField from "@/components/SelectField";
import GdprRadio from "@/components/GdprRadio";
import CustomerType from "@/components/CustomerType";
import LegalAccordion from "@/components/LegalAccordion";
import Validator from "Validator";

export default {
    name: 'RnaContactForm',

    props: {
        brand: {
            type: String,
            default: 'nissan'
        },

        country: {
            type: String,
            default: 'hr'
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
            this.i18n = require(`@/lang/${this.country}`).default;
        } else {
            throw `Unknown country ${this.country}`;
        }

        this.validator = Validator.make(this.form, this.rules, this.$t('validator'));

        this.validator.extend('requiredcompany', (name, value) => {
            if (Number(this.form.pravna_osoba) === 1) {
                return value && value.length > 0;
            }

            return true;
        });

        this.validator.extend('requiredcontactchannel', (name, value) => {
            return value !== null && value >= 0;
        });

        this.validator.extend('requiredlegalinfo', (name, value) => {
            return value && Number(value) === 1;
        });
    },

    data() {
        return {
            i18n: {},

            allowedCountries: ['hr', 'si', 'rs', 'ba', 'me'],

            validator: null,
            validatorErrors: [],

            form: {
                isVehicleLagerForm: false,
                forma_ver: 3,
                odakle: null,
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
            },

            rules: {
                status: ['required', 'in:1,2,3'],
                ime: ['required'],
                prezime: ['required'],
                tvrtka: ['requiredcompany'],
                email: ['required', 'email'],
                kontakt_kanal_email: ['requiredcontactchannel'],
                procitane_pravne_obavijesti: ['requiredlegalinfo']
            }
        }
    },

    computed: {
        statusOptions() {
            return [
                { id: 0, name: this.$t('fields.status.select') },
                { id: 1, name: this.$t('fields.status.sir') },
                { id: 2, name: this.$t('fields.status.lady') },
                { id: 3, name: this.$t('fields.status.miss') }
            ];
        },

        hasEnteredTelephone() {
            return this.form.tel && this.form.tel.length > 0;
        },

        hasEnteredFullAddress() {
            return this.form.ulica && this.form.ulica.length > 0
                && this.form.kbr && this.form.kbr.length > 0
                && this.form.pb && this.form.pb.length > 0
                && this.form.mjesto && this.form.mjesto.length > 0;
        }
    },

    methods: {

        isCountryValid() {
            return this.allowedCountries.indexOf(this.country) !== -1;
        },

        $t(param) {
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
            if (this.validatorErrors && field in this.validatorErrors) {
                return this.validatorErrors [field];
            }

            return null;
        },

        onSubmit() {
            if (this.validator.fails()) {
                this.validatorErrors = this.validator.getErrors();
                console.log(this.validatorErrors);

                /**
                 * Focus first field with error
                 */
                let firstError = Object.keys(this.validatorErrors)[0] || null;

                if (firstError) {
                    const el = document.querySelector(`[name="${firstError}"]`);
                    if (el) {
                        el.focus();
                        el.scrollIntoView();
                    }
                }
            }
        }
    }
}
</script>

<style scoped>
    @import './assets/css/fonts.css';
    @import './assets/css/base.css';
</style>
