import React, { useState } from 'react';
import AlbumBox from '../../Feature/Album';
import TodoFeatera from '../../Feature/Todo';
import Clock from './components/Clock/Clock';
import Contents from './components/Contents/Contents';

const Home = () => {
  const ContentList = ['Ten', 'tuoi', 'gioi tinh'];
  // demo useState
  const [Count, setCount] = useState(0);
  const [Color, setColor] = useState('black');

  // demo onclick remove
  const intTodoList = [
    {
      id: 1,
      title: 'tltle1',
      name: 'name1',
      status: 'new',
    },

    {
      id: 2,
      title: 'tltle2',
      name: 'name2',
      status: 'complatedd',
    },
    {
      id: 3,
      title: 'tltle3',
      name: 'name3',
      status: 'new',
    },
  ];

  const [todoList, setTodoList] = useState(intTodoList);

  function removeTodo(index) {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  // end onclick remove

  return (
    <div className="section">
      {/* onclick remove */}
      <h1>demo onclick remove</h1>

      <ul>
        {todoList.map((todo, index) => (
          <li key={todo.id} onClick={() => removeTodo(index)}>
            {todo.title}
          </li>
        ))}
      </ul>

      {/* end onclick remove */}

      <h1>home</h1>
      <p>-------------------- Demo Pros -----------------------</p>
      {/* lưu ý nhận giá trị cha truyền xuống con mà giá trị k thay đổi thì dùng prost */}
      <Contents name="Cong Ao" number="22" ></Contents>
      <Contents ></Contents>
      <Contents ></Contents>
      <p>------------------- Demo danh sach don gian ----------------------</p>
      <ul>
        {ContentList.map((color) => (
          <li key={color.toString()}>{color}</li>
        ))}
      </ul>
      {/* <p>--------------------- Deno danh sach chua thong qua components  ----------------------</p>
            <TodoFeatera/>
            <br />
            <p>----------------- Demo danh sach + Components --------------------</p>
            <AlbumBox/> */}
      <br />
      <p>-----------------------Demo use ----------------------------</p>

      {/* Lưu ý nếu giá trị thay đổi theo thời gian thì dùng use  */}
      <button onClick={() => setCount((x) => x + 1)}>Click ne = {Count} </button>
      <br />

      {Color}
      <br />
      <button onClick={() => setColor('blue')}>Click color blue </button>
      <br />
      <button onClick={() => setColor('green')}>Click color green </button>

      <p>-----------------------useState + useEffect Hook clock ----------------</p>
      <h1>clock</h1>
      <Clock />
      <p>-----------------------custom hook useState + useEffect Hook clock ----------------</p>
      <h1>custom hook</h1>
      {/* <UClock/> */}
    </div>
  );
};

export default Home;
