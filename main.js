canvas=document.getElementById('canvas');
ctx=canvas.getContext('2d');

var tex=500;
var tey=500;
var image_x=tex;
var image_y=tey;


var vitz=10.;
//var zoom = 200; // pour une distance de 1 sur le plan, on a 100 pixel sur l'image
var iteration_max = 255;

function calc(){
	ctx.fillStyle="rgb(255,255,255)";
    ctx.fillRect(0,0,tex,tey);
    var x1=parseFloat(document.getElementById("x1").value);
    var x2=parseFloat(document.getElementById("x2").value);
    var y1=parseFloat(document.getElementById("y1").value);
    var y2=parseFloat(document.getElementById("y2").value);
    // on calcule la taille de l'image :
    var zoom_x = image_x/(x2 - x1)
    var zoom_y = image_y/(y2 - y1)
    alert( x1+" "+x2+" "+y1+" "+y2 );
    for(x = 0 ; x < image_x ; x++){
        for(y = 0 ; y < image_y ; y++){
            var c_r = x / zoom_x + x1
            var c_i = y / zoom_y + y1
            var z_r = 0.0
            var z_i = 0.0
            var i = 0.0

            while(z_r*z_r + z_i*z_i < 4.0 && i < iteration_max){
                var tmp = z_r
                z_r = z_r*z_r - z_i*z_i + c_r
                z_i = 2.0*z_i*tmp + c_i
                i = i+1
            }
            if(i == iteration_max){
                ctx.fillStyle="rgb(0,0,0)";
            }
            else if( i/iteration_max < 0.33){
                ctx.fillStyle="rgb("+0+", "+0+","+ i/iteration_max*255+")";
            }
            else if( i/iteration_max < 0.66){
                ctx.fillStyle="rgb("+ i/iteration_max*255+", "+0+","+ i/iteration_max*255+")";
            }
            else{
                ctx.fillStyle="rgb("+ i/iteration_max*255+", "+0+","+0+")";
            }
            ctx.fillRect( x , y ,1 ,1 );
        }
    }
}

calc();


