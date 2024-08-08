const input = document.querySelector("#inputEmail");
const form = document.querySelector("form");
//  console.log(form.innerHTML);
const loadEventListener = () => {
    form.addEventListener("submit", (e) => {

        e.preventDefault();
        // console.log(input.value);
        const val = input.value;
        if (val == null || val == "") {
            document.querySelector(".validation").textContent = "*Please Fill The Fields";
            input.classList.add("error")
            setTimeout(() => {
                document.querySelector(".validation").textContent = "";
                input.classList.remove("error")
            }, 2000);
        }
        else {
            if (validateEmail(val)) {
                document.querySelector(".content").classList.add("visually-hidden")
                document.querySelector(".thank").classList.remove("visually-hidden")
                document.querySelector(".email").textContent = input.value;
            } else {
                document.querySelector(".validation").textContent = "Enter a valid Email";
                setTimeout(() => {
                    document.querySelector(".validation").textContent = "";
                }, 3000);
            }
        }
        input.value = "";
    })
    document.querySelector(".dismiss").addEventListener("click", () => {
        document.querySelector(".thank").classList.add("visually-hidden")
        document.querySelector(".content").classList.remove("visually-hidden")

    })
}
const validateEmail = (email) => {
    const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(String(email).toLowerCase());
}
loadEventListener();
