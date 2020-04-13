window.onload = function() {
  setTimeout(function () {
    function handleFormSubmit(ele) {
      var submitButton = ele.querySelector("input[type=submit]");
      var spinner = document.createElement("span");
      spinner.setAttribute("class", "loader");
      submitButton.setAttribute("disabled", true);
      submitButton.style.cursor = "wait";
      submitButton.parentNode.appendChild(spinner);
      return true;
    }
    function resetSubmitButton(e) {
      var submitButtons = e.target.form.getElementsByClassName("submit-button");
      for (var i = 0; i < submitButtons.length; i++) {
        submitButtons[i].disabled = false;
      }
    }
    function addChangeHandler(elements) {
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("change", resetSubmitButton);
      }
    }
    var form = document.getElementById("form89");
    form.onsubmit = function () {
      handleFormSubmit(form);
    };
    addChangeHandler(form.getElementsByTagName("input"));
    addChangeHandler(form.getElementsByTagName("select"));
    addChangeHandler(form.getElementsByTagName("textarea"));
    var nodes = document.querySelectorAll("#form89 input[data-subscription]");
    if (nodes) {
      for (var i = 0, len = nodes.length; i < len; i++) {
        var status = nodes[i].dataset
          ? nodes[i].dataset.subscription
          : nodes[i].getAttribute("data-subscription");
        if (status === "true") {
          nodes[i].checked = true;
        }
      }
    }
    var nodes = document.querySelectorAll("#form89 select[data-value]");
    if (nodes) {
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var selectedValue = node.dataset
          ? node.dataset.value
          : node.getAttribute("data-value");
        if (selectedValue) {
          for (var j = 0; j < node.options.length; j++) {
            if (node.options[j].value === selectedValue) {
              node.options[j].selected = "selected";
              break;
            }
          }
        }
      }
    }
    this.getParentElement = function (list) {
      return list[list.length - 1].parentElement;
    };
    var dom0 = document.querySelector("#form89 #fe695");
    var fe695 = new LiveValidation(dom0, {
      validMessage: "",
      onlyOnBlur: false,
      wait: 300,
    });
    fe695.add(Validate.Custom, {
      against: function (value) {
        return !value.match(
          /(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i
        );
      },
      failureMessage: "No es válido el uso de URL en este campo ",
    });
    fe695.add(Validate.Custom, {
      against: function (value) {
        return !value.match(/(<([^>]+)>)/gi);
      },
      failureMessage: "No es válido el uso de HTML en este campo",
    });
    fe695.add(Validate.Length, {
      tooShortMessage: "Favor de ingresar un nombre de máximo 35 caracteres",
      tooLongMessage: "Favor de ingresar un nombre de máximo 35 caracteres",
      minimum: 0,
      maximum: 35,
    });
    fe695.add(Validate.Presence, {
      failureMessage: "Este campo es obligatorio",
    });
    var dom1 = document.querySelector("#form89 #fe696");
    var fe696 = new LiveValidation(dom1, {
      validMessage: "",
      onlyOnBlur: false,
      wait: 300,
    });
    fe696.add(Validate.Custom, {
      against: function (value) {
        return !value.match(
          /(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i
        );
      },
      failureMessage: "No es válido el uso de URL en este campo ",
    });
    fe696.add(Validate.Custom, {
      against: function (value) {
        return !value.match(/(<([^>]+)>)/gi);
      },
      failureMessage: "No es válido el uso de HTML en este campo",
    });
    fe696.add(Validate.Length, {
      tooShortMessage: "Favor de ingresar un apellido de máximo 35 caracteres",
      tooLongMessage: "Favor de ingresar un apellido de máximo 35 caracteres",
      minimum: 0,
      maximum: 35,
    });
    fe696.add(Validate.Presence, {
      failureMessage: "Este campo es obligatorio",
    });
    var dom2 = document.querySelector("#form89 #fe706");
    var fe706 = new LiveValidation(dom2, {
      validMessage: "",
      onlyOnBlur: false,
      wait: 300,
    });
    fe706.add(Validate.Custom, {
      against: function (value) {
        return !value.match(
          /(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i
        );
      },
      failureMessage: "No es válido el uso de URL en este campo ",
    });
    fe706.add(Validate.Custom, {
      against: function (value) {
        return !value.match(/(<([^>]+)>)/gi);
      },
      failureMessage: "No es válido el uso de HTML en este campo",
    });
    fe706.add(Validate.Length, {
      tooShortMessage: "Favor de ingresar un apellido de máximo 35 caracteres",
      tooLongMessage: "Favor de ingresar un apellido de máximo 35 caracteres",
      minimum: 1,
      maximum: 35,
    });
    fe706.add(Validate.Presence, {
      failureMessage: "Este campo es obligatorio",
    });
    var dom3 = document.querySelector("#form89 #fe697");
    var fe697 = new LiveValidation(dom3, {
      validMessage: "",
      onlyOnBlur: false,
      wait: 300,
    });
    fe697.add(Validate.Presence, {
      failureMessage: "Este campo es obligatorio",
    });
    fe697.add(Validate.Format, {
      pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i,
      failureMessage: "Favor de ingresar un correo electrónico válido",
    });
    var dom4 = document.querySelector("#form89 #fe707");
    var fe707 = new LiveValidation(dom4, {
      validMessage: "",
      onlyOnBlur: false,
      wait: 300,
    });
    fe707.add(Validate.Custom, {
      against: function (value) {
        return !value.match(
          /(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i
        );
      },
      failureMessage: "Value must not contain any URL's",
    });
    fe707.add(Validate.Custom, {
      against: function (value) {
        return !value.match(/(<([^>]+)>)/gi);
      },
      failureMessage: "Value must not contain any HTML",
    });
    fe707.add(Validate.Length, {
      tooShortMessage: "Favor de ingresar un teléfono de 10 caracteres",
      tooLongMessage: "Favor de ingresar un teléfono de 10 caracteres",
      minimum: 10,
      maximum: 10,
    });
    fe707.add(Validate.Presence, {
      failureMessage: "Este campo es obligatorio",
    });
  }, 0);
  setTimeout(function () {
    function handleFormSubmit(ele) {
      var submitButton = ele.querySelector("input[type=submit]");
      var spinner = document.createElement("span");
      spinner.setAttribute("class", "loader");
      submitButton.setAttribute("disabled", true);
      submitButton.style.cursor = "wait";
      submitButton.parentNode.appendChild(spinner);
      return true;
    }
    function resetSubmitButton(e) {
      var submitButtons = e.target.form.getElementsByClassName("submit-button");
      for (var i = 0; i < submitButtons.length; i++) {
        submitButtons[i].disabled = false;
      }
    }
    function addChangeHandler(elements) {
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("change", resetSubmitButton);
      }
    }
    var form = document.getElementById("form77");
    form.onsubmit = function () {
      handleFormSubmit(form);
    };
    addChangeHandler(form.getElementsByTagName("input"));
    addChangeHandler(form.getElementsByTagName("select"));
    addChangeHandler(form.getElementsByTagName("textarea"));
    var nodes = document.querySelectorAll("#form77 input[data-subscription]");
    if (nodes) {
      for (var i = 0, len = nodes.length; i < len; i++) {
        var status = nodes[i].dataset
          ? nodes[i].dataset.subscription
          : nodes[i].getAttribute("data-subscription");
        if (status === "true") {
          nodes[i].checked = true;
        }
      }
    }
    var nodes = document.querySelectorAll("#form77 select[data-value]");
    if (nodes) {
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var selectedValue = node.dataset
          ? node.dataset.value
          : node.getAttribute("data-value");
        if (selectedValue) {
          for (var j = 0; j < node.options.length; j++) {
            if (node.options[j].value === selectedValue) {
              node.options[j].selected = "selected";
              break;
            }
          }
        }
      }
    }
    this.getParentElement = function (list) {
      return list[list.length - 1].parentElement;
    };
    var dom0 = document.querySelector("#form77 #fe561");
    var fe561 = new LiveValidation(dom0, {
      validMessage: "",
      onlyOnBlur: false,
      wait: 300,
    });
    fe561.add(Validate.Custom, {
      against: function (value) {
        return !value.match(
          /(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i
        );
      },
      failureMessage: "Value must not contain any URL's",
    });
    fe561.add(Validate.Custom, {
      against: function (value) {
        return !value.match(/(<([^>]+)>)/gi);
      },
      failureMessage: "Value must not contain any HTML",
    });
    fe561.add(Validate.Length, {
      tooShortMessage: "Invalid length for field value",
      tooLongMessage: "Invalid length for field value",
      minimum: 0,
      maximum: 35,
    });
    fe561.add(Validate.Presence, {
      failureMessage: "Este campo es requerido",
    });
    var dom1 = document.querySelector("#form77 #fe562");
    var fe562 = new LiveValidation(dom1, {
      validMessage: "",
      onlyOnBlur: false,
      wait: 300,
    });
    fe562.add(Validate.Custom, {
      against: function (value) {
        return !value.match(
          /(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i
        );
      },
      failureMessage: "Value must not contain any URL's",
    });
    fe562.add(Validate.Custom, {
      against: function (value) {
        return !value.match(/(<([^>]+)>)/gi);
      },
      failureMessage: "Value must not contain any HTML",
    });
    fe562.add(Validate.Length, {
      tooShortMessage: "Invalid length for field value",
      tooLongMessage: "Invalid length for field value",
      minimum: 0,
      maximum: 35,
    });
    fe562.add(Validate.Presence, {
      failureMessage: "Este campo es requerido",
    });
    var dom2 = document.querySelector("#form77 #fe563");
    var fe563 = new LiveValidation(dom2, {
      validMessage: "",
      onlyOnBlur: false,
      wait: 300,
    });
    fe563.add(Validate.Presence, {
      failureMessage: "Este campo es requerido",
    });
    fe563.add(Validate.Format, {
      pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i,
      failureMessage: "A valid email address is required",
    });
  }, 0);
}
