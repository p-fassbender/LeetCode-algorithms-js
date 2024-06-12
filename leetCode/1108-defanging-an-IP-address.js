/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".
*/

var defangIPaddr = function(address) {
    return address.replaceAll('.', "[.]");
    
    // this can also be done with the string methods split and join
    // return address.split('.').join('[.]');
};

defangIPaddr("1.1.1.1") // "1[.]1[.]1[.]1"
defangIPaddr("255.100.50.0") // "255[.]100[.]50[.]0"