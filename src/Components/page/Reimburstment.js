import '../css/reimb.css';

const Reimburstment = () => {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-md">
          <div class="container-fluid mx-2">
            <div class="navbar-header">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggle-navbar" aria-controls="toggle-navbar" aria-expanded="false" aria-label="Toggle navigation">
                <i class="uil-bars text-white"></i>
              </button>
              <a class="navbar-brand" href="#">admin<span class="main-color">kit</span></a>
            </div>
            <div class="collapse navbar-collapse" id="toggle-navbar">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Settings
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i data-show="show-side-navigation1" class="uil-bars show-side-btn"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="p-4">
          <div class="welcome">
            <div class="content rounded-3 p-2">
              <h1 class="fs-5">Payroll / Reimburstment</h1>
            </div>
          </div>
        </div>
        <div class="p-4">
          <div class="welcome">
            <div class="content rounded-3 p-2">
              <table className='mytable'>
                <tr>
                  <td><label>Doc Date</label></td>
                  <td><label>Employee Name</label></td>
                  <td><label>Category</label></td>
                  <td><label>Amount</label></td>

                </tr>
                <tr>
                  <td><input type="text" className='mytdinput' /></td>
                  <td><input type="text" className='mytdinput' /></td>
                  <td><input type="text" className='mytdinput' /></td>
                  <td><input type="text" className='mytdinput' /></td>

                </tr>
                <tr>
                  <td><label>Detail</label></td>
                </tr>
                <tr>
                  <td colSpan='4'><textarea type="detail" rows="4" cols="148" className='textarea' /></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="myfooter">
          <button class="button button2">SAVE</button>
          <button class="button button1">HISTORY</button>
        </div>
      </div>
    </>
  )
}

export default Reimburstment;