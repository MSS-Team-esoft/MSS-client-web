import {CartesianGrid, Line, ResponsiveContainer, XAxis, YAxis, LineChart} from "recharts"
import {STATS_CHART_MOCK} from "../../DB/CHART_DB"

const EmployeeStatChart = () => {

    return <div style={{
        width: '100%',
        height: 250
    }}>
        <ResponsiveContainer>
            <LineChart width={730} height={250} data={STATS_CHART_MOCK}
                       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis fontSize={10} dataKey="name" />
                <YAxis fontSize={10}/>
                <Line type="linear" dataKey="eff" stroke="#4834d4" />
            </LineChart>
        </ResponsiveContainer>
    </div>
}

export default EmployeeStatChart
