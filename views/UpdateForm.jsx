const React = require('react');

class UpdateForm extends React.Component {


    render()
    {
        const { student } = this.props;
        return (
            <div>
                <form action={`/student/${student.id}?_method=PUT`} method='POST'>

                <label>Name:</label>
                    <input type='text' name='name' defaultValue={student.name}></input><br />
                    <input type='submit' name='submit-btn' value='SUBMIT CHANGES'></input>
                    
                </form>


            </div>
        )
    }
}
