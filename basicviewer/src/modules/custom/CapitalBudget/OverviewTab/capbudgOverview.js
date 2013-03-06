/** A pattern to use for custom tools. Implements a floating pane with custom content (or an esri dijit) inside.
 *  dojo/text! and xstyle/css! are used to dynamically load an HTML fragment and CSS sheet for this module. Update to your file names.
 *  utilities/maphandler is a singleton object containing a reference to the map object and other properties/fxns- such as enabling/disabling popups.
 *  A good help sample: http://dojotoolkit.org/documentation/tutorials/1.8/recipes/custom_widget/
 *  If using an esri dijit, they should all be AMD-compatible. Help: http://help.arcgis.com/en/webapi/javascript/arcgis/jshelp/#inside_dojo_amd
 *
 *  Note: It seems when working with map layer events (e.g. "onClick"),
 *  in order to work with modules, dojo/aspect after() or before() functions should be used.
 */
define(["dojo/_base/declare", "dojo/dom-construct", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/on", "dijit/registry"
    , "dojo/text!./CapBudgOverview.html", "dojo/_base/lang"
    , "dojo/dom", "dojo/query", "dojox/charting/Chart", "dojox/charting/themes/Claro", ".././../../core/utilities/maphandler"
    , "dojox/charting/plot2d/Pie", "dojox/charting/action2d/Tooltip", "dojox/charting/action2d/MoveSlice", "xstyle/css!./capbudg.css"],
    function(declare, domConstruct, WidgetBase, TemplatedMixin, on, registry, template, lang
                , dom, query, Chart, theme, mapHandler, PiePlot, Tooltip, MoveSlice){
        return declare([WidgetBase, TemplatedMixin], {
            //*** Properties needed for this style of module
            // The template HTML fragment (as a string, created in dojo/text definition above)
			templateString: template
			// The CSS class to be applied to the root node in our template
			, baseClass: "capBudgDiv"
            // The ESRI map object to bind to the TOC. Set in constructor
            , map: null
            // The source data for the chart. Manually set or make a request to a service for the data in the constructor
            , chartData: null

            //*** Creates the floating pane. Should be included in your module and be re-usable without modification (if using floating pane)
            , constructor: function(args) {
                // safeMixin automatically sets the properties above that are passed in from the toolmanager.js
                declare.safeMixin(this,args);
                // mapHandler is a singleton object that you can require above and use to get a reference to the map.
                this.map = mapHandler.map;

            }

            //The widget has been added to the DOM, though not visible yet. This is the recommended place to do most of the module's work
            , postCreate: function () {
                this.inherited(arguments);
            }

            /* A standard module event handler. In the postcreate and startup handlers,
             * you can assume the module has been created.  You don't need to add a handler function if you are not writing code in it.
             */
            , startup: function () {
                this.inherited(arguments);

 /*               // Create the chart within it's "holding" node - which is defined in capbudg.html snippet
                var pieChart = new Chart("capBudgChartDiv",{
                    title: "FY 2014 Capital Budget Statewide Totals",
                    titlePos: "top",
                    titleFont: "normal normal normal 12pt Arial",
                    titleFontColor: "black"
                });
                // Set the theme
                pieChart.setTheme(theme);
                // Add the only/default plot
                pieChart.addPlot("default", {
                    type: PiePlot, // our plot2d/Pie module reference as type value
                    radius: 200,
                    fontColor: "black",
                    labelOffset: -20
                });
                // Add the series of data
                pieChart.addSeries("Statewide Totals - FY 2014",this.chartData);

                // Create the tooltip
                var tip = new Tooltip(pieChart,"default", {text: lang.hitch(this,function(args){
                    Number.prototype.formatMoney = function(c, d, t){
                        var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
                        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
                    };

                    return this.chartData[args.index].tooltip + ": $" + args.y.formatMoney(2, ".", ",");
                    })
                });

                //create pie slice animation
                var anim = new MoveSlice(pieChart, "default", {
                    scale: 1,
                    shift: 3
                });

                // Render the chart!
                pieChart.render();*/
            }
        });
    });