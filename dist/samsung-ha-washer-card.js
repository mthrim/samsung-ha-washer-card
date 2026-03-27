(()=>{var xt=Object.defineProperty;var v=(s,e)=>()=>(s&&(e=s(s=0)),e);var St=(s,e)=>{for(var t in e)xt(s,t,{get:e[t],enumerable:!0})};var K,q,de,De,O,Ie,U,He,pe,ue=v(()=>{K=globalThis,q=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,de=Symbol(),De=new WeakMap,O=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==de)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(q&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=De.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&De.set(t,e))}return e}toString(){return this.cssText}},Ie=s=>new O(typeof s=="string"?s:s+"",void 0,de),U=(s,...e)=>{let t=s.length===1?s[0]:e.reduce((i,o,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[r+1],s[0]);return new O(t,s,de)},He=(s,e)=>{if(q)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),o=K.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,s.appendChild(i)}},pe=q?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return Ie(t)})(s):s});var At,Et,Ct,kt,Tt,Nt,Y,ze,Pt,Lt,D,me,Be,Fe,$,J=v(()=>{ue();ue();({is:At,defineProperty:Et,getOwnPropertyDescriptor:Ct,getOwnPropertyNames:kt,getOwnPropertySymbols:Tt,getPrototypeOf:Nt}=Object),Y=globalThis,ze=Y.trustedTypes,Pt=ze?ze.emptyScript:"",Lt=Y.reactiveElementPolyfillSupport,D=(s,e)=>s,me={toAttribute(s,e){switch(e){case Boolean:s=s?Pt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Be=(s,e)=>!At(s,e),Fe={attribute:!0,type:String,converter:me,reflect:!1,useDefault:!1,hasChanged:Be};Symbol.metadata??=Symbol("metadata"),Y.litPropertyMetadata??=new WeakMap;$=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Fe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Et(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){let{get:o,set:r}=Ct(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:o,set(n){let l=o?.call(this);r?.call(this,n),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Fe}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;let e=Nt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){let t=this.properties,i=[...kt(t),...Tt(t)];for(let o of i)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,o]of t)this.elementProperties.set(i,o)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let o=this._$Eu(t,i);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let o of i)t.unshift(pe(o))}else e!==void 0&&t.push(pe(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return He(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:me).toAttribute(t,i.type);this._$Em=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){let i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let r=i.getPropertyOptions(o),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:me;this._$Em=o;let l=n.fromAttribute(t,r.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(e,t,i,o=!1,r){if(e!==void 0){let n=this.constructor;if(o===!1&&(r=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??Be)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,r]of i){let{wrapped:n}=r,l=this[o];n!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,r,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[D("elementProperties")]=new Map,$[D("finalized")]=new Map,Lt?.({ReactiveElement:$}),(Y.reactiveElementVersions??=[]).push("2.1.2")});function Xe(s,e){if(!we(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ve!==void 0?Ve.createHTML(e):e}function k(s,e,t=s,i){if(e===E)return e;let o=i!==void 0?t._$Co?.[i]:t._$Cl,r=z(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),r===void 0?o=void 0:(o=new r(s),o._$AT(s,t,i)),i!==void 0?(t._$Co??=[])[i]=o:t._$Cl=o),o!==void 0&&(e=k(s,o._$AS(s,e.values),o,i)),e}var ve,je,Z,Ve,Je,w,Ze,Rt,A,H,z,we,Mt,ge,I,We,Ge,x,Ke,qe,Qe,xe,u,Kt,qt,E,_,Ye,S,Ot,F,_e,B,T,fe,be,ye,$e,Ut,et,Q=v(()=>{ve=globalThis,je=s=>s,Z=ve.trustedTypes,Ve=Z?Z.createPolicy("lit-html",{createHTML:s=>s}):void 0,Je="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,Ze="?"+w,Rt=`<${Ze}>`,A=document,H=()=>A.createComment(""),z=s=>s===null||typeof s!="object"&&typeof s!="function",we=Array.isArray,Mt=s=>we(s)||typeof s?.[Symbol.iterator]=="function",ge=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,We=/-->/g,Ge=/>/g,x=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ke=/'/g,qe=/"/g,Qe=/^(?:script|style|textarea|title)$/i,xe=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),u=xe(1),Kt=xe(2),qt=xe(3),E=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Ye=new WeakMap,S=A.createTreeWalker(A,129);Ot=(s,e)=>{let t=s.length-1,i=[],o,r=e===2?"<svg>":e===3?"<math>":"",n=I;for(let l=0;l<t;l++){let a=s[l],d,h,p=-1,m=0;for(;m<a.length&&(n.lastIndex=m,h=n.exec(a),h!==null);)m=n.lastIndex,n===I?h[1]==="!--"?n=We:h[1]!==void 0?n=Ge:h[2]!==void 0?(Qe.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=x):h[3]!==void 0&&(n=x):n===x?h[0]===">"?(n=o??I,p=-1):h[1]===void 0?p=-2:(p=n.lastIndex-h[2].length,d=h[1],n=h[3]===void 0?x:h[3]==='"'?qe:Ke):n===qe||n===Ke?n=x:n===We||n===Ge?n=I:(n=x,o=void 0);let g=n===x&&s[l+1].startsWith("/>")?" ":"";r+=n===I?a+Rt:p>=0?(i.push(d),a.slice(0,p)+Je+a.slice(p)+w+g):a+w+(p===-2?l:g)}return[Xe(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},F=class s{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,n=0,l=e.length-1,a=this.parts,[d,h]=Ot(e,t);if(this.el=s.createElement(d,i),S.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=S.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let p of o.getAttributeNames())if(p.endsWith(Je)){let m=h[n++],g=o.getAttribute(p).split(w),f=/([.?@])?(.*)/.exec(m);a.push({type:1,index:r,name:f[2],strings:g,ctor:f[1]==="."?fe:f[1]==="?"?be:f[1]==="@"?ye:T}),o.removeAttribute(p)}else p.startsWith(w)&&(a.push({type:6,index:r}),o.removeAttribute(p));if(Qe.test(o.tagName)){let p=o.textContent.split(w),m=p.length-1;if(m>0){o.textContent=Z?Z.emptyScript:"";for(let g=0;g<m;g++)o.append(p[g],H()),S.nextNode(),a.push({type:2,index:++r});o.append(p[m],H())}}}else if(o.nodeType===8)if(o.data===Ze)a.push({type:2,index:r});else{let p=-1;for(;(p=o.data.indexOf(w,p+1))!==-1;)a.push({type:7,index:r}),p+=w.length-1}r++}}static createElement(e,t){let i=A.createElement("template");return i.innerHTML=e,i}};_e=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??A).importNode(t,!0);S.currentNode=o;let r=S.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new B(r,r.nextSibling,this,e):a.type===1?d=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(d=new $e(r,this,e)),this._$AV.push(d),a=i[++l]}n!==a?.index&&(r=S.nextNode(),n++)}return S.currentNode=A,o}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},B=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),z(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Mt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=F.createElement(Xe(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{let r=new _e(o,this),n=r.u(this.options);r.p(t),this.T(n),this._$AH=r}}_$AC(e){let t=Ye.get(e.strings);return t===void 0&&Ye.set(e.strings,t=new F(e)),t}k(e){we(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,o=0;for(let r of e)o===t.length?t.push(i=new s(this.O(H()),this.O(H()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=je(e).nextSibling;je(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(e,t=this,i,o){let r=this.strings,n=!1;if(r===void 0)e=k(this,e,t,0),n=!z(e)||e!==this._$AH&&e!==E,n&&(this._$AH=e);else{let l=e,a,d;for(e=r[0],a=0;a<r.length-1;a++)d=k(this,l[i+a],t,a),d===E&&(d=this._$AH[a]),n||=!z(d)||d!==this._$AH[a],d===_?e=_:e!==_&&(e+=(d??"")+r[a+1]),this._$AH[a]=d}n&&!o&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},fe=class extends T{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},be=class extends T{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},ye=class extends T{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=k(this,e,t,0)??_)===E)return;let i=this._$AH,o=e===_&&i!==_||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==_&&(i===_||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},$e=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}},Ut=ve.litHtmlPolyfillSupport;Ut?.(F,B),(ve.litHtmlVersions??=[]).push("3.3.2");et=(s,e,t)=>{let i=t?.renderBefore??e,o=i._$litPart$;if(o===void 0){let r=t?.renderBefore??null;i._$litPart$=o=new B(e.insertBefore(H(),r),r,void 0,t??{})}return o._$AI(s),o}});var Se,y,Dt,tt=v(()=>{J();J();Q();Q();Se=globalThis,y=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=et(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};y._$litElement$=!0,y.finalized=!0,Se.litElementHydrateSupport?.({LitElement:y});Dt=Se.litElementPolyfillSupport;Dt?.({LitElement:y});(Se.litElementVersions??=[]).push("4.2.2")});var it=v(()=>{});var Ae=v(()=>{J();Q();tt();it()});var st,N,c,j,X,ee=v(()=>{st="samsung-ha-washer-card",N={device_name:"washer",title:"Washer",show_subtitle:!0,layout_mode:"hero",show_completion_time:!0,show_status_chips:!0,show_child_lock:!0,show_power:!0,show_energy:!0,show_bubble_soak_control:!0,show_washer_settings:!0,show_drum_progress:!0,drum_progress_color:"#5b9cf6",finished_green_duration:60,completion_color_threshold_1:50,completion_color_threshold_2:30,icons:{appliance:"mdi:washing-machine",start:"mdi:play",pause:"mdi:pause",stop:"mdi:stop",child_lock:"mdi:lock",remote_control:"mdi:remote",bubble_soak:"mdi:water-circle",power:"mdi:flash",energy:"mdi:lightning-bolt",complete:"mdi:clock-outline",spin_level:"mdi:rotate-3d-variant",rinse_cycles:"mdi:water-sync",extra_detergent:"mdi:bottle-tonic"}},c={machineState:"machine_state",jobState:"job_state",completionTime:"completion_time",command:"command",childLock:"child_lock",remoteControl:"remote_control",bubbleSoak:"bubble_soak",spinLevel:"spin_level",rinseCycles:"rinse_cycles",extraDetergent:"extra_detergent",power:"power",cycleEnergy:"cycle_energy"},j={wash:"Washing",rinse:"Rinsing",spin:"Spinning",pre_wash:"Pre-Wash",delay_wash:"Delayed",finish:"Finished",none:"Idle",drying:"Drying",air_wash:"Air Wash",ai_wash:"AI Wash",ai_rinse:"AI Rinse",ai_spin:"AI Spin",cooling:"Cooling",weight_sensing:"Weight Sensing",wrinkle_prevent:"Wrinkle Prevention",freeze_protection:"Freeze Protection"},X={run:"Running",pause:"Paused",stop:"Stopped"}});var mt={};St(mt,{SamsungHAWasherCardEditor:()=>se});var It,Ht,zt,se,ke=v(()=>{Ae();ee();It=[{key:"machine_state_entity",label:"Machine State Entity"},{key:"job_state_entity",label:"Job State Entity"},{key:"completion_time_entity",label:"Completion Time Entity"},{key:"command_entity",label:"Command Entity"},{key:"child_lock_entity",label:"Child Lock Entity"},{key:"remote_control_entity",label:"Remote Control Entity"},{key:"bubble_soak_entity",label:"Bubble Soak Entity"},{key:"spin_level_entity",label:"Spin Level Entity"},{key:"rinse_cycles_entity",label:"Rinse Cycles Entity"},{key:"extra_detergent_entity",label:"Extra Detergent Entity"},{key:"power_entity",label:"Power Entity"},{key:"energy_entity",label:"Energy Entity"}],Ht=[{key:"show_subtitle",label:"Show subtitle"},{key:"show_completion_time",label:"Show completion time"},{key:"show_status_chips",label:"Show status chips"},{key:"show_child_lock",label:"Show child lock badge"},{key:"show_power",label:"Show power"},{key:"show_energy",label:"Show cycle energy"},{key:"show_bubble_soak_control",label:"Show bubble soak control"},{key:"show_washer_settings",label:"Show washer settings (spin, rinse, detergent)"},{key:"show_drum_progress",label:"Show drum progress fill"}],zt=[{key:"appliance",label:"Appliance Icon"},{key:"start",label:"Start Icon"},{key:"pause",label:"Pause Icon"},{key:"stop",label:"Stop Icon"},{key:"child_lock",label:"Child Lock Icon"},{key:"remote_control",label:"Remote Icon"},{key:"bubble_soak",label:"Bubble Soak Icon"},{key:"spin_level",label:"Spin Level Icon"},{key:"rinse_cycles",label:"Rinse Cycles Icon"},{key:"extra_detergent",label:"Extra Detergent Icon"},{key:"power",label:"Power Icon"},{key:"energy",label:"Energy Icon"},{key:"complete",label:"Completion Icon"}],se=class extends y{static properties={hass:{},_config:{state:!0}};static styles=U`
    :host {
      display: block;
    }

    .section {
      padding: 12px 0;
      border-bottom: 1px solid var(--divider-color);
    }

    .section:last-child {
      border-bottom: none;
    }

    .section-title {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 12px;
    }

    .field {
      margin-bottom: 12px;
    }

    .field:last-child {
      margin-bottom: 0;
    }

    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
    }

    .threshold-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 12px;
    }

    .threshold-row:last-child {
      margin-bottom: 0;
    }

    .select-field {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .select-label {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    select {
      min-height: 40px;
      border-radius: 10px;
      border: 1px solid var(--divider-color);
      background: var(--card-background-color);
      color: var(--primary-text-color);
      padding: 0 10px;
      font: inherit;
    }
  `;setConfig(e){this._config={...N,...e,icons:{...N.icons,...e&&e.icons||{}}}}_emitConfig(e){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}_updateField(e,t){let i={...this._config};t===""||t===null||t===void 0?delete i[e]:i[e]=t,this._emitConfig(i)}_updateBoolean(e,t){this._emitConfig({...this._config,[e]:t})}_updateIcon(e,t){let i={...this._config.icons||{}};t===""||t===null||t===void 0?delete i[e]:i[e]=t,this._emitConfig({...this._config,icons:i})}_renderTextField(e,t,i,o=""){return u`
      <div class="field">
        <ha-textfield
          .label=${e}
          .value=${t||""}
          .helper=${o}
          .helperPersistent=${!!o}
          @input=${i}
        ></ha-textfield>
      </div>
    `}_renderEntityField(e,t){return u`
      <div class="field">
        <ha-entity-picker
          .hass=${this.hass}
          .label=${e}
          .value=${this._config[t]||""}
          allow-custom-entity
          @value-changed=${i=>this._updateField(t,i.detail.value)}
        ></ha-entity-picker>
      </div>
    `}_renderSwitch(e,t){return u`
      <div class="field">
        <ha-formfield .label=${e}>
          <ha-switch
            .checked=${!!this._config[t]}
            @change=${i=>this._updateBoolean(t,i.target.checked)}
          ></ha-switch>
        </ha-formfield>
      </div>
    `}_renderThresholdColorRow(e){let t=`completion_color_threshold_${e}`,i=`completion_color_${e}`,o=this._config[t],r=this._config[i]||"";return u`
      <div class="threshold-row">
        <ha-textfield
          .label=${`Threshold ${e} (%)`}
          .value=${o!=null?String(o):""}
          type="number"
          min="0"
          max="100"
          @input=${n=>{let l=n.target.value;this._updateField(t,l===""?void 0:Number(l))}}
        ></ha-textfield>
        <ha-textfield
          .label=${`Color ${e} (hex)`}
          .value=${r}
          placeholder="#RRGGBB"
          @input=${n=>this._updateField(i,n.target.value)}
        ></ha-textfield>
      </div>
    `}_renderLayoutModeField(){return u`
      <div class="field">
        <div class="select-field">
          <div class="select-label">Layout Mode</div>
          <select
            .value=${this._config.layout_mode||"hero"}
            @change=${e=>this._updateField("layout_mode",e.target.value)}
          >
            <option value="hero">Hero</option>
            <option value="compact">Compact</option>
          </select>
        </div>
      </div>
    `}render(){return!this.hass||!this._config?u``:u`
      <div class="section">
        <div class="section-title">General</div>
        ${this._renderTextField("Title",this._config.title,e=>this._updateField("title",e.target.value))}
        ${this._renderTextField("Device Name",this._config.device_name,e=>this._updateField("device_name",e.target.value),"Used for automatic entity discovery, for example: washer")}
        ${this._renderLayoutModeField()}
      </div>

      <div class="section">
        <div class="section-title">Display Options</div>
        ${Ht.map(e=>this._renderSwitch(e.label,e.key))}
        ${this._renderTextField("Drum progress color (hex)",this._config.drum_progress_color,e=>this._updateField("drum_progress_color",e.target.value),"Color of the progress fill inside the drum circle")}
        ${this._renderTextField("Green highlight duration (minutes)",this._config.finished_green_duration!=null?String(this._config.finished_green_duration):"",e=>this._updateField("finished_green_duration",e.target.value===""?void 0:Number(e.target.value)),"How long the card stays green after finishing (0 = always)")}
      </div>

      <div class="section">
        <div class="section-title">Completion Time Colors</div>
        <div class="field" style="color: var(--secondary-text-color); font-size: 0.85rem; margin-bottom: 12px;">
          Color the remaining-time badge when below a % threshold. Leave blank to use the default color.
        </div>
        ${this._renderThresholdColorRow(1)}
        ${this._renderThresholdColorRow(2)}
      </div>

      <div class="section">
        <div class="section-title">Entities</div>
        ${It.map(e=>this._renderEntityField(e.label,e.key))}
      </div>

      <div class="section">
        <div class="section-title">Icons</div>
        <div class="icon-grid">
          ${zt.map(e=>this._renderTextField(e.label,this._config.icons&&this._config.icons[e.key],t=>this._updateIcon(e.key,t.target.value)))}
        </div>
      </div>
    `}};customElements.define("samsung-ha-washer-card-editor",se)});Ae();ee();function ot(s){return{...N,...s,icons:{...N.icons,...s&&s.icons||{}}}}function rt(s){let e=s.device_name||"washer";return{[c.machineState]:s.machine_state_entity||`sensor.${e}_machine_state`,[c.jobState]:s.job_state_entity||`sensor.${e}_job_state`,[c.completionTime]:s.completion_time_entity||`sensor.${e}_completion_time`,[c.command]:s.command_entity||`select.${e}`,[c.childLock]:s.child_lock_entity||`binary_sensor.${e}_child_lock`,[c.remoteControl]:s.remote_control_entity||`binary_sensor.${e}_remote_control`,[c.bubbleSoak]:s.bubble_soak_entity||`switch.${e}_bubble_soak`,[c.spinLevel]:s.spin_level_entity||`select.${e}_spin_level`,[c.rinseCycles]:s.rinse_cycles_entity||`number.${e}_rinse_cycles`,[c.extraDetergent]:s.extra_detergent_entity||`sensor.${e}_extra_detergent`,[c.power]:s.power_entity||`sensor.${e}_power`,[c.cycleEnergy]:s.energy_entity||`sensor.${e}_power_energy`}}function V(s,e){return e?s.states[e]:void 0}function C(s,e){let t=V(s,e);return t?t.state:void 0}function te(s,e){return C(s,e)==="on"}function b(s){return s==null||s==="unknown"||s==="unavailable"}function P(s){return!s||b(s)?"Unknown":s.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function nt(s,e){return s==="pause"?"Paused":s==="run"?j[e]||X[s]||"Running":s==="stop"&&e==="finish"?"Finished":s==="stop"&&e&&e!=="none"?j[e]||"Stopped":X[s]||P(s)||"Stopped"}function at(s,e){return s==="pause"&&e&&e!=="none"?j[e]||P(e):s==="run"?X[s]||"Running":e==="finish"?"Cycle complete":e&&e!=="none"?j[e]||P(e):"Ready"}function lt(s,e){return!b(e)&&(s==="run"||s==="pause")}function ct(s,e){if(b(e))return"";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;try{return new Intl.DateTimeFormat(s.locale?.language||"en-US",{hour:"2-digit",hour12:!1,minute:"2-digit"}).format(t)}catch{return t.toLocaleTimeString([],{hour:"2-digit",hour12:!1,minute:"2-digit"})}}function ht(s,e){if(!s||s.state!=="stop")return!1;if(!e)return!0;let t=new Date(s.last_changed);return Number.isNaN(t.getTime())?!0:Date.now()-t.getTime()<=e*6e4}function dt(s){if(!s)return null;let e=new Date(s).getTime(),t=Date.now(),i=e-t;if(Number.isNaN(e)||i<=0)return null;let o=Math.floor(i/6e4),r=Math.floor(i%6e4/1e3);if(o<10)return`${o}m ${r}s`;if(o<=90)return`${o}m`;let n=Math.floor(o/60),l=o%60;return l>0?`${n}h ${l}m`:`${n}h`}function Ee(s,e){let t=s?.attributes?.power_consumption_start;if(!t||!e)return null;let i=new Date(t).getTime(),o=new Date(e).getTime(),r=Date.now();return Number.isNaN(i)||Number.isNaN(o)||o<=i?null:Math.max(0,Math.min(100,(o-r)/(o-i)*100))}function pt(s,e,t){let i=t.completion_color_threshold_1,o=t.completion_color_1,r=t.completion_color_threshold_2,n=t.completion_color_2;if(!i&&i!==0&&!r&&r!==0||!o&&!n)return null;let l=Ee(s,e);if(l===null)return null;let a=[];i!=null&&o&&a.push({threshold:Number(i),color:o}),r!=null&&n&&a.push({threshold:Number(r),color:n}),a.sort((d,h)=>d.threshold-h.threshold);for(let{threshold:d,color:h}of a)if(l<=d)return h;return null}function Ce(s,e,t){if(b(e))return"";let i=Number(e);return Number.isNaN(i)?`${e}${t?` ${t}`:""}`:`${new Intl.NumberFormat(s.locale?.language||"en-US",{maximumFractionDigits:i>=100?0:1}).format(i)}${t?` ${t}`:""}`}ee();async function ie(s,e,t){e&&await s.hass.callService("select","select_option",{entity_id:e,option:t})}async function ut(s,e){e&&await s.hass.callService("homeassistant","toggle",{entity_id:e})}var Te=class extends y{static properties={hass:{},_config:{state:!0}};static async getConfigElement(){return await Promise.resolve().then(()=>(ke(),mt)),document.createElement("samsung-ha-washer-card-editor")}static getStubConfig(){return{device_name:"washer",title:"Washer",show_subtitle:!0,layout_mode:"hero",show_completion_time:!0,show_status_chips:!0,show_power:!0,show_energy:!0,show_bubble_soak_control:!0,show_washer_settings:!0}}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=ot(e)}connectedCallback(){super.connectedCallback(),this._tickInterval=setInterval(()=>this.requestUpdate(),1e3)}disconnectedCallback(){super.disconnectedCallback(),this._tickInterval&&(clearInterval(this._tickInterval),this._tickInterval=null)}getCardSize(){return this._config?.layout_mode==="compact"?4:6}async _fetchLastKnownState(e){try{let t=[e[c.machineState],e[c.jobState],e[c.completionTime],e[c.power],e[c.cycleEnergy]].filter(Boolean).join(","),i=new Date().toISOString(),r=`history/period/${new Date(Date.now()-36e5).toISOString()}?filter_entity_id=${t}&end_time=${i}&minimal_response&significant_changes_only`,n=await this.hass.callApi("GET",r);if(!n||!n.length)return null;let l=p=>{let m=n.find(g=>g.length&&g[0].entity_id===p);if(!m)return null;for(let g=m.length-1;g>=0;g--)if(m[g].state!=="unavailable"&&m[g].state!=="unknown")return m[g];return null},a=l(e[c.machineState]);if(!a)return null;let d=l(e[c.jobState]),h=l(e[c.power]);return{machineStateEntity:a,machineState:a.state,jobState:d?d.state:void 0,completion:l(e[c.completionTime])?.state,powerState:h||void 0,energyState:l(e[c.cycleEnergy])||void 0}}catch{return null}}static styles=U`
    :host {
      display: block;
    }

    ha-card {
      position: relative;
      overflow: hidden;
      border-radius: 28px;
      padding: 20px;
      background:
        radial-gradient(circle at top right, rgba(255, 255, 255, 0.12), transparent 30%),
        radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.06), transparent 28%),
        linear-gradient(
          180deg,
          var(--ha-card-background, var(--card-background-color)) 0%,
          color-mix(
            in srgb,
            var(--ha-card-background, var(--card-background-color)) 92%,
            black 8%
          ) 100%
        );
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.05),
        0 8px 28px rgba(0, 0, 0, 0.16);
    }

    .card {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }

    .header-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.09);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
      flex-shrink: 0;
    }

    .header-icon ha-icon {
      --mdc-icon-size: 22px;
    }

    .header-text {
      min-width: 0;
    }

    .title {
      font-size: 1.08rem;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: 0.01em;
    }

    .subtitle {
      margin-top: 2px;
      color: var(--secondary-text-color);
      font-size: 0.84rem;
      line-height: 1.2;
    }


    .hero {
      display: grid;
      grid-template-columns: 140px 1fr;
      gap: 20px;
      align-items: center;
    }

    .hero.compact {
      grid-template-columns: 88px 1fr;
      gap: 14px;
    }

    .drum-wrap {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .drum-progress {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      opacity: 0.55;
      pointer-events: none;
    }

    .hero.compact .drum-progress {
      width: 88px;
      height: 88px;
    }

    .drum {
      position: relative;
      z-index: 1;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background:
        radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0.06) 42%, rgba(0, 0, 0, 0.18) 70%, rgba(0, 0, 0, 0.28) 100%);
      box-shadow:
        inset 0 2px 12px rgba(255, 255, 255, 0.12),
        inset 0 -10px 24px rgba(0, 0, 0, 0.22),
        0 12px 30px rgba(0, 0, 0, 0.16);
    }

    .hero.compact .drum {
      width: 88px;
      height: 88px;
    }

    .drum::before {
      content: "";
      position: absolute;
      inset: 10px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04) 38%, rgba(0, 0, 0, 0.25) 100%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: inset 0 2px 10px rgba(255, 255, 255, 0.06);
    }

    .hero.compact .drum::before {
      inset: 7px;
    }

    .drum::after {
      content: "";
      position: absolute;
      inset: 24px;
      border-radius: 50%;
      border: 2px dashed rgba(255, 255, 255, 0.14);
      transform-origin: center;
      animation: none;
    }

    .hero.compact .drum::after {
      inset: 16px;
    }

    .drum.running::after {
      animation: spin 6s linear infinite;
    }

    .drum-center {
      position: relative;
      z-index: 1;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.10);
      box-shadow:
        inset 0 1px 6px rgba(255, 255, 255, 0.08),
        0 2px 10px rgba(0, 0, 0, 0.16);
      backdrop-filter: blur(3px);
    }

    .hero.compact .drum-center {
      width: 40px;
      height: 40px;
    }

    .drum-center ha-icon {
      --mdc-icon-size: 30px;
    }

    .hero.compact .drum-center ha-icon {
      --mdc-icon-size: 22px;
    }

    .hero-info {
      min-width: 0;
    }

    .primary-status {
      font-size: 1.75rem;
      font-weight: 800;
      line-height: 1.08;
      letter-spacing: 0.01em;
      margin-bottom: 6px;
    }

    .hero.compact .primary-status {
      font-size: 1.3rem;
      margin-bottom: 4px;
    }

    .countdown {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 4px;
      color: var(--primary-text-color);
    }

    .hero.compact .countdown {
      font-size: 1.1rem;
    }

    .secondary-status {
      color: var(--secondary-text-color);
      font-size: 0.88rem;
      line-height: 1.35;
    }

    .hero.compact .secondary-status {
      font-size: 0.82rem;
    }

    .completion {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 38px;
      padding: 0 14px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      font-size: 0.92rem;
      font-weight: 600;
      color: var(--primary-text-color);
      flex-shrink: 0;
    }

    .completion ha-icon {
      --mdc-icon-size: 16px;
      color: var(--secondary-text-color);
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 34px;
      padding: 0 12px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      font-size: 0.82rem;
      font-weight: 600;
      line-height: 1;
    }

    .chip ha-icon {
      --mdc-icon-size: 16px;
    }

    .chip.on {
      background: rgba(255, 255, 255, 0.11);
    }

    .chip.off {
      opacity: 0.78;
    }

    .controls {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .control-btn,
    .toggle-btn {
      min-height: 46px;
      border: none;
      outline: none;
      border-radius: 16px;
      font: inherit;
      font-weight: 700;
      letter-spacing: 0.01em;
      cursor: pointer;
      transition:
        transform 0.15s ease,
        opacity 0.15s ease,
        background 0.15s ease,
        box-shadow 0.15s ease;
    }

    .control-btn {
      background: rgba(255, 255, 255, 0.08);
      color: var(--primary-text-color);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }

    .control-btn.primary {
      background: var(--primary-color);
      color: var(--text-primary-color, white);
      box-shadow: 0 8px 18px color-mix(in srgb, var(--primary-color) 34%, transparent);
    }

    .toggle-btn {
      width: 100%;
      background: rgba(255, 255, 255, 0.07);
      color: var(--primary-text-color);
    }

    .toggle-btn.active {
      background: color-mix(in srgb, var(--primary-color) 26%, rgba(255, 255, 255, 0.08));
    }

    .control-btn:hover:not(:disabled),
    .toggle-btn:hover:not(:disabled) {
      transform: translateY(-1px);
    }

    .control-btn:active:not(:disabled),
    .toggle-btn:active:not(:disabled) {
      transform: translateY(0);
    }

    .control-btn:disabled,
    .toggle-btn:disabled {
      cursor: default;
      opacity: 0.45;
      box-shadow: none;
    }

    .metrics {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .washer-settings {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .metric {
      border-radius: 18px;
      padding: 14px;
      background: rgba(255, 255, 255, 0.07);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }

    .metric-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 8px;
    }

    .metric-label {
      color: var(--secondary-text-color);
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 1.2;
    }

    .metric-value {
      font-size: 1.05rem;
      font-weight: 800;
      line-height: 1.2;
      letter-spacing: 0.01em;
    }

    .metric ha-icon {
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color);
    }

    .stale-icon {
      --mdc-icon-size: 16px;
      color: var(--warning-color, #ffa600);
      vertical-align: middle;
      margin-left: 4px;
    }

    ha-card.stale .card {
      opacity: 0.6;
    }

    ha-card.finished {
      background:
        radial-gradient(circle at top right, rgba(255, 255, 255, 0.10), transparent 30%),
        radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.05), transparent 28%),
        linear-gradient(180deg, #1a3d2a 0%, #112a1c 100%);
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 0.55;
      }
      50% {
        opacity: 0.25;
      }
    }

    @media (max-width: 480px) {
      .hero {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .hero.compact {
        grid-template-columns: 1fr;
      }

      .drum-wrap {
        justify-content: center;
      }

      .completion {
        justify-content: center;
      }

      .washer-settings {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `;getStateFlags(e){return{isRunning:e==="run",isPaused:e==="pause",isStopped:e==="stop"}}renderChip(e,t,i){return u`
      <div class="chip ${i?"on":"off"}" aria-label="${t}">
        <ha-icon .icon=${e}></ha-icon>
        <span>${t}</span>
      </div>
    `}renderMetric(e,t,i){return u`
      <div class="metric">
        <div class="metric-top">
          <div class="metric-label">${e}</div>
          <ha-icon .icon=${i}></ha-icon>
        </div>
        <div class="metric-value">${t}</div>
      </div>
    `}renderHeader(e,t,i,o,r){let n=o?`color: ${o};`:"";return u`
      <div class="header">
        <div class="header-left">
          <div class="header-icon">
            <ha-icon .icon=${e.icons.appliance}></ha-icon>
          </div>
          <div class="header-text">
            <div class="title">${e.title}${r?u` <ha-icon class="stale-icon" .icon=${"mdi:cloud-off-outline"}></ha-icon>`:""}</div>
            ${e.show_subtitle?u`<div class="subtitle">Samsung SmartThings Washer</div>`:""}
          </div>
        </div>
        ${t?u`
              <div class="completion" style=${n}>
                <ha-icon .icon=${e.icons.complete}></ha-icon>
                <span>Completes at ${ct(this.hass,i)}</span>
              </div>
            `:""}
      </div>
    `}renderHero(e,t,i,o,r,n){let l=`hero ${e.layout_mode==="compact"?"compact":""}`;return u`
      <div class=${l}>
        <div class="drum-wrap">
          ${n?u`<div class="drum-progress" style=${n}></div>`:""}
          <div class=${r}>
            <div class="drum-center">
              <ha-icon .icon=${e.icons.appliance}></ha-icon>
            </div>
          </div>
        </div>

        <div class="hero-info">
          <div class="primary-status">${t}</div>
          ${o?u`<div class="countdown">${o}</div>`:""}
          <div class="secondary-status">${i}</div>
        </div>
      </div>
    `}render(){if(!this.hass||!this._config)return u``;let e=this._config,t=rt(e),i=V(this.hass,t[c.machineState]),o=i?i.state:void 0,r=C(this.hass,t[c.jobState]),n=C(this.hass,t[c.completionTime]),l=V(this.hass,t[c.power]),a=V(this.hass,t[c.cycleEnergy]),d=b(o);d?!this._cachedState&&!this._historyPending&&(this._historyPending=!0,this._fetchLastKnownState(t).then(M=>{M&&(this._cachedState=M),this._historyPending=!1,this.requestUpdate()})):this._cachedState={machineStateEntity:i,machineState:o,jobState:r,completion:n,powerState:l,energyState:a};let h=d&&this._cachedState?this._cachedState:null,p=h?h.machineStateEntity:i,m=h?h.machineState:o,g=h?h.jobState:r,f=h?h.completion:n,L=h?h.powerState:l,oe=h?h.energyState:a,Ne=te(this.hass,t[c.bubbleSoak]),re=C(this.hass,t[c.spinLevel]),ne=C(this.hass,t[c.rinseCycles]),ae=C(this.hass,t[c.extraDetergent]),{isRunning:le,isPaused:Pe,isStopped:R}=this.getStateFlags(m),W=ht(p,e.finished_green_duration),gt=R&&W?"Finished":R&&!W?"Stopped":nt(m,g),_t=R&&W?"Cycle complete":at(m,g),ce=e.show_completion_time&&lt(m,f),ft=ce?pt(L,f,e):null,bt=(()=>{if(!e.show_drum_progress||!le&&!Pe)return null;let M=Ee(L,f);if(M===null)return null;let vt=e.drum_progress_color||"#5b9cf6",wt=.1+(100-M)*.009,Ue=`background: ${vt}; transform: translate(-50%, -50%) scale(${wt});`;if(f){let G=(new Date(f).getTime()-Date.now())/6e4;if(G<=10&&G>0){let he;G>5?he=3:he=3-(5-G)/5*2.25,Ue+=` animation: pulse ${he}s ease-in-out infinite;`}}return Ue})(),Le=te(this.hass,t[c.childLock]),Re=te(this.hass,t[c.remoteControl]),Me=L?Ce(this.hass,L.state,L.attributes.unit_of_measurement):"",Oe=oe?Ce(this.hass,oe.state,oe.attributes.unit_of_measurement):"",yt=["drum",le?"running":""].filter(Boolean).join(" "),$t=e.show_washer_settings&&(!b(re)||!b(ne)||!b(ae));return u`
      <ha-card class=${[W?"finished":"",d?"stale":""].filter(Boolean).join(" ")}>
        <div class="card">
          ${this.renderHeader(e,ce,f,ft,d)}

          ${this.renderHero(e,gt,_t,ce?dt(f):null,yt,bt)}

          ${e.show_status_chips?u`
                <div class="chips">
                  ${e.show_child_lock?this.renderChip(e.icons.child_lock,Le?"Child Lock On":"Child Lock Off",Le):""}
                  ${this.renderChip(e.icons.remote_control,Re?"Remote Enabled":"Remote Disabled",Re)}
                </div>
              `:""}

          <div class="controls">
            <button
              class="control-btn primary"
              ?disabled=${le}
              @click=${()=>ie(this,t[c.command],"run")}
            >
              Start
            </button>
            <button
              class="control-btn"
              ?disabled=${Pe||R}
              @click=${()=>ie(this,t[c.command],"pause")}
            >
              Pause
            </button>
            <button
              class="control-btn"
              ?disabled=${R}
              @click=${()=>ie(this,t[c.command],"stop")}
            >
              Stop
            </button>
          </div>

          ${e.show_bubble_soak_control?u`
                <button
                  class="toggle-btn ${Ne?"active":""}"
                  @click=${()=>ut(this,t[c.bubbleSoak])}
                >
                  ${Ne?"Bubble Soak Enabled":"Enable Bubble Soak"}
                </button>
              `:""}

          ${$t?u`
                <div class="washer-settings">
                  ${b(re)?"":this.renderMetric("Spin Level",P(re),e.icons.spin_level)}
                  ${b(ne)?"":this.renderMetric("Rinse Cycles",ne,e.icons.rinse_cycles)}
                  ${b(ae)?"":this.renderMetric("Detergent",P(ae),e.icons.extra_detergent)}
                </div>
              `:""}

          <div class="metrics">
            ${e.show_power&&Me?this.renderMetric("Power",Me,e.icons.power):""}
            ${e.show_energy&&Oe?this.renderMetric("Cycle Energy",Oe,e.icons.energy):""}
          </div>
        </div>
      </ha-card>
    `}};customElements.define(st,Te);ke();window.customCards=window.customCards||[];window.customCards.push({type:"samsung-ha-washer-card",name:"Samsung HA Washer Card",description:"A SmartThings-based Samsung washer card for Home Assistant"});})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
