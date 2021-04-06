import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './commentdetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const Message = (props) => {
    return (
        <div className="ui message">
            <p className="header">{ props.heading }</p>
            <div>
                { props.text }
            </div>
        </div>
    );
};
const App = () => {
    return (
        <div className="ui container comments">
            <Message heading={ faker.lorem.words() } text={ faker.lorem.sentence() }></Message>
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Rishabh" timeAgo="Today at 2:00PM" comment="Awesome" avatar={ faker.image.cats() }/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Arun" timeAgo="Today at 5:48PM" comment="Good" avatar={faker.image.cats()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Bobby" timeAgo="Yesterday at 6:37PM" comment="Ultimate" avatar={faker.image.cats()} />
            </ApprovalCard>
            
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)