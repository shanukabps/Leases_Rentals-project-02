/**
 *
 *This functional component show the tenantser Name table
 *
 */

import React from "react";
import { Link } from "react-router-dom";
/**
 * @function TenantersNameTable - show the tents name table
 * @param {String} id -tenanters id
 * @param {String} tenant -tenanters Name
 *
 */
function GetTenantersNameTable({ id, tenant }) {
  return (
    <tbody>
      <tr key={id + "ABC"}>
        <td>
          <Link
            key={id}
            className="text-decoration-none"
            to={"/leaseInfor/" + id}
          >
            <h3> {tenant}</h3>
          </Link>
        </td>
      </tr>
    </tbody>
  );
}

export default GetTenantersNameTable;
