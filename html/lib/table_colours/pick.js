(function( $, undefined ) {

	var webColors=[
		['003366','336699','3366cc','003399','000099','0000cc','000066'],
		['006666','006699','0099cc','0066cc','0033cc','0000ff','3333ff','333399'],
		['669999','009999','33cccc','00ccff','0099ff','0066ff','3366ff','3333cc','666699'],
		['339966','00cc99','00ffcc','00ffff','33ccff','3399ff','6699ff','6666ff','6600ff','6600cc'],
		['339933','00cc66','00ff99','66ffcc','66ffff','66ccff','99ccff','9999ff','9966ff','9933ff','9900ff'],
		['006600','00cc00','00ff00','66ff99','99ffcc','ccffff','ccccff','cc99ff','cc66ff','cc33ff','cc00ff','9900cc'],
		['003300','009933','33cc33','66ff66','99ff99','ccffcc','ffffff','ffccff','ff99ff','ff66ff','ff00ff','cc00cc','660066'],
		['333300','009900','66ff33','99ff66','ccff99','ffffcc','ffcccc','ff99cc','ff66cc','ff33cc','cc0099','993399'],
		['336600','669900','99ff33','ccff66','ffff99','ffcc99','ff9999','ff6699','ff3399','cc3399','990099'],
		['666633','99cc00','ccff33','ffff66','ffcc66','ff9966','ff6666','ff0066','d60094','993366'],
		['a58800','cccc00','ffff00','ffcc00','ff9933','ff6600','ff0033','cc0066','660033'],
		['996633','cc9900','ff9900','cc6600','ff3300','ff0000','cc0000','990033'],
		['663300','996600','cc3300','993300','990000','800000','993333']
	];


	var ballColors = [
		[
			'FF0033', // mid bottom
			'FF6600',
			'FF9933',
			'FF9966',
			'FFFF99', //
		],
		[
			'00CC00', // center left
			'33CCCC', //
			'00CCFF', //
			'0066FF', //
			'3366FF', //
		],
		[
			'3333FF', // top mid
			'6666FF', //
			'9966FF', //
			'FF00FF', //
			'9900FF', // center right
		],
		[
			'FFFFFF', // center
		],
	];

	var newColors = [
		[
			'3366FF', '0066FF', '3333FF',
		],
		[
			'33CCCC', '00CCFF', '6666FF', '9966FF',
		],
		[
			'00CC00', 'FFFFFF', 'FF00FF', '9900FF',
		],
		[
			'FFFF99', 'FF9966', 'FF9933', 'FF6600',
		],
		[
			'FF0033',
		],
	];

	var colors = newColors;


	var int2Hex=function(i){
		        var h=i.toString(16);
		        if(h.length==1){
					            h='0'+h;
					        }
		        return h;
		    };
	var int2Hex3=function(i){
		        var h=int2Hex(i);
		        return h+h+h;
		    };

$.widget( "hex.colorpicker", {

	version: '0.0.1',

	options: {
	},

	_create: function() {
		this.element.html(this._paletteHTML());
	},


	_paletteHTML: function() {
		return '<div class="ui-widget ui-widget-content ui-corner-all">'+
			'<span>'+this._paletteHTML2()+'</span>'+
		'</div></div>';
	},

	// TODO: Can make the elements actually hexagons
	// https://codepen.io/knight1762/pen/GJfzs
	
	// Embedded browser doesn't support display: flex
	// Table is the fallback, each row is a table

	_paletteHTML2: function() {
		var div = $('<div class="colorpicker">');

		for(var r=0, rMax=colors.length; r < rMax; r++){
			var row = $('<tr>');

			var cs=colors[r];
			for(var i=0, iMax=cs.length; i<iMax; i++){ 
				row.append($('<td class="colorsample" style="background-color:#'+cs[i]+'">'));
			}
			div.append($('<table>').append(row));
		}

		console.log(div);
		return div[0].outerHTML;
	},


});

})(jQuery);

