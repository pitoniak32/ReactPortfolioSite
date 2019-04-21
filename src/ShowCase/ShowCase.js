import React from "react";
import ShowCaseElement from './ShowCaseElement/ShowCaseElement';
import './ShowCase.css'

const showCase = (props) => {
    return (
        <div className="show-case">
            <ShowCaseElement image={require('../images/ReactWebSite.png')} alt="" link='https://github.com/Cryoexn/ReactPortfolioSite' title='React Personal Site (current)' desc='Personal portfolio website that is currently in development to display my coding projects aswell as learn new technologies.'/>
            <ShowCaseElement image={require('../images/OldStaticSite.png')} alt="" link='https://github.com/Cryoexn/PersonalWebsite' title='Personal Website' desc='Old static personal portfolio website.'/>
            <ShowCaseElement image={require('../images/ConcentrationGame.png')} alt="" link='https://github.com/Cryoexn/ConcentrationGame' title='Concentration Game' desc='Class project using javax.swing to create a concentration game.'/>
        </div>
    );
}

export default showCase;