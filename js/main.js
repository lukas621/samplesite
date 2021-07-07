$(document).ready(function(){
  var $myGroup = $('#myGroup');
  $myGroup.on('shown.bs.collapse','.collapse', function() {
      $myGroup.find('.collapse.in').collapse('hide');
  });
})
