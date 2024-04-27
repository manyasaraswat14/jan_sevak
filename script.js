console.log("hi")
const URL = "https://script.googleusercontent.com/macros/echo?user_content_key=3zO3sLidH9ctL7JoLXx98SFWytevtZOi-iBmBUuNcyN2EkyP0dVGm27UDoYmH86kDzExKG1v5gVVf9vWrHezAi3XYXvxqqhdm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPeUlT45Re70PGnsov03LxivRdm6OzraAZlh4XMtPHT5SlXyFk9B9_yleOPMXuULsub3onth5mShYF4DzotwkgVKoSOdad6tfw&lib=MLAPyoNQoG4HBpMU1ycpYS7mSOd92qEAc"
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
        document.querySelector("#D").innerText= data.data[i].Names
        document.querySelector(".Number").innerText= data.data[i].Number
        document.querySelector(".adhar").innerText= data.data[i].Aadhar
        document.querySelector(".Age").innerText= data.data[i].Age
        document.querySelector(".Area").innerText= data.data[i].Area

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

btn.addEventListener("click", getfacts);
  console.log();

// .innerText = `${
     "abhauu"
// }`
 // Call the function to fetch and display data