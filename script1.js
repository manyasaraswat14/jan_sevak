console.log("hi")
const URL = "https://script.googleusercontent.com/macros/echo?user_content_key=rhy3JLWrmqD36uFWejbW0Vg0TlXjPCOpmumOl6QTKoqc9qIrfdFKqSGDMC83axlJ0Q6WwTgCd2iNEhC-wDGU_OXin6ONnGUdm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDA19v-gzWqE3RnQLWyhY_pg9n5dpB-d1SXOAffGf4a1XP21H1iRkzxAxJibDOuRmfsd-uyczCc6jTB2jKJfFw-9sXl7Ykogag&lib=Mu3fUpnuzcWP8dTeFifzLF7mSOd92qEAc"
const btn = document.querySelector("#btn")


function mathRandom() {
    const randomDecimal = Math.random();
    const scaledRandom = randomDecimal * 19;
    const shiftedRandom = scaledRandom + 1;
    const randomNumber = Math.floor(shiftedRandom);
    return randomNumber;
}

const getfacts = async () => {
    try {
        let response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        console.log(data); // Log the received data to inspect its structure
        
        let i = mathRandom(); // Generate a random number
        console.log(i); // Log the random number
        console.log(data.data[i]); // Accessing data using the random number
        
        // Display information based on the random number
        // console.log(data.data[i].Names)
        // console.log(data.data[i].Number)
        // console.log(data.data[i].Aadhar)
        // console.log(data.data[i].Area)
        // console.log(data.data[i].Age)
        document.querySelector(".Name").innerText= data.data[i].Names
        document.querySelector(".Number").innerText= data.data[i].Number
        document.querySelector(".adhar").innerText= data.data[i].Aadhar
        document.querySelector(".Age").innerText= data.data[i].Age
        document.querySelector(".Area").innerText= data.data[i].Area
        document.querySelector(".Work").innerText= data.data[i].work

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

btn.addEventListener("click", getfacts);
  console.log();

// .innerText = `${
    
// }`
 // Call the function to fetch and display data