<template>
    <div id="rna-contact-form" :class="[params.brand]">
        <div class="c_056">

            <div v-if="!isVehicleInfoError && isVehicleInfoLoading" class="loader"></div>

            <div v-if="isVehicleInfoError" class="customer-details-content c_056_1">
                <h2>{{ trans('messages.vehicle_not_found.title') }}</h2>
                <p v-html="trans('messages.vehicle_not_found.description')"></p>
            </div>

            <div v-if="!isVehicleInfoError && !isSubmitting && !isError && isSubmitted" class="customer-details-content c_056_1">
                <h2>{{ Number(form.novo_vozilo) === 1 ? trans('messages.success.title_new_vehicle') : trans('messages.success.title_used_vehicle') }}</h2>
                <p v-html="Number(form.novo_vozilo) === 1 ? trans('messages.success.description_new_vehicle') : trans('messages.success.description_used_vehicle')"></p>
            </div>

            <div v-if="!isVehicleInfoError && !isSubmitting && isError" class="customer-details-content c_056_1">
                <h2>{{ Number(form.novo_vozilo) === 1 ? trans('messages.error.title_new_vehicle') : trans('messages.error.title_used_vehicle') }}</h2>
                <p v-html="Number(form.novo_vozilo) === 1 ? trans('messages.error.description_new_vehicle') : trans('messages.error.description_used_vehicle')"></p>
            </div>

            <div v-if="!isVehicleInfoError && !isSubmitting && !isSubmitted && !isError && vehicleInfo" class="vehicle-info">
                <template v-if="!isVehicleInfoLoading && isVehicleInfoLoaded">
                    <div class="vehicle-column">
                        <h3 class="column-heading">{{ trans('selected_vehicle') }}</h3>

                        <div v-if="getVehicleInfo('has_three_sixty') === true" style="position:relative;">
                            <div v-show="showCarouselPointer" class="threeSixtyPointer"></div>
                            <vue-product-360
                                style="cursor: pointer;"
                                :images="threeSixtyImages"
                                @starting="showCarouselPointer = false"
                                @stopping="showCarouselPointer = true" />
                        </div>
                        <template v-else>
                            <img v-if="getVehicleInfo('thumbnail')" :src="getVehicleInfo('thumbnail')" alt="">
                        </template>

                        <h6>{{ getVehicleInfo('name') }}</h6>
                        <p>
                            <span v-if="Number(form.novo_vozilo) !== 1">{{ getVehicleInfo('manufacture_year') }}, {{ getVehicleInfo('mileage') }} km<br></span>
                            <span>{{ getVehicleInfo('engine_capacity') }} ccm,</span> {{ getVehicleInfo('engine_power') }} kW
                            <br>
                            {{ trans('gearbox') }}: {{ getVehicleInfo('gearbox.naziv') }}<span v-if="getVehicleInfo('transmission.naziv')">, {{ getVehicleInfo('transmission.naziv') }}</span>
                            <br>
                            {{ trans('exterior_color') }}: {{ getVehicleInfo('exterior_color') }}
                        </p>
                    </div>
                    <div class="concessionaire-column">
                        <template v-if="vehicleInfo.rnaStock">
                            <h3 class="column-heading">{{ trans('selected_concessionaire') }}</h3>

                            <!-- Koncesionari -->
                            <SelectField
                                style="margin-bottom: 30px;"
                                full-width
                                name="select_concessionaire"
                                :options="vehicleInfo.concessionaires"
                                options-key="id"
                                options-value="naziv"
                                :value="form.koncesionari_id"
                                @input="onSelectConcessionaire"
                                required
                                :error="getFieldError('select_concessionaire')" />

                            <template v-if="selectedConcessionaire">
                                <h6>{{ selectedConcessionaire.naziv }}</h6>
                                <p>
                                    {{ selectedConcessionaire.adresa }}
                                    <br>
                                    {{ selectedConcessionaire.pb }} {{ selectedConcessionaire.grad }}
                                </p>
                            </template>
                        </template>
                        <template v-else>
                            <h3 class="column-heading">{{ trans('selected_concessionaire') }}</h3>
                            <p>
                                {{ vehicleInfo.location.naziv_tvrtke ? vehicleInfo.location.naziv_tvrtke : vehicleInfo.concessionaire.naziv }}
                                <br>
                                {{ vehicleInfo.concessionaire.adresa }}
                                <br>
                                {{ vehicleInfo.concessionaire.pb }} {{ vehicleInfo.concessionaire.grad }}
                            </p>
                        </template>
                    </div>
                </template>
            </div>

            <form v-if="!isVehicleInfoError && !isVehicleInfoLoading && !isSubmitting && !isSubmitted && !isError" method="post" class="customer-details-content" novalidate @change.passive="onFormChange" @submit.prevent="onSubmit">
                <!-- Vrsta korisnika -->
                <CustomerType
                    :physical-label="trans('fields.customer_type.physical')"
                    :legal-label="trans('fields.customer_type.legal')"
                    :legal-label-renault="trans('fields.customer_type.legal_renault')"
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

                <!-- Poruka -->
                <TextareaField
                    :label="trans('fields.message')"
                    name="poruka"
                    v-model="form.poruka"
                    :error="getFieldError('poruka')" />

                <!-- GDPR -->
                <div class="gdpr section">
                    <p v-html="trans('gdpr_title')"></p>

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
                    :title="trans('legal_disclaimer_title')"
                    :content="trans('legal_disclaimer_content_' + params.brand)"
                    :hint="trans('legal_disclaimer_hint')"
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
import { getObjectValueByKey } from "./utils/helpers";
import TextField from "./components/TextField.vue";
import TextareaField from "./components/TextareaField.vue";
import SelectField from "./components/SelectField.vue";
import GdprRadio from "./components/GdprRadio.vue";
import CustomerType from "./components/CustomerType.vue";
import LegalAccordion from "./components/LegalAccordion.vue";
import VueProduct360 from "@deviznet/vue-product-360";

