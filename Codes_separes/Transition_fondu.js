//Transition fondu

name : "fondu"

uniform : [{name: 'fondu_seuil', default: "(nb_frames%100)/100", description: "nombre entre 0 et 1 qui définit la vitesse du fondu"}]

code tx : `vec2 inTextureCoord = tx;`

code : `vec4 result = mix(result1, result2, fondu_seuil);`

export { name, uniforms, code };

//fin du fichier