import axios from"axios";function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var script={name:"TextField",props:{label:{type:String},name:{type:String,required:!0},value:{type:String},required:{type:Boolean,default:!1},help:{type:String},error:{type:String}}};function normalizeComponent(e,n,t,a,i,o,r,s,_,l){"boolean"!=typeof r&&(_=s,s=r,r=!1);const u="function"==typeof t?t.options:t;e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),a&&(u._scopeId=a);let d;if(o?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,_(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=d):n&&(d=r?function(e){n.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,s(e))}),d)if(u.functional){const v=u.render;u.render=function(e,n){return d.call(n),v(e,n)}}else{r=u.beforeCreate;u.beforeCreate=r?[].concat(r,d):[d]}return t}const isOldIE="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function createInjector(e){return(e,n)=>addStyle(e,n)}let HEAD;const styles={};function addStyle(n,t){var a=isOldIE?t.media||"default":n;const i=styles[a]||(styles[a]={ids:new Set,styles:[]});if(!i.ids.has(n)){i.ids.add(n);let e=t.source;t.map&&(e+="\n/*# sourceURL="+t.map.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",t.media&&i.element.setAttribute("media",t.media),void 0===HEAD&&(HEAD=document.head||document.getElementsByTagName("head")[0]),HEAD.appendChild(i.element)),"styleSheet"in i.element?(i.styles.push(e),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n")):(a=i.ids.size-1,n=document.createTextNode(e),(t=i.element.childNodes)[a]&&i.element.removeChild(t[a]),t.length?i.element.insertBefore(n,t[a]):i.element.appendChild(n))}}var __vue_script__=script,__vue_render__=function(){var n=this,e=n.$createElement,e=n._self._c||e;return e("div",{staticClass:"textfield section"},[e("div",{class:["form-group",{required:n.required}],attrs:{"aria-required":n.required?"true":"false"}},[n.label?e("label",{attrs:{for:n.name}},[n._v(n._s(n.label))]):n._e(),n._v(" "),e("div",{staticClass:"form-group-container"},[e("input",{class:[{isInvalid:n.error}],attrs:{id:n.name,name:n.name,required:n.required,type:"text"},on:{input:function(e){return n.$emit("input",e.target.value)}}}),n._v(" "),n.error?[e("span",{staticClass:"error-message"},[n._v(n._s(n.error))])]:n._e()],2),n._v(" "),n.help?e("span",{staticClass:"help-block"},[e("p",[n._v(n._s(n.help))])]):n._e()])])},__vue_staticRenderFns__=[];__vue_render__._withStripped=!0;var __vue_inject_styles__=function(e){e&&e("data-v-698dc0a2_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"TextField.vue"},media:void 0})},__vue_scope_id__="data-v-698dc0a2",__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,__vue_component__=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,!1,createInjector,void 0,void 0),script$1={name:"SelectField",props:{label:{type:String},name:{type:String,required:!0},value:{type:[String,Number]},required:{type:Boolean,default:!1},error:{type:String},options:{type:Array,default:function(){return[]}}},computed:{selectedValue:function(){var n=this;if(!this.options||!this.value)return this.options[0].name;var e=this.options.find(function(e){return e.id.toString()===n.value.toString()});return e&&e.name?e.name||"":this.options[0].name}}},__vue_script__$1=script$1,__vue_render__$1=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"section dropdown"},[t("div",{staticClass:"form-group required",attrs:{"aria-required":"true"}},[t("label",{attrs:{for:"title"}},[n._v("Status")]),n._v(" "),t("div",{staticClass:"custom-selectbox"},[t("select",{attrs:{name:"title",id:"title"},on:{change:function(e){return n.$emit("input",e.target.value)}}},n._l(n.options,function(e){return t("option",{key:n.name+"_option_"+e.id,class:[{"selected-value":n.value==e.id}],domProps:{selected:n.value==e.id,value:e.id}},[n._v(n._s(e.name))])}),0),n._v(" "),t("span",{class:["selectedValue",{isInvalid:n.error}]},[n._v(n._s(n.selectedValue))]),n._v(" "),n.error?[t("span",{staticClass:"error-message"},[n._v(n._s(n.error))])]:n._e()],2)])])},__vue_staticRenderFns__$1=[];__vue_render__$1._withStripped=!0;var __vue_inject_styles__$1=function(e){e&&e("data-v-19dd5008_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"SelectField.vue"},media:void 0})},__vue_scope_id__$1="data-v-19dd5008",__vue_module_identifier__$1=void 0,__vue_is_functional_template__$1=!1,__vue_component__$1=normalizeComponent({render:__vue_render__$1,staticRenderFns:__vue_staticRenderFns__$1},__vue_inject_styles__$1,__vue_script__$1,__vue_scope_id__$1,__vue_is_functional_template__$1,__vue_module_identifier__$1,!1,createInjector,void 0,void 0),script$2={name:"GdprRadio",props:{label:{type:String},name:{type:String,required:!0},value:[Boolean,String,Number],error:{type:String},required:{type:Boolean}}},__vue_script__$2=script$2,__vue_render__$2=function(){var n=this,e=n.$createElement,e=n._self._c||e;return e("div",{staticClass:"checkbox section form-group"},[e("div",{staticClass:"form-check-label"},[e("p",[n._v(n._s(n.label)+n._s(n.required?"*":""))])]),n._v(" "),e("div",{staticClass:"form-check form-check-inline checkbox-margin"},[e("label",{staticClass:"form-check-label",attrs:{for:"gdpr_"+n.name+"_yes"}},[n._v("Da\n            "),e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"gdpr_"+n.name,id:"gdpr_"+n.name+"_yes",value:"true"},domProps:{checked:!0===n.value},on:{change:function(e){return n.$emit("input",1)}}}),n._v(" "),e("span",{staticClass:"gdpr-radio-button"})])]),n._v(" "),e("div",{staticClass:"form-check form-check-inline checkbox-margin"},[e("label",{staticClass:"form-check-label",attrs:{for:"gdpr_"+n.name+"_no"}},[n._v("Ne\n            "),e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"gdpr_"+n.name,id:"gdpr_"+n.name+"_no",value:"false"},domProps:{checked:!1===n.value},on:{change:function(e){return n.$emit("input",0)}}}),n._v(" "),e("span",{staticClass:"gdpr-radio-button"})])]),n._v(" "),n.error?[e("span",{staticClass:"error-message"},[n._v(n._s(n.error))])]:n._e()],2)},__vue_staticRenderFns__$2=[];__vue_render__$2._withStripped=!0;var __vue_inject_styles__$2=function(e){e&&e("data-v-78fb9338_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"GdprRadio.vue"},media:void 0})},__vue_scope_id__$2="data-v-78fb9338",__vue_module_identifier__$2=void 0,__vue_is_functional_template__$2=!1,__vue_component__$2=normalizeComponent({render:__vue_render__$2,staticRenderFns:__vue_staticRenderFns__$2},__vue_inject_styles__$2,__vue_script__$2,__vue_scope_id__$2,__vue_is_functional_template__$2,__vue_module_identifier__$2,!1,createInjector,void 0,void 0),script$3={name:"CustomerType",props:{physicalLabel:String,legalLabel:String,value:[String,Number]}},__vue_script__$3=script$3,__vue_render__$3=function(){var n=this,e=n.$createElement,e=n._self._c||e;return e("div",{staticClass:"menu-wrap"},[e("ul",{staticClass:"range-tab row"},[e("li",{class:["tab-holder",{active:0===Number(n.value)}],on:{click:function(e){return n.$emit("input",0)}}},[e("span",{staticClass:"tab-text"},[n._v(n._s(n.physicalLabel))])]),n._v(" "),e("li",{class:["tab-holder",{active:1===Number(n.value)}],on:{click:function(e){return n.$emit("input",1)}}},[e("span",{staticClass:"tab-text"},[n._v(n._s(n.legalLabel))])])])])},__vue_staticRenderFns__$3=[];__vue_render__$3._withStripped=!0;var __vue_inject_styles__$3=function(e){e&&e("data-v-120cc37a_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"CustomerType.vue"},media:void 0})},__vue_scope_id__$3="data-v-120cc37a",__vue_module_identifier__$3=void 0,__vue_is_functional_template__$3=!1,__vue_component__$3=normalizeComponent({render:__vue_render__$3,staticRenderFns:__vue_staticRenderFns__$3},__vue_inject_styles__$3,__vue_script__$3,__vue_scope_id__$3,__vue_is_functional_template__$3,__vue_module_identifier__$3,!1,createInjector,void 0,void 0),script$4={name:"LegalAccordion",props:{error:{type:String}},data:function(){return{expanded:!1}},methods:{onToggle:function(){this.expanded=!this.expanded,this.$emit("input",1)}}},__vue_script__$4=script$4,__vue_render__$4=function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("div",[n("div",{staticClass:"legal-info-component"},[n("div",{staticClass:"legal-info-label",on:{click:e.onToggle}},[e._v("Upoznat(a) sam s informacijama o obradi osobnih podataka od strane Renault Nissan Hrvatska.")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.expanded,expression:"expanded"}],staticClass:"legal-info-text-content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8)])]),e._v(" "),n("p",{staticClass:"legal-info-disclamer"},[e._v("Obavezno pročitajte.")]),e._v(" "),e.error?[n("span",{staticClass:"error-message"},[e._v(e._s(e.error))])]:e._e()],2)},__vue_staticRenderFns__$4=[function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("div",[n("div",[e._v("1. Voditelj obrade podataka")]),e._v(" "),n("div",[e._v("\n                    Renault Nissan Hrvatska d.o.o., Radnička cesta 47, 10000 Zagreb, pravna osoba koja na hrvatskom tržištu zastupa marke Renault, Dacia, Nissan i ovlašteni distributeri tih marki kod kojih se nalaze vaši podaci (popis je objavljen na "),n("a",{attrs:{href:"https://www.nissan.hr/trgovci",target:"_blank"}},[e._v("www.nissan.hr/trgovci")]),e._v(") kao zajednički voditelji obrade podataka.\n                ")])])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("div",[e._v("\n                Za sva pitanja u vezi s obradom podataka ili vašim pravima, molimo kontaktirajte ovlaštenu osobu za zaštitu podataka: "),n("a",{attrs:{href:"mailto:zop.nissan@nissan.hr"}},[e._v("zop.nissan@nissan.hr")]),e._v(".\n            ")])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("div",[n("div",[e._v("2. Svrhe obrade osobnih podataka")]),e._v(" "),n("div",[e._v("\n                    Renault Nissan Hrvatska d.o.o. sam ili izabrani ovlašteni distributer koristite vaše osobne podatke koje ste prenijeli putem ove internetske stranice u svrhu obrade vašeg zahtjeva iz ovog internetskog obrasca u roku potrebnom za izvršenje usluge. Vaši podaci mogu se koristiti za ankete o zadovoljstvu, za slanje komercijalnih ponuda za kupnju vozila i postprodajnih proizvoda, kao i za informacije o osobnim pogodnostima, događajima i drugim aktualnim vijestima.\n                ")])])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("div",[n("div",[e._v("3. Osobni podaci")]),e._v(" "),n("div",[e._v("\n                    Osobni podaci ime, prezime, broj telefona, e-mail adresu, označeni s (*), potrebni su za obradu vašeg zahtjeva iz ovog internetskog obrasca; ako ih ne navedete, ne možemo obraditi vaš zahtjev.\n                    Osobni podaci obrađeni u svrhu slanja komercijalnih ponuda: ime, prezime, adresa, telefonski broj, e-mail adresa, socio-demografski podaci (ako je dopušteno), povijesne informacije o kupnji (ako je dopušteno).\n                ")])])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("div",[n("div",[e._v("4. Pravna osnova")]),e._v(" "),n("div",[e._v("\n                    Upravljanje vašim zahtjevima prema ugovornim obvezama (obrada vašeg zahtjeva navedenog u ovom obrascu), legitimnom interesu (anketa o zadovoljstvu i vašoj privoli (slanje komercijalnih ponuda).\n                ")])])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("div",[n("div",[e._v("5. Primatelji osobnih podataka")]),e._v(" "),n("div",[e._v("\n                    Ovlašteni trgovci koji po potrebi ispunjavaju navedene svrhe i ostale treće strane u skladu sa svojim zakonskim obvezama.\n                ")])])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("div",[n("div",[e._v("6. Vaša prava")]),e._v(" "),n("div",[e._v("\n                    Vašu privolu možete opozvati u svakom trenutku na način da vašu odluku pisanim ili usmenim putem priopćite ovlaštenom distributeru ili društvu Renault Nissan Hrvatska, d.o.o. na e-mail adresu: "),n("a",{attrs:{href:"mailto:kontakt-stranke.hrvatska@nissan.hr"}},[e._v("kontakt-stranke.hrvatska@nissan.hr")]),e._v(".\n                    Imate pravo pristupa vašim osobnim podacima, ispravljanju, brisanju (osim ako je zahtjev u suprotnosti s važećim zakonom) i pravo na prigovor obradi vaših osobnih podataka, uključujući zabranu slanja obavijesti i druga prava, kako je objašnjeno u odjeljku o dodatnim informacijama (točka 8). U slučaju zloupotrebe vaših podataka, možete kontaktirati Renault Nissan Hrvatska d.o.o. na e-mail adresu: "),n("a",{attrs:{href:"mailto:zop.nissan@nissan.hr"}},[e._v("zop.nissan@nissan.hr")]),e._v(".\n                    Imate pravo na pravnu zaštitu. Možete kontaktirati Agenciju za zaštitu osobnih podataka (AZOP).\n                ")])])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("div",[n("div",[e._v("7. Rok za pohranjivanje vaših osobnih podataka")]),e._v(" "),n("div",[e._v("\n                    Osobne podatke navedene u ovom zahtjevu, Renault Nissan Hrvatska d.o.o. sam ili odabrani ovlašteni trgovac koriste za obradu Vašeg zahtjeva u vrijeme koje je potrebno za obavljanje usluge i čuvaju ih najduže 3 godine. U slučaju korištenja vaših podataka za anketiranje o zadovoljstvu vaši podaci se čuvaju 1 godinu nakon završetka ove aktivnosti. U slučaju vaše pozitivne privole, vaši podaci mogu se objediniti i povezati s vašim drugim osobnim podacima koje čuvamo. Voditelj obrade prikuplja i obrađuje te osobne podatke do opoziva odnosno najviše 30 godina, u skladu s odredbama zakonodavstva o zaštiti osobnih podataka.\n                ")])])},function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("div",[n("div",[e._v("8. Dodatne informacije")]),e._v(" "),n("div",[e._v("\n                    Za više i detaljnije informacije o zaštiti vaših osobnih podataka, pogledajte našu "),n("a",{attrs:{href:"https://www.nissan.hr/opce-zop",target:"_blank"}},[e._v("Politiku privatnosti")]),e._v(".\n                ")])])}];__vue_render__$4._withStripped=!0;var __vue_inject_styles__$4=function(e){e&&e("data-v-6bb234d1_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"LegalAccordion.vue"},media:void 0})},__vue_scope_id__$4="data-v-6bb234d1",__vue_module_identifier__$4=void 0,__vue_is_functional_template__$4=!1,__vue_component__$4=normalizeComponent({render:__vue_render__$4,staticRenderFns:__vue_staticRenderFns__$4},__vue_inject_styles__$4,__vue_script__$4,__vue_scope_id__$4,__vue_is_functional_template__$4,__vue_module_identifier__$4,!1,createInjector,void 0,void 0),script$5={name:"RnaContactForm",props:{brand:{type:String,default:"nissan",required:!0},country:{type:String,default:"hr",required:!0},source:{type:String,default:"NV",required:!0},bir:{type:[String,Number],required:!0},vehicleId:{type:[String,Number],required:!0},newVehicle:{type:Boolean,default:!1}},components:{LegalAccordion:__vue_component__$4,CustomerType:__vue_component__$3,GdprRadio:__vue_component__$2,SelectField:__vue_component__$1,TextField:__vue_component__},created:function(){if(!this.isCountryValid())throw"Unknown country "+this.country;this.i18n=commonjsRequire("./lang/"+this.country).default,this.form.odakle=this.source,this.form.marka=this.brand,this.form.rvBIR=this.bir,this.form.rvID=this.vehicleId,this.form.novo_vozilo=this.newVehicle,this.resolveEndpoints()},data:function(){return{i18n:{},allowedCountries:["hr","si","rs","ba","me"],isValidated:!1,validatorErrors:[],gdprScreenshotEndpoint:null,submitEndpoint:null,screenshotTest:!0,form:{isVehicleLagerForm:!1,forma_ver:4,odakle:"RV",marka:null,rvBIR:null,rvID:null,pdf_url:null,novo_vozilo:0,sto2_user_id:0,trazeni_model:null,pravna_osoba:0,status:0,ime:null,prezime:null,tvrtka:null,email:null,tel:null,ulica:null,kbr:null,pb:null,mjesto:null,poruka:null,kontakt_kanal_email:null,kontakt_kanal_telefon:null,kontakt_kanal_sms:null,kontakt_kanal_posta:null,procitane_pravne_obavijesti:null,koncesionari_id:0}}},computed:{statusOptions:function(){return[{id:0,name:this.$t("fields.status.select")},{id:1,name:this.$t("fields.status.sir")},{id:2,name:this.$t("fields.status.lady")}]},errorMessages:function(){return{status:"Molimo da odaberete svoj status.",ime:"Molimo da unesete svoje ime.",prezime:"Molimo da unesete svoje prezime.",tvrtka:"Molimo da unesete svoju tvrtku.",email:"Molimo da unesete svoj e-mail.",ulica:"Molimo da unesete svoju ulicu.",kbr:"Molimo da unesete svoj kućni broj.",pb:"Molimo da unesete svoj poštanski broj.",mjesto:"Molimo da unesete svoj grad.",tel:"Molimo da unesete svoj broj telefona.",kontakt_kanal_email:"Molimo da unesite svoj odabir.",procitane_pravne_obavijesti:"Molimo da pročitate pravne obavijesti."}},isTelephoneChannelSelected:function(){return!!this.form.kontakt_kanal_telefon},isSmsChannelSelected:function(){return!!this.form.kontakt_kanal_sms},isMailChannelSelected:function(){return!!this.form.kontakt_kanal_posta},requiredFields:function(){var e=["status","ime","prezime","email","kontakt_kanal_email","procitane_pravne_obavijesti"];return this.form.pravna_osoba&&e.push("tvrtka"),(this.isTelephoneChannelSelected||this.isSmsChannelSelected)&&e.push("tel"),this.isMailChannelSelected&&e.push("ulica","kbr","pb","mjesto"),e}},methods:{resolveEndpoints:function(){var e={hr:"https://rabljena-vozila.renault.hr/",si:"https://rabljena-vozila.renault.si/",rs:"https://polovna-vozila.renault.rs/",ba:"https://rabljena-vozila.renault.ba/",me:"https://upotrebljavana-vozila.renault.me/"};this.gdprScreenshotEndpoint=e[this.country]+"forms/screenshot_v3.php",this.submitEndpoint=e[this.country]+"forms/send-gdpr/rabljena_vozila/"+this.country+"/"},isCountryValid:function(){return-1!==this.allowedCountries.indexOf(this.country)},$t:function(e){var n=this.i18n;if(-1===e.indexOf("."))return n[e]||"";var t,a=e.split(".");for(t in a){var i=a[t];if(!n[i])return"";n=n[i]}return n},getFieldError:function(e){return 0<this.validatorErrors.length&&-1!==this.validatorErrors.indexOf(e)?this.errorMessages[e]||"Molimo popunite obavezno polje!":null},validate:function(){this.isValidated=!0;var e,n=[];for(e in this.requiredFields){var t=this.requiredFields[e],a=!!this.form[t];(a=(a=a&&"status"===t?0<Number(this.form[t]):a)&&"email"===t?this.validateEmail(this.form[t]):a)||n.push(t)}this.validatorErrors=n},validateEmail:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},onFormChange:function(){this.isValidated&&this.validate()},onSubmit:function(){var e,n=this;this.validate(),0<this.validatorErrors.length&&(!(e=this.validatorErrors[0]||null)||(e=document.querySelector('[name="'+e+'"]'))&&(e.focus(),e.scrollIntoView())),0===this.validatorErrors.length&&(console.log("OK"),this.createGdprScreenshot().then(function(){n.screenshotTest||n.submitToMainServer()}))},createGdprScreenshot:function(){var a=this;return new Promise(function(n,t){axios.post(a.gdprScreenshotEndpoint,a.form).then(function(e){a.form.pdf_url=e.data.url,n(e)}).catch(function(e){t(e)})})},submitToMainServer:function(){}}},__vue_script__$5=script$5,__vue_render__$5=function(){var n=this,e=n.$createElement,e=n._self._c||e;return e("div",{class:[n.brand],attrs:{id:"rna-contact-form"}},[e("div",{staticClass:"c_056"},[e("form",{staticClass:"customer-details-content",attrs:{method:"post",novalidate:""},on:{"&change":function(e){return n.onFormChange.apply(null,arguments)},submit:function(e){return e.preventDefault(),n.onSubmit.apply(null,arguments)}}},[e("CustomerType",{attrs:{"physical-label":n.$t("fields.customer_type.physical"),"legal-label":n.$t("fields.customer_type.legal")},model:{value:n.form.pravna_osoba,callback:function(e){n.$set(n.form,"pravna_osoba",e)},expression:"form.pravna_osoba"}}),n._v(" "),e("SelectField",{attrs:{label:n.$t("fields.status.status"),name:"status",options:n.statusOptions,required:"",error:n.getFieldError("status")},model:{value:n.form.status,callback:function(e){n.$set(n.form,"status",e)},expression:"form.status"}}),n._v(" "),e("TextField",{attrs:{label:n.$t("fields.name"),name:"ime",required:"",error:n.getFieldError("ime")},model:{value:n.form.ime,callback:function(e){n.$set(n.form,"ime",e)},expression:"form.ime"}}),n._v(" "),e("TextField",{attrs:{label:n.$t("fields.last_name"),name:"prezime",required:"",error:n.getFieldError("prezime")},model:{value:n.form.prezime,callback:function(e){n.$set(n.form,"prezime",e)},expression:"form.prezime"}}),n._v(" "),e("TextField",{directives:[{name:"show",rawName:"v-show",value:1===Number(n.form.pravna_osoba),expression:"Number(form.pravna_osoba) === 1"}],attrs:{label:n.$t("fields.company"),name:"tvrtka",required:"",error:n.getFieldError("tvrtka")},model:{value:n.form.tvrtka,callback:function(e){n.$set(n.form,"tvrtka",e)},expression:"form.tvrtka"}}),n._v(" "),e("TextField",{attrs:{label:n.$t("fields.email"),name:"email",required:"",error:n.getFieldError("email")},model:{value:n.form.email,callback:function(e){n.$set(n.form,"email",e)},expression:"form.email"}}),n._v(" "),e("TextField",{attrs:{label:n.$t("fields.street"),name:"ulica",error:n.getFieldError("ulica")},model:{value:n.form.ulica,callback:function(e){n.$set(n.form,"ulica",e)},expression:"form.ulica"}}),n._v(" "),e("TextField",{attrs:{label:n.$t("fields.house_number"),name:"kbr",error:n.getFieldError("kbr")},model:{value:n.form.kbr,callback:function(e){n.$set(n.form,"kbr",e)},expression:"form.kbr"}}),n._v(" "),e("TextField",{attrs:{label:n.$t("fields.postal_code"),name:"pb",error:n.getFieldError("pb")},model:{value:n.form.pb,callback:function(e){n.$set(n.form,"pb",e)},expression:"form.pb"}}),n._v(" "),e("TextField",{attrs:{label:n.$t("fields.city"),name:"mjesto",error:n.getFieldError("mjesto")},model:{value:n.form.mjesto,callback:function(e){n.$set(n.form,"mjesto",e)},expression:"form.mjesto"}}),n._v(" "),e("TextField",{attrs:{label:n.$t("fields.telephone"),name:"tel",help:n.$t("fields.telephone_help"),error:n.getFieldError("tel")},model:{value:n.form.tel,callback:function(e){n.$set(n.form,"tel",e)},expression:"form.tel"}}),n._v(" "),e("div",{staticClass:"gdpr section"},[e("p",[n._v(n._s(n.$t("gdpr_title")))]),n._v(" "),e("GdprRadio",{attrs:{label:n.$t("fields.gdpr_contact_email"),name:"kontakt_kanal_email",error:n.getFieldError("kontakt_kanal_email")},model:{value:n.form.kontakt_kanal_email,callback:function(e){n.$set(n.form,"kontakt_kanal_email",e)},expression:"form.kontakt_kanal_email"}}),n._v(" "),e("GdprRadio",{attrs:{label:n.$t("fields.gdpr_contact_sms"),name:"kontakt_kanal_sms",error:n.getFieldError("kontakt_kanal_sms")},model:{value:n.form.kontakt_kanal_sms,callback:function(e){n.$set(n.form,"kontakt_kanal_sms",e)},expression:"form.kontakt_kanal_sms"}}),n._v(" "),e("GdprRadio",{attrs:{label:n.$t("fields.gdpr_contact_telephone"),name:"kontakt_kanal_telefon",error:n.getFieldError("kontakt_kanal_telefon")},model:{value:n.form.kontakt_kanal_telefon,callback:function(e){n.$set(n.form,"kontakt_kanal_telefon",e)},expression:"form.kontakt_kanal_telefon"}}),n._v(" "),e("GdprRadio",{attrs:{label:n.$t("fields.gdpr_contact_postal"),name:"kontakt_kanal_posta",error:n.getFieldError("kontakt_kanal_posta")},model:{value:n.form.kontakt_kanal_posta,callback:function(e){n.$set(n.form,"kontakt_kanal_posta",e)},expression:"form.kontakt_kanal_posta"}})],1),n._v(" "),e("LegalAccordion",{attrs:{error:n.getFieldError("procitane_pravne_obavijesti")},model:{value:n.form.procitane_pravne_obavijesti,callback:function(e){n.$set(n.form,"procitane_pravne_obavijesti",e)},expression:"form.procitane_pravne_obavijesti"}}),n._v(" "),e("div",{staticClass:"submit-form"},[e("button",{staticClass:"submit-form-button",attrs:{autocomplete:"off",type:"submit"}},[n._v(n._s(n.$t("submit")))])])],1)])])},__vue_staticRenderFns__$5=[];__vue_render__$5._withStripped=!0;var __vue_inject_styles__$5=void 0,__vue_scope_id__$5=void 0,__vue_module_identifier__$5=void 0,__vue_is_functional_template__$5=!1,__vue_component__$5=normalizeComponent({render:__vue_render__$5,staticRenderFns:__vue_staticRenderFns__$5},__vue_inject_styles__$5,__vue_script__$5,__vue_scope_id__$5,__vue_is_functional_template__$5,__vue_module_identifier__$5,!1,void 0,void 0,void 0);function install(e){install.installed||(install.installed=!0,e.component("RnaContactForm",__vue_component__$5))}var plugin={install:install},GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:"undefined"!=typeof global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin);export default __vue_component__$5;export{install};
