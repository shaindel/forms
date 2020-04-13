$( document ).ready(function() {

var defaultHiddenFieldNameValue = "NoData";
function getQueryStringParamValue(strQStrParam) {
var strURL = document.location.href;
var strQStrParamValue = "";
          if (strURL.indexOf('?') != -1)
          {
                      strQStrParamValue = strURL.substr(strURL.indexOf('?') + 1);
                      if (strQStrParamValue.indexOf(strQStrParam) != -1)
                      {
                                  strQStrParamValue = strQStrParamValue.substr(strQStrParamValue.indexOf(strQStrParam));
                                  strQStrParamValue = strQStrParamValue.substr(strQStrParamValue.indexOf('=') + 1);
                                  if (strQStrParamValue.indexOf('&') != -1)
                                  strQStrParamValue = strQStrParamValue.substr(0, strQStrParamValue.indexOf('&'));
                                  return strQStrParamValue;

                      }else{
                                  strQStrParamValue = defaultHiddenFieldNameValue;
                                  return strQStrParamValue;
                      }
          }else{
                      strQStrParamValue = defaultHiddenFieldNameValue;
                      return strQStrParamValue;
          }
}
   
var form = "MeridenForm";   //Nombre de los formularios

function setCampaign(){
  var elqForm = document.forms[form];
  
  
elqForm.elements['utm_source'].value = getQueryStringParamValue('utm_source');
elqForm.elements['utm_medium'].value = getQueryStringParamValue('utm_medium');
elqForm.elements['utm_campaign'].value = getQueryStringParamValue('utm_campaign');
elqForm.elements['utm_content'].value = getQueryStringParamValue('utm_content');
elqForm.elements['utm_term'].value = getQueryStringParamValue('utm_term');
elqForm.elements['gclid'].value = getQueryStringParamValue('gclid');


    }

window.onload = setCampaign;

});