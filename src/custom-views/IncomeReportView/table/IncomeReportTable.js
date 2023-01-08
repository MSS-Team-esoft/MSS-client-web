import {forwardRef, Fragment, useEffect, useState} from 'react'
import DataTable from 'react-data-table-component'
import {ChevronDown} from 'react-feather'
import ReactPaginate from 'react-paginate'
import {
    Card, Input,
    Row
} from 'reactstrap'
import {incomeReportTableHandler} from "./tableHandler"
import {INCOME_LOGS_MOCK_DB} from "../../../DB/DB"
import {useDispatch, useSelector} from "react-redux"
import {incomeActions, selectIncomeYear} from "../slice/incomeReportSlice"

const BootstrapCheckbox = forwardRef((props, ref) => (
    <div className='form-check'>
        <Input type='checkbox' ref={ref} {...props} />
    </div>
))

const onChangeHandle = (userdata) => {
    console.log(userdata)
}

const IncomeReportTable = () => {
    const dispatch = useDispatch()
    // ** States
    const [currentPage, setCurrentPage] = useState(0)
    const [searchValue] = useState('')
    const [filteredData] = useState([])
    const yearIncome = useSelector(selectIncomeYear)

    useEffect(() => {
        dispatch(incomeActions.getIncomeDetails())
    }, [dispatch])

    // ** Function to handle Pagination
    const handlePagination = page => {
        setCurrentPage(page.selected)
    }

    // ** Custom Pagination
    const CustomPagination = () => (
        <ReactPaginate
            previousLabel=''
            nextLabel=''
            forcePage={currentPage}
            onPageChange={page => handlePagination(page)}
            pageCount={searchValue.length ? Math.ceil(filteredData.length / 10) : Math.ceil(yearIncome.length / 10) || 1}
            breakLabel='...'
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            activeClassName='active'
            pageClassName='page-item'
            breakClassName='page-item'
            nextLinkClassName='page-link'
            pageLinkClassName='page-link'
            breakLinkClassName='page-link'
            previousLinkClassName='page-link'
            nextClassName='page-item next-item'
            previousClassName='page-item prev-item'
            containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
        />
    )

    return (
        <Fragment>
            <Card>
                <Row className='justify-content-end mx-0'>
                </Row>
                <div className='react-dataTable'>
                    <DataTable
                        pagination
                        columns={incomeReportTableHandler()}
                        paginationPerPage={10}
                        className='react-dataTable'
                        sortIcon={<ChevronDown size={10}/>}
                        paginationDefaultPage={currentPage + 1}
                        paginationComponent={CustomPagination}
                        data={yearIncome}
                        onSelectedRowsChange={onChangeHandle}
                    />
                </div>
            </Card>
        </Fragment>
    )
}

export default IncomeReportTable
