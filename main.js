canvas=document.getElementById('canvas');
ctx=canvas.getContext('2d');

tex=500;
tey=500;

var vitz=10.;
//var zoom = 200; // pour une distance de 1 sur le plan, on a 100 pixel sur l'image
var iteration_max = 100;

function calc(){
	ctx.fillStyle="rgb(255,255,255)";
    ctx.fillRect(0,0,tex,tey);
    var x1=document.getElementById("x1"). value;
    var x2=document.getElementById("x2"). value;
    var y1=document.getElementById("y1"). value;
    var y2=document.getElementById("y2"). value;
    var zoom=tex/(x2-x1)
    var image_x = (x2 - x1) * zoom;
    var image_y = (y2 - y1) * zoom;
    alert("x="+image_x+" y="+image_y+" zoom="+zoom);

    for(x = 0 ; x <= image_x ; x++ ){
        for( y = 0 ;y <= image_y ; y++){
            var c_r = x / zoom + x1;
            var c_i = y / zoom + y1;
            var z_r = 0;
            var z_i = 0;
            var i = 0;

            while( z_r*z_r+z_i*z_i<4 && i<iteration_max){
                var tmp = z_r;
                z_r = z_r*z_r - z_i*z_i + c_r;
                z_i = 2*z_i*tmp + c_i;
                i = i+1;
            }

            if(i == iteration_max){
                ctx.fillStyle="rgb(0,0,0)";
            }
            else{
                ctx.fillStyle="rgb("+0+", "+0+","+ i/iteration_max*255+")";
                if(i!=1) alert(x+" "+y+"  i="+i);
            }
            ctx.fillRect( x , y ,1 ,1 );
           // alert(ctx.fillStyle);
        }
    }
}

function move(d){
	alert(d);
	if(d=='up'){
	    y1-=vit;
	    y2-=vit;
	}
	else if(d=='down'){
		y1+=vit;
		y2+=vit;
	}
	else if(d=='left'){
		x1-=vit;
		x2-=vit;
	}
	else if(d=='right'){
		x1+=vit;
		x2+=vit;
	}
    else if(d=='zoom-'){
    }
    else if(d=='zoom+'){
    }
	calc();
}

calc();


