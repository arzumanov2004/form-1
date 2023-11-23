const formGroupExampleInput = document.getElementById("formGroupExampleInput")
const formGroupExampleInput1 = document.getElementById("formGroupExampleInput1")
const formGroupExampleInput2 = document.getElementById("formGroupExampleInput2")
const formGroupExampleInput3 = document.getElementById("formGroupExampleInput3")
const form = document.getElementById("form")

function axiosPost (e) {
    e.preventDefault();
        axios.post("https://655c84d425b76d9884fd7251.mockapi.io/nihad", {
            name: formGroupExampleInput.value,
            surname: formGroupExampleInput1.value,
            age: formGroupExampleInput2.value,  
            Email: formGroupExampleInput3.value,
            
        }).then(res => {
                console.log(res);
                form.reset()
            })
            }
            
            
            form.addEventListener('submit', axiosPost)