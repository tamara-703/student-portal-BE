const React = require('react');

class RegisterCourse extends React.Component {

    render()
    {

        return (
            <div>
                <form action='/student' method='POST'>

                    <label>Name:</label>
                    <input type='text' name='name' placeholder='last first'></input><br />
                    <input type='submit' name='submit-btn'></input>

                </form>
            </div>
        )
    }
}


module.exports = RegisterCourse;
