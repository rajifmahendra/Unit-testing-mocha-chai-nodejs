const todos = require('./dummy');

module.exports = {
  // get all todos
  getAllTodos: async (req, res) => {
    try {
      res.status(200).json({
        message: "All the todos",
        todos
      })

    } catch (error) {
      res.status(500).json({ message: "Internal server error" })
    }
  },

  // get single todo
  findTodo: async (req, res) => {
    const { id } = req.params
    try {
      const findTodo = todos.find(todo => todo.id === parseInt(id));
      if (findTodo) {
        return res.status(200).json({
          todo: findTodo,
          message: "A single todo",
        });
      }
      return res.status(404).json({
        message: "Todo not found",
      });

    } catch (error) {
      res.status(500).json({ message: "Internal server error" })
    }
  },
}

// Pada line pertama file, kita mengimpor semua package yang diperlukan untuk menjalankan unit testing, kemudian kita mengonfigurasi chai untuk menggunakan package chai-http. Kita juga mengonfigurasi chai untuk menggunakan antarmuka should dengan menjalankan chai.should (). Setiap blok describe digunakan untuk mengelompokkan pengujian dengan akses y  lebih mudah dan pengaturan yang lebih baik.
// Pada blok it pertama, test yang menguji endpoint get(‘ /todos ‘) untuk mendapatkan semua data todo list, response harus memiliki status code 200 dan return harus berupa sebuah object.
// Lalu blok it kedua, adalah test untuk endpoint get(‘/todos/${id}’) untuk mendapatkan data tunggal todo yang di query melalui id todo dan response harus memiliki status code 200 dan return harus berupa sebuah object.
// Dan pada block it ketiga, masih test untuk endpoint get(‘/toods/${id}’) endpoint masih sama seperti it kedua tapi hanya berbeda response. Dengan asumsi jika data todo tidak ada, it response harus memiliki status code 404.