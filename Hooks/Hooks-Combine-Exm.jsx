import React, { useState, useEffect, useRef, useContext, createContext } from "react";


// Below is a single React project that combines
//  useState, useEffect, useRef, and useContext
//   into 10 different examples. Each hook is utilized 
//   in creative, real-world scenarios to illustrate their use.


// Contexts
const UserContext = createContext();
const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState({ name: "John Doe", loggedIn: true });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          style={{
            backgroundColor: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            minHeight: "100vh",
            padding: "20px",
          }}
        >
          <h1>React Hooks: Combined Examples</h1>
          <ThemeSwitcher />
          <UserProfile />
          <Examples />
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

// Theme Switcher using useContext
function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h3>Theme Switcher (useContext)</h3>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

// User Profile using useContext
function UserProfile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h3>User Profile (useContext)</h3>
      <p>Name: {user.name}</p>
      <p>Logged In: {user.loggedIn ? "Yes" : "No"}</p>
      <button
        onClick={() =>
          setUser((prev) => ({ ...prev, loggedIn: !prev.loggedIn }))
        }
      >
        Toggle Login
      </button>
    </div>
  );
}

// Main Component for Examples
function Examples() {
  return (
    <>
      <UseStateCounter />
      <UseEffectAPI />
      <UseEffectEventListener />
      <UseRefFocus />
      <UseRefTimer />
      <UseStateForm />
      <UseEffectCleanup />
      <UseRefScroll />
      <UseContextThemeMessage />
      <UseStateToggle />
    </>
  );
}

// 1. Counter with useState
function UseStateCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>1. Counter (useState)</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// 2. Fetching data with useEffect
function UseEffectAPI() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h3>2. Fetch API (useEffect)</h3>
      <p>{data ? data.title : "Loading..."}</p>
    </div>
  );
}

// 3. Event listener with useEffect
function UseEffectEventListener() {
  const [key, setKey] = useState("");

  useEffect(() => {
    const handleKeyPress = (e) => setKey(e.key);

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div>
      <h3>3. Key Press Tracker (useEffect)</h3>
      <p>Last Key Pressed: {key}</p>
    </div>
  );
}

// 4. Focusing an input with useRef
function UseRefFocus() {
  const inputRef = useRef();

  return (
    <div>
      <h3>4. Input Focus (useRef)</h3>
      <input ref={inputRef} type="text" placeholder="Click to focus" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}

// 5. Timer with useRef
function UseRefTimer() {
  const [time, setTime] = useState(0);
  const timerRef = useRef();

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <h3>5. Timer (useRef)</h3>
      <p>Time: {time} seconds</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

// 6. Form with useState
function UseStateForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>6. Form Handling (useState)</h3>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <p>Name: {formData.name}, Email: {formData.email}</p>
    </div>
  );
}

// 7. Cleanup with useEffect
function UseEffectCleanup() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log("Component mounted");
    return () => console.log("Component unmounted");
  }, [visible]);

  return (
    <div>
      <h3>7. Cleanup Example (useEffect)</h3>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"} Component
      </button>
    </div>
  );
}

// 8. Scroll to element with useRef
function UseRefScroll() {
  const sectionRef = useRef();

  return (
    <div>
      <h3>8. Scroll to Section (useRef)</h3>
      <button onClick={() => sectionRef.current.scrollIntoView({ behavior: "smooth" })}>
        Scroll to Section
      </button>
      <div style={{ height: "100vh" }} />
      <div ref={sectionRef} style={{ backgroundColor: "lightblue", padding: "20px" }}>
        This is the section!
      </div>
    </div>
  );
}

// 9. Conditional message with useContext
function UseContextThemeMessage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h3>9. Theme Message (useContext)</h3>
      <p>
        The current theme is <b>{theme}</b>. Switch it using the Theme Switcher.
      </p>
    </div>
  );
}

// 10. Toggle with useState
function UseStateToggle() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <h3>10. Toggle Example (useState)</h3>
      <p>Status: {isToggled ? "On" : "Off"}</p>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
    </div>
  );
}
