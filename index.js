const tbody = document.getElementById("student")
console.log(tbody);


const student = {
    id :10,
    name:"tuananh",
    mssv:"ph61021",
    school:"FPT"

}
tbody.innerHTML = `<tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${student.id}</td>
              <td id="namebook" class="px-4 py-2 border border-gray-300">${student.name}</td>
              <td class="px-4 py-2 border border-gray-300">${student.mssv}</td>
              <td class="px-4 py-2 border border-gray-300">${student.school}</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                  <a
                    href="#"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </a>

                  <button
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>`

// array

const numbers =[1,2,3,4]
const names = ["tuananh","agdsjgsa",1,true]

const students =[
    {
        id:1,
        name:"tuananh"
    },
    {
        id:2,
        name:"dska"
    }
];
console.log(students[0].name);
students.map((item) => {
  console.log(item);
});
