/**
 *
 * LeasesInformation  functional comonent
 * This component fetched data from https://hiring-task-api.herokuapp.com/v1/leases/:id
 * id sent from Home component through http params as id
 * calling @function  GetpaymentInstalmentTable -get leases infromation  tenanter's who wonby id and displyy that infromation in the table
 * if  dealy to fetched data this component ,show loading....
 *
 *
 */

import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import PersonIcon from "@material-ui/icons/Person";
import GetInstalmentTable from "../GetInstalmentTable/GetInstalmentTable";

/***
 *
 *
 * show leases Infromation tenaent who sent tenanat id by Home
 * @param {string} id -tenant id sent by Home(Click tenant nameby user)
 * @param {Array} data - leases infromation about tenanter (fetched from api)
 * @param {boolean} isFetchdata-get response from api
 * @param {string} TenantName-tenanter's name
 *
 *
 */

function LeasesInformation() {
  let { id } = useParams();
  const [data, setdata] = useState(null);
  const [TenantName, setTenantName] = useState("");
  const [isFetchdata, setIsFetchdata] = useState(false);

  const history = useHistory();
  /**
   * call @function fetchdata
   * checked , data is available or not ,if data not null call @function getTenantName
   * call the @function  GetpaymentInformation after data available
   * use Effect re render changing the @param isFetchdata
   */
  useEffect(() => {
    if (TenantName.id === undefined) {
    }
  }, []);

  useEffect(() => {
    fetchdata();
    if (data !== null) {
      getTenantName();
    }
  }, [isFetchdata]);

  /**
   *
   * @function fetchdata -fetch data from the given url using axios
   * @param  {Object} -response - from url  response.data - array
   * @returns fetched data store in the @data using setdata and set @isFetchdata true
   *
   */

  const fetchdata = async () => {
    await axios
      .get(`https://hiring-task-api.herokuapp.com/v1/leases/${id}`)

      .then((response) => {
        // console.log("fetch");
        setdata(response.data);
        setIsFetchdata(true);
      })
      .catch((error) => console.log(error));
  };

  /**
   *
   *
   * @function getTenantName -get leases data from session storage and find the respective name for a given id
   *
   * @param {Array} tenant -details get from session Storage
   * @param {string} TenantName -Tenanters respective  for a given id
   * @returns {string} TenanterName
   *
   *
   */
  const getTenantName = () => {
    const tenant = JSON.parse(sessionStorage.getItem("leases"));

    const tenantname = tenant.find((r) => {
      return r.id === id;
    });
    setTenantName(tenantname);
  };

  /**
   *
   *calling the @GetInstalmentTable component
   *show the instalment in the table and show tha name of tenanter's
   *
   *
   */

  return (
    <div className="mb-5 tablemargin">
      <h4 className="mb-5 ml-2 ">Leases Information</h4>

      {!data ? (
        <div>
          <h2 key={"lodingleaseInorh2"} className="text-danger text-center">
            Loding...
          </h2>
        </div>
      ) : (
        <div>
          <div className="mr-5 ml-5 mb-5">
            <div className="d-flex justify-content-center">
              <div className="pt-1">
                <PersonIcon fontSize="large" />
              </div>
              <div className="pl-1 pt-1 pb-2">
                <h2 key={"hetntheadName"} className="text-primary">
                  {TenantName?.tenant}
                </h2>
              </div>
            </div>

            <GetInstalmentTable
              key={id + "data"}
              id={data.id}
              start_date={data.start_date}
              end_date={data.end_date}
              rent={data.rent}
              frequency={data.frequency}
              payment_day={data.payment_day}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default LeasesInformation;
