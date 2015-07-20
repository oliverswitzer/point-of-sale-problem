var specHelper = {
  processStringScans: function(stringScan, terminal) {
    for(var i = 0; i < stringScan.length; i++) {
      terminal.scan(stringScan[i]);
    }
  }
};

