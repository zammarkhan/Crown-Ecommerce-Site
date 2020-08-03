import React, { Component } from 'react';
import './directory.scss';
import Menuitems from '../menu-items/Menuitems';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectSection} from '../../redux/Directory/directory-selectors'
const Directory = ({section}) => (
  <div className="directory-menu">
    {
      section.map(({ id, ...otherSectionprops }) => {
        return <Menuitems key={id} {...otherSectionprops}></Menuitems>
      })
    }


  </div>
)

const mapStateToProps = createStructuredSelector({
  section : selectSection
})

export default connect(mapStateToProps) (Directory);