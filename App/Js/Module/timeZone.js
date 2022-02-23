export default function createTimeZone() {
    const vietNamTime = document.getElementById('time-vietnam')
    const usaTime = document.getElementById('time-sf')
    const atlantaTime = document.getElementById('time-atlanta')
    const texasTime = document.getElementById('time-texas')
    function convertTZ(tzString) {
        return new Date().toLocaleTimeString('en-US', { timeZone: tzString, hour: '2-digit', minute: '2-digit', hour12: true });
    }
    const vietNameTimeZone = convertTZ("Asia/Ho_Chi_Minh")
    const usaTimeZone = convertTZ("America/Los_Angeles")
    const atlantaTimeZone = convertTZ("America/New_York")
    const texasTimeZone = convertTZ("America/Chicago")

    vietNamTime.innerHTML = vietNameTimeZone;
    usaTime.innerHTML = usaTimeZone;
    atlantaTime.innerHTML = atlantaTimeZone;
    texasTime.innerHTML = texasTimeZone;
}