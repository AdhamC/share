// map needs to be displayed for a split second so it can recognize the size
// it needs to be, and then its hidden in order to display the main page
$('#world-map').hide('fast', function() {
});

$('#world-map').vectorMap({
    // the map is already downloaded as a js file
  map: 'world_mill',
  series: {
    regions: [{
        // dataset is loaded in a seperate js file as an object
      values: dataset,
      // the colors of the minimum and maximum of the data, the library
      // handles the coloration in between
      scale: ['#ff6978', '#b1ede8'],
      // The 2 options are linear and polynomial, I felt linear highlights
      // my data better in this scenario
      normalizeFunction: 'linear',
      legend: {
          horizontal: true,
          cssClass: 'jvectormap-legend',
          // vertical:true,
          title: 'Womens share of the workforce'
      },
    }]

  },
  // function handling the tooltips on hover over a country
  onRegionTipShow: function(e, el, code){
      // if statement in case data is Unavailable for a country
      if (dataset[code] == null){
          el.html(el.html()+' '+'(Data Unavailable)');
      } else {
        el.html(el.html()+' '+dataset[code]+'%');
    }
  }
});
// function to hide the landing page and display the map
function toggleSite(){
    // thank god for callback functions
    $("#everythingelse").fadeOut('slow', function() {
        $('#world-map').fadeIn('400', function() {
        });
    });
}
