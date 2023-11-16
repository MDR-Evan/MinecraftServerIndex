document.addEventListener('DOMContentLoaded', function() {
    // Minecraft 서버의 주소와 포트를 설정합니다.
    const serverAddress = '218.232.210.31';
    const serverPort = 25565;
    // 팝업창
    const wrapper = document.querySelector("#wrapper"),
    toast = wrapper.querySelector("#toast"),
    on_icon = wrapper.querySelector("#icon"),
    title = wrapper.querySelector("span"),
    subTitle = wrapper.querySelector("p");

    // Minecraft 서버 상태를 확인하는 함수
    function checkServerStatus() {
        fetch(`https://api.mcsrvstat.us/2/${serverAddress}:${serverPort}`)
            .then(response => response.json())
            .then(data => {
                const statusElement = document.getElementById('wrapper');
                if (data.online) {
                    toast.classList.add("online");
                    title.innerText = "Server Online";
                    subTitle.innerText = "어서 날래날래 접속하라우!";
                    on_icon.innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
                } else {
                    toast.classList.add("offline");
                    title.innerText = "Server Offline";
                    subTitle.innerText = "오정민 데려와ㅏㅏㅏ";
                    on_icon.innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
                }
            })
            .catch(error => {
                console.error('서버 상태를 가져오는 중 오류가 발생했습니다.', error);
            });
    }

    // 정기적으로 서버 상태를 확인합니다.
    setInterval(checkServerStatus, 5000); // 5초마다 확인합니다. 필요에 따라 변경하세요.
});
