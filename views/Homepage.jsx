const React = require('react');

class Homepage extends React.Component {

    render()
    {
        return (
            <div>
                <a href='/student'>Student portal</a><br />
                <a href='/student/profile'>student profile</a><br />
                <a href='/student/register'>register course</a>
            </div>
        )
    }
}

module.exports = Homepage;
