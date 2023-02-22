setTimeout(() => {
  console.clear();
}, 4000);
let messageDisplayed = false;

const Vodafone = () => {
  let currentBalance = parseFloat(document.querySelector(".m-start-3 h4").textContent.match(/[\d\.]+/)[0]);
  setInterval(() => {
    const newBalance = parseFloat(document.querySelector(".m-start-3 h4").textContent.match(/[\d\.]+/)[0]);
    if (newBalance !== currentBalance) {
      const balanceChange = newBalance - currentBalance;
      if (!messageDisplayed) {
        document.querySelector("#overlay-description").textContent = `تم شحن كارت بـ ${balanceChange} جنية`;
        console.log(`%cتم شحن كارت بـ ${balanceChange} جنية`, "font-size:14px; font-weight:bold");
        console.log(`%cالرصيد زاد من ${currentBalance} لـ ${newBalance}`, " font-size:15px");
        messageDisplayed = true;
      }
      currentBalance = newBalance;
    } else {
      messageDisplayed = false;
    }
  }, 500);
};
document.addEventListener("load", Vodafone, true);
