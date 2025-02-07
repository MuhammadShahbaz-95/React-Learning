import React, { useState, useEffect } from "react";

export default function UseEffectExamples() {
  // 1. Basic Effect (Runs on Every Render)
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Basic Effect: Count is ${count}`);
  });

  // 2. Run Effect Once (ComponentDidMount)
  useEffect(() => {
    console.log("Effect ran once on mount");
  }, []);

  // 3. Effect with Dependency (Runs on Dependency Change)
  const [name, setName] = useState("");
  useEffect(() => {
    console.log(`Name changed to: ${name}`);
  }, [name]);

  // 4. Cleanup Effect (ComponentWillUnmount)
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval running...");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, []);

  // 5. Fetch Data on Mount
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  // 6. Listening to Window Resize
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 7. Conditional Effect Execution
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    if (isOnline) {
      console.log("User is online!");
    }
  }, [isOnline]);

  // 8. Trigger Animation
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (animate) {
      console.log("Triggering animation...");
      setTimeout(() => setAnimate(false), 1000);
    }
  }, [animate]);

  // 9. Timer with Cleanup
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 10. Fetch Data on Dependency Change
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [postId]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useEffect Examples</h1>

      {/* 1. Basic Effect */}
      <div>
        <h3>1. Basic Effect</h3>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <p>Count: {count}</p>
      </div>

      {/* 2. Run Effect Once */}
      <div>
        <h3>2. Run Effect Once</h3>
        <p>Check the console for a "mounted" message.</p>
      </div>

      {/* 3. Effect with Dependency */}
      <div>
        <h3>3. Effect with Dependency</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <p>Name: {name}</p>
      </div>

      {/* 4. Cleanup Effect */}
      <div>
        <h3>4. Cleanup Effect</h3>
        <p>Check the console for interval logs and cleanup messages.</p>
      </div>

      {/* 5. Fetch Data on Mount */}
      <div>
        <h3>5. Fetch Data on Mount</h3>
        <p>Post Title: {data ? data.title : "Loading..."}</p>
      </div>

      {/* 6. Listening to Window Resize */}
      <div>
        <h3>6. Listening to Window Resize</h3>
        <p>Window Width: {windowWidth}px</p>
      </div>

      {/* 7. Conditional Effect Execution */}
      <div>
        <h3>7. Conditional Effect Execution</h3>
        <button onClick={() => setIsOnline(!isOnline)}>
          Go {isOnline ? "Offline" : "Online"}
        </button>
        <p>Status: {isOnline ? "Online" : "Offline"}</p>
      </div>

      {/* 8. Trigger Animation */}
      <div>
        <h3>8. Trigger Animation</h3>
        <button onClick={() => setAnimate(true)}>Animate</button>
        <p>{animate ? "Animating..." : "Idle"}</p>
      </div>

      {/* 9. Timer with Cleanup */}
      <div>
        <h3>9. Timer with Cleanup</h3>
        <p>Seconds: {seconds}</p>
      </div>

      {/* 10. Fetch Data on Dependency Change */}
      <div>
        <h3>10. Fetch Data on Dependency Change</h3>
        <input
          type="number"
          value={postId}
          onChange={(e) => setPostId(Number(e.target.value))}
          placeholder="Post ID"
        />
        <p>Post Title: {post ? post.title : "Loading..."}</p>
      </div>
    </div>
  );
}
