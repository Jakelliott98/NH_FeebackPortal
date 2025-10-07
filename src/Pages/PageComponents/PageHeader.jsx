import '../../CSS/pageLayouts/PageHeader.css'
import { DropdownFiltersComponent } from './HeaderDropdowns';
import styles from './PageHeader.module.css'

function PageHeader ({title}) {

    return (
        <div className={styles['header-div']}>
            <h1 className={styles['page-title']}>{title}</h1>
            <DropdownFiltersComponent title={title} />
        </div>
    )

}

export default PageHeader;