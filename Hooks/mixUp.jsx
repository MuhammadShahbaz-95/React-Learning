import React, {
    useState,
    useEffect,
    useContext,
    createContext,
    useRef,
    useReducer,
    useCallback,
    useMemo,
    useLayoutEffect,
    useImperativeHandle,
    forwardRef,
    useId,
    useTransition,
    useDeferredValue,
  } from "react";
  
  // Context for useContext example
  const ThemeContext = createContext();
  
  const App = () => {
    const [theme, setTheme] = useState("light");
  
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
          <h1>React Hooks Examples</h1>
          <ThemeExample />
          <UseStateExample />
          <UseEffectExample />
          <UseContextExample />
          <UseRefExample />
          <UseReducerExample />
          <UseCallbackExample />
          <UseMemoExample />
          <UseLayoutEffectExample />
          <UseImperativeHandleExample />
          <UseIdExample />
          <UseTransitionExample />
          <UseDeferredValueExample />
        </div>
      </ThemeContext.Provider>
    );
  };
  
  // 1. useState Example
  const UseStateExample = () => {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <h3>1. useState</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  };
  
  // 2. useEffect Example
  const UseEffectExample = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      setTimeout(() => {
        setData("Fetched Data!");
      }, 1000);
    }, []);
  
    return (
      <div>
        <h3>2. useEffect</h3>
        <p>{data || "Loading..."}</p>
      </div>
    );
  };
  
  // 3. useContext Example
  const UseContextExample = () => {
    const { theme, setTheme } = useContext(ThemeContext);
  
    return (
      <div>
        <h3>3. useContext</h3>
        <p>Current Theme: {theme}</p>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
      </div>
    );
  };
  
  // 4. useRef Example
  const UseRefExample = () => {
    const inputRef = useRef();
  
    const focusInput = () => {
      inputRef.current.focus();
    };
  
    return (
      <div>
        <h3>4. useRef</h3>
        <input ref={inputRef} type="text" placeholder="Focus me!" />
        <button onClick={focusInput}>Focus</button>
      </div>
    );
  };
  
  // 5. useReducer Example
  const UseReducerExample = () => {
    const reducer = (state, action) => {
      switch (action.type) {
        case "increment":
          return state + 1;
        case "decrement":
          return state - 1;
        default:
          return state;
      }
    };
  
    const [count, dispatch] = useReducer(reducer, 0);
  
    return (
      <div>
        <h3>5. useReducer</h3>
        <p>Count: {count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
    );
  };
  
  // 6. useCallback Example
  const UseCallbackExample = () => {
    const [count, setCount] = useState(0);
  
    const increment = useCallback(() => {
      setCount((prev) => prev + 1);
    }, []);
  
    return (
      <div>
        <h3>6. useCallback</h3>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  };
  
  // 7. useMemo Example
  const UseMemoExample = () => {
    const [count, setCount] = useState(0);
  
    const expensiveCalculation = useMemo(() => {
      return count * 2;
    }, [count]);
  
    return (
      <div>
        <h3>7. useMemo</h3>
        <p>Result: {expensiveCalculation}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  };
  
  // 8. useLayoutEffect Example
  const UseLayoutEffectExample = () => {
    const ref = useRef();
    useLayoutEffect(() => {
      ref.current.style.color = "red";
    }, []);
  
    return (
      <div>
        <h3>8. useLayoutEffect</h3>
        <p ref={ref}>This text is red.</p>
      </div>
    );
  };
  
  // 9. useImperativeHandle Example
  const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      },
    }));
  
    return <input ref={inputRef} type="text" placeholder="Custom Input" />;
  });
  
  const UseImperativeHandleExample = () => {
    const inputRef = useRef();
  
    return (
      <div>
        <h3>9. useImperativeHandle</h3>
        <CustomInput ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      </div>
    );
  };
  
  // 10. useId Example
  const UseIdExample = () => {
    const id = useId();
  
    return (
      <div>
        <h3>10. useId</h3>
        <label htmlFor={id}>Name:</label>
        <input id={id} type="text" />
      </div>
    );
  };
  
  // 11. useTransition Example
  const UseTransitionExample = () => {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
      startTransition(() => {
        setCount((prev) => prev + 1);
      });
    };
  
    return (
      <div>
        <h3>11. useTransition</h3>
        <p>{isPending ? "Updating..." : `Count: ${count}`}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
  };
  
  // 12. useDeferredValue Example
  const UseDeferredValueExample = () => {
    const [value, setValue] = useState("");
    const deferredValue = useDeferredValue(value);
  
    return (
      <div>
        <h3>12. useDeferredValue</h3>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type here"
        />
        <p>Deferred Value: {deferredValue}</p>
      </div>
    );
  };
  
  export default App;
  