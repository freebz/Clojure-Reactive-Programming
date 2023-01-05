// Compiled by ClojureScript 1.10.238 {}
goog.provide('monet.canvas');
goog.require('cljs.core');
goog.require('monet.core');
monet.canvas.get_context = (function monet$canvas$get_context(canvas,type){
return canvas.getContext(cljs.core.name.call(null,type));
});
/**
 * Starts a new path by resetting the list of sub-paths.
 * Call this method when you want to create a new path.
 */
monet.canvas.begin_path = (function monet$canvas$begin_path(ctx){
ctx.beginPath();

return ctx;
});
/**
 * Tries to draw a straight line from the current point to the start.
 * If the shape has already been closed or has only one point, this
 * function does nothing.
 */
monet.canvas.close_path = (function monet$canvas$close_path(ctx){
ctx.closePath();

return ctx;
});
/**
 * Fills the subpaths with the current fill style.
 */
monet.canvas.fill = (function monet$canvas$fill(ctx){
ctx.fill();

return ctx;
});
/**
 * Strokes the subpaths with the current stroke style.
 */
monet.canvas.stroke = (function monet$canvas$stroke(ctx){
ctx.stroke();

return ctx;
});
/**
 * Sets all pixels in the rectangle defined by starting point (x, y)
 * and size (w, h) to transparent black.
 */
