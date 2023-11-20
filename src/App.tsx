import React, { useEffect, useState } from "react";
import "./app.css";
import Fruits from "./Fruits";
import Lifecycle from "./lifecycle/Lifecycle";
import Lifecycle2 from "./lifecycle/Lifecycle2";
import Component_1 from "./lifecycle/Component_1";
import Styles from "./Styles";

/**
 - inline style
 - external style
 */

export interface DataItem {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

export interface Data {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: DataItem[];
}

function App() {
  // khi typing vào ô input => lưu giá trị typing vào state
  // click button => hiển thị ra giá trị state

  const [username, setUserName] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);
  const [data, setData] = useState<Data>();
  const [result, setResult] = useState<Data>()
  const [page, setPage] = useState<number>(1)

  function logData() {
    // console.log("Button clicked");
  }

  function onUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value);
  }

  // tạo 2 ô input: first name, last name => hiển thị lên
  // giao diện fullname = first name + last name

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [job, setJob] = useState<string>("");

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "đào tuấn anh",
      role: "Frontend Developer",
    },
    {
      id: 2,
      username: "chu hồng ngọc",
      role: "BA",
    },
  ]);

  // 1. hiển thị danh sách users lên màn hình
  /**
   * ID: 1
   * User name: đào tuấn anh
   * Role: BA
   */
  // 2. button clicked => thêm user vào danh sách users

  const onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const onLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const logFullName = () => {
    const fullName = `${firstName} ${lastName}`;
    // console.log(fullName);
  };

  function getFullName() {
    return `${firstName} ${lastName}`;
  }

  function addNewUser() {
    setUsers([
      ...users,
      {
        id: users.length + 1,
        username: "đào tuấn anh",
        role: "Dev",
      },
    ]);
  }

  function handleChange(pageNumber: number) {
    setPage(pageNumber)
  }

  /**
   * bài tập về nhà:
   * 1. tạo 2 ô input gồm: username, role
   * sau khi nhập giá trị vào 2 ô input xong, click button add user => thêm mới user vào users state
   */

  // console.log("App init");

  useEffect(() => {
    // console.log("app useeffect", counter);

    async function fetchData() {
      const data = await fetch("https://reqres.in/api/users?page=2");
      const result = await data.json();
      // console.log(result);
      setData(result);
    }

    fetchData();
  }, []);

  useEffect(function () {
    async function fetchData() {
      const data = await fetch(`https://reqres.in/api/users?page=${page}`)
      const result = await data.json()
      setResult(result)
    }

    fetchData()
  }, [page])

  function handleReset() {
    setPage(1)
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        job: job
      }),
    })
  }

  // init
  // mounting
  // useEffect run
  // unmounting run

  return (
    <div>
      <div>
        <p
          style={{
            color: "red",
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at
          eligendi cumque nam libero, corporis inventore, recusandae nostrum
          distinctio, vel aut optio deleniti vero aliquid sint dolore numquam.
          Ullam, maiores!
        </p>
        <h1>Hello world!</h1>
        <h2>Danh sach lop hoc</h2>
        <ol>
          <li>Nguyen Ngoc Duy</li>
          <li>Tong Quanh Anh</li>
          <li>Dinh Thu Loan</li>
          <li>Ha Van Tien</li>
          <li>Nguyen Hai Dang</li>
          <li>Nguyen Tien Quang</li>
          <li>Nguyen Van Chien</li>
        </ol>

        <ol>
          <li>
            Com trua
            <ul>
              <li>com chien hai san</li>
              <li>com suon non nau cam</li>
              <li>com canh chua ca loc</li>
            </ul>
          </li>

          <li>
            Trang mieng trai cay
            <ul>
              <li>Nho tuoi</li>
              <li>Chuoi</li>
              <li>Man</li>
            </ul>
          </li>
        </ol>

        <div>
          <p
            style={{
              border: "1px solid #000",
            }}
          >
            Hello World
          </p>
          <p
            style={{
              border: "1px solid red",
            }}
          >
            Hello World
          </p>
          <p
            style={{
              border: "1px solid yellow",
            }}
          >
            Hello World
          </p>
          <section
            style={{
              width: 300,
              margin: "30px auto 50px",
              border: "3px solid pink",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h2>Học lập trình web có đơn giản không?</h2>
            <img
              src="https://images.unsplash.com/photo-1583768138297-718a9cc5b746?ixlib=rb-4.0.3"
              alt=""
              style={{
                width: "300px",
              }}
            />
            <h3>Đây là tiêu đề của bài viết</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              omnis voluptates officiis quo. Beatae porro eveniet neque quae?
              Dolorem ipsa debitis ipsam excepturi, nihil esse facere cumque hic
              dolorum neque?
            </p>
            <button
              style={{
                float: "right",
                color: "white",
                backgroundColor: "blue",
              }}
            >
              Đọc thêm
            </button>
          </section>
        </div>
      </div>
      <div>
        <p className="text">load css from external file</p>
        <div>
          <div className="text">
            <section className="customSection">
              <h2>Học lập trình web có đơn giản k?</h2>
              <img
                src="https://image.luatvietnam.vn/uploaded/665twebp/images/original/2022/08/12/website-la-gi_1208160413.jpg"
                alt="your_image"
                style={{ width: "300px" }}
              />
              <p>Không đơn giản @@</p>
              <button className="customButton">Đọc thêm</button>
            </section>
          </div>
        </div>
      </div>
      <p>
        <button onClick={logData}>Log data into UI</button>
        <button
          onClick={function () {
            // console.log("hello world");
          }}
        >
          Log data into UI
        </button>
        <button
          onClick={() => {
            // console.log("hello world arrow function");
          }}
        >
          Log data into UI
        </button>
      </p>
      <p>
        <label htmlFor="username">Username</label>
        <input type="text" name="" id="username" onChange={onUsernameChange} />
        <button
          onClick={function () {
            // console.log(username);
          }}
        >
          Log user name
        </button>
        <p>{username}</p>
      </p>
      <div>
        <p>
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" onChange={onFirstNameChange} />
        </p>
        <p>
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" onChange={onLastNameChange} />
        </p>
        <p>Username: {getFullName()}</p>
        <button onClick={logFullName}>Log Full Name</button>
      </div>

      <p>
        <button onClick={addNewUser}>Add new user</button>
      </p>
      <ul>
        {users.map(function (userItem, index) {
          return (
            <li key={userItem.id}>
              <p>ID: {userItem.id}</p>
              <p>User name: {userItem.username}</p>
              <p>Role: {userItem.role}</p>
            </li>
          );
        })}
      </ul>
      <Fruits />
      <h1>{counter}</h1>
      <p>
        <button onClick={() => setCounter(counter + 1)}>
          Increment counter
        </button>
      </p>
      {/* <Lifecycle2/> */}
      <Lifecycle data={data} />

      <ul></ul>
      <Component_1
        result={result}
        onChange={handleChange}
        handleReset={handleReset}
      />

      <div className="user-form">
        <form onSubmit={onSubmit}>
          <p>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              placeholder="your name"
              name="name"
              value={name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} />
          </p>
          <p>
            <label htmlFor="job">Your job</label>
            <input
              type="text"
              placeholder="your job"
              name="job"
              value={job}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setJob(event.target.value)} />
          </p>
          <p>
            <button type="submit">Create new user</button>
          </p>
        </form>
      </div>
      <Styles />
    </div>
  );
}

export default App;

/**
 *
 * life cycle
 *
 */
