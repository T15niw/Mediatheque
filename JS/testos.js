fetch("test.json").then(response => response.json())
.then(data => {
    retrievedData(data);
})

function retrievedData(data){
    console.log(data);
    }