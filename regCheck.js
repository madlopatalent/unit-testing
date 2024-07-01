function regCheck(regNo, regLoc) {
    return regNo.endsWith(regLoc);
  }
  console.log(regCheck("RG 45 HN GP"));
  console.log(regCheck("LKG 679 EC"));