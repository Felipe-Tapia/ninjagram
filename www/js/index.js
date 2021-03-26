
// Informacion del dispositivo
document.getElementById("cordovaDevice").addEventListener("click", cordovaDevice);	

function cordovaDevice() {
    alert("Cordova version: " + device.cordova + "\n" +
        "Device model: " + device.model + "\n" +
        "Device platform: " + device.platform + "\n" +
        "Device UUID: " + device.uuid + "\n" +
        "Device version: " + device.version);
}


// Acceso a la camara
document.getElementById("cameraTakePicture").addEventListener("click", cameraTakePicture); 

function cameraTakePicture() { 
    navigator.camera.getPicture(onSuccess, onFail, {  
        quality: 100, 
        destinationType: Camera.DestinationType.DATA_URL 
    });  
    
    function onSuccess(imageData) { 
        var image = document.getElementById('myImage'); 
        image.src = "data:image/jpeg;base64," + imageData; 
        image.innerHTML+=`
        <img>${image.src}</img>
        ` 
    }  
    
    function onFail(message) { 
        alert('Failed because: ' + message); 
    } 
}

// Elegir una foto
document.getElementById("cameraGetPicture").addEventListener("click", cameraGetPicture);

function cameraGetPicture() {
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });

    function onSuccess(imageURL) {
        var image = document.getElementById('myImage2');
        image.src = imageURL;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

}