var app = new require("biojs-vis-chromosome");

jQuery( document ).ready(function( $ ) {
  // Handler for .ready() called.
  var chromosomes = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","X","Y"];
  inst=[];
  for (var i in chromosomes){
    var chr=chromosomes[i];
    $(yourDiv).append("<h3>Chromosome "+chr+"</h3><div id='holder_"+chr+"' style=''></div><br/>");
    //var instance1 = 

    var chromosome = new app();

    inst[i]= chromosome.init({
      target: "holder_"+chr,
      dasSource: "http://www.ensembl.org/das/Homo_sapiens.GRCh38.karyotype",
      dasSegment: chr
    });
    inst[i].on("onModelLoaded",function( objEvent ) {
      $("#holder_"+objEvent.model.id).data("size",1*objEvent.model.stop);
      adjustSizes(1*objEvent.model.stop);
    });  
  }
  var maxSize=0;
  var adjustSizes= function(size){
    if (maxSize<size)
      maxSize=size;
    for (var i in chromosomes){
      var chr=chromosomes[i];
      if($("#holder_"+chr).data("size")!=undefined){
        var size=$("#holder_"+chr).data("size");
        $("#holder_"+chr).width((size/maxSize)*100 +"%");
      }
    }
  }
});

