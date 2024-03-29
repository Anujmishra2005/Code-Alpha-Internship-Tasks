document.addEventListener("DOMContentLoaded", function() {
    const cameraFeed = document.getElementById('cameraFeed');
    const cameraFeedback = document.getElementById('cameraFeedback');
    const startCameraBtn = document.getElementById('startCamera');
    const captureImageBtn = document.getElementById('captureImage');

    let stream;
    async function startCamera() {
        try {
            stream = await navigator.mediaDevices.getUserMedia({ video: true });
            cameraFeed.srcObject = stream;
        } catch (err) {
            console.error("Error accessing camera:", err);
            cameraFeedback.textContent = "Error accessing camera";
        }
    }

    function stopCamera() {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        cameraFeed.srcObject = null;
    }

    function captureImage() {
        const canvas = document.createElement('canvas');
        canvas.width = cameraFeed.videoWidth;
        canvas.height = cameraFeed.videoHeight;
        canvas.getContext('2d').drawImage(cameraFeed, 0, 0, canvas.width, canvas.height);
        const imageDataURL = canvas.toDataURL('image/png');
        console.log("Captured Image Data URL:", imageDataURL);
    }
    startCameraBtn.addEventListener('click', startCamera);
    captureImageBtn.addEventListener('click', captureImage);
    window.addEventListener('beforeunload', stopCamera);
});
