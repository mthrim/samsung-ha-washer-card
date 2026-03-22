(()=>{var Qe=Object.defineProperty;var b=(r,e)=>()=>(r&&(e=r(r=0)),e);var Xe=(r,e)=>{for(var t in e)Qe(r,t,{get:e[t],enumerable:!0})};var z,F,Q,xe,P,we,T,Ae,X,ee=b(()=>{z=globalThis,F=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),xe=new WeakMap,P=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(F&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=xe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&xe.set(t,e))}return e}toString(){return this.cssText}},we=r=>new P(typeof r=="string"?r:r+"",void 0,Q),T=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new P(t,r,Q)},Ae=(r,e)=>{if(F)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),s=z.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},X=F?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return we(t)})(r):r});var et,tt,it,rt,st,nt,B,Se,ot,at,N,te,ke,Ee,y,j=b(()=>{ee();ee();({is:et,defineProperty:tt,getOwnPropertyDescriptor:it,getOwnPropertyNames:rt,getOwnPropertySymbols:st,getPrototypeOf:nt}=Object),B=globalThis,Se=B.trustedTypes,ot=Se?Se.emptyScript:"",at=B.reactiveElementPolyfillSupport,N=(r,e)=>r,te={toAttribute(r,e){switch(e){case Boolean:r=r?ot:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ke=(r,e)=>!et(r,e),Ee={attribute:!0,type:String,converter:te,reflect:!1,useDefault:!1,hasChanged:ke};Symbol.metadata??=Symbol("metadata"),B.litPropertyMetadata??=new WeakMap;y=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ee){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&tt(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){let{get:s,set:n}=it(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:s,set(o){let l=s?.call(this);n?.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ee}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;let e=nt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){let t=this.properties,i=[...rt(t),...st(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(X(s))}else e!==void 0&&t.push(X(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ae(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:te).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let n=i.getPropertyOptions(s),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:te;this._$Em=s;let l=o.fromAttribute(t,n.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(e,t,i,s=!1,n){if(e!==void 0){let o=this.constructor;if(s===!1&&(n=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??ke)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,n]of i){let{wrapped:o}=n,l=this[s];o!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,n,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[N("elementProperties")]=new Map,y[N("finalized")]=new Map,at?.({ReactiveElement:y}),(B.reactiveElementVersions??=[]).push("2.1.2")});function He(r,e){if(!le(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pe!==void 0?Pe.createHTML(e):e}function E(r,e,t=r,i){if(e===S)return e;let s=i!==void 0?t._$Co?.[i]:t._$Cl,n=L(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??=[])[i]=s:t._$Cl=s),s!==void 0&&(e=E(r,s._$AS(r,e.values),s,i)),e}var ce,Ce,W,Pe,Me,$,Re,ct,A,U,L,le,lt,ie,O,Te,Ne,x,Oe,Ue,Ie,de,m,vt,xt,S,u,Le,w,dt,M,re,R,k,se,ne,oe,ae,ht,De,V=b(()=>{ce=globalThis,Ce=r=>r,W=ce.trustedTypes,Pe=W?W.createPolicy("lit-html",{createHTML:r=>r}):void 0,Me="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,Re="?"+$,ct=`<${Re}>`,A=document,U=()=>A.createComment(""),L=r=>r===null||typeof r!="object"&&typeof r!="function",le=Array.isArray,lt=r=>le(r)||typeof r?.[Symbol.iterator]=="function",ie=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Te=/-->/g,Ne=/>/g,x=RegExp(`>|${ie}(?:([^\\s"'>=/]+)(${ie}*=${ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oe=/'/g,Ue=/"/g,Ie=/^(?:script|style|textarea|title)$/i,de=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),m=de(1),vt=de(2),xt=de(3),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Le=new WeakMap,w=A.createTreeWalker(A,129);dt=(r,e)=>{let t=r.length-1,i=[],s,n=e===2?"<svg>":e===3?"<math>":"",o=O;for(let l=0;l<t;l++){let a=r[l],h,p,c=-1,g=0;for(;g<a.length&&(o.lastIndex=g,p=o.exec(a),p!==null);)g=o.lastIndex,o===O?p[1]==="!--"?o=Te:p[1]!==void 0?o=Ne:p[2]!==void 0?(Ie.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=x):p[3]!==void 0&&(o=x):o===x?p[0]===">"?(o=s??O,c=-1):p[1]===void 0?c=-2:(c=o.lastIndex-p[2].length,h=p[1],o=p[3]===void 0?x:p[3]==='"'?Ue:Oe):o===Ue||o===Oe?o=x:o===Te||o===Ne?o=O:(o=x,s=void 0);let _=o===x&&r[l+1].startsWith("/>")?" ":"";n+=o===O?a+ct:c>=0?(i.push(h),a.slice(0,c)+Me+a.slice(c)+$+_):a+$+(c===-2?l:_)}return[He(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},M=class r{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0,l=e.length-1,a=this.parts,[h,p]=dt(e,t);if(this.el=r.createElement(h,i),w.currentNode=this.el.content,t===2||t===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=w.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let c of s.getAttributeNames())if(c.endsWith(Me)){let g=p[o++],_=s.getAttribute(c).split($),v=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:v[2],strings:_,ctor:v[1]==="."?se:v[1]==="?"?ne:v[1]==="@"?oe:k}),s.removeAttribute(c)}else c.startsWith($)&&(a.push({type:6,index:n}),s.removeAttribute(c));if(Ie.test(s.tagName)){let c=s.textContent.split($),g=c.length-1;if(g>0){s.textContent=W?W.emptyScript:"";for(let _=0;_<g;_++)s.append(c[_],U()),w.nextNode(),a.push({type:2,index:++n});s.append(c[g],U())}}}else if(s.nodeType===8)if(s.data===Re)a.push({type:2,index:n});else{let c=-1;for(;(c=s.data.indexOf($,c+1))!==-1;)a.push({type:7,index:n}),c+=$.length-1}n++}}static createElement(e,t){let i=A.createElement("template");return i.innerHTML=e,i}};re=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??A).importNode(t,!0);w.currentNode=s;let n=w.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new R(n,n.nextSibling,this,e):a.type===1?h=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(h=new ae(n,this,e)),this._$AV.push(h),a=i[++l]}o!==a?.index&&(n=w.nextNode(),o++)}return w.currentNode=A,s}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},R=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),L(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):lt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=M.createElement(He(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{let n=new re(s,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(e){let t=Le.get(e.strings);return t===void 0&&Le.set(e.strings,t=new M(e)),t}k(e){le(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let n of e)s===t.length?t.push(i=new r(this.O(U()),this.O(U()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=Ce(e).nextSibling;Ce(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},k=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(e,t=this,i,s){let n=this.strings,o=!1;if(n===void 0)e=E(this,e,t,0),o=!L(e)||e!==this._$AH&&e!==S,o&&(this._$AH=e);else{let l=e,a,h;for(e=n[0],a=0;a<n.length-1;a++)h=E(this,l[i+a],t,a),h===S&&(h=this._$AH[a]),o||=!L(h)||h!==this._$AH[a],h===u?e=u:e!==u&&(e+=(h??"")+n[a+1]),this._$AH[a]=h}o&&!s&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},se=class extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}},ne=class extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}},oe=class extends k{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??u)===S)return;let i=this._$AH,s=e===u&&i!==u||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==u&&(i===u||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ae=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}},ht=ce.litHtmlPolyfillSupport;ht?.(M,R),(ce.litHtmlVersions??=[]).push("3.3.2");De=(r,e,t)=>{let i=t?.renderBefore??e,s=i._$litPart$;if(s===void 0){let n=t?.renderBefore??null;i._$litPart$=s=new R(e.insertBefore(U(),n),n,void 0,t??{})}return s._$AI(r),s}});var he,f,pt,ze=b(()=>{j();j();V();V();he=globalThis,f=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};f._$litElement$=!0,f.finalized=!0,he.litElementHydrateSupport?.({LitElement:f});pt=he.litElementPolyfillSupport;pt?.({LitElement:f});(he.litElementVersions??=[]).push("4.2.2")});var Fe=b(()=>{});var pe=b(()=>{j();V();ze();Fe()});var Be,C,d,I,Y,q=b(()=>{Be="samsung-ha-dryer-card",C={device_name:"dryer",title:"Dryer",show_subtitle:!0,layout_mode:"hero",show_completion_time:!0,show_status_chips:!0,show_power:!0,show_energy:!0,show_wrinkle_prevent_control:!0,icons:{appliance:"mdi:tumble-dryer",start:"mdi:play",pause:"mdi:pause",stop:"mdi:stop",child_lock:"mdi:lock",remote_control:"mdi:remote",wrinkle_prevent:"mdi:tshirt-crew",power:"mdi:flash",energy:"mdi:lightning-bolt",complete:"mdi:clock-outline"}},d={machineState:"machine_state",jobState:"job_state",completionTime:"completion_time",command:"command",childLock:"child_lock",remoteControl:"remote_control",wrinklePreventActive:"wrinkle_prevent_active",wrinklePreventSwitch:"wrinkle_prevent_switch",power:"power",cycleEnergy:"cycle_energy"},I={cooling:"Cooling",delay_wash:"Delayed",drying:"Drying",finished:"Finished",none:"Idle",refreshing:"Refreshing",weight_sensing:"Sensing Load",wrinkle_prevent:"Wrinkle Prevent",dehumidifying:"Dehumidifying",ai_drying:"AI Drying",sanitizing:"Sanitizing",internal_care:"Internal Care",freeze_protection:"Freeze Protection",continuous_dehumidifying:"Continuous Dehumidifying",thawing_frozen_inside:"Thawing"},Y={run:"Running",pause:"Paused",stop:"Stopped"}});var Je={};Xe(Je,{SamsungHADryerCardEditor:()=>Z});var ut,mt,gt,Z,ge=b(()=>{pe();q();ut=[{key:"machine_state_entity",label:"Machine State Entity"},{key:"job_state_entity",label:"Job State Entity"},{key:"completion_time_entity",label:"Completion Time Entity"},{key:"command_entity",label:"Command Entity"},{key:"child_lock_entity",label:"Child Lock Entity"},{key:"remote_control_entity",label:"Remote Control Entity"},{key:"wrinkle_prevent_active_entity",label:"Wrinkle Prevent Active Entity"},{key:"wrinkle_prevent_switch_entity",label:"Wrinkle Prevent Switch Entity"},{key:"power_entity",label:"Power Entity"},{key:"energy_entity",label:"Energy Entity"}],mt=[{key:"show_subtitle",label:"Show subtitle"},{key:"show_completion_time",label:"Show completion time"},{key:"show_status_chips",label:"Show status chips"},{key:"show_power",label:"Show power"},{key:"show_energy",label:"Show cycle energy"},{key:"show_wrinkle_prevent_control",label:"Show wrinkle prevent control"}],gt=[{key:"appliance",label:"Appliance Icon"},{key:"start",label:"Start Icon"},{key:"pause",label:"Pause Icon"},{key:"stop",label:"Stop Icon"},{key:"child_lock",label:"Child Lock Icon"},{key:"remote_control",label:"Remote Icon"},{key:"wrinkle_prevent",label:"Wrinkle Prevent Icon"},{key:"power",label:"Power Icon"},{key:"energy",label:"Energy Icon"},{key:"complete",label:"Completion Icon"}],Z=class extends f{static properties={hass:{},_config:{state:!0}};static styles=T`
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
  `;setConfig(e){this._config={...C,...e,icons:{...C.icons,...e&&e.icons||{}}}}_emitConfig(e){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}_updateField(e,t){let i={...this._config};t===""||t===null||t===void 0?delete i[e]:i[e]=t,this._emitConfig(i)}_updateBoolean(e,t){this._emitConfig({...this._config,[e]:t})}_updateIcon(e,t){let i={...this._config.icons||{}};t===""||t===null||t===void 0?delete i[e]:i[e]=t,this._emitConfig({...this._config,icons:i})}_renderTextField(e,t,i,s=""){return m`
      <div class="field">
        <ha-textfield
          .label=${e}
          .value=${t||""}
          .helper=${s}
          .helperPersistent=${!!s}
          @input=${i}
        ></ha-textfield>
      </div>
    `}_renderEntityField(e,t){return m`
      <div class="field">
        <ha-entity-picker
          .hass=${this.hass}
          .label=${e}
          .value=${this._config[t]||""}
          allow-custom-entity
          @value-changed=${i=>this._updateField(t,i.detail.value)}
        ></ha-entity-picker>
      </div>
    `}_renderSwitch(e,t){return m`
      <div class="field">
        <ha-formfield .label=${e}>
          <ha-switch
            .checked=${!!this._config[t]}
            @change=${i=>this._updateBoolean(t,i.target.checked)}
          ></ha-switch>
        </ha-formfield>
      </div>
    `}_renderLayoutModeField(){return m`
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
    `}render(){return!this.hass||!this._config?m``:m`
      <div class="section">
        <div class="section-title">General</div>
        ${this._renderTextField("Title",this._config.title,e=>this._updateField("title",e.target.value))}
        ${this._renderTextField("Device Name",this._config.device_name,e=>this._updateField("device_name",e.target.value),"Used for automatic entity discovery, for example: dryer")}
        ${this._renderLayoutModeField()}
      </div>

      <div class="section">
        <div class="section-title">Display Options</div>
        ${mt.map(e=>this._renderSwitch(e.label,e.key))}
      </div>

      <div class="section">
        <div class="section-title">Entities</div>
        ${ut.map(e=>this._renderEntityField(e.label,e.key))}
      </div>

      <div class="section">
        <div class="section-title">Icons</div>
        <div class="icon-grid">
          ${gt.map(e=>this._renderTextField(e.label,this._config.icons&&this._config.icons[e.key],t=>this._updateIcon(e.key,t.target.value)))}
        </div>
      </div>
    `}};customElements.define("samsung-ha-dryer-card-editor",Z)});pe();q();function je(r){return{...C,...r,icons:{...C.icons,...r&&r.icons||{}}}}function We(r){let e=r.device_name||"dryer";return{[d.machineState]:r.machine_state_entity||`sensor.${e}_machine_state`,[d.jobState]:r.job_state_entity||`sensor.${e}_job_state`,[d.completionTime]:r.completion_time_entity||`sensor.${e}_completion_time`,[d.command]:r.command_entity||`select.${e}`,[d.childLock]:r.child_lock_entity||`binary_sensor.${e}_child_lock`,[d.remoteControl]:r.remote_control_entity||`binary_sensor.${e}_remote_control`,[d.wrinklePreventActive]:r.wrinkle_prevent_active_entity||`binary_sensor.${e}_wrinkle_prevent_active`,[d.wrinklePreventSwitch]:r.wrinkle_prevent_switch_entity||`switch.${e}_wrinkle_prevent`,[d.power]:r.power_entity||`sensor.${e}_power`,[d.cycleEnergy]:r.energy_entity||`sensor.${e}_power_energy`}}function K(r,e){return e?r.states[e]:void 0}function H(r,e){let t=K(r,e);return t?t.state:void 0}function D(r,e){return H(r,e)==="on"}function G(r){return r==null||r==="unknown"||r==="unavailable"}function ue(r){return!r||G(r)?"Unknown":r.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function Ve(r,e){return r==="pause"?"Paused":r==="run"?I[e]||Y[r]||"Running":r==="stop"&&e==="finished"?"Finished":r==="stop"&&e&&e!=="none"?I[e]||"Stopped":Y[r]||ue(r)||"Stopped"}function Ye(r,e){return r==="pause"&&e&&e!=="none"?I[e]||ue(e):r==="run"?Y[r]||"Running":e==="finished"?"Cycle complete":e&&e!=="none"?I[e]||ue(e):"Ready"}function qe(r,e){return!G(e)&&(r==="run"||r==="pause")}function Ke(r,e){if(G(e))return"";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;try{return new Intl.DateTimeFormat(r.locale?.language||"en-US",{hour:"numeric",minute:"2-digit"}).format(t)}catch{return t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}}function me(r,e,t){if(G(e))return"";let i=Number(e);return Number.isNaN(i)?`${e}${t?` ${t}`:""}`:`${new Intl.NumberFormat(r.locale?.language||"en-US",{maximumFractionDigits:i>=100?0:1}).format(i)}${t?` ${t}`:""}`}q();async function J(r,e,t){e&&await r.hass.callService("select","select_option",{entity_id:e,option:t})}async function Ge(r,e){e&&await r.hass.callService("homeassistant","toggle",{entity_id:e})}var _e=class extends f{static properties={hass:{},_config:{state:!0}};static async getConfigElement(){return await Promise.resolve().then(()=>(ge(),Je)),document.createElement("samsung-ha-dryer-card-editor")}static getStubConfig(){return{device_name:"dryer",title:"Dryer",show_subtitle:!0,layout_mode:"hero",show_completion_time:!0,show_status_chips:!0,show_power:!0,show_energy:!0,show_wrinkle_prevent_control:!0}}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=je(e)}getCardSize(){return this._config?.layout_mode==="compact"?4:5}static styles=T`
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
    }
  `;getStateFlags(e){return{isRunning:e==="run",isPaused:e==="pause",isStopped:e==="stop"}}renderChip(e,t,i){return m`
      <div class="chip ${i?"on":"off"}" aria-label="${t}">
        <ha-icon .icon=${e}></ha-icon>
        <span>${t}</span>
      </div>
    `}renderMetric(e,t,i){return m`
      <div class="metric">
        <div class="metric-top">
          <div class="metric-label">${e}</div>
          <ha-icon .icon=${i}></ha-icon>
        </div>
        <div class="metric-value">${t}</div>
      </div>
    `}renderHeader(e,t){return m`
      <div class="header">
        <div class="header-left">
          <div class="header-icon">
            <ha-icon .icon=${e.icons.appliance}></ha-icon>
          </div>
          <div class="header-text">
            <div class="title">${e.title}</div>
            ${e.show_subtitle?m`<div class="subtitle">Samsung SmartThings Dryer</div>`:""}
          </div>
        </div>
        <div class="status-badge">${t}</div>
      </div>
    `}renderHero(e,t,i,s,n,o){let l=`hero ${e.layout_mode==="compact"?"compact":""}`;return m`
      <div class=${l}>
        <div class="drum-wrap">
          <div class=${o}>
            <div class="drum-center">
              <ha-icon .icon=${e.icons.appliance}></ha-icon>
            </div>
          </div>
        </div>

        <div class="hero-info">
          <div class="primary-status">${t}</div>
          <div class="secondary-status">${i}</div>

          ${s?m`
                <div class="completion">
                  <ha-icon .icon=${e.icons.complete}></ha-icon>
                  <span>Completes at ${Ke(this.hass,n)}</span>
                </div>
              `:""}
        </div>
      </div>
    `}render(){if(!this.hass||!this._config)return m``;let e=this._config,t=We(e),i=H(this.hass,t[d.machineState]),s=H(this.hass,t[d.jobState]),n=H(this.hass,t[d.completionTime]),o=K(this.hass,t[d.power]),l=K(this.hass,t[d.cycleEnergy]),a=Ve(i,s),h=Ye(i,s),{isRunning:p,isPaused:c,isStopped:g}=this.getStateFlags(i),_=e.show_completion_time&&qe(i,n),v=D(this.hass,t[d.wrinklePreventActive]),fe=D(this.hass,t[d.wrinklePreventSwitch]),ye=D(this.hass,t[d.childLock]),be=D(this.hass,t[d.remoteControl]),$e=o?me(this.hass,o.state,o.attributes.unit_of_measurement):"",ve=l?me(this.hass,l.state,l.attributes.unit_of_measurement):"",Ze=["drum",p?"running":""].filter(Boolean).join(" ");return m`
      <ha-card>
        <div class="card">
          ${this.renderHeader(e,h)}

          ${this.renderHero(e,a,h,_,n,Ze)}

          ${e.show_status_chips?m`
                <div class="chips">
                  ${this.renderChip(e.icons.child_lock,ye?"Child Lock On":"Child Lock Off",ye)}
                  ${this.renderChip(e.icons.remote_control,be?"Remote Enabled":"Remote Disabled",be)}
                  ${this.renderChip(e.icons.wrinkle_prevent,v?"Wrinkle Prevent Active":"Wrinkle Prevent Idle",v)}
                </div>
              `:""}

          <div class="controls">
            <button
              class="control-btn primary"
              ?disabled=${p}
              @click=${()=>J(this,t[d.command],"run")}
            >
              Start
            </button>
            <button
              class="control-btn"
              ?disabled=${c||g}
              @click=${()=>J(this,t[d.command],"pause")}
            >
              Pause
            </button>
            <button
              class="control-btn"
              ?disabled=${g}
              @click=${()=>J(this,t[d.command],"stop")}
            >
              Stop
            </button>
          </div>

          ${e.show_wrinkle_prevent_control?m`
                <button
                  class="toggle-btn ${fe?"active":""}"
                  @click=${()=>Ge(this,t[d.wrinklePreventSwitch])}
                >
                  ${fe?"Wrinkle Prevent Enabled":"Enable Wrinkle Prevent"}
                </button>
              `:""}

          <div class="metrics">
            ${e.show_power&&$e?this.renderMetric("Power",$e,e.icons.power):""}
            ${e.show_energy&&ve?this.renderMetric("Cycle Energy",ve,e.icons.energy):""}
          </div>
        </div>
      </ha-card>
    `}};customElements.define(Be,_e);ge();window.customCards=window.customCards||[];window.customCards.push({type:"samsung-ha-dryer-card",name:"Samsung HA Dryer Card",description:"A SmartThings-based Samsung dryer card for Home Assistant"});})();
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
