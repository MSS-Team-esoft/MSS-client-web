import {Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis} from "recharts"
import {Card, CardBody} from "reactstrap"
import {incomeActions, selectIncomeStats} from "../../custom-views/IncomeReportView/slice/incomeReportSlice"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"

const IncomeReportChart = () => {
    const dispatch = useDispatch()
    const incomeStats = useSelector(selectIncomeStats)

    useEffect(() => {
        dispatch(incomeActions.getIncomeDetails())
    }, [dispatch])

    return <div>
        <Card style={{height: '86vh'}}>
            <CardBody>
                <ResponsiveContainer>
                    <BarChart data={incomeStats}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Bar barSize={40} dataKey="amount" fill="rgba(46, 213, 115, 0.6)"/>
                    </BarChart>
                </ResponsiveContainer>
            </CardBody>
        </Card>
    </div>
}

export default IncomeReportChart
