this["Templates"] = this["Templates"] || {};
this["Templates"]["body.tmpl"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<!-- map -->");_.b("\n" + i);_.b("<div id=\"pane\">");_.b("\n" + i);_.b("    <div id=\"map\"></div>");_.b("\n" + i);_.b("    <nav class=\"navbar navbar-default\" role=\"navigation\">");_.b("\n" + i);_.b("        <div class=\"container-fluid\">");_.b("\n" + i);_.b("            <div class=\"navbar-header\">");_.b("\n" + i);_.b("                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"");_.b("\n" + i);_.b("                        data-target=\"#bs-example-navbar-collapse-1\">");_.b("\n" + i);_.b("                    <span class=\"sr-only\">Toggle navigation</span>");_.b("\n" + i);_.b("                    <span class=\"icon-bar\"></span>");_.b("\n" + i);_.b("                    <span class=\"icon-bar\"></span>");_.b("\n" + i);_.b("                    <span class=\"icon-bar\"></span>");_.b("\n" + i);_.b("                </button>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">");_.b("\n" + i);_.b("                <ul class=\"nav navbar-nav\" style=\"float: left\">");_.b("\n" + i);_.b("                    <li>");_.b("\n" + i);_.b("                        <!--<a href=\"javascript:void(0)\" title=\"Layers\" onclick=\"$('#menu').multilevelpushmenu('expand');\">");_.b("\n" + i);_.b("                            ");_.b(_.t(_.f("Layers",c,p,0)));_.b(" <span class=\"glyphicon glyphicon-arrow-right\"></span></a>-->");_.b("\n" + i);_.b("                        <button type=\"button\" class=\"btn btn-default navbar-btn\"");_.b("\n" + i);_.b("                                onclick=\"$('#menu').multilevelpushmenu('expand');\">");_.b("\n" + i);_.b("                            <span class=\"fa fa-location-arrow\"></span> ");_.b(_.t(_.f("Layers",c,p,0)));_.b("\n" + i);_.b("                        </button>");_.b("\n" + i);_.b("                    </li>");_.b("\n" + i);_.b("                </ul>");_.b("\n" + i);_.b("                <ul class=\"nav navbar-nav\">");_.b("\n" + i);_.b("\n" + i);_.b("                    <li class=\"dropdown\">");_.b("\n" + i);_.b("                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">");_.b(_.t(_.f("Baselayers",c,p,0)));_.b(" <b");_.b("\n" + i);_.b("                                class=\"caret\"></b></a>");_.b("\n" + i);_.b("                        <ul class=\"dropdown-menu\" id=\"base-layer-list\">");_.b("\n" + i);_.b("                        </ul>");_.b("\n" + i);_.b("                    </li>");_.b("\n" + i);_.b("                    <li id=\"share-modal-li\" class=\"gc-btn\">");_.b("\n" + i);_.b("                        <a href=\"javascript:void(0)\" id=\"share-modal\" title=\"Share\"");_.b("\n" + i);_.b("                           onclick=\"MapCentia.share();\">");_.b("\n" + i);_.b("                            ");_.b(_.t(_.f("Share",c,p,0)));_.b(" </a>");_.b("\n" + i);_.b("                    </li>");_.b("\n" + i);_.b("                    <li id=\"legend-popover-li\" class=\"gc-btn\">");_.b("\n" + i);_.b("                        <a href=\"javascript:void(0)\" id=\"legend-popover\" rel=\"popover\" data-placement=\"bottom\"");_.b("\n" + i);_.b("                                >");_.b("\n" + i);_.b("                            ");_.b(_.t(_.f("Legend",c,p,0)));_.b(" </a>");_.b("\n" + i);_.b("                    </li>");_.b("\n" + i);_.b("                    <li id=\"legend-modal-li\" class=\"gc-btn\">");_.b("\n" + i);_.b("                        <a href=\"javascript:void(0)\" id=\"legend-modal\" title=\"Legend\">");_.b("\n" + i);_.b("                            ");_.b(_.t(_.f("Legend",c,p,0)));_.b(" </a>");_.b("\n" + i);_.b("                    </li>");_.b("\n" + i);_.b("                    <li id=\"draw-button-li\" class=\"gc-btn\" style=\"display: none\">");_.b("\n" + i);_.b("                        <button type=\"button\" class=\"btn btn-default navbar-btn\" data-toggle=\"button\" id=\"draw-button\">");_.b("\n" + i);_.b("                            ");_.b(_.t(_.f("Draw",c,p,0)));_.b("\n" + i);_.b("                        </button>");_.b("\n" + i);_.b("                    </li>");_.b("\n" + i);_.b("                    <li id=\"filter-popover-li\" class=\"gc-btn\" style=\"display: none\">");_.b("\n" + i);_.b("                        <a href=\"javascript:void(0)\" id=\"filter-popover\" rel=\"popover\" data-placement=\"bottom\"");_.b("\n" + i);_.b("                                >");_.b("\n" + i);_.b("                            Filter </a>");_.b("\n" + i);_.b("                    </li>");_.b("\n" + i);_.b("                    <li id=\"filter-modal-li\" class=\"gc-btn\" style=\"display: none\">");_.b("\n" + i);_.b("                        <a href=\"javascript:void(0)\" id=\"filter-modal\" title=\"Filter\">");_.b("\n" + i);_.b("                            Filter </a>");_.b("\n" + i);_.b("                    </li>");_.b("\n" + i);_.b("                    <li>");_.b("\n" + i);_.b("                        <form class=\"navbar-form navbar-left\" role=\"search\" onsubmit=\"return false;\">");_.b("\n" + i);_.b("                            <div class=\"form-group\">");_.b("\n" + i);_.b("                                <input type=\"text\" id=\"search-input\" name=\"search-input\" class=\"form-control\"");_.b("\n" + i);_.b("                                       placeholder=\"");_.b(_.t(_.f("Search",c,p,0)));_.b("\">");_.b("\n" + i);_.b("                            </div>");_.b("\n" + i);_.b("                        </form>");_.b("\n" + i);_.b("                    </li>");_.b("\n" + i);_.b("                    <li>");_.b("\n" + i);_.b("                        <button id=\"locate-btn\" type=\"button\" class=\"btn btn-default navbar-btn\">");_.b("\n" + i);_.b("                            <i class=\"fa fa-location-arrow\"></i>");_.b("\n" + i);_.b("                        </button>");_.b("\n" + i);_.b("                    </li>");_.b("\n" + i);_.b("\n" + i);_.b("                </ul>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("    </nav>");_.b("\n" + i);_.b("    <!-- layers -->");_.b("\n" + i);_.b("    <div id=\"layers\" class=\"panel-group\"></div>");_.b("\n" + i);_.b("    <!-- legend -->");_.b("\n" + i);_.b("    <div id=\"legend\"></div>");_.b("\n" + i);_.b("    <!-- filter -->");_.b("\n" + i);_.b("    <div id=\"filter\">");_.b("\n" + i);_.b("        <div id=\"sql-filter\">");_.b("\n" + i);_.b("            <select id=\"sql-filter-table\"></select>");_.b("\n" + i);_.b("            <form id=\"sql-filter-form\"></form>");_.b("\n" + i);_.b("            <div id=\"sql-filter-res\"></div>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("<div id=\"menu\"></div>");_.b("\n" + i);_.b("<!-- legend modal -->");_.b("\n" + i);_.b("<div id=\"modal-legend\" class=\"modal fade\">");_.b("\n" + i);_.b("    <div class=\"modal-dialog\">");_.b("\n" + i);_.b("        <div class=\"modal-content\">");_.b("\n" + i);_.b("            <div class=\"modal-header\">");_.b("\n" + i);_.b("                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>");_.b("\n" + i);_.b("                <h4 class=\"modal-title\">");_.b(_.t(_.f("Legend",c,p,0)));_.b("</h4>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"modal-body\"></div>");_.b("\n" + i);_.b("            <div class=\"modal-footer\">");_.b("\n" + i);_.b("                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">");_.b(_.t(_.f("Close",c,p,0)));_.b("</button>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <!-- /.modal-content -->");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <!-- /.modal-dialog -->");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("<!-- /.modal -->");_.b("\n" + i);_.b("<!-- filter modal -->");_.b("\n" + i);_.b("<div id=\"modal-filter\" class=\"modal fade\">");_.b("\n" + i);_.b("    <div class=\"modal-dialog\">");_.b("\n" + i);_.b("        <div class=\"modal-content\">");_.b("\n" + i);_.b("            <div class=\"modal-header\">");_.b("\n" + i);_.b("                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>");_.b("\n" + i);_.b("                <h4 class=\"modal-title\">Filter</h4>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"modal-body\"></div>");_.b("\n" + i);_.b("            <div class=\"modal-footer\">");_.b("\n" + i);_.b("                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">");_.b(_.t(_.f("Close",c,p,0)));_.b("</button>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <!-- /.modal-content -->");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <!-- /.modal-dialog -->");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("<!-- /.modal -->");_.b("\n" + i);_.b("<!-- info modal -->");_.b("\n" + i);_.b("<div id=\"modal-info\" class=\"modal fade infobox\">");_.b("\n" + i);_.b("    <div class=\"modal-dialog modal-infobox\">");_.b("\n" + i);_.b("        <div class=\"modal-content\">");_.b("\n" + i);_.b("            <div class=\"modal-header\">");_.b("\n" + i);_.b("                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>");_.b("\n" + i);_.b("                <h4 class=\"modal-title\">");_.b(_.t(_.f("Info",c,p,0)));_.b("</h4>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"modal-body\" id=\"modal-info-body\">");_.b("\n" + i);_.b("                <ul class=\"nav nav-tabs\" id=\"info-tab\"></ul>");_.b("\n" + i);_.b("                <div class=\"tab-content\" id=\"info-pane\"></div>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"modal-footer\">");_.b("\n" + i);_.b("                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">");_.b(_.t(_.f("Close",c,p,0)));_.b("</button>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <!-- /.modal-content -->");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <!-- /.modal-dialog -->");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("<!-- /.modal -->");_.b("\n" + i);_.b("<!-- Share modal -->");_.b("\n" + i);_.b("<div id=\"modal-share\" class=\"modal fade \">");_.b("\n" + i);_.b("    <div class=\"modal-dialog\">");_.b("\n" + i);_.b("        <div class=\"modal-content\">");_.b("\n" + i);_.b("            <div class=\"modal-header\">");_.b("\n" + i);_.b("                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>");_.b("\n" + i);_.b("                <h4 class=\"modal-title\">");_.b(_.t(_.f("Share the map",c,p,0)));_.b("</h4>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"modal-body\" id=\"modal-share-body\">");_.b("\n" + i);_.b("                <form class=\"form-horizontal\" role=\"form\">");_.b("\n" + i);_.b("                    <div class=\"form-group\">");_.b("\n" + i);_.b("                        <label class=\"col-sm-1 control-label\"><i class=\"fa fa-share\"></i></label>");_.b("\n" + i);_.b("\n" + i);_.b("                        <div class=\"col-sm-10\">");_.b("\n" + i);_.b("                            <button type=\"button\" class=\"btn btn-default btn-share\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                                    data-placement=\"bottom\" title=\"Twitter\" onclick=\"MapCentia.shareTwitter();\"><i");_.b("\n" + i);_.b("                                    class=\"fa fa-twitter\"></i>");_.b("\n" + i);_.b("                            </button>");_.b("\n" + i);_.b("                            <button type=\"button\" class=\"btn btn-default btn-share\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                                    data-placement=\"bottom\" title=\"LinkedIn\" onclick=\"MapCentia.shareLinkedIn();\"><i");_.b("\n" + i);_.b("                                    class=\"fa fa-linkedin\"></i>");_.b("\n" + i);_.b("                            </button>");_.b("\n" + i);_.b("                            <button type=\"button\" class=\"btn btn-default btn-share\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                                    data-placement=\"bottom\" title=\"Google+\" onclick=\"MapCentia.shareGooglePlus();\"><i");_.b("\n" + i);_.b("                                    class=\"fa fa-google-plus\"></i>");_.b("\n" + i);_.b("                            </button>");_.b("\n" + i);_.b("                            <button type=\"button\" class=\"btn btn-default btn-share\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                                    data-placement=\"bottom\" title=\"Facebook\" onclick=\"MapCentia.shareFacebook();\"><i");_.b("\n" + i);_.b("                                    class=\"fa fa-facebook\"></i>");_.b("\n" + i);_.b("                            </button>");_.b("\n" + i);_.b("                            <button type=\"button\" class=\"btn btn-default btn-share\" data-toggle=\"tooltip\"");_.b("\n" + i);_.b("                                    data-placement=\"bottom\" title=\"Tumblr\" onclick=\"MapCentia.shareTumblr();\"><i");_.b("\n" + i);_.b("                                    class=\"fa fa-tumblr\"></i>");_.b("\n" + i);_.b("                            </button>");_.b("\n" + i);_.b("                        </div>");_.b("\n" + i);_.b("                    </div>");_.b("\n" + i);_.b("                    <div class=\"form-group\">");_.b("\n" + i);_.b("                        <label for=\"share-url\" class=\"col-sm-1 control-label\"><i class=\"fa fa-link\"></i></label>");_.b("\n" + i);_.b("\n" + i);_.b("                        <div class=\"col-sm-10\">");_.b("\n" + i);_.b("                            <input data-toggle=\"tooltip\" data-placement=\"top\" title=\"");_.b(_.t(_.f("URL to this map",c,p,0)));_.b("\" type=\"text\"");_.b("\n" + i);_.b("                                   class=\"form-control share-text\" id=\"share-url\" value=\"\">");_.b("\n" + i);_.b("                        </div>");_.b("\n" + i);_.b("                    </div>");_.b("\n" + i);_.b("                    <div class=\"form-group\" id=\"group-iframe\">");_.b("\n" + i);_.b("                        <label for=\"share-iframe\" class=\"col-sm-1 control-label\"><i class=\"fa fa-code\"></i></label>");_.b("\n" + i);_.b("\n" + i);_.b("                        <div class=\"col-sm-10\">");_.b("\n" + i);_.b("                            <input data-toggle=\"tooltip\" data-placement=\"top\"");_.b("\n" + i);_.b("                                   title=\"");_.b(_.t(_.f("Iframe with this map to embed on web page",c,p,0)));_.b("\" type=\"text\"");_.b("\n" + i);_.b("                                   class=\"form-control share-text\" id=\"share-iframe\" value=\"\">");_.b("\n" + i);_.b("                        </div>");_.b("\n" + i);_.b("                    </div>");_.b("\n" + i);_.b("                    <div class=\"form-group\" id=\"group-static\">");_.b("\n" + i);_.b("                        <label for=\"share-static\" class=\"col-sm-1 control-label\"><i class=\"fa fa-picture-o\"></i></label>");_.b("\n" + i);_.b("\n" + i);_.b("                        <div class=\"col-sm-10\">");_.b("\n" + i);_.b("                            <input data-toggle=\"tooltip\" data-placement=\"top\"");_.b("\n" + i);_.b("                                   title=\"");_.b(_.t(_.f("URL to a static PNG image of this map",c,p,0)));_.b("\" type=\"text\"");_.b("\n" + i);_.b("                                   class=\"form-control share-text\" id=\"share-static\" value=\"\">");_.b("\n" + i);_.b("                        </div>");_.b("\n" + i);_.b("                    </div>");_.b("\n" + i);_.b("                    <div class=\"form-group\" id=\"group-javascript\">");_.b("\n" + i);_.b("                        <label for=\"share-javascript\" class=\"col-sm-1 control-label\">js</label>");_.b("\n" + i);_.b("\n" + i);_.b("                        <div class=\"col-sm-10\">");_.b("\n" + i);_.b("                            <textarea data-toggle=\"tooltip\" data-placement=\"top\"");_.b("\n" + i);_.b("                                      title=\"");_.b(_.t(_.f("JavaScript for an application",c,p,0)));_.b("\" class=\"form-control share-text\"");_.b("\n" + i);_.b("                                      id=\"share-javascript\" rows=\"6\" value=\"\"></textarea>");_.b("\n" + i);_.b("                        </div>");_.b("\n" + i);_.b("                    </div>");_.b("\n" + i);_.b("\n" + i);_.b("                    <div class=\"form-group\" id=\"group-javascript-object\" style=\"display: none\">");_.b("\n" + i);_.b("                        <label for=\"share-javascript-object\" class=\"col-sm-1 control-label\">DK:Lag</label>");_.b("\n" + i);_.b("\n" + i);_.b("                        <div class=\"col-sm-10\">");_.b("\n" + i);_.b("                            <textarea data-toggle=\"tooltip\" data-placement=\"top\"");_.b("\n" + i);_.b("                                      title=\"");_.b(_.t(_.f("JavaScript object",c,p,0)));_.b("\" class=\"form-control share-text\"");_.b("\n" + i);_.b("                                      id=\"share-javascript-object\" rows=\"3\" value=\"\"></textarea>");_.b("\n" + i);_.b("                        </div>");_.b("\n" + i);_.b("                    </div>");_.b("\n" + i);_.b("                    <div class=\"form-group\" id=\"group-extent\" style=\"display: none\">");_.b("\n" + i);_.b("                        <label for=\"share-extent\" class=\"col-sm-1 control-label\">Extent</label>");_.b("\n" + i);_.b("                        <div class=\"col-sm-10\">");_.b("\n" + i);_.b("                            <textarea data-toggle=\"tooltip\" data-placement=\"top\"");_.b("\n" + i);_.b("                                      title=\"");_.b(_.t(_.f("JavaScript object",c,p,0)));_.b("\" class=\"form-control share-text\"");_.b("\n" + i);_.b("                                      id=\"share-extent\" rows=\"1\" value=\"\"></textarea>");_.b("\n" + i);_.b("                        </div>");_.b("\n" + i);_.b("                    </div>");_.b("\n" + i);_.b("\n" + i);_.b("                </form>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("            <div class=\"modal-footer\">");_.b("\n" + i);_.b("                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">");_.b(_.t(_.f("Close",c,p,0)));_.b("</button>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("        </div>");_.b("\n" + i);_.b("        <!-- /.modal-content -->");_.b("\n" + i);_.b("    </div>");_.b("\n" + i);_.b("    <!-- /.modal-dialog -->");_.b("\n" + i);_.b("</div>");return _.fl();;});