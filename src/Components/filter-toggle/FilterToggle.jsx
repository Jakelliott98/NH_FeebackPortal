import styles from './FilterToggle.module.css'

function FilterToggle ({ onSubmit, options, state }) {

    return (
        <div className={styles['toggle-container']} >
            <button 
                onClick={() => {onSubmit(options[0].value)}} 
                className={styles['health-assessment-button']}
                style={{
                    backgroundColor: state == `${options[0].value}` ? '#7CDF7C' : 'lightgray',
                    color: state == `${options[0].value}` ? 'white' : 'black',
                }}
            >
                {options[0].label}
            </button>
            <button 
                onClick={() => {onSubmit(options[1].value)}}
                className={styles['physiotherapy-button']}
                style={{
                    backgroundColor: state == `${options[1].value}` ? '#7CDF7C' : 'lightgray',
                    color: state == `${options[1].value}` ? 'white' : 'black',
                }}
            >
                {options[1].label}
            </button>
        </div>
    )
}

export default FilterToggle;