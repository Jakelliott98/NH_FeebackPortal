import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

function Home () {
    return (
        <div className="home">
            <div className='headerDiv'>
                <h1>Home</h1>
                <DurationDropdown />
            </div>
            <div className="dataSnapshotDiv">
                <DataSnapshotCard title={'Reponses'} data={'124'} change={'2%'}/>
                <DataSnapshotCard title={'Average'} data={'65%'} change={'14%'}/>
                <DataSnapshotCard title={'Positive'} data={'76%'} change={'25%'}/>
                <DataSnapshotCard title={'Negative'} data={'32%'} change={'3%'}/>
            </div>
            <div className="graphDiv">
                
            </div>
            <div className="commentsDiv">
                <div>
                    <p>Comment would go in here...</p>
                    <p>01 January 2026</p>
                </div>
            </div>
        </div>
    )
}

function DataSnapshotCard ({title, data, change}) {
    return (
        <div className='snapshotCard'>
            <p className='snapshotTitle'>{title}</p>
            <p className='snapshotData'>{data}</p>
            <div className='snapshotDataCard'>
                <FontAwesomeIcon className='snapshotDataIcon' icon="fa-solid fa-arrow-trend-up" />
                <p className='snapshotChange'>{change}</p>
            </div>
        </div>
    )
}

function DurationDropdown () {
    return (
        <div className='dropdownCard'>
            <FontAwesomeIcon className='dropdownIcon' icon="fa-solid fa-calendar" />
            <p>Last 7 days</p>
            <FontAwesomeIcon className='dropdownIcon' icon="fa-solid fa-caret-down" />
        </div>
    )
}

export default Home;


/*

    Home Component
        Header
            Title
            Duration
        DataSnapshot
            4 x Component snapshots
                Title
                Data
                Data Difference
        Graph
        Comments
            2 x Components Comments
                Comment
                Data



*/