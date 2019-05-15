window.addEventListener('load', function() {
  console.log("This is working!");

  var tabList = document.getElementById("tabs"); // <ul> element
  /*
  var li = document.createElement("li");
    li.appendChild(document.createTextNode("Four"));
    ul.appendChild(li);
  */
  var closeAll = document.createElement("li");
  closeAll.setAttribute("class", "tab ember-view");
  closeAll.style.paddingLeft = "5px";
  closeAll.style.maxWidth = "75px";
  closeAll.style.borderLeft = "1px solid #dedede"

  var closeContent = document.createElement("div");
  closeContent.setAttribute("class", "tab-content-holder");

  var closeText = document.createElement('div');
  closeText.appendChild(document.createTextNode("Close All"));
  closeText.setAttribute("class", "tab_text");

  closeContent.appendChild(closeText);
  closeAll.appendChild(closeContent);
  tabList.appendChild(closeAll);

  closeAll.addEventListener("click", function() {
    var closeButtons = document.querySelectorAll(".ember-view.close");
    console.log("My ZD CLOSE BUTTONS", closeButtons);
    for(var n=0;n<closeButtons.length;n++) {
      closeButtons[n].click();
    }
  });

})
