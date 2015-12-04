/*global $*/
/*jslint regexp: true*/
var
  i = 0,
  strdiv = '',
  params = [{id: 'Location Id', required: true},
            {id: 'To Location', required: true},
            {id: 'From Date', required: true},
            {id: 'To Date', required: true},
            {id: 'Rooms Num', required: true},
            {id: 'Adults Num', required: true},
            {id: 'Child Num', required: false},
            {id: 'Specific Hotel Name', required: false},
            {id: 'Brand Code 1', required: false},
            {id: 'Brand Code 2', required: false},
            {id: 'Brand Code 3', required: false},
            {id: 'Amenity Code 1', required: false},
            {id: 'Amenity Code 2', required: false},
            {id: 'Amenity Code 3', required: false},
            {id: 'Star Rating', required: false} ];

String.prototype.uncapitalize = function () {
  'use strict';
  return this.charAt(0).toLowerCase() + this.slice(1);
};

for (i = 0; i < params.length; i = i + 1) {
  strdiv = '';
  strdiv += '<div>'
    + '<label for="' + params[i].id.replace(/ /g, '').toLowerCase()
    + '" class="left default-width">'
    + params[i].id
    + '<input type="text" id="'
    + params[i].id.replace(/ /g, '').toLowerCase()
    + '" class="right" value="###PLACEHOLDER###" />'
    + '</label>'
    + '<div style="clear:both;"></div>'
    + '</div>';
  if (params[i].required) {
    switch (params[i].id) {
    case 'To Location':
      strdiv = strdiv.replace('###PLACEHOLDER###', 'LosAngeles,CA,US');
      break;
    case 'From Date':
      strdiv = strdiv.replace('###PLACEHOLDER###', '12/15/2015');
      break;
    case 'To Date':
      strdiv = strdiv.replace('###PLACEHOLDER###', '12/24/2015');
      break;
    case 'Rooms Num':
      strdiv = strdiv.replace('###PLACEHOLDER###', '1');
      break;
    case 'Adults Num':
      strdiv = strdiv.replace('###PLACEHOLDER###', '2');
      break;
    default:
      strdiv = strdiv.replace('###PLACEHOLDER###', '');
      break;
    }
    $('#required').append(strdiv);
  } else {
    switch (params[i].id) {
    case 'Star Rating':
      strdiv = strdiv.replace('###PLACEHOLDER###', '4');
      break;
    default:
      strdiv = strdiv.replace('###PLACEHOLDER###', '');
      break;
    }
    $('#optional').append(strdiv);
  }
}

$('#gen').click(function () {
  'use strict';
  var
    i = 0,
    strurl = '###YOU SHOULD KNOW THE URL###',
    paramsStr = '',
    val = '';

  for (i = 0; i < params.length; i = i + 1) {
    val = $('#' + params[i].id.replace(/ /g, '').toLowerCase()).val();
    if (val && val.toString().trim() !== '') {
      paramsStr += '&' + params[i].id.replace(/ /g, '').uncapitalize()
        + '=' + val;
    }
  }

  $('#redirecturlstr').html('');
  $('#redirecturlstr')
    .append('<a target="_blank" class="anchor" href="'
      + strurl + paramsStr + '">URL params</a> '
      + paramsStr
        .replace(/\&([^&]+)=([^&]+)/g,
                 "&<span class='blue'>$1</span>=<span class='red'>$2</span>"));
});
