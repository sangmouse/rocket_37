import React, { useState } from "react";
import "./fruits.css";

/**
 * đề bài:
 * 1. ô input nhập giá trị loại quả
 * 2. 1 button thêm mới loại quả vào danh sách
 * 3. mỗi item có 1 button delete: xóa hoa quả đó khỏi danh sách
 * 4. mỗi item có 1 button edit: khi click edit thì ném giá trị item đó lên ô input, cho phép chỉnh sửa
 * 5. khi thêm mới thì: text - add new item, khi chỉnh sửa: text - save
 */

interface Fruit {
  id: number;
  title: string;
}

export default function Fruits() {
  const [fruit, setFruit] = useState<string>("");
  const [fruitList, setFruitList] = useState<Array<Fruit>>([]);
  const [selectedItem, setSelectedItem] = useState<Fruit>()

  function handleChangeFruit(event: React.ChangeEvent<HTMLInputElement>) {
    setFruit(event.target.value);
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (fruit.length > 0) {
      if(!!selectedItem){
        const copyFruitList = [...fruitList]
        const selectItem = copyFruitList.find(item => item.id === selectedItem.id)
        selectItem!.title = fruit
        setFruitList(copyFruitList)
        setFruit("")
        setSelectedItem(undefined)
      }else{
        setFruitList([
        ...fruitList,
        {
          id: fruitList.length + 1,
          title: fruit,
        },
      ]);
      setFruit("");
      }
      
    }
  }

  function deleteItem(item: Fruit){
    const removedFruit = fruitList.filter(element => element.id !== item.id)
    setFruitList(removedFruit)
  }

  function editItem(item: Fruit){
    setSelectedItem(item)
    setFruit(item.title)
  }
  

  return (
    // fragment
    <>
      <h1 className="heading">Fruits Component</h1>
      <div className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fruit">Fruit</label>
            <input
              type="text"
              placeholder="Typing your fruit..."
              className="textbox"
              value={fruit}
              onChange={handleChangeFruit}
            />
            <button type="submit" className="btn-submit">
              {!!selectedItem ? "Save item" : "Add new item"}
            </button>
          </form>
        </div>

        <br />
        <br />
        <div className="list-item">
          <ul>
            {fruitList.map((item) => {
              return (
                <li key={item.id}>
                  <span>{item.title}</span>
                  <button onClick={() => editItem(item)}>Edit item</button>
                  <button onClick={() => deleteItem(item)}>Delete item</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
