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

    onDeleteClick = (id) => {
        this.props.deleteProject(id);
    }

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
                        {projects.map(({ _id, Groups }, index) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                {/* <CollapseListItem ></CollapseListItem> */}
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger" size="sm" onClick={() => this.onDeleteClick(_id)/*this.onDeleteClick.bind(this, id)*/}>&times;</Button>
                                    {Groups}
                                </ListGroupItem>
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
