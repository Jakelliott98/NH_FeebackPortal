import '../../CSS/pageLayouts/PageHeader.css'
import { DropdownFiltersComponent } from './HeaderDropdowns';

function PageHeader ({title}) {

    return (
        <div className='headerDiv'>
            <h1 className='pageTitle'>{title}</h1>
            <DropdownFiltersComponent title={title} />
        </div>
    )

}

export default PageHeader;