import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="top-header-area button-back">
      <div className="container">
        <div className="row align-items-center">
          {/* <div className="col-lg-12 col-md-12 ">
            <div className="header-left-content">
              <p></p>
            </div>
          </div> */}
          <div className="col-lg-12 col-md-12 ">
            <div className="header-right-content">
              <div className="list flex justify-end ">
                <ul>
                  <li>
                    <Link href="graduate-admission.html">Students</Link>
                  </li>
                  <li>
                    <Link href="campus-life.html">Faculty & Staff</Link>
                  </li>
                  <li>
                    <Link href="https://templates.hibootstrap.com/sengol/default/admission.html">
                      Visitors
                    </Link>
                  </li>
                  <li>
                    <Link href="academics.html">Academics</Link>
                  </li>
                  <li>
                    <Link href="alumni.html">Alumni</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
