/*jshint node:true, indent:2, curly:true eqeqeq:true, immed:true, latedef:true, newcap:true, noarg:true,
regexp:true, undef:true, trailing:true, white:true */
/*global XT:true, XV:true, XM:true, Backbone:true, enyo:true, _:true */

(function () {

  enyo.kind({
    name: "XV.AddressWidget",
    kind: "FittableRows",
    classes: "xv-addresswidget",
    published: {
      attr: null,
      value: null
    },
    events: {
      onModelUpdate: ""
    },
    handlers: {
      "onfocus": "receiveFocus",
      "onblur": "receiveBlur"
    },
    components: [
      {kind: "enyo.TextArea", name: "viewer", showing: true, fit: true,
        classes: "xv-addresswidget-viewer", placeholder: "_none".loc()},
      {kind: "onyx.InputDecorator", name: "editor", showing: false, fit: true,
        classes: "xv-addresswidget-editor",
        components: [
        {kind: "onyx.Input", name: "line1", showing: false,
          placeholder: "_street".loc(), style: "display: block;"},
        {kind: "onyx.Input", name: "line2", showing: false, style: "display: block;"},
        {kind: "onyx.Input", name: "line3", showing: false, style: "display: block;"},
        {kind: "onyx.Input", name: "city", placeholder: "_city".loc(),
          showing: false, style: "width: 126px;"},
        {kind: "onyx.Input", name: "state", placeholder: "_state".loc(),
          showing: false, style: "width: 76px;"},
        {kind: "onyx.Input", name: "postalCode",  showing: false,
          placeholder: "_postalCode".loc(), style: "width: 126px;"},
        {kind: "onyx.Input", name: "country", showing: false,
          placeholder: "_country".loc(), style: "display: block;"}
      ]}
    ],
    receiveBlur: function () {
      this.$.viewer.show();
      this.$.editor.hide();
      this.$.line1.hide();
      this.$.line2.hide();
      this.$.line3.hide();
      this.$.city.hide();
      this.$.state.hide();
      this.$.postalCode.hide();
      this.$.country.hide();
    },
    receiveFocus: function () {
      this.$.viewer.hide();
      this.$.editor.show();
      this.$.line1.show();
      this.$.line2.show();
      this.$.line3.show();
      this.$.city.show();
      this.$.state.show();
      this.$.postalCode.show();
      this.$.country.show();
    },
    valueChanged: function () {
      var value = this.getValue(),
        line1 = value.get('line1') || "",
        line2 = value.get('line2') || "",
        line3 = value.get('line3') || "",
        city = value.get('city') || "",
        state = value.get('state') || "",
        postalCode = value.get('postalCode') || "",
        country = value.get('country') || "",
        fmt = XM.Address.format(value);
      this.$.line1.setValue(line1);
      this.$.line2.setValue(line2);
      this.$.line3.setValue(line3);
      this.$.city.setValue(city);
      this.$.state.setValue(state);
      this.$.postalCode.setValue(postalCode);
      this.$.country.setValue(country);
      this.$.viewer.setValue(fmt);
    }

  });
}());
