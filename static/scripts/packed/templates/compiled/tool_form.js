(function(){var b=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a.tool_form=b(function(f,p,e,n,m){e=e||f.helpers;var k="",c,r,j,i,q=this,g="function",o=e.helperMissing,h=void 0,l=this.escapeExpression;function d(v,u){var s="",t;s+='\n        <div class="form-row">\n            <label for="';j=e.name;t=j||v.name;if(typeof t===g){t=t.call(v,{hash:{}})}else{if(t===h){t=o.call(v,"name",{hash:{}})}}s+=l(t)+'">';j=e.label;t=j||v.label;if(typeof t===g){t=t.call(v,{hash:{}})}else{if(t===h){t=o.call(v,"label",{hash:{}})}}s+=l(t)+':</label>\n            <div class="form-row-input">\n                ';j=e.html;t=j||v.html;if(typeof t===g){t=t.call(v,{hash:{}})}else{if(t===h){t=o.call(v,"html",{hash:{}})}}if(t||t===0){s+=t}s+='\n            </div>\n            <div class="toolParamHelp" style="clear: both;">\n                ';j=e.help;t=j||v.help;if(typeof t===g){t=t.call(v,{hash:{}})}else{if(t===h){t=o.call(v,"help",{hash:{}})}}s+=l(t)+'\n            </div>\n            <div style="clear: both;"></div>\n        </div>\n        ';return s}k+='<div class="toolFormTitle">';j=e.name;c=j||p.name;if(typeof c===g){c=c.call(p,{hash:{}})}else{if(c===h){c=o.call(p,"name",{hash:{}})}}k+=l(c)+" (version ";j=e.version;c=j||p.version;if(typeof c===g){c=c.call(p,{hash:{}})}else{if(c===h){c=o.call(p,"version",{hash:{}})}}k+=l(c)+')</div>\n    <div class="toolFormBody">\n        ';j=e.inputs;c=j||p.inputs;r=e.each;i=q.program(1,d,m);i.hash={};i.fn=i;i.inverse=q.noop;c=r.call(p,c,i);if(c||c===0){k+=c}k+='\n    </div>\n    <div class="form-row form-actions">\n    <input type="submit" class="btn btn-primary" name="runtool_btn" value="Execute">\n</div>\n<div class="toolHelp">\n    <div class="toolHelpBody">';j=e.help;c=j||p.help;if(typeof c===g){c=c.call(p,{hash:{}})}else{if(c===h){c=o.call(p,"help",{hash:{}})}}k+=l(c)+"</div>\n</div>";return k})})();