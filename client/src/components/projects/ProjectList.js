import React, { Component, useState } from "react";
import { Container, Table } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// import CollapseListItem from './CollapseListItem';

import PropTypes from "prop-types";

const ProjectList = ({ projects }) => (
  <Container>
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>System Name</th>
          <th>Operating System</th>
          <th>Date/Time (UTC)</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => {
          return (
            <tr key={project._id}>
              <td>{index}</td>
              <td>{project["System Name"]}</td>
              <td>{project["Operating System"]}</td>
              <td>{project["Date/Time (UTC)"]}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>

    {/* <ListGroup>
      <TransitionGroup className="shopping-list">
        {projects.map((project) => (
          <CSSTransition key={project._id} timeout={500} classNames="fade">
            // {/* <CollapseListItem ></CollapseListItem> */}
    {/* <ListGroupItem>{project["System Name"]}</ListGroupItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ListGroup> */}
  </Container>
);

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
