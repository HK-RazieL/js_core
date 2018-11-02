function validateRequest(input) {
    let object = Object.assign(input);

    let methods = ["GET", "POST", "DELETE", "CONNECT"];
    if (!methods.includes(object.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    let uriRegex = /^[\w\d.]+$/g;
    if (!uriRegex.test(object.uri) || object.uri === "" || !("uri" in object)){
        throw new Error("Invalid request header: Invalid URI");
    }

    if (object.version !== "HTTP/0.9" && object.version !== "HTTP/1.0" && object.version !== "HTTP/1.1" && object.version !== "HTTP/2.0") {
        throw new Error("Invalid request header: Invalid Version");
    }

    let messageRegex = /[<>\\&'"]/g;
    if(messageRegex.test(object.message) || !("message" in object)) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return object;

}
