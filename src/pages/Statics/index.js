import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import clsx from "clsx";
import style from "./Statics.module.scss"

const Statics = () => {
    const data = !!JSON.parse(localStorage.getItem("correct"))
    ? JSON.parse(localStorage.getItem("correct")).map((x, index) => {
        return {
            name:index+1,
            score:x - JSON.parse(localStorage.getItem("wrong"))[index]
        }
      })
    : [{name:1,score:0}];

    const data2 = !!JSON.parse(localStorage.getItem("correct"))
    ? JSON.parse(localStorage.getItem("correct")).map((x, index) => {
        return {
            name:index+1,
            correct:x,
            wrong:JSON.parse(localStorage.getItem("wrong"))[index],
        }
      })
    : [{name:1,correct:0,wrong:0}];

    const data3 = !!JSON.parse(localStorage.getItem("correct"))
    ? JSON.parse(localStorage.getItem("correct")).map((x, index) => {
        return {
            name:index+1,
            correct:JSON.parse(localStorage.getItem("correctLength"))[index],
            wrong:JSON.parse(localStorage.getItem("wrongLength"))[index],
        }
      })
    : [{name:1,correct:0,wrong:0}];
  return (
    <div className={clsx(style.wrapper)}>
      <ResponsiveContainer width={1000} height={500}>
        <LineChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke="var(--primary)"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer width={1000} height={500} style={{marginTop:"50px"}}>
        <LineChart
          width={800}
          height={300}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="correct"
            stroke="green"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="wrong"
            stroke="red"
          />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer width={1000} height={500} style={{marginTop:"50px"}}>
        <LineChart
          width={800}
          height={300}
          data={data3}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="correct"
            stroke="green"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="wrong"
            stroke="red"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statics;
