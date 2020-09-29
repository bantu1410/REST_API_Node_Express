import React, { Component, useState } from "react";
// import { Container } from "reactstrap";
import { Table, Pagination } from "semantic-ui-react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ProjectPageSizeSelect from "./ProjectPageSizeSelect";

// import CollapseListItem from './CollapseListItem';

import PropTypes from "prop-types";

const ProjectList = ({ projects }) => {
  const onChangeLimit = (limit) => {
    return console.log("limit changed ", limit);
  };

  return (
    <>
      {/* <table className="table table-bordered"> */}
      <ProjectPageSizeSelect limit={10} onChangeLimit={onChangeLimit} />
      Total count: {128}.
      <Table celled selectable sortable>
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Project Name</th>
            <th>System Name</th>
            <th>Operating System</th>
            <th>Last Update on</th>
          </tr>
        </thead>
        <Table.Body>
          {projects.map((project, index) => {
            return (
              <Table.Row key={project._id}>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{project["Project Name"]}</Table.Cell>
                <Table.Cell>{project["System Name"]}</Table.Cell>
                <Table.Cell>{project["Operating System"]}</Table.Cell>
                <Table.Cell>{project["Last Update on"]}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="8">
              <Pagination
                totalPages={128}
                // activePage={currentPage}
                // onPageChange={handleChangePage}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      {/* </table> */}
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
    </>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
