/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['dojo/pentaho/common/DropDownButton.js']) {
  _$jscoverage['dojo/pentaho/common/DropDownButton.js'] = [];
  _$jscoverage['dojo/pentaho/common/DropDownButton.js'][1] = 0;
  _$jscoverage['dojo/pentaho/common/DropDownButton.js'][3] = 0;
  _$jscoverage['dojo/pentaho/common/DropDownButton.js'][5] = 0;
}
_$jscoverage['dojo/pentaho/common/DropDownButton.js'].source = ["dojo<span class=\"k\">.</span>provide<span class=\"k\">(</span><span class=\"s\">\"pentaho.common.DropDownButton\"</span><span class=\"k\">);</span>","","dojo<span class=\"k\">.</span>require<span class=\"k\">(</span><span class=\"s\">\"dijit.form.DropDownButton\"</span><span class=\"k\">);</span>","","dojo<span class=\"k\">.</span>declare<span class=\"k\">(</span><span class=\"s\">\"pentaho.common.DropDownButton\"</span><span class=\"k\">,</span>","\tdijit<span class=\"k\">.</span>form<span class=\"k\">.</span>DropDownButton<span class=\"k\">,</span>","\t<span class=\"k\">{</span>","","\tbaseClass <span class=\"k\">:</span> <span class=\"s\">\"dijitDropDownButton\"</span><span class=\"k\">,</span>","","\ttemplateString<span class=\"k\">:</span> dojo<span class=\"k\">.</span>cache<span class=\"k\">(</span><span class=\"s\">\"pentaho.common\"</span> <span class=\"k\">,</span> <span class=\"s\">\"DropDownButton.html\"</span><span class=\"k\">)</span>","","    <span class=\"k\">}</span>","<span class=\"k\">);</span>",""];
_$jscoverage['dojo/pentaho/common/DropDownButton.js'][1]++;
dojo.provide("pentaho.common.DropDownButton");
_$jscoverage['dojo/pentaho/common/DropDownButton.js'][3]++;
dojo.require("dijit.form.DropDownButton");
_$jscoverage['dojo/pentaho/common/DropDownButton.js'][5]++;
dojo.declare("pentaho.common.DropDownButton", dijit.form.DropDownButton, {baseClass: "dijitDropDownButton", templateString: dojo.cache("pentaho.common", "DropDownButton.html")});
