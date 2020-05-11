
/**
 * Dummy add template.
 */

export function _add ( { mul , add } ) {

	return function ( a0 , a1 , b0 , b1 ) {

		const d = mul( a1 , b1 ) ;
		const x = mul( a0 , b1 ) ;
		const y = mul( b0 , a1 ) ;
		const n = add( x , y ) ;

		return [ n , d ] ;

	} ;

}
