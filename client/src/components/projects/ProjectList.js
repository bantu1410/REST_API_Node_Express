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

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(10);

  const totalPages = Math.ceil(projects.length / projectsPerPage)

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const direction = "ascending" | "descending";
  const column = "id";

  const handleSort = (clickedColumn) => {
    return console.log("clicked on sort ", clickedColumn);
  }

  const handleChangePage = (e, { activePage }) => {

    setCurrentPage(activePage);
    console.log("clicke on changed page", activePage);
  }

  return (
    <>
      {/* <table className="table table-bordered"> */}
      <ProjectPageSizeSelect limit={10} onChangeLimit={onChangeLimit} />
      Total count: {projects.length}.
      <Table celled selectable sortable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell sorted={column === "id" ? direction : undefined} onClick={() => handleSort("id")}>#</Table.HeaderCell>
            <Table.HeaderCell sorted={column === "project" ? direction : undefined} onClick={() => handleSort("project")}>Project Name</Table.HeaderCell>
            <Table.HeaderCell sorted={column === "system" ? direction : undefined} onClick={() => handleSort("system")}>System Name</Table.HeaderCell>
            <Table.HeaderCell sorted={column === "os" ? direction : undefined} onClick={() => handleSort("os")}>Operating System</Table.HeaderCell>
            <Table.HeaderCell sorted={column === "date" ? direction : undefined} onClick={() => handleSort("date")}>Last Update on</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {currentProjects.map((project, index) => {
            return (
              <Table.Row key={project._id}>
                <Table.Cell>{indexOfFirstProject + index + 1}</Table.Cell>
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
                totalPages={totalPages}
                activePage={currentPage}
                onPageChange={handleChangePage}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
