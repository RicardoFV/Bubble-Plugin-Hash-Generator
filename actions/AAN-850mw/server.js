function(properties, context) {
	// import crypto
    const crypto = require("crypto")
    // receive the typed text
	let field = properties.text_field
    
    // if the informed id is different from null and the element exists
    if(field !== "" || field !== null || field !== undefined){ //start of if
    	// perform hash generation
        let encrypted_hex = crypto.createHash('sha1').update(field).digest("hex");
        let encrypted_base64 = crypto.createHash('sha1').update(field).digest("base64");
         
        //hash result
    	return {
        	result_sha1_hex : encrypted_hex,
            result_sha1_base64 : encrypted_base64
        }
        
    }// end of if
    // return this error
    return {
    	error : "Error generating hash, check if the fields are filled in correctly."
    }

}