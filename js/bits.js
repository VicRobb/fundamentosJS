const buyButtons = document.querySelectorAll(".buy-button");
        const totalBitsSpan = document.getElementById("bits");

        let totalBits = 0;

        buyButtons.forEach(button => {

            const bits = parseInt(button.getAttribute("data-bits"));

            button.addEventListener("click", ()=>{
                totalBits += bits;
                totalBitsSpan.textContent = totalBits;
            })
        });


        document.getElementById("chat-bits").addEventListener("click",()=>{document.getElementById("bits-info").style.display='block';});
        document.getElementById('buy').addEventListener("click",()=>{
            document.getElementById("buy-bits").style.display="block";
            document.getElementById("bits-info").style.display='none';
            
        })

        document.getElementById("close-01").addEventListener("click",()=>{
            document.getElementById("bits-info").style.display = "none";
        });
        document.getElementById("close-02").addEventListener("click", () =>{
            document.getElementById("bits-info").style.display = "block";
            document.getElementById("buy-bits").style.display = 'none';
        })