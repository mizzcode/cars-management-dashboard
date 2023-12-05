import DataTable from '../../components/dashboard/table'

function OrderPage() {
    return (
        <>
            <h1>Dashboard</h1>
            <p>List Order</p>
            <p>
                <DataTable />
            </p>

            <p>List Car</p>
            <p>
                <DataTable />
            </p>
        </>
    )
}

export default OrderPage
