import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import clsx from "clsx";
import style from "./Statics.module.scss";

const Statics = () => {
  const data = !!JSON.parse(localStorage.getItem("correct"))
    ? JSON.parse(localStorage.getItem("correct")).map((x, index) => {
        return {
          name: `Lần ${index + 1}`,
          score: x - JSON.parse(localStorage.getItem("wrong"))[index],
        };
      })
    : [{ name: 1, score: 0 }];

  const data2 = !!JSON.parse(localStorage.getItem("correct"))
    ? JSON.parse(localStorage.getItem("correct")).map((x, index) => {
        return {
          name: `Lần ${index + 1}`,
          correct: x,
          wrong: JSON.parse(localStorage.getItem("wrong"))[index],
        };
      })
    : [{ name: 1, correct: 0, wrong: 0 }];

  const data3 = !!JSON.parse(localStorage.getItem("correct"))
    ? JSON.parse(localStorage.getItem("correct")).map((x, index) => {
        return {
          name: `Lần ${index + 1}`,
          correct: JSON.parse(localStorage.getItem("correctLength"))[index],
          wrong: JSON.parse(localStorage.getItem("wrongLength"))[index],
        };
      })
    : [{ name: 1, correct: 0, wrong: 0 }];
  return (
    <div className={clsx(style.wrapper)}>
      <h1>WPM</h1>
      <ResponsiveContainer width={1000} height={500}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="score"
            stackId="1"
            stroke="var(--primary)"
            fill="var(--primary)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <h1>Số từ đúng/sai</h1>
      <ResponsiveContainer
        width={1000}
        height={500}
        style={{ marginTop: "50px" }}
      >
        <AreaChart
          width={500}
          height={400}
          data={data2}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="correct"
            stackId="1"
            stroke="green"
            fill="green"
          />
          <Area
            type="monotone"
            dataKey="wrong"
            stackId="1"
            stroke="red"
            fill="red"
          />
        </AreaChart>
      </ResponsiveContainer>

      <h1>Số chữ đúng sai</h1>
      <ResponsiveContainer
        width={1000}
        height={500}
        style={{ marginTop: "50px" }}
      >
        <AreaChart
          width={500}
          height={400}
          data={data3}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="correct"
            stackId="1"
            stroke="green"
            fill="green"
          />
          <Area
            type="monotone"
            dataKey="wrong"
            stackId="1"
            stroke="red"
            fill="red"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statics;
