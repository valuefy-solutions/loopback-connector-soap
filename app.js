var easySoap    = require('easysoap');

//soap client params
var clientParams = {

    //set soap connection data (mandatory values)
    host    : 'www.webservicex.net',
    path    : '/stockquote.asmx',
    wsdl    : '/stockquote.asmx?wsdl'

    /*
    //set soap header (optional)
    header  : [{
        'name'      : 'item_name',
        'value'     : 'item_value',
        'namespace' : 'item_namespace'
    }]
    */
};

//soap client options
var clientOptions = {
    secure : false //is https or http
};

//create new soap client
var SoapClient = new easySoap.Client(clientParams, clientOptions);
SoapClient.once('initialized', function() {

    //successful initialized
    SoapClient.once('GetQuote', function(data, header) {
        console.log(data, header);
        //soap response
    });

    SoapClient.call({
        'method' : 'GetQuote',
        'params' : {
            'tns:symbol': 'IBM'
        }
    });
});

//initialize soap client
SoapClient.init();
