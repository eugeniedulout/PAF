//Transition Slide

name : "slide"

uniform : [{name: 'slide_seuil_w', default: "width*(nb_frames%100/100)", description: "défini la largeur à laquelle la transition se fait"},
{name: ‘slide_seuil’, default : “(nb_frames%100)/100”, description: “largeur entre 0 et 1”}]

code tx : `if (gl_FragCoord.x < slide_seuil_w)
		vec2 inTextureCoord = tx + vec2(1.0-seuil2, 0.0);
	else 
		vec2 inTextureCoord = tx + vec2(-seuil2, 0.0);`

code : `{
	if (gl_FragCoord.x < slide_seuil_w)
		vec4 result = result1;
	else
		vec4 result = result2;
}`


export { name, uniforms, code };

//fin du fichier