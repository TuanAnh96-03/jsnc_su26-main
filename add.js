console.log("add them");

function addStudent() {
    axios.post("http://localhost:3000/students", {
        name: "tuananh",
        age: 20,
        email: "tuananh03122006@gmail.com"
    })
    .then(() => {
        alert("Thêm thành công");
    })
    .catch((error) => {
        console.log(error);
        alert("Thêm thất bại");
    });
}

addStudent();