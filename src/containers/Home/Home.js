/**
 *Home functional Component.
 *This component get data from https://hiring-task-api.herokuapp.com/v1/leases
 *store that data in a session staorage and  display in a table
 * For reduce fetch store data in a session storage therefor once call data wecan reuse that data after close tabe automatically delete data from session storage
 * if  dealy to fetched data this component show loading....
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonIcon from "@material-ui/icons/Person"; // This is presonIcon get from meterial ui Icons
import GetTenantersNameTable from "../GetTenantesNameTable/GetTenantersNameTable";

/**
 * Fetched data from given url and display that data
 * @param {Array} data - store fetched data from url
 * @return {HTML}
 */
function Home() {
  const [data, setdata] = useState(null);

  /**
   *@Hooks useEffect First checked there is data from session storage leases
   * if data is null call the @function fetchdata otherwise get data from session storage set it o data
   * do not use control paramter data not change always change
   *
   */
  useEffect(() => {
    if (sessionStorage.getItem("leases") === null) {
      fetchdata();
    } else {
      setdata(JSON.parse(sessionStorage.getItem("leases")));
    }
  }, []);

  /**
   * @function fetchdata -fetch data from the given url using axios
   * @param  {Object} -response - from url  response.data - array
   * @returns fetched data store in session storage and get data from session storage store in data
   *
   */
  const fetchdata = async () => {
    await axios
      .get("https://hiring-task-api.herokuapp.com/v1/leases")

      .then((response) => {
        /**
         * response.data conver to JSON and store it in session storage
         */
        sessionStorage.setItem("leases", JSON.stringify(response.data));

        /**
         * get leases data sored in session and that text dta convert to json and set it to data
         */
        setdata(JSON.parse(sessionStorage.getItem("leases")));
      })
      .catch((error) => console.log(error));
  };
  /**
   * return the Html file
   *  if @params data-  not null map data and display table,  otherwise display loading when data fetched
   *  @param data pass to @GetTenantersNameTable coponent get tp table body
   */

  return (
    <div>
      {!data ? (
        <div>
          <h2 key={"lodingleaseInorh2"} className="text-danger text-center">
            Loding...
          </h2>
        </div>
      ) : (
        <div className=" mr-5 ml-5 tablemargin">
          <div>
            <div className="table-responsive mt-3 ">
              <table className="table  table-hover text-center table-borderless ">
                <thead>
                  <tr>
                    <th className="col-3" scope="col-sm-3">
                      <PersonIcon /> TENANTS
                    </th>
                  </tr>
                </thead>
                {data?.map((tenantName, i) => {
                  return (
                    <GetTenantersNameTable
                      id={tenantName.id}
                      tenant={tenantName.tenant}
                      key={i}
                    />
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
