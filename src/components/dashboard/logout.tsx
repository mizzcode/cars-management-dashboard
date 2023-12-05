import localforage from 'localforage'

function Logout() {
    localforage.removeItem('token')
    return <></>
}

export default Logout
