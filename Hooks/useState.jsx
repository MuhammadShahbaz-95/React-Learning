import React, { useState } from "react";

export default function UseStateExamples() {
  // 1. Counter Example (Number)
  const [count, setCount] = useState(0);

  // 2. Toggling a Boolean
  const [isVisible, setIsVisible] = useState(false);

  // 3. Managing a String
  const [name, setName] = useState("");

  // 4. Array Management
  const [items, setItems] = useState([]);

  // 5. Object State
  const [user, setUser] = useState({ name: "", age: 0 });

  // 6. Input Control
  const [email, setEmail] = useState("");

  // 7. Multiple State Variables
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  // 8. Toggle Theme
  const [theme, setTheme] = useState("light");

  // 9. Form Submission
  const [formData, setFormData] = useState({ username: "", password: "" });

  // 10. Fetch Data Example
  const [data, setData] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useState Examples</h1>

      {/* 1. Counter Example */}
      <div>
        <h3>1. Counter Example</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      {/* 2. Toggling a Boolean */}
      <div>
        <h3>2. Toggling a Boolean</h3>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <p>Toggle is ON!</p>}
      </div>

      {/* 3. Managing a String */}
      <div>
        <h3>3. Managing a String</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <p>Name: {name}</p>
      </div>

      {/* 4. Array Management */}
      <div>
        <h3>4. Array Management</h3>
        <button onClick={() => setItems([...items, `Item ${items.length + 1}`])}>
          Add Item
        </button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* 5. Object State */}
      <div>
        <h3>5. Object State</h3>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="number"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: +e.target.value })}
          placeholder="Age"
        />
        <p>
          User: {user.name}, Age: {user.age}
        </p>
      </div>

      {/* 6. Input Control */}
      <div>
        <h3>6. Input Control</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <p>Email: {email}</p>
      </div>

      {/* 7. Multiple State Variables */}
      <div>
        <h3>7. Multiple State Variables</h3>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(+e.target.value)}
          placeholder="Width"
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(+e.target.value)}
          placeholder="Height"
        />
        <p>
          Dimensions: {width} x {height}
        </p>
      </div>

      {/* 8. Toggle Theme */}
      <div>
        <h3>8. Toggle Theme</h3>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
        <p>Current Theme: {theme}</p>
      </div>

      {/* 9. Form Submission */}
      <div>
        <h3>9. Form Submission</h3>
        <input
          type="text"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          placeholder="Username"
        />
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Password"
        />
        <p>
          Username: {formData.username}, Password: {formData.password}
        </p>
      </div>

      {/* 10. Fetch Data Example */}
      <div>
        <h3>10. Fetch Data Example</h3>
        <button
          onClick={() =>
            setData({ id: 1, title: "React is awesome!" }) // Simulating fetch
          }
        >
          Fetch Data
        </button>
        {data && (
          <p>
            ID: {data.id}, Title: {data.title}
          </p>
        )}
      </div>
    </div>
  );
}
