'use strict';	
$('#content').hide();
let json = api.boa.run('check-double-checked.boa');
$('#loading').hide();
$('#content').show();
console.log(json);
//let container = document.getElementById('output');
//container.innerHTML = json.AddedNullCheck["[]"][0];


