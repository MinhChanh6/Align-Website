export default function createTimeZone() {
    const vietNamTime = document.getElementById('time-vietnam')
    const usaTime = document.getElementById('time-usa')
    const tokyoTime = document.getElementById('time-tokyo')
    function convertTZ(tzString) {
        return new Date().toLocaleTimeString('en-US', { timeZone: tzString, hour: '2-digit', minute: '2-digit', hour12: false });
    }
    const vietNameTimeZone = convertTZ("Asia/Ho_Chi_Minh")
    const usaTimeZone = convertTZ("America/New_York")
    const tokyoTimeZone = convertTZ("Asia/Tokyo")

    vietNamTime.innerHTML = vietNameTimeZone;
    usaTime.innerHTML = usaTimeZone;
    tokyoTime.innerHTML = tokyoTimeZone;
}