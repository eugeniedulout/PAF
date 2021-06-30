//Code Flou

name : "blur"

uniform : [{name: 'blur_matrice', default: "[1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]", description: "matrice de convolution"}, 
{name: 'blur_step_w', default: "1.0/width", description : "pas des pixels en largeur"},
{name: 'blur_step_h', default: "1.0/height", description : "pas des pixels en hauteur"},
{name: 'blur_offset', default: "[(-blur_step_w, -blur_step_h), (0.0, -blur_step_h), (blur_step_w, -blur_step_h), (-blur_step_w, 0.0), (0.0,0.0), (blur_step_w, 0.0), (-blur_step_w, blur_step_h), (0.0, blur_step_h), (blur_step_w, blur_step_h)], description: "offset des pixels"}]

code : 'vec4 vid = vec4(0.0, 0.0, 0.0, 1.0);
  	int i = 0;
   	for (i=0; i<9; i++) {
        	vec4 tmp = texture2D(inTexture, inTextureCoord + blur_offset[i]);
        	vid.rgb += tmp.rgb * vec3(blur_matrice[i]);
     	}
     	vid.rgb /= 9.0;

export { name, uniforms, code };

//fin du fichier