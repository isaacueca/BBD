<!-- team script -->


function showIsaac(){
$("#isaac").animate({ opacity: 'toggle', height: 'toggle' }, { duration: 200 });
$("#felipe").hide();
$("#matt").hide();
$("#marcos").hide();
$("#michael").hide();

}
function showMatt(){
$("#matt").animate({ opacity: 'toggle', height: 'toggle' }, { duration: 200 });
$("#felipe").hide();
$("#isaac").hide();
$("#marcos").hide();
$("#michael").hide();

}
function showFelipe(){
$("#felipe").animate({ opacity: 'toggle', height: 'toggle' }, { duration: 200 });	
$("#isaac").hide();
$("#matt").hide();
$("#marcos").hide();
$("#michael").hide();

}

function showMarcos(){
$("#marcos").animate({ opacity: 'toggle', height: 'toggle' }, { duration: 200 });	
$("#isaac").hide();
$("#matt").hide();
$("#felipe").hide();
$("#michael").hide();
}

function showMichael(){
$("#michael").animate({ opacity: 'toggle', height: 'toggle' }, { duration: 200 });	
$("#isaac").hide();
$("#matt").hide();
$("#felipe").hide();
$("#marcos").hide();
}

<!-- End team script -->