import { DropdownFiltersComponent } from './HeaderDropdowns';
import styles from './PageHeader.module.css'
import { useMatches } from 'react-router-dom';

function PageHeader () {

    const titleMatch = useMatches().find(item => item.handle?.title);
    let title = titleMatch ? titleMatch.handle.title : '';

    return (
        <div className={styles['header-div']}>
            <h1 className={styles['page-title']}>{title}</h1>
            { title == 'Settings' ? null : <DropdownFiltersComponent title={title} /> }
        </div>
    )

}

export default PageHeader;