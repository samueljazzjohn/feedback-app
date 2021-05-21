import React,{useState} from 'react'
import '../Style/feedback.css'

function Feedback() {
    const [values, setValues] = useState({
        name: "",
        message: "",
        phone: "",
        mail: "",
        buttonText: "Submit",
        uploadedFiles: [],
        uploadFileButtonText:"Upload files"
      });
    
      // Destructuring
      const { name, message, phone, mail, buttonText, uoloadedFiles,uploadFileButtonText } = values;
    
    // Destructuring environment variables
    
    const {REACT_APP_API,REACT_APP_CLOUDINARY_NAME,REACT_APP_UPLOAD_SECRETE} = process.env
    
      const uploadWidget=()=> {
        window.cloudinary.openUploadWidget({ cloud_name: REACT_APP_CLOUDINARY_NAME, upload_preset: REACT_APP_UPLOAD_SECRETE, tags:['ebooks']},
        function(error, result) {
          console.log(result);
          setValues({...values,uploadedFiles:result,uploadFileButtonText:(result ? result.length:0) + " files uploaded"})
        });
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        setValues({ buttonText: "submitting..." });
        console.table(values)
      };
    
      const handleChange = (event) => {
        if([event.target.name]=="mail")
        {
          setValues({ ...values, [event.target.name]: event.target.value});
        }
        else{
          setValues({ ...values, [event.target.name]: event.target.value. charAt(0). toUpperCase() + event.target.value. slice(1) });
        }
      };
    
      return (
        <div className="feedback container-fluid p-3">
          <div className="row mx-auto">
            <div className="col-8 mx-auto">
              <h1 className="mx-auto">Feedback</h1>
              <form className="pt-3 mt-4" onSubmit={handleSubmit}>
                <div className="col-8 mx-auto">
                  <div className=" d-grid gap-2 col-12 mx-auto mt-3 mb-3">
                    <button className="btn  p-4 btn-block " onClick={uploadWidget}>{uploadFileButtonText} </button>
                  </div>
                  <label className="form-label  mr-auto">
                    Enter your name:
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    name="name"
                    onChange={handleChange}
                    value={name}
                    required
                  />
                </div>
                <div className="col-8 mx-auto mt-3">
                  <label className="form-label  mr-auto">
                    Description:
                  </label>
                  <textarea
                    type="text"
                    className="form-control "
                    rows="3"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-8 mx-auto mt-3">
                  <label className="form-label  mr-auto">
                    Enter your phone number:
                  </label>
                  <div className="input-group">
                    <span class="input-group-text" id="basic-addon1">
                      +91
                    </span>
                    <input
                      type="number"
                      className="form-control "
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-8 mx-auto mt-3">
                  <label className="form-label  mr-auto">
                    Enter your email:
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    name="mail"
                    value={mail}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-grid gap-2 col-4 mx-auto mt-4">
                  <button
                    type="submit"
                    className="btn pl-5 pr-5 "
                    name="button"
                  >
                    {buttonText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
}

export default Feedback
