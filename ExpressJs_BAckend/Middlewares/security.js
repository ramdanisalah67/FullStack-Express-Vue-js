const SECURITY_PATH = [
    { url: '/', permissions: 'permitAll' },
    { url: '/api/users/', permissions: 'ADMIN' },
    { url: '/welcome', permissions: 'USER' }
];

function ensure_has_permission(url, role) {
    const obj = SECURITY_PATH.find(e => e.url === url);
    if (obj) {
        console.log('URL exists:', obj);
        if (role === obj.permissions || obj.permissions == "permitAll") {
            console.log('Permission granted for role:', role);
        } else {
            console.log('Permission denied for role:', role);
        }
    } else {
        console.log('URL not found:', url);
    }
}


function should_Autheticated(url){
    const obj = SECURITY_PATH.find(e => e.url === url);
    if(obj) {
        if(obj.permissions != "permitAll"){
            return true;
        }
        else{
            return false;
        }
    }
}
module.exports = {
    ensure_has_permission,
    should_Autheticated
}

