define(["libs/underscore","libs/backbone","mvc/base-mvc"],function(a,b,c){"use strict";var d=b.Collection.extend({initialize:function(a,c){b.Collection.prototype.initialize.call(this,a,c),this.setOrder(c.order||this.order,{silent:!0})},_setUpListeners:function(){return this.on({"changed-order":this.sort})},fetch:function(a){return a=this._buildFetchOptions(a),b.Collection.prototype.fetch.call(this,a)},_buildFetchOptions:function(b){b=a.clone(b)||{};var c=this;b.remove=b.remove||!1,b.traditional=!0,b.data=b.data||c._buildFetchData(b);var d=this._buildFetchFilters(b);return a.isEmpty(d)||a.extend(b.data,this._fetchFiltersToAjaxData(d)),b},_buildFetchData:function(b){var c={};return this.order&&(c.order=this.order),a.defaults(a.pick(b,this._fetchParams),c)},_fetchParams:["order","limit","offset","view","keys"],_buildFetchFilters:function(b){return a.clone(b.filters||{})},_fetchFiltersToAjaxData:function(b){var c={q:[],qv:[]};return a.each(b,function(a,b){void 0!==a&&""!==a&&(a===!0&&(a="True"),a===!1&&(a="False"),null===a&&(a="None"),c.q.push(b),c.qv.push(a))}),c},reset:function(a,c){return this.allFetched=!1,b.Collection.prototype.reset.call(this,a,c)},order:null,comparators:{update_time:c.buildComparator("update_time",{ascending:!1}),"update_time-asc":c.buildComparator("update_time",{ascending:!0}),create_time:c.buildComparator("create_time",{ascending:!1}),"create_time-asc":c.buildComparator("create_time",{ascending:!0})},setOrder:function(b,c){c=c||{};var d=this,e=d.comparators[b];if(a.isUndefined(e))throw new Error("unknown order: "+b);if(e!==d.comparator){{d.order}return d.order=b,d.comparator=e,c.silent||d.trigger("changed-order",c),d}}}),e=d.extend({limitOnFirstFetch:null,limitPerFetch:100,initialize:function(a,b){d.prototype.initialize.call(this,a,b),this.limitOnFirstFetch=b.limitOnFirstFetch||this.limitOnFirstFetch,this.limitPerFetch=b.limitPerFetch||this.limitPerFetch,this.allFetched=!1,this.lastFetched=b.lastFetched||0},fetchFirst:function(b){return b=b?a.clone(b):{},this.allFetched=!1,this.lastFetched=0,this.fetchMore(a.extend(b,{reset:!0,limit:this.limitOnFirstFetch}))},fetchMore:function(b){b=a.clone(b||{});var c=this;if(!b.reset&&c.allFetched)return jQuery.when();b.offset=b.reset?0:c.lastFetched;var d=b.limit=b.limit||c.limitPerFetch||null;return c.trigger("fetching-more"),c.fetch(b).always(function(){c.trigger("fetching-more-done")}).done(function(b){var e=a.isArray(b)?b.length:0;c.lastFetched+=e,(!d||d>e)&&(c.allFetched=!0,c.trigger("all-fetched",this))})},fetchAll:function(b){b=b||{};var c=this;return b=a.pick(b,"silent"),b.filters={},c.fetch(b).done(function(){console.log("triggering:..."),c.allFetched=!0,c.trigger("all-fetched",c)})}});return{ControlledFetchCollection:d,PaginatedCollection:e}});
//# sourceMappingURL=../../../maps/mvc/base/controlled-fetch-collection.js.map