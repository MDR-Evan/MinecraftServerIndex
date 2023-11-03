document.addEventListener('DOMContentLoaded', function() {
    // Minecraft 서버의 주소와 포트를 설정합니다.
    const serverAddress = 'mcu.skhidc.kr';
    const serverPort = 25565;

    // Minecraft 서버 상태를 확인하는 함수
    function checkServerStatus() {
        fetch(`https://api.mcsrvstat.us/2/${serverAddress}:${serverPort}`)
            .then(response => response.json())
            .then(data => {
                const statusElement = document.getElementById('status');
                if (data.online) {
                    statusElement.textContent = `서버가 온라인 상태입니다. 플레이어 수: ${data.players.online}/${data.players.max}`;
                } else {
                    statusElement.textContent = '서버가 오프라인 상태입니다.';
                }
            })
            .catch(error => {
                console.error('서버 상태를 가져오는 중 오류가 발생했습니다.', error);
            });
    }

    // 정기적으로 서버 상태를 확인합니다.
    setInterval(checkServerStatus, 5000); // 5초마다 확인합니다. 필요에 따라 변경하세요.
});
