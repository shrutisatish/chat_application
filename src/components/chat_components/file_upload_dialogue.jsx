import React from 'react';

class FileUploadDialog extends React.Component {


  handleFileAttachment = () => {
    let file = this.handleFileAttachment.current.files[0]
    console.log(file, 'file')
  }

  handleUploadAttachment = (e) => {
  }

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="dialog-container">
        <div className="dialog">
          <header className="dialog-header">
            <h4>Upload a file</h4>
          </header>
          <form className="dialog-form" onSubmit={this.handleUploadAttachment}>
            <input
              type="file"
              ref={(input) => { this.handleFileAttachment = input; }}
              accept="image/png, image/jpeg"
            />
            <label className="dialog-label" htmlFor="new-message">
              Add a message about the file
            </label>
            <input
              id="new-message"
              className="dialog-input"
              autoFocus
              type="text"
              name="fileMessage"
              onChange={this.handleInputChange}
              placeholder="Enter your message"
            />
            <button type="submit" className="submit-btn">
              Upload
            </button>
          </form>
        </div>
      </div>
    );

  }

};


export default FileUploadDialog;
