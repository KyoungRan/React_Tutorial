import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../data/actions';
import ExportDateModal from './ExportDateModal';
import SignInModal from './SignInModal';
import FeedbackModal from './FeedbackModal';
import BoxDetailsModal from './BoxDetailsModal';

const ModalConductor = props => {
  switch (props.currentModal) {
    case 'EXPORT_DATA':
      return <ExportDateModal {...props}/>;

    case 'SOCIAL_SIGN_IN':
      return <SignInModel {...props}/>;

    case 'FEEDBACK':
      return <FeedbackModal {...props}/>;

    case 'EDIT_BOX':
      return <BoxDetailsModal {...props}/>;

    default:
      return null;
  }
}

export default connect(state => state, () => actions)(ModalConductor);
