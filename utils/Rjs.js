if (!jQuery) { throw new Error("This css requires Jquery") }


function get_color_all(){
  var color = Math.floor(Math.random() * 16777216).toString(16);
  return '#000000'.slice(0, -color.length) + color;
}

function get_color_5(){
  var colArray = new Array("purple", "red", "green", "yellow", "darkgreen");
  var idx = Math.floor(Math.random() * 5);
  return colArray[idx];
}

var $all = $("*"); //Look for all elements once

function all_random(interval, level){
  if(typeof(interval)==='undefined') interval = 2000;
  if(typeof(level)==='undefined') level = 1;
  var intervalID = setInterval(function(){
    $all.each(function(){
      switch(level){
        case 3:
          $(this).css("background-color", get_color_all());
        case 2:
          $(this).css("border-color", get_color_all());
        case 1:
          $(this).css("color", get_color_all());
      }
    })  
  }, interval)
  return intervalID;
}

