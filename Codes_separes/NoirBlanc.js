//Code noir et blanc

name : "BAndW"
uniform : [{name: 'BAndW_seuil', default: 'width*(nb_frames%100)/100', description: "largeur jusqu'à laquelle appliquer le filtre"}]
code : `if (gl_FragCoord.x > seuil)
		vid.rgb = vec3((vid.r + vid.g + vid.b)/3.0);`

export { name, uniforms, code };

//fin du fichier