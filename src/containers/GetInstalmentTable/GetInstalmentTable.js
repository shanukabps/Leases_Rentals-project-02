/**
 *
 *GetInstalmentTable  functional comonent manly done  calculate instalment and show in using instalment Table
 *
 */

import React, { useEffect, useState } from "react";

/**
 *@function GetInstalmentTable calculate instalment and show in using instalment Table
 * @param {Array} paymenta- payment leases infromation (From ,to ,amount, days)
 * @param {string} start_date - start date of leases
 * @param {Date} endDate -leases end date
 * @param  {Number} PaymentDday paymentday in the weekly (Number)
 * @param {Number} rent-weekly payment
 * @param {String} fre-regular Instalment (weekly,monthly,fortnightly)
 *
 */
function GetInstalmentTable({
  start_date,
  end_date,
  rent,
  frequency,
  payment_day,
}) {
  const [paymenta, setPayment] = useState("");

  useEffect(() => {
    GetInstalmentInformation(
      start_date,
      end_date,
      rent,
      frequency,
      payment_day
    );
  }, []);

  /**
   *
   * @function getdiffrencedays -get date diffrent between start date and end date
   *
   * @param {Date} startDate -leases start date
   * @param {Date} endDate -leases end date
   * @return {Number} date diffrent
   * @param {String} fre frquency
   *
   */

  const getdiffrencedays = (startDate, endDate) => {
    const remaindate = new Date(startDate);
    const diffTime = Math.abs(endDate - remaindate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  /**
   *
   *payenent day(String) convert to number
   *
   * @param {string} payment_day -payment day
   * @returns {Number} -payenent day as Number
   *
   */
  const getpaymentday = (payment_day) => {
    if (payment_day === "monday") return 1;
    else if (payment_day === "tuesday") return 2;
    else if (payment_day === "wednesday") return 3;
    else if (payment_day === "thursday") return 4;
    else return 5;
  };

  /***
   *
   * @function  getFirstPyamnetTodifferent -get days diffrence between leases start date and first payment day in the week
   *
   *@param {string} start_date - start date of leases
   *@param {Date} startDate-start date of leases (date type)
   *@param  {Number} PaymentDday paymentday in the weekly (Number)
   *@returns {Number} day diffrence between leases start date and first payment day in the week
   *
   */

  const getFirstPyamnetTodifferent = (start_date, startDate, paymentDday) => {
    for (let i = 1; i <= 7; i++) {
      let start = new Date(start_date);

      start.setDate(start.getDate() + i);
      if (startDate.getDay() === paymentDday) {
        return 0;
      } else if (paymentDday === start.getDay()) {
        return getdiffrencedays(startDate, start);
      }
    }
  };

  /**
   *
   *@function getfrequency -convert payment frequency to Number
   * @param {String} fre  -Payment frequency
   * @returns {Number} -payment fequency as (Number)
   *
   */
  const getfrequency = (fre) => {
    if (fre === "weekly") return 7;
    else if (fre === "fortnightly") return 14;
    else return 28;
  };

  /**
   * @function GetInstalmentInformation - Installment calculation
   *       --->Installment from lesas statr day to regulr payment day in week
   *           After regular instalment calculation according frequency
   *           calculating last instalment amount
   *           check whether last payment date is in between reqular payment interval if so calculate remain inastalment amount
   * @param {String} start_date
   * @param {String} end_date
   * @param {Number} rent
   * @param {String} fre
   * @param {String} payment_day
   *
   *
   */

  const GetInstalmentInformation = async (
    start_date,
    end_date,
    rent,
    fre,
    payment_day
  ) => {
    /**
     *
     * @param {Array} payment  - Instalment Information
     * @param {Number} frequency  regular Instalment as Number
     * @param {Number} paymentDday - paymentday in the weekly as Number
     * @param {Date} startDate - lease startdate
     * @param {Number}  topaymentdate - different between   starting lease  and regular payment date
     * @param {Date} endDate- lease end date
     * @param {Date} sumDate- start payment Date
     *
     */

    let payment = [];

    let frequency = getfrequency(fre);

    let paymentDday = getpaymentday(payment_day);

    let startDate = new Date(start_date);

    let topaymentdate = getFirstPyamnetTodifferent(
      start_date,
      startDate,
      paymentDday
    );

    const endDate = new Date(end_date);
    let sumDate = new Date(start_date);

    /**
     *
     * go to first regular payment date, now @param sumdate is First Regular payment date
     *
     */
    sumDate.setDate(sumDate.getDate() + topaymentdate);

    /**
     *for loop calculate instalment from reqular payment date ending dapyment date
     *@param {Date}  start  - First regular day(payment day) to befor date
     *@param {Date} add1 - regular day
     *@param {Date} nextdate - get next instalment date
     *@param {float} amount - instalment acording to date
     *
     */
    for (
      let start = new Date(sumDate);
      start <= endDate;
      start.setDate(start.getDate() + frequency)
    ) {
      if (+start === +sumDate && topaymentdate !== 0) {
        payment.push({
          from: startDate,
          to: new Date(start),
          days: topaymentdate,
          amount: ((rent / 7) * topaymentdate).toFixed(1),
        });
      }

      let add1 = new Date(start);
      add1.setDate(add1.getDate() + 1);

      let nextdate = new Date(start);
      nextdate.setDate(add1.getDate() + frequency - 1);

      payment.push({
        from: new Date(add1),
        to: new Date(nextdate),
        days: frequency,
        amount: (rent * 2).toFixed(1),
      });
    }

    /**
     * check whether last payment date is in between reqular payment interval if so calculate remain inastalment amount
     * last regular payment date passed the end date and set it to end date edit the days and amount
     *
     *
     */

    if (payment.length !== 0) {
      //find the last instalment
      let diffDays = getdiffrencedays(
        payment[payment.length - 1].from,
        endDate
      );

      /**
       *
       * if last instalment not equal to lease end date edit that
       */
      if (diffDays !== 0) {
        payment[payment.length - 1].to = endDate;
        payment[payment.length - 1].days = diffDays;
        payment[payment.length - 1].amount = ((rent / 7) * diffDays).toFixed(1);

        return setPayment(payment);
      }
      return setPayment(payment);
    }
  };

  return (
    <div>
      {paymenta.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <table className="table table-sm table-hover text-center border  ">
            <thead>
              <tr className="bg-danger text-white">
                <th scope="col">FROM</th>
                <th scope="col">TO</th>
                <th scope="col">DAYS</th>
                <th scope="col">AMOUNT</th>
              </tr>
            </thead>
            {paymenta?.map((paymenta, index) => {
              return (
                <tbody key={"header" + index}>
                  <tr>
                    <td>{paymenta.from.toDateString()}</td>
                    <td>{paymenta.to.toDateString()}</td>
                    <td>{paymenta.days}</td>
                    <td>{paymenta.amount}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
}

export default GetInstalmentTable;
