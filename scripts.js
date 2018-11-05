// $('#world-map').vectorMap({map: 'world_mill'});
$('#world-map').vectorMap({
  map: 'world_mill',
  series: {
    regions: [{
      values: dataset,
      scale: ['#C8EEFF', '#0071A4'],
      normalizeFunction: 'polynomial'
    }]
  },
  onRegionTipShow: function(e, el, code){
    el.html(el.html()+' (Womens share of the workforce: '+dataset[code]+'%)');
  }
});
