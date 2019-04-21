import React from "react";
import ShowCaseElement from './ShowCaseElement/ShowCaseElement';
import './ShowCase.css'

const showCase = (props) => {
    return (
        <div className="show-case">
            <ShowCaseElement image={require('../images/download.jpg')} alt="" link='https://github.com/Cryoexn/PersonalWebsite' title='Personal Website' author='David Pitoniak' desc='This is my old static personal portfolio website.'/>
            <ShowCaseElement image={require('../images/download.jpg')} alt="" link='https://github.com/Cryoexn/ReactPortfolioSite' title='React Personal Site (current)' author='David Pitoniak' desc='This is my personal portfolio website that im currently developing to display my coding projects aswell as learn new technologies.'/>
        </div>
    );
}

export default showCase;