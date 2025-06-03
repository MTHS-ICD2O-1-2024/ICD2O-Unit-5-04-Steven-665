// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: Apr 2025
// This file contains the JS functions for index.html
/**
 * * This function checks if the user has selected the random number from above
*/

"use strict"

// eslint-disable-next-line no-unused-vars
function checkStudentPrise() {
  // input
  const userage = parseInt(document.getElementById('age').value)
  const visitTime = document.getElementById('the-day').value.trim()
  let message=""

  // process
  
  if ((userage >= 13 && userage <= 20) && (visitTime === "Thursday" || visitTime === "Tuesday"))  {
    document.getElementById('prise').innerHTML =
      '<p>You are elligble for student pricing </p>'
  } else {
    document.getElementById('prise').innerHTML =
      '<p>You must pay regular price</p>'
  }
}