// $('#world-map').vectorMap({map: 'world_mill'});
$('#world-map').hide('fast', function() {

});
$('#world-map').vectorMap({
  map: 'world_mill',
  series: {
    regions: [{
      values: dataset,
      scale: ['#fc8d59', '#91bfdb'],
      normalizeFunction: 'polynomial'
    }]
  },
  onRegionTipShow: function(e, el, code){
      if (dataset[code] == null){
          el.html(el.html()+' '+'(Data Unavailable)');
      } else {
        el.html(el.html()+' '+dataset[code]+'%');
    }
  }
});

function toggleSite(){
    $("#everythingelse").fadeOut('slow', function() {
        $('#world-map').fadeIn('400', function() {
        });
        // $('#world-map').css('display', 'block');
    });
}
// $('#world-map').hide('fast', function() {
//
// });
