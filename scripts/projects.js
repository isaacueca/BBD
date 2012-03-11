/* Job toggle script */


function showBnym(){
$("#bnym").animate({ opacity: 'toggle', height: 'toggle' }, { duration: 200 });
$("#capitalg").hide();
$("#alpine").hide();
$("#jamespatterson").hide();
}

function showAlpine(){
$("#alpine").animate({ opacity: 'toggle', height: 'toggle' }, { duration: 200 });
$("#bnym").hide();
$("#capitalg").hide();
$("#jamespatterson").hide();
}


function showCapitalg(){
$("#capitalg").animate({ opacity: 'toggle', height: 'toggle' }, { duration: 200 });
$("#bnym").hide();
$("#alpine").hide();
$("#jamespatterson").hide();
}


function showJamesPatterson(){
$("#jamespatterson").animate({ opacity: 'toggle', height: 'toggle' }, { duration: 200 });
$("#bnym").hide();
$("#alpine").hide();
$("#capitalg").hide();
}
