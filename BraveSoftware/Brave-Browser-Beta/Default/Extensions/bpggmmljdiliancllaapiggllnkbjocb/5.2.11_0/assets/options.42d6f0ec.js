import{_ as S,S as g,H as f,D as w,G as y,F as D}from"./index.c4487287.js";import{g as B,r as I,o as a,c as r,b as s,t as l,w as i,v as p,F as _,h,i as d,j as m,k as V,e as b,p as N,d as M,f as P}from"./vendor.e27de656.js";var C="/logo/icon.png";chrome||browser;const U={options:{locale:e=>{const{normalize:t}=e;return t(["Locale"])},languages:e=>{const{normalize:t}=e;return t(["Translation Languagues"])},icon:e=>{const{normalize:t}=e;return t(["Ddict Icon"])},iconBadge:e=>{const{normalize:t}=e;return t(["There will be a Ddict Icon when you select text"])},dbclick:e=>{const{normalize:t}=e;return t(["Double click on word to translate"])},shift:e=>{const{normalize:t}=e;return t(['Select text then press "Shift" button to translate'])},tts:e=>{const{normalize:t}=e;return t(["Auto pronounce/TTS"])},ttsBadge:e=>{const{normalize:t}=e;return t(["Only for word/dictionary not for sentences"])},hotkeysTranslate:e=>{const{normalize:t}=e;return t(["Hotkeys for translate"])},hotkeysPopup:e=>{const{normalize:t}=e;return t(["Hotkeys for Popup"])},new:e=>{const{normalize:t}=e;return t(["New"])},close:e=>{const{normalize:t}=e;return t(["Close"])}}},F={options:{locale:e=>{const{normalize:t}=e;return t(["Ng\xF4n ng\u1EEF"])},languages:e=>{const{normalize:t}=e;return t(["Ng\xF4n ng\u1EEF d\u1ECBch"])},icon:e=>{const{normalize:t}=e;return t(["Ddict Icon"])},iconBadge:e=>{const{normalize:t}=e;return t(["S\u1EBD c\xF3 bi\u1EC3u t\u01B0\u1EE3ng Ddict khi b\u1EA1n ch\u1ECDn v\u0103n b\u1EA3n"])},dbclick:e=>{const{normalize:t}=e;return t(["Nh\u1EA5p \u0111\xFAp v\xE0o t\u1EEB \u0111\u1EC3 d\u1ECBch"])},shift:e=>{const{normalize:t}=e;return t(['Ch\u1ECDn v\u0103n b\u1EA3n r\u1ED3i nh\u1EA5n n\xFAt "Shift" \u0111\u1EC3 d\u1ECBch'])},tts:e=>{const{normalize:t}=e;return t(["T\u1EF1 \u0111\u1ED9ng ph\xE1t \xE2m/TTS"])},ttsBadge:e=>{const{normalize:t}=e;return t(["Ch\u1EC9 cho t\u1EEB/t\u1EEB \u0111i\u1EC3n kh\xF4ng cho c\xE2u"])},hotkeysTranslate:e=>{const{normalize:t}=e;return t(["Ph\xEDm t\u1EAFt d\u1ECBch"])},hotkeysPopup:e=>{const{normalize:t}=e;return t(["Ph\xEDm t\u1EAFt Popup"])},new:e=>{const{normalize:t}=e;return t(["M\u1EDBi"])},close:e=>{const{normalize:t}=e;return t(["\u0110\xF3ng"])}}},j={options:{locale:e=>{const{normalize:t}=e;return t(["\u0420\u043E\u0434\u043D\u043E\u0439 \u044F\u0437\u044B\u043A"])},languages:e=>{const{normalize:t}=e;return t(["\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430 \u044F\u0437\u044B\u043A\u0438"])},icon:e=>{const{normalize:t}=e;return t(["\u0417\u043D\u0430\u0447\u043E\u043A Ddict"])},iconBadge:e=>{const{normalize:t}=e;return t(["\u043F\u0440\u0438 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0438 \u0442\u0435\u043A\u0441\u0442\u0430 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u044F\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0437\u043D\u0430\u0447\u043E\u043A Ddict"])},dbclick:e=>{const{normalize:t}=e;return t(["\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u043A\u043B\u0438\u043A \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u043B\u043E\u0432"])},shift:e=>{const{normalize:t}=e;return t(["\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u043F\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u044E \u043A\u043B\u0430\u0432\u0438\u0448\u0438 Shift"])},tts:e=>{const{normalize:t}=e;return t(["\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0447\u0438\u0442\u0430\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442"])},ttsBadge:e=>{const{normalize:t}=e;return t(["\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438"])},hotkeysTranslate:e=>{const{normalize:t}=e;return t(["\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u0442\u044C \u043F\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u044E"])},hotkeysPopup:e=>{const{normalize:t}=e;return t(["\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A \u043F\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u044E"])},newTab:e=>{const{normalize:t}=e;return t(["\u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u0432\u043A\u043B\u0430\u0434\u043A\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435\u0439 Ddict"])},contextMenu:e=>{const{normalize:t}=e;return t(["\u041A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u043D\u043E\u0435 \u043C\u0435\u043D\u044E (\u043F\u0440\u0430\u0432\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \u043C\u044B\u0448\u0438)"])},new:e=>{const{normalize:t}=e;return t(["New"])},close:e=>{const{normalize:t}=e;return t(["\u0417\u0430\u043A\u0440\u044B\u0442\u044C"])}}},A="en",z=B({locale:A,fallbackLocale:"en",messages:{en:U,vi:F,ru:j},globalInjection:!0,legacy:!1});var k={i18n:z,setLocale:E,getLocale:H};function H(){return z.global.locale}function E(e){z.global.locale.value=e}var G="/logo/16.png";const x="settings",W={data(){return{settings:null,lang:"",langOptions:{},srcOptions:{},targetOptions:{},isMac:navigator.platform==="MacIntel"}},watch:{settings:{async handler(e){await this.save(e)},deep:!0},async lang(e){const t=await this.getLanguages(e);this.srcOptions=t.sl,this.targetOptions=t.tl,k.setLocale(e),await g.set("lang",e),await g.set("languages",t)}},async created(){const e=await g.get(null);this.langOptions=await this.getLangOptions(),this.lang=e.lang||f.detectLanguage()||w.lang,k.setLocale(this.lang),this.settings=e.settings||w.settings,this.settings.hasOwnProperty.hotkeysTranslate||(this.settings.hotkeysTranslate=!0)},methods:{close(){f.closeTab()},async getLangOptions(){return(await y.getLanguages("en")).tl},async getLanguages(e){return await y.getLanguages(e)},async save(e){await g.set(x,e)},async load(){return await g.get(x)}}},c=e=>(N("data-v-487c3590"),e=e(),M(),e),q={class:"card flex-shrink-0 w-full shadow-2xl bg-base-100"},J={key:0,class:"card-body"},K={class:"form-control"},Q={class:"label"},R={class:"label-text"},X=["value"],Y={class:"form-control"},Z={class:"label"},$={class:"label-text"},ee={class:"flex flex-row gap-2"},te=["value"],se=c(()=>s("button",{class:"grow-0",disabled:""},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7l5 5m0 0l-5 5m5-5H6"})])],-1)),oe=["value"],ne=c(()=>s("div",{class:"divider mb-1"},null,-1)),le={class:"form-control"},ae={class:"cursor-pointer label"},re=c(()=>s("img",{class:"inline",src:G},null,-1)),ie={class:"label pt-0"},ce={class:"badge badge-neutral text-xs italic"},de={class:"form-control"},ue={class:"cursor-pointer label"},ge={class:"form-control"},me={class:"cursor-pointer label"},_e={class:"form-control"},pe={class:"cursor-pointer label"},he={class:"label pt-0"},be={class:"badge badge-neutral text-xs italic"},ze={class:"form-control"},ke={class:"cursor-pointer label"},ve={class:"kbd kbd-sm"},fe=d(" + "),we=c(()=>s("kbd",{class:"kbd kbd-sm"},"W",-1)),ye={class:"badge badge-error text-xs"},xe={class:"form-control"},Te={class:"cursor-pointer label"},Le={class:"kbd kbd-sm"},Oe=d(" + "),Se=c(()=>s("kbd",{class:"kbd kbd-sm"},"Shift",-1)),De=d(" + "),Be=c(()=>s("kbd",{class:"kbd kbd-sm"},"D",-1)),Ie=c(()=>s("input",{type:"checkbox",checked:"checked",class:"toggle toggle-md",disabled:""},null,-1)),Ve=c(()=>s("div",{class:"divider"},null,-1)),Ne={class:"form-control"};function Me(e,t,L,Ae,n,v){const O=I("Footer");return a(),r(_,null,[s("div",q,[n.settings?(a(),r("div",J,[s("div",K,[s("label",Q,[s("span",R,l(e.$t("options.locale")),1)]),i(s("select",{"onUpdate:modelValue":t[0]||(t[0]=o=>n.lang=o),class:"select select-bordered w-full"},[(a(!0),r(_,null,h(n.langOptions,(o,u)=>(a(),r("option",{value:u},l(o),9,X))),256))],512),[[p,n.lang]])]),s("div",Y,[s("label",Z,[s("span",$,l(e.$t("options.languages")),1)]),s("div",ee,[i(s("select",{"onUpdate:modelValue":t[1]||(t[1]=o=>n.settings.src=o),class:"select select-bordered grow"},[(a(!0),r(_,null,h(n.srcOptions,(o,u)=>(a(),r("option",{value:u},l(o),9,te))),256))],512),[[p,n.settings.src]]),se,i(s("select",{"onUpdate:modelValue":t[2]||(t[2]=o=>n.settings.target=o),class:"select select-bordered grow"},[(a(!0),r(_,null,h(n.targetOptions,(o,u)=>(a(),r("option",{value:u},l(o),9,oe))),256))],512),[[p,n.settings.target]])])]),ne,s("div",le,[s("label",ae,[s("span",null,[d(l(e.$t("options.icon"))+" ",1),re]),i(s("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>n.settings.icon=o),type:"checkbox",checked:"checked",class:"toggle toggle-md"},null,512),[[m,n.settings.icon]])]),s("label",ie,[s("span",ce,l(e.$t("options.iconBadge")),1)])]),s("div",de,[s("label",ue,[s("span",null,l(e.$t("options.dbclick")),1),i(s("input",{"onUpdate:modelValue":t[4]||(t[4]=o=>n.settings.dbclick=o),type:"checkbox",checked:"checked",class:"toggle toggle-md"},null,512),[[m,n.settings.dbclick]])])]),s("div",ge,[s("label",me,[s("span",null,l(e.$t("options.shift")),1),i(s("input",{"onUpdate:modelValue":t[5]||(t[5]=o=>n.settings.shift=o),type:"checkbox",checked:"checked",class:"toggle toggle-md"},null,512),[[m,n.settings.shift]])])]),s("div",_e,[s("label",pe,[s("span",null,l(e.$t("options.tts")),1),i(s("input",{"onUpdate:modelValue":t[6]||(t[6]=o=>n.settings.tts=o),type:"checkbox",checked:"checked",class:"toggle toggle-md"},null,512),[[m,n.settings.tts]])]),s("label",he,[s("span",be,l(e.$t("options.ttsBadge")),1)])]),s("div",ze,[s("label",ke,[s("span",null,[d(l(e.$t("options.hotkeysTranslate"))+" ",1),s("kbd",ve,l(n.isMac?"Option":"Alt"),1),fe,we]),s("span",ye,l(e.$t("options.new")),1),i(s("input",{"onUpdate:modelValue":t[7]||(t[7]=o=>n.settings.hotkeysTranslate=o),type:"checkbox",checked:"checked",class:"toggle toggle-md"},null,512),[[m,n.settings.hotkeysTranslate]])])]),s("div",xe,[s("label",Te,[s("span",null,[d(l(e.$t("options.hotkeysPopup"))+" ",1),s("kbd",Le,l(n.isMac?"Option":"Alt"),1),Oe,Se,De,Be]),Ie])]),Ve,s("div",Ne,[s("button",{onClick:t[8]||(t[8]=(...o)=>v.close&&v.close(...o)),class:"btn btn-neutral"},l(e.$t("options.close")),1)])])):V("",!0)]),b(O)],64)}var Pe=S(W,[["render",Me],["__scopeId","data-v-487c3590"]]);const Ce={class:"hero min-h-screen bg-base-200"},Ue={class:"flex-col hero-content"},Fe=s("header",{class:"text-center"},[s("img",{class:"inline",src:C,alt:""}),s("h1",{class:"mb-1 text-4xl font-bold"}," Ddict Extension "),s("p",{class:"mb-5"}," Translator - Dictionary ")],-1),je={setup(e){return(t,L)=>(a(),r("div",Ce,[s("div",Ue,[Fe,b(Pe),b(D)])]))}},T=P(je);T.use(k.i18n);T.mount("#app");
