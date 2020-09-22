import React, { useState } from 'react';
import { ListGroupItem, Button, Collapse, Card, CardBody } from 'reactstrap';

const CollapseListItem = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const name = "t1";
    const content = "t content";
    return (
        <ListGroupItem tag="button" onClick={toggle}>{name}
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        {content}
                    </CardBody>
                </Card>
            </Collapse>
        </ListGroupItem>
    )
}

export default CollapseListItem;