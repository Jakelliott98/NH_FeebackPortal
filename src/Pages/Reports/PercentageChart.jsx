import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts';

export default function PercentageChart ({ percentage }) {

    let remainderPercentage = 100 - percentage;

    const data = [
        {name: 'Score', value: percentage },
        {name: 'Remainder', value: remainderPercentage }
    ]

    let colours = ['#7CDF7C', '#D6D6D6']

    return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width="100%" height="100%" >
        <Pie
          data={data}
          cx="50%"
          cy="100%"
          startAngle={180}
          endAngle={0}
          innerRadius={80}
          outerRadius={100}
          dataKey="value"
        > 
            {
              data.map((entry, index) => {
                  return (
                      <Cell key={entry.name} fill={colours[index]}/>
                  )
              })
            }
        </ Pie>
        <text 
            x="50%"
            y="90%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: "35px", fontWeight: "bold", fill: "#333" }}
            >
                {percentage} %
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
}