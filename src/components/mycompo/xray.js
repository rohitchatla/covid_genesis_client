import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../services/Axios';
// components

class xray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      b64url: '',
      value: 'VGG16'
    };

    this.state = { value: 'coconut' };

    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {
    // console.log("hi");
    // await axios
    //   .get(`/xray`) // axios returns a promise
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch(({ response }) => {
    //     console.log(response);
    //   });
  }

  handleSubmit(event) {
    const { image, b64url } = this.state;
    // const uid = localStorage.getItem("uid");

    let obj = {
      // image: JSON.stringify(image),
      b64url //.substring(b64url.indexOf(",") + 1),
    };

    // const dataform = new FormData();

    // dataform.append("image", image);
    // dataform.append("b64url", b64url);

    // console.log(b64url);

    axios
      .post('/xrayfunc_ensemble', obj, {
        //'xray'
        //dataform
        headers: {
          //"Content-Type": "multipart/form-data",
          //"x-access-token": `${localStorage.getItem("token")}`,
        }
      }) // axios returns a promise
      .then((response) => {
        // window.open("/xray", "_self");
        alert('Submitted');
      })
      .catch(({ response }) => {});

    // event.preventDefault();
  }

  async getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  async handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(event.target);
  }

  render() {
    const { image, b64url } = this.state;
    return (
      <>
        <div>
          {/* <h2>Hi</h2> */}
          <h2 className="mb-5">Upload Lungs X Ray(~ Hybrid Custom Model(VGG16++))</h2>
          {/* <form onSubmit={this.handleSubmit()}> */}
          <br />
          <br />
          <label>
            Pick your Model
            <select
              value={this.state.value}
              onChange={(event) => {
                this.setState({ value: event.target.value }, () => {
                  console.log(this.state.value);
                });
                // console.log(event.target.value);
                // console.log(this.state.value);
              }}
              // {this.handleChange()}
            >
              {/* <select multiple={true} value={['B', 'C']}> */}
              <option value="all">All</option>
              <option value="VGG16">VGG16</option>
              <option value="VGG19">VGG19</option>
              <option value="Resnet">Resnet</option>
              <option value="Nasnet">Nasnet</option>
            </select>
          </label>
          <br />
          <br />
          <input
            accept="image/*"
            onChange={(e) => {
              let idCardBase64 = '';
              this.getBase64(e.target.files[0], (result) => {
                idCardBase64 = result;
                this.setState({ b64url: result });
              });

              this.setState({ image: e.target.files[0] });
            }}
            type="file"
          />
          <button action="submit" className="btn btn-primary" onClick={() => this.handleSubmit()}>
            Scan
          </button>
          {/* </form> */}
        </div>
      </>
    );
  }
}

export default xray;
