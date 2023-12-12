const { MenuItem } = require("electron");
const appMenuPublish = require("../../app-menu-publish");
const strings = require("./app-string");

exports.status = function (menu, tray) {
  menu.append(
    new MenuItem({
      label: "一键发布所有",
      click: function (menuItem, browserWindow, event) {
        appMenuPublish.publishArticleTo(tray, strings.all, true, 5000);
      },
    })
  );
};
