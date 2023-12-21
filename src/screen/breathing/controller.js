import React, { Fragment } from "react"
import { compose } from 'redux';
import { connect } from 'react-redux';

import View from './view';
import { menutoggle } from "./action"

const mapDispatchToProps = dispatch => ({
    menutoggle: (data) => dispatch(menutoggle(data)),
    // SnackBar: (show, message, varient) => dispatch(SnackBar(show, message, varient)),

});
const mapStateToProps = (state) => {
    return {
        // loading: state.Common.loading,
        // loggedIn: state.Auth.loggedIn,
        // validation: state.Cms.validation,
        // cmsUpdate: state.Cms.updatedCMS

        mobilemenu: state.dashboardReducer.menustate

    }
}

class Breathing  extends React.Component {

    handlemenutoggle = (row) => {
        this.props.menutoggle(row)
        
        console.log("test click", row);       
       
    };

    render() {
        return <View 
         handlemenutoggle={this.handlemenutoggle}
         menutoggle={this.props.mobilemenu}
                     
        />
    }



}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Breathing);