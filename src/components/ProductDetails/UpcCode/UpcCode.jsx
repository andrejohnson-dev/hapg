import styles from './UpcCode.module.css';

import { PageText } from '../../Text/Text';

export const UpcCode = ({ upc }) => {

    return (
        <>
            {
                upc ?
                    <>
                        <div className={styles.titleContainer}>
                            <PageText type='bodyTertiaryTitleBold'>UPC Codes</PageText>
                        </div>
                        <ul className={styles.upcListWrapper}>
                            {upc.map((e, idx) => (<li className={styles.upcListItem} key={idx}>
                                <PageText type='bodyDescription'>{e}</PageText>

                            </li>))}
                        </ul>
                    </>

                    : null
            }
        </>
    );
}

