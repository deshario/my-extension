import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const setBackground = async (mColor: string) => {
    const [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript<string[], void>({
      target: { tabId: tab.id! },
      args: [mColor],
      func: (mColor) => {
        document.body.style.backgroundColor = mColor;
      },
    });
  };

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h2>Background Changer</h2>
      <input
        type="color"
        onChange={(event) => setBackground(event.currentTarget.value)}
      />
    </>
  );
}

export default App;
