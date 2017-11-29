function GM_configStruct(){arguments.length&&(GM_configInit(this,arguments),this.onInit())}function GM_configInit(e,t){if(void 0===e.fields&&(e.fields={},e.onInit=e.onInit||function(){},e.onOpen=e.onOpen||function(){},e.onSave=e.onSave||function(){},e.onClose=e.onClose||function(){},e.onReset=e.onReset||function(){},e.isOpen=!1,e.title="User Script Settings",e.css={basic:"#GM_config * { font-family: arial,tahoma,myriad pro,sans-serif; }\n#GM_config { background: #FFF; }\n#GM_config input[type='radio'] { margin-right: 8px; }\n#GM_config .indent40 { margin-left: 40%; }\n#GM_config .field_label { font-size: 12px; font-weight: bold; margin-right: 6px; }\n#GM_config .radio_label { font-size: 12px; }\n#GM_config .block { display: block; }\n#GM_config .saveclose_buttons { margin: 16px 10px 10px; padding: 2px 12px; }\n#GM_config .reset, #GM_config .reset a, #GM_config_buttons_holder { color: #000; text-align: right; }\n#GM_config .config_header { font-size: 20pt; margin: 0; }\n#GM_config .config_desc, #GM_config .section_desc, #GM_config .reset { font-size: 9pt; }\n#GM_config .center { text-align: center; }\n#GM_config .section_header_holder { margin-top: 8px; }\n#GM_config .config_var { margin: 0 0 4px; }\n#GM_config .section_header { background: #414141; border: 1px solid #000; color: #FFF;\n font-size: 13pt; margin: 0; }\n#GM_config .section_desc { background: #EFEFEF; border: 1px solid #CCC; color: #575757; font-size: 9pt; margin: 0 0 6px; }\n",basicPrefix:"GM_config",stylish:""}),1==t.length&&"string"==typeof t[0].id&&"function"!=typeof t[0].appendChild)var i=t[0]
else for(var n,i={},a=0,s=t.length;s>a;++a)if(n=t[a],"function"!=typeof n.appendChild)switch(typeof n){case"object":for(var o in n){if("function"!=typeof n[o]){i.fields=n
break}i.events||(i.events={}),i.events[o]=n[o]}break
case"function":i.events={onOpen:n}
break
case"string":/\w+\s*\{\s*\w+\s*:\s*\w+[\s|\S]*\}/.test(n)?i.css=n:i.title=n}else i.frame=n
if(i.id?e.id=i.id:void 0===e.id&&(e.id="GM_config"),i.title&&(e.title=i.title),i.css&&(e.css.stylish=i.css),i.frame&&(e.frame=i.frame),i.events){var r=i.events
for(var c in r)e["on"+c.charAt(0).toUpperCase()+c.slice(1)]=r[c]}if(i.fields){var l=e.read(),d=i.fields,f=i.types||{}
for(var u in d){var h=d[u]
h?e.fields[u]=new GM_configField(h,l[u],u,f[h.type]):e.fields[u]&&delete e.fields[u]}}e.id!=e.css.basicPrefix&&(e.css.basic=e.css.basic.replace(RegExp("#"+e.css.basicPrefix,"gm"),"#"+e.id),e.css.basicPrefix=e.id)}function GM_configDefaultValue(e,t){var i
switch(0==e.indexOf("unsigned ")&&(e=e.substring(9)),e){case"radio":case"select":i=t[0]
break
case"checkbox":i=!1
break
case"int":case"integer":case"float":case"number":i=0
break
default:i=""}return i}function GM_configField(e,t,i,n){this.settings=e,this.id=i,this.node=null,this.wrapper=null,this.save=void 0===e.save?!0:e.save,"button"==e.type&&(this.save=!1),this["default"]=void 0===e["default"]?n?n["default"]:GM_configDefaultValue(e.type,e.options):e["default"],this.value=void 0===t?this["default"]:t,n&&(this.toNode=n.toNode,this.toValue=n.toValue,this.reset=n.reset)}GM_configStruct.prototype={init:function(){GM_configInit(this,arguments),this.onInit()},open:function(){function e(e,t){var n=i.create,a=i.fields,s=i.id,o=n("div",{id:s+"_wrapper"})
t.appendChild(n("style",{type:"text/css",textContent:i.css.basic+i.css.stylish})),o.appendChild(n("div",{id:s+"_header",className:"config_header block center"},i.title))
var r=o,c=0
for(var l in a){var d=a[l],f=d.settings
f.section&&(r=o.appendChild(n("div",{className:"section_header_holder",id:s+"_section_"+c})),"[object Array]"!==Object.prototype.toString.call(f.section)&&(f.section=[f.section]),f.section[0]&&r.appendChild(n("div",{className:"section_header center",id:s+"_section_header_"+c},f.section[0])),f.section[1]&&r.appendChild(n("p",{className:"section_desc center",id:s+"_section_desc_"+c},f.section[1])),++c),r.appendChild(d.wrapper=d.toNode(s))}o.appendChild(n("div",{id:s+"_buttons_holder"},n("button",{id:s+"_saveBtn",textContent:"Save",title:"Save settings",className:"saveclose_buttons",onclick:function(){i.save()}}),n("button",{id:s+"_closeBtn",textContent:"Close",title:"Close window",className:"saveclose_buttons",onclick:function(){i.close()}}),n("div",{className:"reset_holder block"},n("a",{id:s+"_resetLink",textContent:"Reset to defaults",href:"#",title:"Reset fields to default values",className:"reset",onclick:function(e){e.preventDefault(),i.reset()}})))),e.appendChild(o),i.center(),window.addEventListener("resize",i.center,!1),i.onOpen(i.frame.contentDocument||i.frame.ownerDocument,i.frame.contentWindow||window,i.frame),window.addEventListener("beforeunload",function(){i.close()},!1),i.frame.style.display="block",i.isOpen=!0}var t=document.getElementById(this.id)
if(!t||"IFRAME"!=t.tagName&&t.childNodes.length<=0){var i=this,n="bottom: auto; border: 1px solid #000; display: none; height: 75%; left: 0; margin: 0; max-height: 95%; max-width: 95%; opacity: 0; overflow: auto; padding: 0; position: fixed; right: auto; top: 0; width: 75%; z-index: 9999;"
this.frame?(this.frame.id=this.id,this.frame.setAttribute("style",n),e(this.frame,this.frame.ownerDocument.getElementsByTagName("head")[0])):(document.body.appendChild(this.frame=this.create("iframe",{id:this.id,style:n})),this.frame.src="about:blank",this.frame.addEventListener("load",function(t){var n=i.frame,a=n.contentDocument.getElementsByTagName("body")[0]
a.id=i.id,e(a,n.contentDocument.getElementsByTagName("head")[0])},!1))}},save:function(){var e=this.write()
this.onSave(e)},close:function(){this.frame.contentDocument?(this.remove(this.frame),this.frame=null):(this.frame.innerHTML="",this.frame.style.display="none")
var e=this.fields
for(var t in e){var i=e[t]
i.wrapper=null,i.node=null}this.onClose(),this.isOpen=!1},set:function(e,t){this.fields[e].value=t},get:function(e){return this.fields[e].value},write:function(e,t){if(!t){var i={},n={},a=this.fields
for(var s in a){var o=a[s],r=o.toValue()
o.save?null!=r?(i[s]=r,o.value=r):i[s]=o.value:n[s]=r}}try{this.setValue(e||this.id,this.stringify(t||i))}catch(c){this.log("GM_config failed to save settings!")}return n},read:function(e){try{var t=this.parser(this.getValue(e||this.id,"{}"))}catch(i){this.log("GM_config failed to read saved settings!")
var t={}}return t},reset:function(){var e=this.fields
for(var t in e)e[t].reset()
this.onReset()},create:function(){switch(arguments.length){case 1:var e=document.createTextNode(arguments[0])
break
default:var e=document.createElement(arguments[0]),t=arguments[1]
for(var i in t)0==i.indexOf("on")?e.addEventListener(i.substring(2),t[i],!1):-1!=",style,accesskey,id,name,src,href,which,for".indexOf(","+i.toLowerCase())?e.setAttribute(i,t[i]):e[i]=t[i]
if("string"==typeof arguments[2])e.innerHTML=arguments[2]
else for(var n=2,a=arguments.length;a>n;++n)e.appendChild(arguments[n])}return e},center:function(){var e=this.frame
if(e){var t=e.style
t.opacity
"none"==t.display&&(t.opacity="0"),t.display="",t.top=Math.floor(window.innerHeight/2-e.offsetHeight/2)+"px",t.left=Math.floor(window.innerWidth/2-e.offsetWidth/2)+"px",t.opacity="1"}},remove:function(e){e&&e.parentNode&&e.parentNode.removeChild(e)}},function(){var e,t,i,n,a="undefined"!=typeof GM_getValue&&void 0!==GM_getValue("a","b")
a?(e=GM_setValue,t=GM_getValue,i="undefined"==typeof JSON?function(e){return e.toSource()}:JSON.stringify,n="undefined"==typeof JSON?function(e){return Function("return "+e+";")()}:JSON.parse):(e=function(e,t){return localStorage.setItem(e,t)},t=function(e,t){var i=localStorage.getItem(e)
return null==i?t:i},i=JSON.stringify,n=JSON.parse),GM_configStruct.prototype.isGM=a,GM_configStruct.prototype.setValue=e,GM_configStruct.prototype.getValue=t,GM_configStruct.prototype.stringify=i,GM_configStruct.prototype.parser=n,GM_configStruct.prototype.log=window.console?console.log:a&&"undefined"!=typeof GM_log?GM_log:window.opera?opera.postError:function(){}}(),GM_configField.prototype={create:GM_configStruct.prototype.create,toNode:function(e){function t(e,t,i,n){switch(n||(n=i.firstChild),e){case"right":case"below":"below"==e&&i.appendChild(l("br",{})),i.appendChild(t)
break
default:"above"==e&&i.insertBefore(l("br",{}),n),i.insertBefore(t,n)}}var i,n=this.settings,a=this.value,s=n.options,o=n.type,r=this.id,c=n.labelPos,l=this.create,d=l("div",{className:"config_var",id:e+"_"+r+"_var",title:n.title||""})
for(var f in n){i=f
break}var u=n.label&&"button"!=o?l("label",{id:e+"_"+r+"_field_label",for:e+"_field_"+r,className:"field_label"},n.label):null
switch(o){case"textarea":d.appendChild(this.node=l("textarea",{innerHTML:a,id:e+"_field_"+r,className:"block",cols:n.cols?n.cols:20,rows:n.rows?n.rows:2}))
break
case"radio":var h=l("div",{id:e+"_field_"+r})
this.node=h
for(var f=0,p=s.length;p>f;++f){var g=l("label",{className:"radio_label"},s[f]),v=h.appendChild(l("input",{value:s[f],type:"radio",name:r,checked:s[f]==a})),m=!c||"left"!=c&&"right"!=c?"options"==i?"left":"right":c
t(m,g,h,v)}d.appendChild(h)
break
case"select":var h=l("select",{id:e+"_field_"+r})
this.node=h
for(var f=0,p=s.length;p>f;++f){var _=s[f]
h.appendChild(l("option",{value:_,selected:_==a},_))}d.appendChild(h)
break
default:var b={id:e+"_field_"+r,type:o,value:"button"==o?n.label:a}
switch(o){case"checkbox":b.checked=a
break
case"button":b.size=n.size?n.size:25,n.script&&(n.click=n.script),n.click&&(b.onclick=n.click)
break
case"hidden":break
default:b.type="text",b.size=n.size?n.size:25}d.appendChild(this.node=l("input",b))}return u&&(c||(c="label"==i||"radio"==o?"left":"right"),t(c,u,d)),d},toValue:function(){var e=this.node,t=this.settings,i=t.type,n=!1,a=null
if(!e)return a
switch(0==i.indexOf("unsigned ")&&(i=i.substring(9),n=!0),i){case"checkbox":a=e.checked
break
case"select":a=e[e.selectedIndex].value
break
case"radio":for(var s=e.getElementsByTagName("input"),o=0,r=s.length;r>o;++o)s[o].checked&&(a=s[o].value)
break
case"button":break
case"int":case"integer":case"float":case"number":var c=+e.value,l='Field labeled "'+t.label+'" expects a'+(n?" positive ":"n ")+"integer value"
if(isNaN(c)||"int"==i.substr(0,3)&&Math.ceil(c)!=Math.floor(c)||n&&0>c)return alert(l+"."),null
if(!this._checkNumberRange(c,l))return null
a=c
break
default:a=e.value}return a},reset:function(){var e=this.node,t=this.settings,i=t.type
if(e)switch(i){case"checkbox":e.checked=this["default"]
break
case"select":for(var n=0,a=e.options.length;a>n;++n)e.options[n].textContent==this["default"]&&(e.selectedIndex=n)
break
case"radio":for(var s=e.getElementsByTagName("input"),n=0,a=s.length;a>n;++n)s[n].value==this["default"]&&(s[n].checked=!0)
break
case"button":break
default:e.value=this["default"]}},remove:function(e){GM_configStruct.prototype.remove(e||this.wrapper),this.wrapper=null,this.node=null},reload:function(){var e=this.wrapper
if(e){var t=e.parentNode
t.insertBefore(this.wrapper=this.toNode(),e),this.remove(e)}},_checkNumberRange:function(e,t){var i=this.settings
return"number"==typeof i.min&&e<i.min?(alert(t+" greater than or equal to "+i.min+"."),null):"number"==typeof i.max&&e>i.max?(alert(t+" less than or equal to "+i.max+"."),null):!0}}
var GM_config=new GM_configStruct
