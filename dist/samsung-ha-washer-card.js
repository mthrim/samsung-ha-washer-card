(()=>{var tt=Object.defineProperty;var $=(s,e)=>()=>(s&&(e=s(s=0)),e);var it=(s,e)=>{for(var t in e)tt(s,t,{get:e[t],enumerable:!0})};var F,B,X,xe,N,we,O,Se,ee,te=$(()=>{F=globalThis,B=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),xe=new WeakMap,N=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(B&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=xe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&xe.set(t,e))}return e}toString(){return this.cssText}},we=s=>new N(typeof s=="string"?s:s+"",void 0,X),O=(s,...e)=>{let t=s.length===1?s[0]:e.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new N(t,s,X)},Se=(s,e)=>{if(B)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),r=F.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},ee=B?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return we(t)})(s):s});var st,rt,ot,nt,at,lt,j,Ae,ct,ht,U,ie,ke,Ee,y,V=$(()=>{te();te();({is:st,defineProperty:rt,getOwnPropertyDescriptor:ot,getOwnPropertyNames:nt,getOwnPropertySymbols:at,getPrototypeOf:lt}=Object),j=globalThis,Ae=j.trustedTypes,ct=Ae?Ae.emptyScript:"",ht=j.reactiveElementPolyfillSupport,U=(s,e)=>s,ie={toAttribute(s,e){switch(e){case Boolean:s=s?ct:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},ke=(s,e)=>!st(s,e),Ee={attribute:!0,type:String,converter:ie,reflect:!1,useDefault:!1,hasChanged:ke};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;y=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ee){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&rt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){let{get:r,set:o}=ot(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:r,set(n){let h=r?.call(this);o?.call(this,n),this.requestUpdate(e,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ee}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;let e=lt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){let t=this.properties,i=[...nt(t),...at(t)];for(let r of i)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let r of i)t.unshift(ee(r))}else e!==void 0&&t.push(ee(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Se(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:ie).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){let i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let o=i.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ie;this._$Em=r;let h=n.fromAttribute(t,o.type);this[r]=h??this._$Ej?.get(r)??h,this._$Em=null}}requestUpdate(e,t,i,r=!1,o){if(e!==void 0){let n=this.constructor;if(r===!1&&(o=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??ke)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:o},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,o]of i){let{wrapped:n}=o,h=this[r];n!==!0||this._$AL.has(r)||h===void 0||this.C(r,void 0,o,h)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[U("elementProperties")]=new Map,y[U("finalized")]=new Map,ht?.({ReactiveElement:y}),(j.reactiveElementVersions??=[]).push("2.1.2")});function Ie(s,e){if(!he(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Te!==void 0?Te.createHTML(e):e}function C(s,e,t=s,i){if(e===k)return e;let r=i!==void 0?t._$Co?.[i]:t._$Cl,o=H(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(s),r._$AT(s,t,i)),i!==void 0?(t._$Co??=[])[i]=r:t._$Cl=r),r!==void 0&&(e=C(s,r._$AS(s,e.values),r,i)),e}var ce,Ce,W,Te,Re,v,Me,dt,E,M,H,he,pt,se,R,Pe,Le,S,Ne,Oe,He,de,u,St,At,k,m,Ue,A,ut,I,re,D,T,oe,ne,ae,le,mt,De,Y=$(()=>{ce=globalThis,Ce=s=>s,W=ce.trustedTypes,Te=W?W.createPolicy("lit-html",{createHTML:s=>s}):void 0,Re="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,Me="?"+v,dt=`<${Me}>`,E=document,M=()=>E.createComment(""),H=s=>s===null||typeof s!="object"&&typeof s!="function",he=Array.isArray,pt=s=>he(s)||typeof s?.[Symbol.iterator]=="function",se=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pe=/-->/g,Le=/>/g,S=RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ne=/'/g,Oe=/"/g,He=/^(?:script|style|textarea|title)$/i,de=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),u=de(1),St=de(2),At=de(3),k=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Ue=new WeakMap,A=E.createTreeWalker(E,129);ut=(s,e)=>{let t=s.length-1,i=[],r,o=e===2?"<svg>":e===3?"<math>":"",n=R;for(let h=0;h<t;h++){let a=s[h],d,p,c=-1,g=0;for(;g<a.length&&(n.lastIndex=g,p=n.exec(a),p!==null);)g=n.lastIndex,n===R?p[1]==="!--"?n=Pe:p[1]!==void 0?n=Le:p[2]!==void 0?(He.test(p[2])&&(r=RegExp("</"+p[2],"g")),n=S):p[3]!==void 0&&(n=S):n===S?p[0]===">"?(n=r??R,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?S:p[3]==='"'?Oe:Ne):n===Oe||n===Ne?n=S:n===Pe||n===Le?n=R:(n=S,r=void 0);let _=n===S&&s[h+1].startsWith("/>")?" ":"";o+=n===R?a+dt:c>=0?(i.push(d),a.slice(0,c)+Re+a.slice(c)+v+_):a+v+(c===-2?h:_)}return[Ie(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},I=class s{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,n=0,h=e.length-1,a=this.parts,[d,p]=ut(e,t);if(this.el=s.createElement(d,i),A.currentNode=this.el.content,t===2||t===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=A.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(let c of r.getAttributeNames())if(c.endsWith(Re)){let g=p[n++],_=r.getAttribute(c).split(v),w=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:w[2],strings:_,ctor:w[1]==="."?oe:w[1]==="?"?ne:w[1]==="@"?ae:T}),r.removeAttribute(c)}else c.startsWith(v)&&(a.push({type:6,index:o}),r.removeAttribute(c));if(He.test(r.tagName)){let c=r.textContent.split(v),g=c.length-1;if(g>0){r.textContent=W?W.emptyScript:"";for(let _=0;_<g;_++)r.append(c[_],M()),A.nextNode(),a.push({type:2,index:++o});r.append(c[g],M())}}}else if(r.nodeType===8)if(r.data===Me)a.push({type:2,index:o});else{let c=-1;for(;(c=r.data.indexOf(v,c+1))!==-1;)a.push({type:7,index:o}),c+=v.length-1}o++}}static createElement(e,t){let i=E.createElement("template");return i.innerHTML=e,i}};re=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??E).importNode(t,!0);A.currentNode=r;let o=A.nextNode(),n=0,h=0,a=i[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new D(o,o.nextSibling,this,e):a.type===1?d=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(d=new le(o,this,e)),this._$AV.push(d),a=i[++h]}n!==a?.index&&(o=A.nextNode(),n++)}return A.currentNode=E,r}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},D=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),H(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==k&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):pt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=I.createElement(Ie(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{let o=new re(r,this),n=o.u(this.options);o.p(t),this.T(n),this._$AH=o}}_$AC(e){let t=Ue.get(e.strings);return t===void 0&&Ue.set(e.strings,t=new I(e)),t}k(e){he(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,r=0;for(let o of e)r===t.length?t.push(i=new s(this.O(M()),this.O(M()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=Ce(e).nextSibling;Ce(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(e,t=this,i,r){let o=this.strings,n=!1;if(o===void 0)e=C(this,e,t,0),n=!H(e)||e!==this._$AH&&e!==k,n&&(this._$AH=e);else{let h=e,a,d;for(e=o[0],a=0;a<o.length-1;a++)d=C(this,h[i+a],t,a),d===k&&(d=this._$AH[a]),n||=!H(d)||d!==this._$AH[a],d===m?e=m:e!==m&&(e+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!r&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},oe=class extends T{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}},ne=class extends T{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},ae=class extends T{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){if((e=C(this,e,t,0)??m)===k)return;let i=this._$AH,r=e===m&&i!==m||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==m&&(i===m||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},le=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}},mt=ce.litHtmlPolyfillSupport;mt?.(I,D),(ce.litHtmlVersions??=[]).push("3.3.2");De=(s,e,t)=>{let i=t?.renderBefore??e,r=i._$litPart$;if(r===void 0){let o=t?.renderBefore??null;i._$litPart$=r=new D(e.insertBefore(M(),o),o,void 0,t??{})}return r._$AI(s),r}});var pe,f,gt,ze=$(()=>{V();V();Y();Y();pe=globalThis,f=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return k}};f._$litElement$=!0,f.finalized=!0,pe.litElementHydrateSupport?.({LitElement:f});gt=pe.litElementPolyfillSupport;gt?.({LitElement:f});(pe.litElementVersions??=[]).push("4.2.2")});var Fe=$(()=>{});var ue=$(()=>{V();Y();ze();Fe()});var Be,P,l,z,q,K=$(()=>{Be="samsung-ha-washer-card",P={device_name:"washer",title:"Washer",show_subtitle:!0,layout_mode:"hero",show_completion_time:!0,show_status_chips:!0,show_power:!0,show_energy:!0,show_bubble_soak_control:!0,show_washer_settings:!0,icons:{appliance:"mdi:washing-machine",start:"mdi:play",pause:"mdi:pause",stop:"mdi:stop",child_lock:"mdi:lock",remote_control:"mdi:remote",bubble_soak:"mdi:water-circle",power:"mdi:flash",energy:"mdi:lightning-bolt",complete:"mdi:clock-outline",spin_level:"mdi:rotate-3d-variant",rinse_cycles:"mdi:water-sync",extra_detergent:"mdi:bottle-tonic"}},l={machineState:"machine_state",jobState:"job_state",completionTime:"completion_time",command:"command",childLock:"child_lock",remoteControl:"remote_control",bubbleSoak:"bubble_soak",spinLevel:"spin_level",rinseCycles:"rinse_cycles",extraDetergent:"extra_detergent",power:"power",cycleEnergy:"cycle_energy"},z={washing:"Washing",rinsing:"Rinsing",spinning:"Spinning",pre_wash:"Pre-Wash",soaking:"Soaking",rinse_hold:"Rinse Hold",delay_wash:"Delayed",finished:"Finished",none:"Idle",spin_only:"Spin Only",drying:"Drying",sanitizing:"Sanitizing",steam:"Steam"},q={run:"Running",pause:"Paused",stop:"Stopped"}});var Je={};it(Je,{SamsungHAWasherCardEditor:()=>Q});var _t,bt,ft,Q,ge=$(()=>{ue();K();_t=[{key:"machine_state_entity",label:"Machine State Entity"},{key:"job_state_entity",label:"Job State Entity"},{key:"completion_time_entity",label:"Completion Time Entity"},{key:"command_entity",label:"Command Entity"},{key:"child_lock_entity",label:"Child Lock Entity"},{key:"remote_control_entity",label:"Remote Control Entity"},{key:"bubble_soak_entity",label:"Bubble Soak Entity"},{key:"spin_level_entity",label:"Spin Level Entity"},{key:"rinse_cycles_entity",label:"Rinse Cycles Entity"},{key:"extra_detergent_entity",label:"Extra Detergent Entity"},{key:"power_entity",label:"Power Entity"},{key:"energy_entity",label:"Energy Entity"}],bt=[{key:"show_subtitle",label:"Show subtitle"},{key:"show_completion_time",label:"Show completion time"},{key:"show_status_chips",label:"Show status chips"},{key:"show_power",label:"Show power"},{key:"show_energy",label:"Show cycle energy"},{key:"show_bubble_soak_control",label:"Show bubble soak control"},{key:"show_washer_settings",label:"Show washer settings (spin, rinse, detergent)"}],ft=[{key:"appliance",label:"Appliance Icon"},{key:"start",label:"Start Icon"},{key:"pause",label:"Pause Icon"},{key:"stop",label:"Stop Icon"},{key:"child_lock",label:"Child Lock Icon"},{key:"remote_control",label:"Remote Icon"},{key:"bubble_soak",label:"Bubble Soak Icon"},{key:"spin_level",label:"Spin Level Icon"},{key:"rinse_cycles",label:"Rinse Cycles Icon"},{key:"extra_detergent",label:"Extra Detergent Icon"},{key:"power",label:"Power Icon"},{key:"energy",label:"Energy Icon"},{key:"complete",label:"Completion Icon"}],Q=class extends f{static properties={hass:{},_config:{state:!0}};static styles=O`
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
  `;setConfig(e){this._config={...P,...e,icons:{...P.icons,...e&&e.icons||{}}}}_emitConfig(e){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}_updateField(e,t){let i={...this._config};t===""||t===null||t===void 0?delete i[e]:i[e]=t,this._emitConfig(i)}_updateBoolean(e,t){this._emitConfig({...this._config,[e]:t})}_updateIcon(e,t){let i={...this._config.icons||{}};t===""||t===null||t===void 0?delete i[e]:i[e]=t,this._emitConfig({...this._config,icons:i})}_renderTextField(e,t,i,r=""){return u`
      <div class="field">
        <ha-textfield
          .label=${e}
          .value=${t||""}
          .helper=${r}
          .helperPersistent=${!!r}
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
        ${bt.map(e=>this._renderSwitch(e.label,e.key))}
      </div>

      <div class="section">
        <div class="section-title">Entities</div>
        ${_t.map(e=>this._renderEntityField(e.label,e.key))}
      </div>

      <div class="section">
        <div class="section-title">Icons</div>
        <div class="icon-grid">
          ${ft.map(e=>this._renderTextField(e.label,this._config.icons&&this._config.icons[e.key],t=>this._updateIcon(e.key,t.target.value)))}
        </div>
      </div>
    `}};customElements.define("samsung-ha-washer-card-editor",Q)});ue();K();function je(s){return{...P,...s,icons:{...P.icons,...s&&s.icons||{}}}}function Ve(s){let e=s.device_name||"washer";return{[l.machineState]:s.machine_state_entity||`sensor.${e}_machine_state`,[l.jobState]:s.job_state_entity||`sensor.${e}_job_state`,[l.completionTime]:s.completion_time_entity||`sensor.${e}_completion_time`,[l.command]:s.command_entity||`select.${e}`,[l.childLock]:s.child_lock_entity||`binary_sensor.${e}_child_lock`,[l.remoteControl]:s.remote_control_entity||`binary_sensor.${e}_remote_control`,[l.bubbleSoak]:s.bubble_soak_entity||`switch.${e}_bubble_soak`,[l.spinLevel]:s.spin_level_entity||`sensor.${e}_spin_level`,[l.rinseCycles]:s.rinse_cycles_entity||`sensor.${e}_rinse_cycles`,[l.extraDetergent]:s.extra_detergent_entity||`sensor.${e}_extra_detergent`,[l.power]:s.power_entity||`sensor.${e}_power`,[l.cycleEnergy]:s.energy_entity||`sensor.${e}_power_energy`}}function G(s,e){return e?s.states[e]:void 0}function x(s,e){let t=G(s,e);return t?t.state:void 0}function J(s,e){return x(s,e)==="on"}function b(s){return s==null||s==="unknown"||s==="unavailable"}function L(s){return!s||b(s)?"Unknown":s.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function We(s,e){return s==="pause"?"Paused":s==="run"?z[e]||q[s]||"Running":s==="stop"&&e==="finished"?"Finished":s==="stop"&&e&&e!=="none"?z[e]||"Stopped":q[s]||L(s)||"Stopped"}function Ye(s,e){return s==="pause"&&e&&e!=="none"?z[e]||L(e):s==="run"?q[s]||"Running":e==="finished"?"Cycle complete":e&&e!=="none"?z[e]||L(e):"Ready"}function qe(s,e){return!b(e)&&(s==="run"||s==="pause")}function Ke(s,e){if(b(e))return"";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;try{return new Intl.DateTimeFormat(s.locale?.language||"en-US",{hour:"numeric",minute:"2-digit"}).format(t)}catch{return t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}}function me(s,e,t){if(b(e))return"";let i=Number(e);return Number.isNaN(i)?`${e}${t?` ${t}`:""}`:`${new Intl.NumberFormat(s.locale?.language||"en-US",{maximumFractionDigits:i>=100?0:1}).format(i)}${t?` ${t}`:""}`}K();async function Z(s,e,t){e&&await s.hass.callService("select","select_option",{entity_id:e,option:t})}async function Ge(s,e){e&&await s.hass.callService("homeassistant","toggle",{entity_id:e})}var _e=class extends f{static properties={hass:{},_config:{state:!0}};static async getConfigElement(){return await Promise.resolve().then(()=>(ge(),Je)),document.createElement("samsung-ha-washer-card-editor")}static getStubConfig(){return{device_name:"washer",title:"Washer",show_subtitle:!0,layout_mode:"hero",show_completion_time:!0,show_status_chips:!0,show_power:!0,show_energy:!0,show_bubble_soak_control:!0,show_washer_settings:!0}}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=je(e)}getCardSize(){return this._config?.layout_mode==="compact"?4:6}static styles=O`
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

    .status-badge {
      flex-shrink: 0;
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      color: var(--primary-text-color);
      font-size: 0.78rem;
      font-weight: 700;
      line-height: 1;
      white-space: nowrap;
      text-transform: uppercase;
      letter-spacing: 0.04em;
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
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .drum {
      position: relative;
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

    .secondary-status {
      color: var(--secondary-text-color);
      font-size: 0.96rem;
      line-height: 1.35;
      margin-bottom: 12px;
    }

    .hero.compact .secondary-status {
      font-size: 0.88rem;
      margin-bottom: 8px;
    }

    .completion {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 34px;
      padding: 0 12px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      font-size: 0.84rem;
      font-weight: 600;
      color: var(--primary-text-color);
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

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
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
    `}renderHeader(e,t){return u`
      <div class="header">
        <div class="header-left">
          <div class="header-icon">
            <ha-icon .icon=${e.icons.appliance}></ha-icon>
          </div>
          <div class="header-text">
            <div class="title">${e.title}</div>
            ${e.show_subtitle?u`<div class="subtitle">Samsung SmartThings Washer</div>`:""}
          </div>
        </div>
        <div class="status-badge">${t}</div>
      </div>
    `}renderHero(e,t,i,r,o,n){let h=`hero ${e.layout_mode==="compact"?"compact":""}`;return u`
      <div class=${h}>
        <div class="drum-wrap">
          <div class=${n}>
            <div class="drum-center">
              <ha-icon .icon=${e.icons.appliance}></ha-icon>
            </div>
          </div>
        </div>

        <div class="hero-info">
          <div class="primary-status">${t}</div>
          <div class="secondary-status">${i}</div>

          ${r?u`
                <div class="completion">
                  <ha-icon .icon=${e.icons.complete}></ha-icon>
                  <span>Completes at ${Ke(this.hass,o)}</span>
                </div>
              `:""}
        </div>
      </div>
    `}render(){if(!this.hass||!this._config)return u``;let e=this._config,t=Ve(e),i=x(this.hass,t[l.machineState]),r=x(this.hass,t[l.jobState]),o=x(this.hass,t[l.completionTime]),n=G(this.hass,t[l.power]),h=G(this.hass,t[l.cycleEnergy]),a=J(this.hass,t[l.bubbleSoak]),d=x(this.hass,t[l.spinLevel]),p=x(this.hass,t[l.rinseCycles]),c=x(this.hass,t[l.extraDetergent]),g=We(i,r),_=Ye(i,r),{isRunning:w,isPaused:Ze,isStopped:be}=this.getStateFlags(i),Qe=e.show_completion_time&&qe(i,o),fe=J(this.hass,t[l.childLock]),ye=J(this.hass,t[l.remoteControl]),$e=n?me(this.hass,n.state,n.attributes.unit_of_measurement):"",ve=h?me(this.hass,h.state,h.attributes.unit_of_measurement):"",Xe=["drum",w?"running":""].filter(Boolean).join(" "),et=e.show_washer_settings&&(!b(d)||!b(p)||!b(c));return u`
      <ha-card>
        <div class="card">
          ${this.renderHeader(e,_)}

          ${this.renderHero(e,g,_,Qe,o,Xe)}

          ${e.show_status_chips?u`
                <div class="chips">
                  ${this.renderChip(e.icons.child_lock,fe?"Child Lock On":"Child Lock Off",fe)}
                  ${this.renderChip(e.icons.remote_control,ye?"Remote Enabled":"Remote Disabled",ye)}
                </div>
              `:""}

          <div class="controls">
            <button
              class="control-btn primary"
              ?disabled=${w}
              @click=${()=>Z(this,t[l.command],"run")}
            >
              Start
            </button>
            <button
              class="control-btn"
              ?disabled=${Ze||be}
              @click=${()=>Z(this,t[l.command],"pause")}
            >
              Pause
            </button>
            <button
              class="control-btn"
              ?disabled=${be}
              @click=${()=>Z(this,t[l.command],"stop")}
            >
              Stop
            </button>
          </div>

          ${e.show_bubble_soak_control?u`
                <button
                  class="toggle-btn ${a?"active":""}"
                  @click=${()=>Ge(this,t[l.bubbleSoak])}
                >
                  ${a?"Bubble Soak Enabled":"Enable Bubble Soak"}
                </button>
              `:""}

          ${et?u`
                <div class="washer-settings">
                  ${b(d)?"":this.renderMetric("Spin Level",L(d),e.icons.spin_level)}
                  ${b(p)?"":this.renderMetric("Rinse Cycles",p,e.icons.rinse_cycles)}
                  ${b(c)?"":this.renderMetric("Detergent",L(c),e.icons.extra_detergent)}
                </div>
              `:""}

          <div class="metrics">
            ${e.show_power&&$e?this.renderMetric("Power",$e,e.icons.power):""}
            ${e.show_energy&&ve?this.renderMetric("Cycle Energy",ve,e.icons.energy):""}
          </div>
        </div>
      </ha-card>
    `}};customElements.define(Be,_e);ge();window.customCards=window.customCards||[];window.customCards.push({type:"samsung-ha-washer-card",name:"Samsung HA Washer Card",description:"A SmartThings-based Samsung washer card for Home Assistant"});})();
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
