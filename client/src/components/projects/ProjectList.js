import React, { useState, useMemo } from "react";
// import { Container } from "reactstrap";
import { Table, Pagination } from "semantic-ui-react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ProjectPageSizeSelect from "./ProjectPageSizeSelect";

// import CollapseListItem from './CollapseListItem';

import PropTypes from "prop-types";
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedProjects = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedProjects, requestSort, sortConfig };
};

const ProjectList = ({ projects }) => {

  const { items, requestSort, sortConfig } = useSortableData(projects);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(15);

  const totalPages = Math.ceil(projects.length / projectsPerPage)

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = items.slice(indexOfFirstProject, indexOfLastProject);

  const direction = "ascending" | "descending";
  const column = "id";



  const onChangeLimit = (limit) => {
    console.log("changed limit ", limit);
    setProjectsPerPage(limit);
  };

  const handleSort = (clickedColumn) => {
    console.log("clicked on sort ", clickedColumn);
    requestSort(clickedColumn);
  }

  const handleChangePage = (e, { activePage }) => {
    setCurrentPage(activePage);
    console.log("clicke on changed page", activePage);
  }

  return (
    <>
      {/* <table className="table table-bordered"> */}
      <ProjectPageSizeSelect limit={projectsPerPage} onChangeLimit={onChangeLimit} />
      Total count: {projects.length}.
      <Table celled selectable sortable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell sorted={column === "id" ? direction : undefined} onClick={() => handleSort("id")}>#</Table.HeaderCell>
            <Table.HeaderCell sorted={column === "project" ? direction : undefined} onClick={() => handleSort("Project Name")}>Project Name</Table.HeaderCell>
            <Table.HeaderCell sorted={column === "system" ? direction : undefined} onClick={() => handleSort("System Name")}>System Name</Table.HeaderCell>
            <Table.HeaderCell sorted={column === "os" ? direction : undefined} onClick={() => handleSort("Operating System")}>Operating System</Table.HeaderCell>
            <Table.HeaderCell sorted={column === "date" ? direction : undefined} onClick={() => handleSort("Last Update on")}>Last Update on</Table.HeaderCell>
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
