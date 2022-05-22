import logo from './logo.svg';
import './App.css';
import profile from "./Solid_lines.png";
// import email from "./../image/email.jpg";
// import pass from "./../image/pass.png";
import Navbar from './comp/Navbar';
import Footer from './comp/Footer';
function App() {
  return (
    <>
   
   <Navbar/>
    <div className="main">
    <div className="sub-main">
      <div>
        <div className="imgs">
          <div className="container-image">
            <img src={profile} alt="profile" className="profile"/>

          </div>


        </div>
        <div>
          <h1>It’s a delight to have you onboard</h1>
          <p className="topic">Help us know you better.(This is how we optimize Wobot as per your business needs)</p>
          <div>
           
            <label>Company name</label>
            <input type="text" placeholder="e.g. Example Inc" className="name"/>
          </div>
          <div className="second-input">
          <label>Industry</label>
          <select  className="name">
              <option value="0">Select</option>
              <option value="1">Company name</option>
              <option value="2">Company name</option>
              <option value="3">Company name</option>
              <option value="4">Company name</option>
              <option value="5">Company name</option>
              <option value="6">JCompany name</option>
              
           </select>
          </div>

          <div className="second-input">
          <label>Company size</label>
          <div className="row">
              <div className="column">
                <div className="card">
                  <p>1-20</p>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  
                  <p>21-50</p>
                </div>
              </div>
              
              <div className="column">
                <div className="card">
                  
                  <p >51-200</p>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  
                  <p>201-500</p>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  
                  <p>500+</p>
                </div>
              </div>
            </div>
          </div>

         <div className="login-button">
         <button>Login</button>
         </div>
          
          

        </div>
      </div>
      

    </div>
   </div>

    <Footer/>
   </>
  );
}

export default App;
