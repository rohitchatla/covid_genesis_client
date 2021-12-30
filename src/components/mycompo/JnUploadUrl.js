import React from 'react';
import logo from './logo.svg';
import './JnUploadUrl.css';
import JupViewer from './JupViewer';

const ipynb = require('./BenchmarkNotebook.ipynb');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }
  componentDidMount() {
    console.log(this.props);
    // console.log(this.props.match.params);
    //localStorage.getItem("val");
    if (this.props.val == '1') {
      this.setState({
        url: 'https://raw.githubusercontent.com/jakevdp/PythonDataScienceHandbook/master/notebooks/02.09-Structured-Data-NumPy.ipynb'
      });
    } else if (this.props.val == '2') {
      this.setState({
        url: 'https://raw.githubusercontent.com/fastai/course-v3/master/nbs/dl1/00_notebook_tutorial.ipynb'
      });
    } else {
      this.setState({
        url: 'https://raw.githubusercontent.com/fastai/course-v3/master/nbs/dl1/00_notebook_tutorial.ipynb'
      });
    }
  }
  render() {
    // const {
    //   text,
    //   match: { params }
    // } = this.props;
    // const { name } = params;
    // console.log(this.props.match.params);
    // console.log(window.location.href.substring(window.location.href.lastIndexOf("/")));
    // let url=''
    // console.log(this.props);
    // if (this.props.val == '1') {
    //   this.setState({
    //     url: 'https://raw.githubusercontent.com/jakevdp/PythonDataScienceHandbook/master/notebooks/02.09-Structured-Data-NumPy.ipynb'
    //   });
    // } else if (this.props.val == '2') {
    //   this.setState({
    //     url: 'https://raw.githubusercontent.com/fastai/course-v3/master/nbs/dl1/00_notebook_tutorial.ipynb'
    //   });
    // } else {
    //   this.setState({
    //     url: 'https://raw.githubusercontent.com/fastai/course-v3/master/nbs/dl1/00_notebook_tutorial.ipynb'
    //   });
    // }
    console.log(this.state.url);
    return (
      <div className="App">
        <JupViewer
          title="NoteBook Analysis"
          subtitle=""
          // coverImg="https://notionpress.com/blog/wp-content/uploads/2018/06/Cover-design.png"
          // file={ipynb}
          file={this.props.val} //{this.props.url}//{url}
          // file="https://raw.githubusercontent.com/fastai/course-v3/master/nbs/dl1/00_notebook_tutorial.ipynb"
          // file="https://raw.githubusercontent.com/jakevdp/PythonDataScienceHandbook/master/notebooks/02.09-Structured-Data-NumPy.ipynb"
        />
      </div>
    );
  }
}

export default App;