import './assets/css/base.css';

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
        },

        source: {
            type: String,
            default: 'NV'
        },

        bir: {
            type: [String, Number]
        },

        vehicleId: {
            type: [String, Number]
        },

        newVehicle: {
            type: Boolean
        }
    },

    components: {
        LegalAccordion,
        CustomerType,
        GdprRadio,
        SelectField,
        TextField,
        TextareaField,
        VueProduct360
    },

    created() {

        this.setParams();

        this.fetchVehicleInfo();

        if (this.isCountryValid()) {
            this.i18n = require(`./lang/${this.params.country}`).default;
        } else {
            throw `Unknown country ${this.country}`;
        }

        this.resolveEndpoints();
    },

    data() {
        return {
            params: {
                brand: 'nissan',
                country: 'hr',
                source: 'NV',
                bir: null,
                vehicleId: null,
                newVehicle: false
            },

            isSubmitting: false,
            isSubmitted: false,
            isError: false,
            isVehicleInfoLoading: false,
            isVehicleInfoLoaded: false,
            isVehicleInfoError: false,

            i18n: {},
            allowedCountries: ['hr', 'si', 'rs', 'ba', 'me'],
            isValidated: false,
            validatorErrors: [],
            gdprScreenshotEndpoint: null,
            submitEndpoint: null,
            screenshotTest: false,
            showCarouselPointer: true,

            vehicleInfo: {
                name: null,
                thumbnail: {
                    id: null
                }
            },

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

        vehicleThumbnailUrl() {
            if (! this.params.vehicleId || ! this.vehicleInfo.thumbnail || ! this.vehicleInfo.thumbnail.id) {
                return;
            }

            return `https://static.rabljena-vozila.com/${this.params.country}/rabljena_vozila/${this.params.vehicleId}/1/${this.vehicleInfo.thumbnail.id}`;
        },

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
                status: this.trans('validator.status'),
                ime: this.trans('validator.ime'),
                prezime: this.trans('validator.prezime'),
                tvrtka: this.trans('validator.tvrtka'),
                email: this.trans('validator.email'),
                ulica: this.trans('validator.ulica'),
                kbr: this.trans('validator.kbr'),
                pb: this.trans('validator.pb'),
                mjesto: this.trans('validator.mjesto'),
                tel: this.trans('validator.tel'),
                kontakt_kanal_email: this.trans('validator.kontakt_kanal_email'),
                procitane_pravne_obavijesti: this.trans('validator.procitane_pravne_obavijesti')
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

            if (this.vehicleInfo.rnaStock) {
                requiredFields.push('select_concessionaire');
            }

            return requiredFields;
        },

        threeSixtyImages() {
            if (! this.vehicleInfo || ! this.vehicleInfo.photos || typeof this.vehicleInfo.photos !== "object") {
                return [];
            }

            return this.vehicleInfo.photos.map((p) => p.url);
        },

        selectedConcessionaire() {

            if (! this.vehicleInfo || ! this.vehicleInfo.concessionaires || ! this.form.koncesionari_id) {
                return null;
            }

            let concessionaire = this.vehicleInfo.concessionaires.find((c) => c.id.toString() === this.form.koncesionari_id.toString());

            return concessionaire ? concessionaire : null;
        }
    },

    methods: {

        setParams() {
            if (window.RNA_CONTACT_FORM_SETTINGS) {
                this.params.brand = window.RNA_CONTACT_FORM_SETTINGS.brand;
                this.params.country = window.RNA_CONTACT_FORM_SETTINGS.country;
                this.params.source = window.RNA_CONTACT_FORM_SETTINGS.source;
                this.params.vehicleId = window.RNA_CONTACT_FORM_SETTINGS.vehicleId;
            } else {
                this.params.brand = this.brand;
                this.params.country = this.country;
                this.params.source = this.source;
                this.params.vehicleId = this.vehicleId;
            }

            switch (this.params.brand) {
                case 'renault':
                    require('./assets/css/renault_fonts.css');
                break;
                case 'dacia':
                    require('./assets/css/dacia_fonts.css');
                break;
                case 'nissan':
                    require('./assets/css/nissan_fonts.css');
                break;
            }


            this.form.odakle = this.params.source;
            this.form.marka = this.params.brand;
        },

        getVehicleInfo(key, fallback) {
            return getObjectValueByKey(this.vehicleInfo, key, fallback);
        },

        fetchVehicleInfo() {
            if (! this.params.vehicleId) {
                return;
            }

            this.isVehicleInfoLoaded = false;
            this.isVehicleInfoLoading = true;
            this.isVehicleInfoError = false;

            let endpoint = this.arvUrl() + `rest/rna-contact-form/vehicle/${this.params.vehicleId}`
            axios.get(endpoint)
                .then((response) => {
                    this.isVehicleInfoLoading = false;
                    this.isVehicleInfoLoaded = true;
                    this.isVehicleInfoError = false;

                    this.vehicleInfo = response.data;

                    if (this.vehicleInfo.concessionaires && this.vehicleInfo.concessionaires.length > 0) {
                        this.vehicleInfo.concessionaires = [{ id: 0, naziv: 'Odaberite'}, ...this.vehicleInfo.concessionaires];
                    }

                    this.form.rvBIR = response.data.concessionaire.bir.toString();
                    this.form.rvID = Number(response.data.id);
                    this.form.novo_vozilo = response.data.new_vehicle;

                    this.fireGoogleTagManagerFormOpenedEvent();
                })
                .catch(() => {
                    this.isVehicleInfoLoading = false;
                    this.isVehicleInfoLoaded = false;
                    this.isVehicleInfoError = true;
                })
        },

        arvUrl(country) {
            let arvUrls = {
                hr: "https://rabljena-vozila.renault.hr/",
                si: "https://rabljena-vozila.renault.si/",
                rs: "https://polovna-vozila.renault.rs/",
                ba: "https://rabljena-vozila.renault.ba/",
                me: "https://upotrebljavana-vozila.renault.me/",
                rks: "https://certified-admin.automita.com/",
                mk: "https://koristeni-vozila.renault.mk/",
            }

            return arvUrls [country] || arvUrls [this.params.country];
        },

        resolveEndpoints() {
            this.gdprScreenshotEndpoint = this.arvUrl() + 'forms/screenshot_v3.php';
            this.submitEndpoint = this.arvUrl() + 'forms/send-gdpr/rabljena_vozila/' + this.country + '/';
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
                this.createGdprScreenshot().then(() => {
                    if (! this.screenshotTest) {
                        this.submitToMainServer();
                    }
                });
            }
        },

        prepareFormData() {
            let formData = new FormData;
            for (let key in this.form) {
                if (this.form [key] !== null) {
                    formData.append(key, this.form [key]);
                }
            }
            return formData
        },

        createGdprScreenshot() {
            this.isSubmitting = true;

            return new Promise((resolve, reject) => {
                axios.post(this.gdprScreenshotEndpoint, this.prepareFormData()).then((response) => {
                    this.form.pdf_url = response.data.data.pdf_url;
                    resolve(response);
                }).catch((err) => {
                    this.isSubmitting = false;
                    this.isSubmitted = false;
                    this.isError = true;
                    reject(err);
                })
            })
        },

        submitToMainServer() {
            this.isSubmitting = true;
            this.isSubmitted = false;
            this.isError = false;

            axios.post(this.submitEndpoint, this.prepareFormData()).then((response) => {

                let data = response.data.toString().replace(/\r?\n|\r/g, '').replace(/\t/g, '').replace(' ', '');

                if (data == "1") {
                    this.isSubmitted = true;
                    this.isError = false;

                    this.fireGoogleAnalyticsEvents();
                    this.fireGoogleTagManagerFormSubmitEvent();

                } else {
                    this.isSubmitted = false;
                    this.isError = true;
                }
                this.isSubmitting = false;

            }).catch(() => {
                this.isSubmitted = false;
                this.isError = true;
                this.isSubmitting = false;
            })
        },

        onSelectConcessionaire(concessionaireId) {
            let concessionaire = this.vehicleInfo.concessionaires.find((c) => c.id.toString() === concessionaireId.toString());

            if (! concessionaire) {
                return;
            }

            this.form.rvBIR = concessionaire.bir.toString();
            this.form.koncesionari_id = Number(concessionaire.id);
        },

        fireGoogleAnalyticsEvents() {
            let eventLabel = "ARV_used";
            if (Number(this.form.novo_vozilo) === 1) eventLabel = "ARV_new";

            if (typeof window.ga === "function") {
                window.ga('masterTracker.send', { hitType: 'event', eventCategory: 'Leadforms', eventAction: 'Submit', eventLabel: eventLabel });
                window.ga('dealerTracker.send', { hitType: 'event', eventCategory: 'Leadforms', eventAction: 'Submit', eventLabel: eventLabel });
                window.ga('send', { hitType: 'event', eventCategory: 'Leadforms', eventAction: 'Submit', eventLabel: eventLabel });
            } else {
                console.warn("Google Analytics not installed!");
            }
        },

        fireGoogleTagManagerFormOpenedEvent() {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'formType' : 'purchase_request',
                'formCategory' : 'lead_newcar',
                'formStepName' : 'start',
                'formStepNumber' : 'step-0',
                'event' : 'formOpen',
                'pageType' : 'form',
                'businessType' : 'new-car',
                'dealerName' : this.vehicleInfo.concessionaire && this.vehicleInfo.concessionaire.naziv,
                'dealerId' : this.form.rvBIR,
                'vehicleModel' : this.vehicleInfo.name,
                'vehicleId' : this.form.rvID
            });
        },

        fireGoogleTagManagerFormSubmitEvent: function() {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'formType' : 'purchase_request',
                'formCategory' : 'lead_newcar',
                'leadId' : '',
                'event' : 'formValidate',
                'pageType' : 'form',
                'businessType' : 'new-car',
                'dealerName' : this.vehicleInfo.concessionaire && this.vehicleInfo.concessionaire.naziv,
                'dealerId' : this.form.rvBIR,
                'vehicleModel' : this.vehicleInfo.name,
                'vehicleId' : this.form.rvID
            });
        },
    }
}
</script>
