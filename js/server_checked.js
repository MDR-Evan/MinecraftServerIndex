document.addEventListener('DOMContentLoaded', function() {
    // Minecraft 서버의 주소와 포트를 설정합니다.
    const serverAddress = '218.232.210.31';
    const serverPort = 25565;

    // Minecraft 서버 상태를 확인하는 함수
    function checkServerStatus() {
        fetch(`https://api.mcsrvstat.us/2/${serverAddress}:${serverPort}`)
            .then(response => response.json())
            .then(data => {
                const statusElements = document.querySelectorAll('.status');
                if (data.online) {
                    // statusElement.textContent =`${data.players.online}`;
                    statusElement.style.backgroundColor = '#22E625';
                    statusElement.style.borderRadius = "10px";
                    statusElement.style.padding = "15px 15px";
                } else {
                    // statusElement.textContent = '서버가 오프라인 상태입니다.';
                    statusElement.style.backgroundColor = 'red';
                    statusElement.style.borderRadius = "10px";
                    statusElement.style.padding = "15px 15px";
                }
            })
            .catch(error => {
                console.error('서버 상태를 가져오는 중 오류가 발생했습니다.', error);
            });
    }

    // 정기적으로 서버 상태를 확인합니다.
    setInterval(checkServerStatus, 5000); // 5초마다 확인합니다. 필요에 따라 변경하세요.
});