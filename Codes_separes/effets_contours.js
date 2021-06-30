vec4 effet_contours( sampler2D inTexture, vec2 inTextureCoord)
{
	vec2 tx= vTextureCoord;
	float step = 1/width;
	vec4 vid = texture2D(vidTx,tx);
	vec4 vid1 = texture2D(vidTx,tx-step);
	vec4 vid2 = vec4(0,0,0,1);
	if (gl_FraCoord.x<300)
		vid += -vid1 + vid2;
	return vid
}

vec4 effet_contours( vec4 inColor)
{
	vec2 tx= vTextureCoord;
	float step = 1/width;
	vec4 vid = texture2D(vidTx,tx);
	vec4 vid1 = texture2D(vidTx,tx-step);
	vec4 vid2 = vec4(0,0,0,1);
	if (gl_FraCoord.x<300)
		vid += -vid1 + vid2;
	return vid
}

code: '
{
	vec2 tx= vTextureCoord;
	float step = 1/width;
	vec4 vid = texture2D(vidTx,tx);
	vec4 vid1 = texture2D(vidTx,tx-step);
	vec4 vid2 = vec4(0,0,0,1);
	if (gl_FraCoord.x<300)
		vid += -vid1 + vid2;
	return vid
}'