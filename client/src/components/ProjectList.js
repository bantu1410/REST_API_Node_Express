import React, { Component, useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Collapse, Card, CardBody } from 'reactstrap';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { connect } from 'react-redux';      // connect react to redux

import { getProjects, deleteProject } from '../actions/projectActions';
// import CollapseListItem from './CollapseListItem';

import PropTypes from 'prop-types';

class ProjectList extends Component {
    componentDidMount() {
        this.props.getProjects();
    }

    // const [projects, setProjects] = useState([]);

    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);

    render() {
        const { projects } = this.props.project;

        return (
            <Container>
                <Button color="dark" style={{ marginBottom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter Item');
                        if (name) {
                            // setProjects((projects) => (projects = [...projects, { id: uuid(), name }]));
                            // this.setState(state => ({ projects: [...state.projects, { id: uuid(), name }] }))
                        }
                    }} >AddItem</Button>
                <ListGroup>
                    <TransitionGroup className='shopping-list'>
                        {projects.map(({ id, name }, index) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                {/* <CollapseListItem ></CollapseListItem> */}
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger" size="sm" onClick={() => {
                                        // setProjects((projects) => (projects = projects.filter(project => project.id !== id)))
                                        // this.setState(state => ({ projects: state.projects.filter(project => project.id !== id) }));
                                    }}>&times;</Button>
                                    {name}</ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ProjectList.propTypes = {
    getProjects: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    project: state.project
});

export default connect(mapStateToProps, { getProjects, deleteProject })(ProjectList);
