
function toggleLight() {
    // Code to control the light
    const lightsFeedback = document.getElementById('lightsFeedback');
    lightsFeedback.textContent = 'Light toggled';
}

function setTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    // Code to set the thermostat temperature
    const thermostatFeedback = document.getElementById('thermostatFeedback');
    thermostatFeedback.textContent = `Thermostat temperature set to ${temperatureInput}°C`;
}

function toggleSecurity() {
    // Code to toggle the security system
    const securityFeedback = document.getElementById('securityFeedback');
    securityFeedback.textContent = 'Security system toggled';
}

