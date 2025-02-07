import React, { useState, useRef, useEffect } from "react";

export default function UseRefExamples() {
  // 1. Accessing a DOM Element
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  // 2. Persisting a Value Without Re-Renders
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
  });

  // 3. Storing Previous State
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;

  // 4. Tracking an Interval ID
  const intervalRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  // 5. Controlling Animations
  const boxRef = useRef(null);

  const moveBox = () => {
    boxRef.current.style.transform = "translateX(100px)";
    boxRef.current.style.transition = "transform 0.5s ease";
  };

  // 6. Accessing a Child Component
  const childRef = useRef();

  const logChildValue = () => {
    console.log(childRef.current.textContent);
  };

  // 7. File Input Reference
  const fileInputRef = useRef(null);

  const selectFile = () => {
    fileInputRef.current.click();
  };

  // 8. Focusing a Button After Render
  const buttonRef = useRef(null);
  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  // 9. Measure DOM Dimensions
  const [boxWidth, setBoxWidth] = useState(0);
  const dimensionBoxRef = useRef(null);

  useEffect(() => {
    setBoxWidth(dimensionBoxRef.current.offsetWidth);
  }, []);

  // 10. Managing Mutable State in Forms
  const formRef = useRef({
    username: "",
    password: "",
  });

  const handleFormChange = (key, value) => {
    formRef.current[key] = value;
    console.log("Form State:", formRef.current);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>useRef Examples</h1>

      {/* 1. Accessing a DOM Element */}
      <div>
        <h3>1. Accessing a DOM Element</h3>
        <input ref={inputRef} type="text" placeholder="Focus me" />
        <button onClick={focusInput}>Focus Input</button>
      </div>

      {/* 2. Persisting a Value Without Re-Renders */}
      <div>
        <h3>2. Persisting a Value Without Re-Renders</h3>
        <p>Render Count: {renderCount.current}</p>
      </div>

      {/* 3. Storing Previous State */}
      <div>
        <h3>3. Storing Previous State</h3>
        <p>
          Current Count: {count}, Previous Count: {prevCount}
        </p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      {/* 4. Tracking an Interval ID */}
      <div>
        <h3>4. Tracking an Interval ID</h3>
        <p>Seconds: {seconds}</p>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
      </div>

      {/* 5. Controlling Animations */}
      <div>
        <h3>5. Controlling Animations</h3>
        <div
          ref={boxRef}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "blue",
            margin: "10px",
          }}
        />
        <button onClick={moveBox}>Move Box</button>
      </div>

      {/* 6. Accessing a Child Component */}
      <div>
        <h3>6. Accessing a Child Component</h3>
        <p ref={childRef}>This is a child component</p>
        <button onClick={logChildValue}>Log Child Value</button>
      </div>

      {/* 7. File Input Reference */}
      <div>
        <h3>7. File Input Reference</h3>
        <input ref={fileInputRef} type="file" style={{ display: "none" }} />
        <button onClick={selectFile}>Select File</button>
      </div>

      {/* 8. Focusing a Button After Render */}
      <div>
        <h3>8. Focusing a Button After Render</h3>
        <button ref={buttonRef}>I am focused</button>
      </div>

      {/* 9. Measure DOM Dimensions */}
      <div>
        <h3>9. Measure DOM Dimensions</h3>
        <div
          ref={dimensionBoxRef}
          style={{
            width: "200px",
            height: "50px",
            backgroundColor: "lightgreen",
          }}
        >
          Resize me!
        </div>
        <p>Box Width: {boxWidth}px</p>
      </div>

      {/* 10. Managing Mutable State in Forms */}
      <div>
        <h3>10. Managing Mutable State in Forms</h3>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => handleFormChange("username", e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => handleFormChange("password", e.target.value)}
        />
      </div>
    </div>
  );
}
