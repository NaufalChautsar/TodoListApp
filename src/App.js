import './assets/App.css';
import { useState } from 'react';
import { BiPencil } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";

function App() {
  // Deklarasi items bernilai array kosong, untuk menyimpan list todo
  const [items, setItems] = useState([]);
  // Deklarasi todoList, untuk menyimpan input todo
  const [todoList, setTodoList] = useState({
    todo: '',
  });

  // Mengambil data todo yang diinput
  const handleChange = (event) => {
    setTodoList({
      ...todoList,
      todo: event.target.value
    })
  }

  // Menyimpan data todo yang sudah diinput ke dalam items[]
  const handleSubmit = (event) => {
    event.preventDefault();
    if(todoList.i || todoList.i === 0) { // Jika todolist mempunyai index atau index berniali 0
      const updateTodoList = items.map((item, index) => {
        if(index === todoList.i) { // Jika data array items terdapat index
          return todoList
        } else {
          return item
        }
      })
      setItems(updateTodoList)
      setTodoList({
        todo: ''
      })
    } else {
      setItems([
        ...items,
        todoList,
      ])
      setTodoList({
        todo: ''
      })
    }
  }

  // Menghapus data dari items
  const handleDetele = (i) => {
    const deleteTodoList = items.filter((item, index) => {
      if(index !== i) {
        return item
      }
    })
    setItems(deleteTodoList)
  }

  // Mencari data index pada items untuk ditampilkan di input
  const handleEdit = (i) => {
    const editTodoList = {
      i,
      ...items[i]
    }
    setTodoList(editTodoList)
  }

  return (
    <div className="container">
      <div className="main">
        <form onSubmit={handleSubmit} method="POST">
          <input type="text" placeholder="Todo..." autoFocus value={todoList.todo}
            onChange={handleChange} />
          <button type="submit">Add</button>
        </form>
          {items.map((item, index) => (
            <div className="content">
              <div key={index} className="card">
                  <div className="checkbox-action">
                    <label>{item.todo}</label>
                  </div>
                  <div className="button-action">
                    <button onClick={() => handleEdit(index)}><BiPencil /></button>
                    <button onClick={() => handleDetele(index)}><BiTrash /></button>
                  </div>
                </div>
            </div>
          ))}
      </div>
    </div>
  );   
}

export default App;
