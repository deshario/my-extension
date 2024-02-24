import Clock from "./components/Clock";
import Layout from "./components/layout";
import { TimeZones } from "./types";

const App = () => {
  return (
    <div>
      <Layout
        render={(activeMenu) => {
          switch (activeMenu) {
            case "clock":
              return <Clock timeZone={TimeZones.Bangkok} />;
            case "alarm":
              return "alarm";
            case "timer":
              return "timer";
            case "stopwatch":
              return "stopwatch";
            default:
              return null;
          }
        }}
      ></Layout>
    </div>
  );
};

export default App;
