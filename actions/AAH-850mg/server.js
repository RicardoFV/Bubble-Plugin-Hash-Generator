async function(properties, context) {
	// import crypto
    const crypto = require("crypto")
    // receive the typed text
	let field = properties.text_field
    
    // if the informed id is different from null and the element exists
    if(field !== "" || field !== null || field !== undefined){ //start of if
    	// perform hash generation
        let encrypted_hex = crypto.createHash('md5').update(field).digest("hex");
        let encrypted_base64 = crypto.createHash('md5').update(field).digest("base64");
         
        //hash result
    	return {
        	result_md5_hex : encrypted_hex,
            result_md5_base64 : encrypted_base64
        }
        
    }// end of if
    // return this error
    return {
    	error : "Error generating hash, check if the fields are filled in correctly."
    }

}