monet.canvas.clear_rect = (function monet$canvas$clear_rect(ctx,p__21745){
var map__21746 = p__21745;
var map__21746__$1 = ((((!((map__21746 == null)))?(((((map__21746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21746):map__21746);
var x = cljs.core.get.call(null,map__21746__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21746__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__21746__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__21746__$1,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.clearRect(x,y,w,h);

return ctx;
});
/**
 * DEPRECATED. Prefer fill-rect
 */
monet.canvas.rect = (function monet$canvas$rect(ctx,p__21748){
var map__21749 = p__21748;
var map__21749__$1 = ((((!((map__21749 == null)))?(((((map__21749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21749):map__21749);
var x = cljs.core.get.call(null,map__21749__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21749__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__21749__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__21749__$1,new cljs.core.Keyword(null,"h","h",1109658740));
monet.canvas.begin_path.call(null,ctx);

ctx.rect(x,y,w,h);

monet.canvas.close_path.call(null,ctx);

monet.canvas.fill.call(null,ctx);

return ctx;
});
/**
 * Paints a rectangle which has a starting point at (x, y) and has a
 * w width and an h height onto the canvas, using the current stroke
 * style.
 */
monet.canvas.stroke_rect = (function monet$canvas$stroke_rect(ctx,p__21751){
var map__21752 = p__21751;
var map__21752__$1 = ((((!((map__21752 == null)))?(((((map__21752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21752):map__21752);
var x = cljs.core.get.call(null,map__21752__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21752__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__21752__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__21752__$1,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.strokeRect(x,y,w,h);

return ctx;
});
/**
 * Draws a filled rectangle at (x, y) position whose size is determined
 * by width w and height h.
 */
monet.canvas.fill_rect = (function monet$canvas$fill_rect(ctx,p__21754){
var map__21755 = p__21754;
var map__21755__$1 = ((((!((map__21755 == null)))?(((((map__21755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21755):map__21755);
var x = cljs.core.get.call(null,map__21755__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21755__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__21755__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__21755__$1,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.fillRect(x,y,w,h);

return ctx;
});
/**
 * Draws a circle at position (x, y) with radius r
 */
monet.canvas.circle = (function monet$canvas$circle(ctx,p__21757){
var map__21758 = p__21757;
var map__21758__$1 = ((((!((map__21758 == null)))?(((((map__21758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21758):map__21758);
var x = cljs.core.get.call(null,map__21758__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21758__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.call(null,map__21758__$1,new cljs.core.Keyword(null,"r","r",-471384190));
monet.canvas.begin_path.call(null,ctx);

ctx.arc(x,y,r,(0),(Math.PI * (2)),true);

monet.canvas.close_path.call(null,ctx);

monet.canvas.fill.call(null,ctx);

return ctx;
});
/**
 * Paints the given text at a starting point at (x, y), using the
 * current stroke style.
 */
monet.canvas.text = (function monet$canvas$text(ctx,p__21760){
var map__21761 = p__21760;
var map__21761__$1 = ((((!((map__21761 == null)))?(((((map__21761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21761):map__21761);
var text = cljs.core.get.call(null,map__21761__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var x = cljs.core.get.call(null,map__21761__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21761__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.fillText(text,x,y);

return ctx;
});
/**
 * Sets the font. Default value 10px sans-serif.
 */
monet.canvas.font_style = (function monet$canvas$font_style(ctx,font){
ctx.font = font;

return ctx;
});
/**
 * Color or style to use inside shapes. Default #000 (black).
 */
monet.canvas.fill_style = (function monet$canvas$fill_style(ctx,color){
ctx.fillStyle = cljs.core.name.call(null,color);

return ctx;
});
/**
 * Color or style to use for the lines around shapes. Default #000 (black).
 */
monet.canvas.stroke_style = (function monet$canvas$stroke_style(ctx,color){
ctx.strokeStyle = cljs.core.name.call(null,color);

return ctx;
});
/**
 * Sets the line width. Default 1.0
 */
monet.canvas.stroke_width = (function monet$canvas$stroke_width(ctx,w){
ctx.lineWidth = w;

return ctx;
});
/**
 * Sets the line cap. Possible values (as string or keyword):
 * butt (default), round, square
 */
monet.canvas.stroke_cap = (function monet$canvas$stroke_cap(ctx,cap){
ctx.lineCap = cljs.core.name.call(null,cap);

return ctx;
});
/**
 * Moves the starting point of a new subpath to the (x, y) coordinates.
 */
monet.canvas.move_to = (function monet$canvas$move_to(ctx,x,y){
ctx.moveTo(x,y);

return ctx;
});
/**
 * Connects the last point in the subpath to the x, y coordinates with a
 * straight line.
 */
monet.canvas.line_to = (function monet$canvas$line_to(ctx,x,y){
ctx.lineTo(x,y);

return ctx;
});
/**
 * Global Alpha value that is applied to shapes and images before they are
 * composited onto the canvas. Default 1.0 (opaque).
 */
monet.canvas.alpha = (function monet$canvas$alpha(ctx,a){
ctx.globalAlpha = a;

return ctx;
});
/**
 * With Global Alpha applied this sets how shapes and images are drawn
 * onto the existing bitmap. Possible values (as string or keyword):
 * source-atop, source-in, source-out, source-over (default),
 * destination-atop, destination-in, destination-out, destination-over,
 * lighter, darker, copy, xor
 */
monet.canvas.composition_operation = (function monet$canvas$composition_operation(ctx,operation){
ctx.globalCompositionOperation = cljs.core.name.call(null,operation);

return ctx;
});
/**
 * Sets the text alignment attribute. Possible values (specified
 * as a string or keyword): start (default), end, left, right or
 * center.
 */
monet.canvas.text_align = (function monet$canvas$text_align(ctx,alignment){
ctx.textAlign = cljs.core.name.call(null,alignment);

return ctx;
});
/**
 * Sets the text baseline attribute. Possible values (specified
 * as a string or keyword): top, hanging, middle, alphabetic (default),
 * ideographic, bottom
 */
monet.canvas.text_baseline = (function monet$canvas$text_baseline(ctx,alignment){
ctx.textBaseline = cljs.core.name.call(null,alignment);

return ctx;
});
/**
 * Gets the pixel value as a hash map of RGBA values
 */
monet.canvas.get_pixel = (function monet$canvas$get_pixel(ctx,x,y){
var imgd = ctx.getImageData(x,y,(1),(1)).data;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),(imgd[(0)]),new cljs.core.Keyword(null,"green","green",-945526839),(imgd[(1)]),new cljs.core.Keyword(null,"blue","blue",-622100620),(imgd[(2)]),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(imgd[(3)])], null);
});
/**
 * Saves the current drawing style state using a stack so you can revert
 * any change you make to it using restore.
 */
monet.canvas.save = (function monet$canvas$save(ctx){
ctx.save();

return ctx;
});
/**
 * Restores the drawing style state to the last element on the 'state stack'
 * saved by save.
 */
monet.canvas.restore = (function monet$canvas$restore(ctx){
ctx.restore();

return ctx;
});
/**
 * Rotate the context 
 */
monet.canvas.rotate = (function monet$canvas$rotate(ctx,angle){
ctx.rotate(angle);

return ctx;
});
/**
 * Scales the context by a floating-point factor in each direction
 */
monet.canvas.scale = (function monet$canvas$scale(ctx,x,y){
ctx.scale(x,y);

return ctx;
});
/**
 * Moves the origin point of the context to (x, y).
 */
monet.canvas.translate = (function monet$canvas$translate(ctx,x,y){
ctx.translate(x,y);

return ctx;
});
/**
 * Multiplies a custom transformation matrix to the existing
 * HTML5 canvas transformation according to the follow convention:
 * 
 * [ x']   [ m11 m21 dx ] [ x ]
 * [ y'] = [ m12 m22 dy ] [ y ]
 * [ 1 ]   [ 0   0   1  ] [ 1 ]
 */
monet.canvas.transform = (function monet$canvas$transform(var_args){
var G__21764 = arguments.length;
switch (G__21764) {
case 7:
return monet.canvas.transform.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 2:
return monet.canvas.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

monet.canvas.transform.cljs$core$IFn$_invoke$arity$7 = (function (ctx,m11,m12,m21,m22,dx,dy){
ctx.transform(m11,m12,m21,m22,dx,dy);

return ctx;
});

monet.canvas.transform.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__21765){
var map__21766 = p__21765;
var map__21766__$1 = ((((!((map__21766 == null)))?(((((map__21766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21766):map__21766);
var m11 = cljs.core.get.call(null,map__21766__$1,new cljs.core.Keyword(null,"m11","m11",-1747137747));
var m12 = cljs.core.get.call(null,map__21766__$1,new cljs.core.Keyword(null,"m12","m12",-1234809182));
var m21 = cljs.core.get.call(null,map__21766__$1,new cljs.core.Keyword(null,"m21","m21",1822226849));
var m22 = cljs.core.get.call(null,map__21766__$1,new cljs.core.Keyword(null,"m22","m22",1714612893));
var dx = cljs.core.get.call(null,map__21766__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var dy = cljs.core.get.call(null,map__21766__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
ctx.transform(m11,m12,m21,m22,dx,dy);

return ctx;
});

monet.canvas.transform.cljs$lang$maxFixedArity = 7;

/**
 * Draws the image onto the canvas at the given position.
 * If a map of params is given, the number of entries is used to
 * determine the underlying call to make.
 */
monet.canvas.draw_image = (function monet$canvas$draw_image(var_args){
var G__21770 = arguments.length;
switch (G__21770) {
case 4:
return monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$4 = (function (ctx,img,x,y){
ctx.drawImage(img,x,y);

return ctx;
});

monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3 = (function (ctx,img,p__21771){
var map__21772 = p__21771;
var map__21772__$1 = ((((!((map__21772 == null)))?(((((map__21772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21772):map__21772);
var params = map__21772__$1;
var sh = cljs.core.get.call(null,map__21772__$1,new cljs.core.Keyword(null,"sh","sh",-682444007));
var sw = cljs.core.get.call(null,map__21772__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
var x = cljs.core.get.call(null,map__21772__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21772__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dh = cljs.core.get.call(null,map__21772__$1,new cljs.core.Keyword(null,"dh","dh",528137731));
var dx = cljs.core.get.call(null,map__21772__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var w = cljs.core.get.call(null,map__21772__$1,new cljs.core.Keyword(null,"w","w",354169001));
var sy = cljs.core.get.call(null,map__21772__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
var dy = cljs.core.get.call(null,map__21772__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
var h = cljs.core.get.call(null,map__21772__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var dw = cljs.core.get.call(null,map__21772__$1,new cljs.core.Keyword(null,"dw","dw",-821060841));
var sx = cljs.core.get.call(null,map__21772__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
var pred__21774_21778 = cljs.core._EQ_;
var expr__21775_21779 = cljs.core.count.call(null,params);
if(cljs.core.truth_(pred__21774_21778.call(null,(2),expr__21775_21779))){
ctx.drawImage(img,x,y);
} else {
if(cljs.core.truth_(pred__21774_21778.call(null,(4),expr__21775_21779))){
ctx.drawImage(img,x,y,w,h);
} else {
if(cljs.core.truth_(pred__21774_21778.call(null,(8),expr__21775_21779))){
ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__21775_21779)].join('')));
}
}
}

return ctx;
});

monet.canvas.draw_image.cljs$lang$maxFixedArity = 4;

monet.canvas.quadratic_curve_to = (function monet$canvas$quadratic_curve_to(var_args){
var G__21781 = arguments.length;
switch (G__21781) {
case 5:
return monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 2:
return monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5 = (function (ctx,cpx,cpy,x,y){
ctx.quadraticCurveTo(cpx,cpy,x,y);

return ctx;
});

monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__21782){
var map__21783 = p__21782;
var map__21783__$1 = ((((!((map__21783 == null)))?(((((map__21783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21783):map__21783);
var cpx = cljs.core.get.call(null,map__21783__$1,new cljs.core.Keyword(null,"cpx","cpx",296463436));
var cpy = cljs.core.get.call(null,map__21783__$1,new cljs.core.Keyword(null,"cpy","cpy",-1203422450));
var x = cljs.core.get.call(null,map__21783__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21783__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.quadraticCurveTo(cpx,cpy,x,y);

return ctx;
});

monet.canvas.quadratic_curve_to.cljs$lang$maxFixedArity = 5;

monet.canvas.bezier_curve_to = (function monet$canvas$bezier_curve_to(var_args){
var G__21787 = arguments.length;
switch (G__21787) {
case 7:
return monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 2:
return monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$7 = (function (ctx,cp1x,cp1y,cp2x,cp2y,x,y){
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);

return ctx;
});

monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__21788){
var map__21789 = p__21788;
var map__21789__$1 = ((((!((map__21789 == null)))?(((((map__21789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21789):map__21789);
var cp1x = cljs.core.get.call(null,map__21789__$1,new cljs.core.Keyword(null,"cp1x","cp1x",465245137));
var cp1y = cljs.core.get.call(null,map__21789__$1,new cljs.core.Keyword(null,"cp1y","cp1y",628283543));
var cp2x = cljs.core.get.call(null,map__21789__$1,new cljs.core.Keyword(null,"cp2x","cp2x",-1682644749));
var cp2y = cljs.core.get.call(null,map__21789__$1,new cljs.core.Keyword(null,"cp2y","cp2y",903335801));
var x = cljs.core.get.call(null,map__21789__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21789__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);

return ctx;
});

monet.canvas.bezier_curve_to.cljs$lang$maxFixedArity = 7;

monet.canvas.rounded_rect = (function monet$canvas$rounded_rect(ctx,p__21792){
var map__21793 = p__21792;
var map__21793__$1 = ((((!((map__21793 == null)))?(((((map__21793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21793):map__21793);
var x = cljs.core.get.call(null,map__21793__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21793__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__21793__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__21793__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var r = cljs.core.get.call(null,map__21793__$1,new cljs.core.Keyword(null,"r","r",-471384190));

monet.canvas.stroke.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,ctx),x,(y + r)),x,((y + h) - r)),x,(y + h),(x + r),(y + h)),((x + w) - r),(y + h)),(x + w),(y + h),(x + w),((y + h) - r)),(x + w),(y + r)),(x + w),y,((x + w) - r),y),(x + r),y),x,y,x,(y + r)));

return ctx;
});
monet.canvas.add_entity = (function monet$canvas$add_entity(mc,k,ent){
return (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k] = ent);
});
monet.canvas.remove_entity = (function monet$canvas$remove_entity(mc,k){
return delete new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k];
});
monet.canvas.get_entity = (function monet$canvas$get_entity(mc,k){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k]));
});
monet.canvas.update_entity = (function monet$canvas$update_entity(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21799 = arguments.length;
var i__4500__auto___21800 = (0);
while(true){
if((i__4500__auto___21800 < len__4499__auto___21799)){
args__4502__auto__.push((arguments[i__4500__auto___21800]));

var G__21801 = (i__4500__auto___21800 + (1));
i__4500__auto___21800 = G__21801;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return monet.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

monet.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic = (function (mc,k,func,extra){
var cur = (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k]);
var res = cljs.core.apply.call(null,func,cur,extra);
return (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k] = res);
});

monet.canvas.update_entity.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
monet.canvas.update_entity.cljs$lang$applyTo = (function (seq21795){
var G__21796 = cljs.core.first.call(null,seq21795);
var seq21795__$1 = cljs.core.next.call(null,seq21795);
var G__21797 = cljs.core.first.call(null,seq21795__$1);
var seq21795__$2 = cljs.core.next.call(null,seq21795__$1);
var G__21798 = cljs.core.first.call(null,seq21795__$2);
var seq21795__$3 = cljs.core.next.call(null,seq21795__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21796,G__21797,G__21798,seq21795__$3);
});

monet.canvas.clear_BANG_ = (function monet$canvas$clear_BANG_(mc){
var ks = cljs.core.js_keys.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc));
var seq__21802 = cljs.core.seq.call(null,ks);
var chunk__21803 = null;
var count__21804 = (0);
var i__21805 = (0);
while(true){
if((i__21805 < count__21804)){
var k = cljs.core._nth.call(null,chunk__21803,i__21805);
monet.canvas.remove_entity.call(null,mc,k);


var G__21806 = seq__21802;
var G__21807 = chunk__21803;
var G__21808 = count__21804;
var G__21809 = (i__21805 + (1));
seq__21802 = G__21806;
chunk__21803 = G__21807;
count__21804 = G__21808;
i__21805 = G__21809;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__21802);
if(temp__5457__auto__){
var seq__21802__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21802__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21802__$1);
var G__21810 = cljs.core.chunk_rest.call(null,seq__21802__$1);
var G__21811 = c__4319__auto__;
var G__21812 = cljs.core.count.call(null,c__4319__auto__);
var G__21813 = (0);
seq__21802 = G__21810;
chunk__21803 = G__21811;
count__21804 = G__21812;
i__21805 = G__21813;
continue;
} else {
var k = cljs.core.first.call(null,seq__21802__$1);
monet.canvas.remove_entity.call(null,mc,k);


var G__21814 = cljs.core.next.call(null,seq__21802__$1);
var G__21815 = null;
var G__21816 = (0);
var G__21817 = (0);
seq__21802 = G__21814;
chunk__21803 = G__21815;
count__21804 = G__21816;
i__21805 = G__21817;
continue;
}
} else {
return null;
}
}
break;
}
});
monet.canvas.entity = (function monet$canvas$entity(v,update,draw){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"draw","draw",1358331674),draw,new cljs.core.Keyword(null,"update","update",1045576396),update], null);
});
monet.canvas.attr = (function monet$canvas$attr(e,a){
return e.getAttribute(a);
});
monet.canvas.draw_loop = (function monet$canvas$draw_loop(p__21818){
var map__21819 = p__21818;
var map__21819__$1 = ((((!((map__21819 == null)))?(((((map__21819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21819):map__21819);
var mc = map__21819__$1;
var canvas = cljs.core.get.call(null,map__21819__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var updating_QMARK_ = cljs.core.get.call(null,map__21819__$1,new cljs.core.Keyword(null,"updating?","updating?",1586585646));
var ctx = cljs.core.get.call(null,map__21819__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var active = cljs.core.get.call(null,map__21819__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var entities = cljs.core.get.call(null,map__21819__$1,new cljs.core.Keyword(null,"entities","entities",1940967403));
monet.canvas.clear_rect.call(null,ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),monet.canvas.attr.call(null,canvas,"width"),new cljs.core.Keyword(null,"h","h",1109658740),monet.canvas.attr.call(null,canvas,"height")], null));

if(cljs.core.truth_(cljs.core.deref.call(null,active))){
var ks_21826 = cljs.core.js_keys.call(null,entities);
var cnt_21827 = ks_21826.length;
var i_21828 = (0);
while(true){
if((i_21828 < cnt_21827)){
var k_21829 = (ks_21826[i_21828]);
var map__21821_21830 = (entities[k_21829]);
var map__21821_21831__$1 = ((((!((map__21821_21830 == null)))?(((((map__21821_21830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21821_21830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21821_21830):map__21821_21830);
var ent_21832 = map__21821_21831__$1;
var draw_21833 = cljs.core.get.call(null,map__21821_21831__$1,new cljs.core.Keyword(null,"draw","draw",1358331674));
var update_21834 = cljs.core.get.call(null,map__21821_21831__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var value_21835 = cljs.core.get.call(null,map__21821_21831__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__3911__auto__ = update_21834;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.deref.call(null,updating_QMARK_);
} else {
return and__3911__auto__;
}
})())){
var updated_21836 = (function (){var or__3922__auto__ = (function (){try{return update_21834.call(null,value_21835);
}catch (e21824){if((e21824 instanceof Error)){
var e = e21824;
console.log(e);

return value_21835;
} else {
throw e21824;

}
}})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return value_21835;
}
})();
if(cljs.core.truth_((entities[k_21829]))){
(entities[k_21829] = cljs.core.assoc.call(null,ent_21832,new cljs.core.Keyword(null,"value","value",305978217),updated_21836));
} else {
}
} else {
}

if(cljs.core.truth_(draw_21833)){
try{draw_21833.call(null,ctx,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1((entities[k_21829])));
}catch (e21825){if((e21825 instanceof Error)){
var e_21837 = e21825;
console.log(e_21837);
} else {
throw e21825;

}
}} else {
}

var G__21838 = (i_21828 + (1));
i_21828 = G__21838;
continue;
} else {
}
break;
}

return monet.core.animation_frame.call(null,((function (map__21819,map__21819__$1,mc,canvas,updating_QMARK_,ctx,active,entities){
return (function (){
return monet.canvas.draw_loop.call(null,mc);
});})(map__21819,map__21819__$1,mc,canvas,updating_QMARK_,ctx,active,entities))
);
} else {
return null;
}
});
monet.canvas.monet_canvas = (function monet$canvas$monet_canvas(elem,context_type){
var ct = (function (){var or__3922__auto__ = context_type;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "2d";
}
})();
var ctx = monet.canvas.get_context.call(null,elem,ct);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),elem,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"entities","entities",1940967403),{},new cljs.core.Keyword(null,"updating?","updating?",1586585646),cljs.core.atom.call(null,true),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.atom.call(null,true)], null);
});
monet.canvas.init = (function monet$canvas$init(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21847 = arguments.length;
var i__4500__auto___21848 = (0);
while(true){
if((i__4500__auto___21848 < len__4499__auto___21847)){
args__4502__auto__.push((arguments[i__4500__auto___21848]));

var G__21849 = (i__4500__auto___21848 + (1));
i__4500__auto___21848 = G__21849;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,p__21843){
var vec__21844 = p__21843;
var context_type = cljs.core.nth.call(null,vec__21844,(0),null);
var mc = monet.canvas.monet_canvas.call(null,canvas,context_type);
monet.canvas.draw_loop.call(null,mc);

return mc;
});

monet.canvas.init.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
monet.canvas.init.cljs$lang$applyTo = (function (seq21841){
var G__21842 = cljs.core.first.call(null,seq21841);
var seq21841__$1 = cljs.core.next.call(null,seq21841);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21842,seq21841__$1);
});

monet.canvas.stop = (function monet$canvas$stop(mc){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.stop_updating = (function monet$canvas$stop_updating(mc){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"updating?","updating?",1586585646).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.start_updating = (function monet$canvas$start_updating(mc){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"updating?","updating?",1586585646).cljs$core$IFn$_invoke$arity$1(mc),true);
});
monet.canvas.restart = (function monet$canvas$restart(mc){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(mc),true);

return monet.canvas.draw_loop.call(null,mc);
});

//# sourceMappingURL=canvas.js.map?rel=1672795886979
