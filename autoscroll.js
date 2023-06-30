(function(host){ 
        var interval = 3, increment = 1, pairs = window.location.search.substring(1).split("&");

        for(var i = 0; i < pairs.length; i++){
          var pair = pairs[i].split("="),
              attribute = pair[0],
              value = parseInt(pair[1]);

          switch(attribute){
            case "interval": interval = value;
            case "increment": increment = value;
          }         
        }

        return { 
          start: function(){ 
            host.scrollBy(0, increment); 
            host.setTimeout(arguments.callee, interval) 
          } 
        }; 
      }(this)).start();
completion(true);
