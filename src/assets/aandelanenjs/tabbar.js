HOYT.namespace("widgets").TabBar = function (element) {
  //element: tabbar ul

  //Private variables
  var self = this;
  var tabs = [];
  var tabIndex = -1;

  //init:
  $("li", $(element)).each(function (index, el) {
    var $el = $(el);
    $el.on("click", clickHandler);
    var href = $el.find("a").attr("href");
    if (href) href = href.substr(href.indexOf("#")); //IE returns full url in front of #
    tabs.push({ button: $el, target: $(href) }); //target: look for element with id == href
  });

  //Private methods
  function clickHandler(event) {
    event.preventDefault();
    var i = tabs.length;
    while (i--) {
      if (tabs[i].button.get(0) === event.currentTarget) {
        self.setTabIndex(i);
        return;
      }
    }
  }

  //Public methods
  this.setTabIndex = function (idx) {
    if (tabIndex == idx) return false;
    if (idx == -1) tabIndex = idx;
    else if (tabs[idx] == undefined) return false;
    var i = tabs.length,
      ret = false;
    while (i--) {
      var bln = idx == i;
      if (tabs[i].button.hasClass("disabled")) bln = false;
      if (bln) {
        tabIndex = i;
        tabs[i].target.show();
        tabs[i].button.addClass("active");
        ret = true;
      } else {
        tabs[i].target.hide();
        tabs[i].button.removeClass("active");
      }
    }
    if (ret) $(this).change();
    return ret;
  };
  this.getTabIndex = function () {
    return tabIndex;
  };
  this.getTabCount = function () {
    return tabs.length;
  };
  this.selectFirstItem = function () {
    var i = -1,
      n = tabs.length;
    tabIndex = -1;
    while (++i < n) {
      if (this.setTabIndex(i)) break;
    }
    return tabIndex > -1;
  };
  this.selectLastItem = function () {
    var i = tabs.length;
    tabIndex = -1;
    while (i--) {
      if (this.setTabIndex(i)) break;
    }
    return tabIndex > -1;
  };
  this.selectItem = function (selector) {
    var item = $(selector).get(0);
    var i = tabs.length;
    while (i--) {
      if (tabs[i].target.get(0) === item) {
        return this.setTabIndex(i);
      }
    }
    return false;
  };
  this.getSelectedItem = function () {
    return this.getItem(tabIndex);
  };
  this.getItem = function (index) {
    if (tabs[index]) return tabs[index].target;
    return;
  };
  this.getTabButton = function (index) {
    if (tabs[index]) return tabs[index].button;
    return;
  };
  this.disableTab = function (index, bln) {
    if (tabs[index]) {
      var b = tabs[index].button;
      if (b.hasClass("disabled") != bln) {
        if (bln) b.addClass("disabled");
        else b.removeClass("disabled");
        if (!bln) {
          if (tabIndex == index) b.addClass("active");
          else b.removeClass("active");
        }
        if (bln && tabIndex == index) {
          tabIndex = -1;
          tabs[index].target.hide();
        }
        return true;
      }
    }
    return false;
  };
};
