import styles from './TechnologyLogo.module.css'

import { PageText } from '../../Text/Text';


export const TechnologyLogo = ({ logos }) => {
    const publicUrl = process.env.PUBLIC_URL;

    return (

        logos &&
        <div className={styles.techLogosContainer}>
            <div className={styles.logosWrapper}>
                {/* <PageText type='productPageSectionText'>Technology</PageText> */}

                <ul className={styles.logosList}>
                    {logos.map((e, idx) => {
                        let logoImage;
                        const path = `${publicUrl}/assets/image/technology/`
                        switch (e) {
                            case 'worksWithHeyGoogle':
                                logoImage = `${path}worksWithHeyGoogle.png`;
                                break;
                            case 'lgThinQ':
                                logoImage = `${path}thinQ.svg`
                                break;
                            case 'Ada':
                                logoImage = `${path}ada,svg`
                                break;
                            case 'lgDoorInDoorWithCraftIce':
                                logoImage = `${path}doorInDoorWithCraftIce`
                                break;
                            case 'counterDepthMax':
                                logoImage = `${path}counterDepthMax.svg`
                                break;
                            case 'energyStar':
                                logoImage = `${path}energyStar.svg`
                                break;
                            case 'energyStarMostEfficient2023':
                                logoImage = `${path}energyStarMostEfficient2023.svg`
                                break;
                            case 'energyStarMostEfficient':
                                logoImage = `${path}energyStarMostEfficient2024.svg`
                                break;
                            case 'garageReady':
                                logoImage = `${path}garageReady.svg`
                                break;
                            case 'innit':
                                logoImage = `${path}innit.svg`
                                break;
                            case 'kompressor':
                                logoImage = `${path}kompressor.svg`
                                break;
                            case 'rated1ElectricDryer':
                                logoImage = `${path}rated1ElectricDryer.svg`
                                break;
                            case 'rated1FrenchDoorRefrigerator':
                                logoImage = `${path}rated1FrenchDoorRefrigerator.svg`
                                break;
                            case 'rated1FrontLoadWasher':
                                logoImage = `${path}rated1FrontLoadWasher.svg`
                                break;
                            case 'rated1TopLoadWasher':
                                logoImage = `${path}rated1TopLoadWasher.svg`
                                break;
                            case 'reddot':
                                logoImage = `${path}reddot.svg`
                                break;
                            case 'sidechef':
                                logoImage = `${path}sideChef.svg`
                                break;
                            case 'standardDepthMax':
                                logoImage = `${path}standardDepthMax.svg`
                                break;
                            case 'ThinQ Care':
                                logoImage = `${path}thinQCare.svg`
                                break;
                            case '2yrWarrantyPartsLabor':
                                logoImage = `${path}2yrWarrantyPartsLabor.svg`
                                break;
                            case 'ThinQ Up':
                                logoImage = `${path}thinQUp.svg`
                                break;
                            case 'washerDryerAllOneCombo':
                                logoImage = `${path}washerComboAllInOne.svg`
                                break;
                            case 'lGWashTowerWithCenterControl':
                                logoImage = `${path}washTowerWithCenterControl.svg`
                                break;
                            case 'worksWithAlexa':
                                logoImage = `${path}worksWithAlexa.png`
                                break;

                            default:
                                logoImage = null;
                        }
                        return (
                            <li key={idx} className={styles.logosListItemContainer}>
                                <div className={styles.logoImageWrapper}>
                                    <img loading='lazy' className={styles.logoImage} src={logoImage} alt={e} />
                                </div>
                                {/* <ImageComponent>
                                    <img className={styles.logoImage} src={logoImage} alt={e} />
                                </ImageComponent> */}
                            </li>
                        );
                    })}

                </ul>
            </div>

        </div>
    );
}