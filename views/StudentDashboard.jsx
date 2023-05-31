const React = require("react");

class RegisterCourse extends React.Component {
  render() {
    const { student } = this.props;

    return (
      <div>
        {student ? (
          student.map((item, i) => {
            return (
              <div key={i}>
                <form
                  action={`/student/${item._id}?_method=DELETE`}
                  method="POST"
                >
                  name: {item.name}
                  <input type="submit" value="delete"></input>
                </form>
                <button onClick={`/student/${item._id}`}>Edit</button>
              </div>
            );
          })
        ) : (
          <div>information not found</div>
        )}
      </div>
    );
  }
}

module.exports = RegisterCourse;
